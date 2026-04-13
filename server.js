import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import multer from "multer";
import mammoth from "mammoth";
import {
  Document as DocxDocument,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
} from "docx";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");
const PdfPrinter = require("pdfmake");

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const DATA_DIR = path.join(__dirname, "data");
const UPLOADS_DIR = path.join(DATA_DIR, "uploads");
const OUTPUT_DIR = path.join(DATA_DIR, "output");

for (const dir of [DATA_DIR, UPLOADS_DIR, OUTPUT_DIR]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// --------------- In-Memory Job Store ---------------

const jobs = new Map();

function createJob(id, fileName, userId) {
  const job = {
    jobId: id,
    userId: userId || "anonymous",
    status: "uploading",
    originalFileName: fileName,
    errorMessage: null,
    outputPdfPath: null,
    outputDocxPath: null,
    parsedData: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    logs: [],
  };
  jobs.set(id, job);
  return job;
}

function updateJob(id, fields) {
  const job = jobs.get(id);
  if (!job) return null;
  Object.assign(job, fields, { updatedAt: Date.now() });
  if (fields.status) {
    job.logs.push({ step: fields.status, timestamp: new Date().toISOString() });
  }
  return job;
}

function logStep(id, message) {
  const job = jobs.get(id);
  if (job) {
    job.logs.push({ message, timestamp: new Date().toISOString() });
    console.log(`[Job ${id}] ${message}`);
  }
}

// --------------- Multer Configuration ---------------

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF and DOCX files are allowed"));
    }
  },
});

// --------------- Middleware ---------------

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/", apiLimiter);

app.use("/api/resume/files", express.static(OUTPUT_DIR));

// --------------- Resume NLP Parser (ported from Python) ---------------

const SECTION_HEADERS = {
  summary: /(?:summary|objective|profile|about\s*me)/i,
  education: /(?:education|academic|qualification)/i,
  experience: /(?:experience|employment|work\s*history|professional\s*experience)/i,
  skills: /(?:skills|technical\s*skills|competenc|technologies|proficienc)/i,
  projects: /(?:projects|personal\s*projects|academic\s*projects)/i,
  certifications: /(?:certifications?|licenses?|credentials?|awards?)/i,
};

function extractContactInfo(text) {
  const lines = text.trim().split("\n");
  const headerLines = lines.slice(0, 8).join("\n");

  const emailMatch = headerLines.match(/[\w.+-]+@[\w-]+\.[\w.-]+/);
  const phoneMatch = headerLines.match(
    /(?:\+?\d{1,3}[-.\s]?)?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}/
  );
  const linkedinMatch = text.match(/linkedin\.com\/in\/[\w-]+/i);
  const githubMatch = text.match(/github\.com\/[\w-]+/i);

  let name = "";
  for (const line of lines.slice(0, 5)) {
    const cleaned = line.trim();
    if (cleaned && !/@|\|/.test(cleaned) && cleaned.length > 2) {
      if (!/\d{3,}/.test(cleaned)) {
        name = cleaned;
        break;
      }
    }
  }

  return {
    name,
    email: emailMatch ? emailMatch[0] : "",
    phone: phoneMatch ? phoneMatch[0] : "",
    linkedin: linkedinMatch ? linkedinMatch[0] : "",
    github: githubMatch ? githubMatch[0] : "",
  };
}

function splitSections(text) {
  const combinedPattern = Object.entries(SECTION_HEADERS)
    .map(([, pattern]) => pattern.source)
    .join("|");
  const headerRe = new RegExp(
    `^\\s*(?:${combinedPattern})\\s*:?\\s*$`,
    "gim"
  );

  const matches = [];
  let m;
  while ((m = headerRe.exec(text)) !== null) {
    let sectionName = "_unknown";
    for (const [key, pattern] of Object.entries(SECTION_HEADERS)) {
      if (pattern.test(m[0])) {
        sectionName = key;
        break;
      }
    }
    matches.push({ name: sectionName, start: m.index, end: m.index + m[0].length });
  }

  const sections = {};

  if (matches.length === 0) {
    sections._raw = text;
    return sections;
  }

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].end;
    const end = i + 1 < matches.length ? matches[i + 1].start : text.length;
    sections[matches[i].name] = text.slice(start, end).trim();
  }

  const headerEnd = matches[0].start;
  if (headerEnd > 0) {
    sections._header = text.slice(0, headerEnd).trim();
  }

  return sections;
}

const DATE_PATTERN =
  /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z.]*\s*\d{4}|(?:19|20)\d{2})(?:\s*[-–—]\s*(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z.]*\s*\d{4}|(?:19|20)\d{2}|[Pp]resent|[Cc]urrent))?/gi;

function parseEducation(text) {
  const entries = [];
  const blocks = text.split(/\n{2,}/).filter((b) => b.trim());

  for (const block of blocks) {
    const lines = block
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    if (!lines.length) continue;

    const dateMatch = block.match(DATE_PATTERN);
    const dates = dateMatch ? dateMatch[0] : "";

    entries.push({
      institution: lines[0] || "",
      degree: lines[1] || "",
      dates,
      details: lines.slice(2).filter((l) => l !== dates),
    });
  }

  return entries.length
    ? entries
    : [{ institution: text.trim(), degree: "", dates: "", details: [] }];
}

function parseExperience(text) {
  const entries = [];
  const blocks = text.split(/\n{2,}/).filter((b) => b.trim());

  for (const block of blocks) {
    const lines = block
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    if (!lines.length) continue;

    const dateMatch = block.match(DATE_PATTERN);
    const dates = dateMatch ? dateMatch[0] : "";

    const bullets = [];
    for (const line of lines.slice(2)) {
      const cleaned = line.replace(/^[-•●○▪▸►◆*]\s*/, "").trim();
      if (cleaned && cleaned !== dates) bullets.push(cleaned);
    }

    entries.push({
      company: lines[1] || "",
      title: lines[0] || "",
      dates,
      bullets,
    });
  }

  return entries.length
    ? entries
    : [{ company: "", title: text.trim(), dates: "", bullets: [] }];
}

function parseSkills(text) {
  const skills = { languages: [], frameworks: [], tools: [], other: [] };

  const categoryPatterns = {
    languages: /(?:languages?|programming)\s*:?\s*(.*)/i,
    frameworks: /(?:frameworks?|libraries)\s*:?\s*(.*)/i,
    tools: /(?:tools?|developer\s*tools?|platforms?|databases?)\s*:?\s*(.*)/i,
  };

  for (const [category, pattern] of Object.entries(categoryPatterns)) {
    const match = text.match(pattern);
    if (match) {
      skills[category] = match[1]
        .split(/[,;|]/)
        .map((s) => s.trim())
        .filter(Boolean);
    }
  }

  if (!skills.languages.length && !skills.frameworks.length && !skills.tools.length) {
    skills.other = text
      .split(/[,;|\n•●]/)
      .map((s) => s.trim())
      .filter((s) => s.length > 1);
  }

  return skills;
}

function parseProjects(text) {
  const projects = [];
  const blocks = text.split(/\n{2,}/).filter((b) => b.trim());

  for (const block of blocks) {
    const lines = block
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    if (!lines.length) continue;

    let projectName = lines[0];
    const techMatch = projectName.match(/[|:]\s*(.+)/);
    const technologies = techMatch ? techMatch[1].trim() : "";
    if (technologies) projectName = projectName.slice(0, techMatch.index).trim();

    const description = lines
      .slice(1)
      .map((l) => l.replace(/^[-•●○▪▸►◆*]\s*/, "").trim())
      .filter(Boolean)
      .join(" ");

    projects.push({ name: projectName, technologies, description });
  }

  return projects;
}

function parseCertifications(text) {
  return text
    .split("\n")
    .map((l) => l.replace(/^[-•●○▪▸►◆*]\s*/, "").trim())
    .filter((l) => l.length > 3);
}

function parseResume(rawText) {
  const contact = extractContactInfo(rawText);
  const sections = splitSections(rawText);

  return {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    linkedin: contact.linkedin,
    github: contact.github,
    summary: sections.summary ? sections.summary.trim() : "",
    education: sections.education ? parseEducation(sections.education) : [],
    experience: sections.experience ? parseExperience(sections.experience) : [],
    skills: sections.skills
      ? parseSkills(sections.skills)
      : { languages: [], frameworks: [], tools: [], other: [] },
    projects: sections.projects ? parseProjects(sections.projects) : [],
    certifications: sections.certifications
      ? parseCertifications(sections.certifications)
      : [],
  };
}

// --------------- PDF Generator ---------------

function buildPdf(data) {
  const fonts = {
    Helvetica: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique",
    },
  };

  const printer = new PdfPrinter(fonts);

  const content = [];

  if (data.name) {
    content.push({
      text: data.name,
      style: "name",
      alignment: "center",
      margin: [0, 0, 0, 4],
    });
  }

  const contactParts = [data.phone, data.email, data.linkedin, data.github].filter(Boolean);
  if (contactParts.length) {
    content.push({
      text: contactParts.join("  |  "),
      style: "contact",
      alignment: "center",
      margin: [0, 0, 0, 12],
    });
  }

  function addSection(title) {
    content.push({
      text: title.toUpperCase(),
      style: "sectionHeading",
      margin: [0, 12, 0, 2],
    });
    content.push({
      canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: "#999999" }],
      margin: [0, 0, 0, 6],
    });
  }

  if (data.summary) {
    addSection("Summary");
    content.push({ text: data.summary, style: "body", margin: [0, 0, 0, 4] });
  }

  if (data.education?.length) {
    addSection("Education");
    for (const edu of data.education) {
      const titleParts = [edu.institution, edu.dates].filter(Boolean);
      if (titleParts.length) {
        content.push({ text: titleParts.join("  |  "), style: "entryTitle", margin: [0, 4, 0, 1] });
      }
      if (edu.degree) {
        content.push({ text: edu.degree, style: "entrySubtitle", margin: [0, 0, 0, 2] });
      }
      for (const detail of edu.details || []) {
        content.push({ text: `\u2022 ${detail}`, style: "bullet", margin: [12, 1, 0, 1] });
      }
    }
  }

  if (data.experience?.length) {
    addSection("Experience");
    for (const exp of data.experience) {
      const titleParts = [exp.title, exp.dates].filter(Boolean);
      if (titleParts.length) {
        content.push({ text: titleParts.join("  |  "), style: "entryTitle", margin: [0, 4, 0, 1] });
      }
      if (exp.company) {
        content.push({ text: exp.company, style: "entrySubtitle", margin: [0, 0, 0, 2] });
      }
      for (const bullet of exp.bullets || []) {
        content.push({ text: `\u2022 ${bullet}`, style: "bullet", margin: [12, 1, 0, 1] });
      }
    }
  }

  if (data.projects?.length) {
    addSection("Projects");
    for (const proj of data.projects) {
      let projTitle = proj.name || "";
      if (proj.technologies) projTitle += `  |  ${proj.technologies}`;
      if (projTitle) {
        content.push({ text: projTitle, style: "entryTitle", margin: [0, 4, 0, 1] });
      }
      if (proj.description) {
        content.push({ text: proj.description, style: "body", margin: [0, 0, 0, 2] });
      }
    }
  }

  const sk = data.skills || {};
  const hasSkills = ["languages", "frameworks", "tools", "other"].some((k) => sk[k]?.length);
  if (hasSkills) {
    addSection("Technical Skills");
    if (sk.languages?.length)
      content.push({ text: [{ text: "Languages: ", bold: true }, sk.languages.join(", ")], style: "body", margin: [0, 2, 0, 2] });
    if (sk.frameworks?.length)
      content.push({ text: [{ text: "Frameworks: ", bold: true }, sk.frameworks.join(", ")], style: "body", margin: [0, 2, 0, 2] });
    if (sk.tools?.length)
      content.push({ text: [{ text: "Tools: ", bold: true }, sk.tools.join(", ")], style: "body", margin: [0, 2, 0, 2] });
    if (sk.other?.length)
      content.push({ text: [{ text: "Skills: ", bold: true }, sk.other.join(", ")], style: "body", margin: [0, 2, 0, 2] });
  }

  if (data.certifications?.length) {
    addSection("Certifications");
    for (const cert of data.certifications) {
      content.push({ text: `\u2022 ${cert}`, style: "bullet", margin: [12, 1, 0, 1] });
    }
  }

  const docDefinition = {
    content,
    defaultStyle: { font: "Helvetica", fontSize: 10 },
    styles: {
      name: { fontSize: 18, bold: true, color: "#1a1a1a" },
      contact: { fontSize: 9, color: "#555555" },
      sectionHeading: { fontSize: 12, bold: true, color: "#1a1a1a" },
      entryTitle: { fontSize: 10, bold: true },
      entrySubtitle: { fontSize: 10, italics: true, color: "#444444" },
      body: { fontSize: 10 },
      bullet: { fontSize: 10 },
    },
    pageSize: "A4",
    pageMargins: [50, 45, 50, 45],
  };

  return new Promise((resolve, reject) => {
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    const chunks = [];
    pdfDoc.on("data", (chunk) => chunks.push(chunk));
    pdfDoc.on("end", () => resolve(Buffer.concat(chunks)));
    pdfDoc.on("error", reject);
    pdfDoc.end();
  });
}

// --------------- DOCX Generator ---------------

function buildDocx(data) {
  const children = [];

  if (data.name) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [
          new TextRun({ text: data.name, bold: true, size: 40, font: "Calibri" }),
        ],
      })
    );
  }

  const contactParts = [data.phone, data.email, data.linkedin, data.github].filter(Boolean);
  if (contactParts.length) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
          new TextRun({
            text: contactParts.join(" | "),
            size: 20,
            font: "Calibri",
            color: "505050",
          }),
        ],
      })
    );
  }

  function addSectionHeading(title) {
    children.push(
      new Paragraph({
        spacing: { before: 240, after: 80 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "999999" } },
        children: [
          new TextRun({
            text: title.toUpperCase(),
            bold: true,
            size: 24,
            font: "Calibri",
          }),
        ],
      })
    );
  }

  function addEntry(primary, secondary) {
    if (primary) {
      children.push(
        new Paragraph({
          spacing: { before: 120, after: 40 },
          children: [new TextRun({ text: primary, bold: true, size: 22, font: "Calibri" })],
        })
      );
    }
    if (secondary) {
      children.push(
        new Paragraph({
          spacing: { after: 40 },
          children: [new TextRun({ text: secondary, italics: true, size: 22, font: "Calibri", color: "444444" })],
        })
      );
    }
  }

  function addBullet(text) {
    children.push(
      new Paragraph({
        spacing: { before: 20, after: 20 },
        indent: { left: 360 },
        children: [new TextRun({ text: `\u2022 ${text}`, size: 22, font: "Calibri" })],
      })
    );
  }

  function addBody(text) {
    children.push(
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text, size: 22, font: "Calibri" })],
      })
    );
  }

  if (data.summary) {
    addSectionHeading("Summary");
    addBody(data.summary);
  }

  if (data.education?.length) {
    addSectionHeading("Education");
    for (const edu of data.education) {
      const titleParts = [edu.institution, edu.dates].filter(Boolean);
      addEntry(titleParts.join("  |  "), edu.degree);
      for (const detail of edu.details || []) addBullet(detail);
    }
  }

  if (data.experience?.length) {
    addSectionHeading("Experience");
    for (const exp of data.experience) {
      const titleParts = [exp.title, exp.dates].filter(Boolean);
      addEntry(titleParts.join("  |  "), exp.company);
      for (const bullet of exp.bullets || []) addBullet(bullet);
    }
  }

  if (data.projects?.length) {
    addSectionHeading("Projects");
    for (const proj of data.projects) {
      let projTitle = proj.name || "";
      if (proj.technologies) projTitle += `  |  ${proj.technologies}`;
      addEntry(projTitle, null);
      if (proj.description) addBody(proj.description);
    }
  }

  const sk = data.skills || {};
  const hasSkills = ["languages", "frameworks", "tools", "other"].some((k) => sk[k]?.length);
  if (hasSkills) {
    addSectionHeading("Technical Skills");
    if (sk.languages?.length) {
      children.push(
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({ text: "Languages: ", bold: true, size: 22, font: "Calibri" }),
            new TextRun({ text: sk.languages.join(", "), size: 22, font: "Calibri" }),
          ],
        })
      );
    }
    if (sk.frameworks?.length) {
      children.push(
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({ text: "Frameworks: ", bold: true, size: 22, font: "Calibri" }),
            new TextRun({ text: sk.frameworks.join(", "), size: 22, font: "Calibri" }),
          ],
        })
      );
    }
    if (sk.tools?.length) {
      children.push(
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({ text: "Tools: ", bold: true, size: 22, font: "Calibri" }),
            new TextRun({ text: sk.tools.join(", "), size: 22, font: "Calibri" }),
          ],
        })
      );
    }
    if (sk.other?.length) {
      children.push(
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({ text: "Skills: ", bold: true, size: 22, font: "Calibri" }),
            new TextRun({ text: sk.other.join(", "), size: 22, font: "Calibri" }),
          ],
        })
      );
    }
  }

  if (data.certifications?.length) {
    addSectionHeading("Certifications");
    for (const cert of data.certifications) addBullet(cert);
  }

  const doc = new DocxDocument({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 720, bottom: 720, left: 720, right: 720 },
          },
        },
        children,
      },
    ],
  });

  return Packer.toBuffer(doc);
}

// --------------- Resume Processing Pipeline ---------------

async function processResume(jobId, fileBuffer, fileName) {
  try {
    logStep(jobId, `Validating file: ${fileName}`);
    const ext = path.extname(fileName).toLowerCase();
    if (![".pdf", ".docx", ".doc"].includes(ext)) {
      throw new Error(`Unsupported file format: ${ext}. Only PDF and DOCX files are accepted.`);
    }

    if (fileBuffer.length > 10 * 1024 * 1024) {
      throw new Error("File exceeds maximum size of 10 MB.");
    }

    updateJob(jobId, { status: "parsing" });
    logStep(jobId, "Extracting text from document...");

    let rawText = "";

    if (ext === ".pdf") {
      const pdfData = await pdfParse(fileBuffer);
      rawText = pdfData.text || "";
    } else if (ext === ".docx" || ext === ".doc") {
      const result = await mammoth.extractRawText({ buffer: fileBuffer });
      rawText = result.value || "";
    }

    if (!rawText.trim()) {
      throw new Error(
        "Could not extract any text from the file. The document may be image-based or empty. Please upload a text-based PDF or DOCX."
      );
    }

    logStep(jobId, `Extracted ${rawText.length} characters of text`);

    logStep(jobId, "Parsing resume sections with NLP...");
    const parsedData = parseResume(rawText);

    updateJob(jobId, { status: "parsed", parsedData });
    logStep(jobId, `Parsed sections: name=${parsedData.name}, education=${parsedData.education.length}, experience=${parsedData.experience.length}, projects=${parsedData.projects.length}`);

    updateJob(jobId, { status: "generating" });
    logStep(jobId, "Generating ATS-optimized PDF...");

    const jobOutputDir = path.join(OUTPUT_DIR, jobId);
    if (!fs.existsSync(jobOutputDir)) fs.mkdirSync(jobOutputDir, { recursive: true });

    const pdfBytes = await buildPdf(parsedData);
    const pdfPath = path.join(jobOutputDir, "resume.pdf");
    fs.writeFileSync(pdfPath, pdfBytes);
    logStep(jobId, `PDF generated (${(pdfBytes.length / 1024).toFixed(1)} KB)`);

    logStep(jobId, "Generating ATS-optimized DOCX...");
    const docxBytes = await buildDocx(parsedData);
    const docxPath = path.join(jobOutputDir, "resume.docx");
    fs.writeFileSync(docxPath, docxBytes);
    logStep(jobId, `DOCX generated (${(docxBytes.length / 1024).toFixed(1)} KB)`);

    updateJob(jobId, {
      status: "completed",
      outputPdfPath: pdfPath,
      outputDocxPath: docxPath,
    });
    logStep(jobId, "Processing complete! Resume is ready for download.");
  } catch (err) {
    console.error(`[Job ${jobId}] Processing failed:`, err.message);
    updateJob(jobId, {
      status: "failed",
      errorMessage: err.message || "An unexpected error occurred during processing.",
    });
    logStep(jobId, `FAILED: ${err.message}`);
  }
}

// --------------- Health Check ---------------

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// --------------- Resume Endpoints ---------------

app.post("/api/resume/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No file uploaded. Please select a PDF or DOCX file.",
      });
    }

    const { originalname, buffer, mimetype } = req.file;
    const userId = req.body.userId || "anonymous";

    const ext = path.extname(originalname).toLowerCase();
    if (![".pdf", ".docx", ".doc"].includes(ext)) {
      return res.status(400).json({
        error: `Invalid file type: ${ext}. Only PDF and DOCX files are accepted.`,
      });
    }

    const jobId = crypto.randomUUID();
    createJob(jobId, originalname, userId);
    logStep(jobId, `Upload received: ${originalname} (${(buffer.length / 1024).toFixed(1)} KB, ${mimetype})`);

    updateJob(jobId, { status: "uploaded" });

    res.json({ jobId, message: "File uploaded successfully. Processing started." });

    processResume(jobId, buffer, originalname);
  } catch (err) {
    console.error("Upload error:", err);

    if (err.message === "Only PDF and DOCX files are allowed") {
      return res.status(400).json({ error: err.message });
    }

    res.status(500).json({ error: "Failed to process upload. Please try again." });
  }
});

app.get("/api/resume/status/:jobId", (req, res) => {
  const job = jobs.get(req.params.jobId);
  if (!job) {
    return res.status(404).json({ error: "Job not found. It may have expired." });
  }

  res.json({
    jobId: job.jobId,
    status: job.status,
    originalFileName: job.originalFileName,
    errorMessage: job.errorMessage,
    createdAt: job.createdAt,
    logs: job.logs,
  });
});

app.get("/api/resume/download/:jobId", (req, res) => {
  const job = jobs.get(req.params.jobId);
  if (!job) {
    return res.status(404).json({ error: "Job not found. It may have expired." });
  }

  if (job.status !== "completed") {
    return res.status(400).json({
      error: "Resume processing is not yet complete.",
      status: job.status,
    });
  }

  const baseUrl = `${req.protocol}://${req.get("host")}`;

  res.json({
    pdfUrl: job.outputPdfPath
      ? `${baseUrl}/api/resume/files/${job.jobId}/resume.pdf`
      : null,
    docxUrl: job.outputDocxPath
      ? `${baseUrl}/api/resume/files/${job.jobId}/resume.docx`
      : null,
  });
});

app.get("/api/resume/parsed/:jobId", (req, res) => {
  const job = jobs.get(req.params.jobId);
  if (!job) {
    return res.status(404).json({ error: "Job not found." });
  }
  if (!job.parsedData) {
    return res.status(400).json({ error: "Resume has not been parsed yet.", status: job.status });
  }
  res.json(job.parsedData);
});

// --------------- Multer Error Handler ---------------

app.use((err, _req, res, _next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        error: "File is too large. Maximum allowed size is 10 MB.",
      });
    }
    return res.status(400).json({ error: `Upload error: ${err.message}` });
  }
  if (err.message === "Only PDF and DOCX files are allowed") {
    return res.status(400).json({ error: err.message });
  }
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "An internal server error occurred." });
});

// --------------- Start Server ---------------

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Upload endpoint: POST http://localhost:${PORT}/api/resume/upload`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
});
