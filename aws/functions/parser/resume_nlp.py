"""
Resume NLP module: extracts structured data from raw resume text.

Uses regex and heuristic rules to identify standard resume sections
(contact info, education, experience, skills, projects, certifications)
and parse them into a structured JSON schema.
"""

import re
from typing import Any


SECTION_HEADERS = {
    "summary": r"(?:summary|objective|profile|about\s*me)",
    "education": r"(?:education|academic|qualification)",
    "experience": r"(?:experience|employment|work\s*history|professional\s*experience)",
    "skills": r"(?:skills|technical\s*skills|competenc|technologies|proficienc)",
    "projects": r"(?:projects|personal\s*projects|academic\s*projects)",
    "certifications": r"(?:certifications?|licenses?|credentials?|awards?)",
}


def extract_contact_info(text: str) -> dict[str, str]:
    lines = text.strip().split("\n")
    header_lines = "\n".join(lines[:8])

    email_match = re.search(r"[\w.+-]+@[\w-]+\.[\w.-]+", header_lines)
    phone_match = re.search(
        r"(?:\+?\d{1,3}[-.\s]?)?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}", header_lines
    )
    linkedin_match = re.search(
        r"(?:linkedin\.com/in/[\w-]+|linkedin\.com/in/[\w-]+/?)", text, re.IGNORECASE
    )
    github_match = re.search(
        r"(?:github\.com/[\w-]+)", text, re.IGNORECASE
    )

    name = ""
    for line in lines[:5]:
        cleaned = line.strip()
        if cleaned and not re.search(r"[@|]", cleaned) and len(cleaned) > 2:
            if not re.search(r"\d{3,}", cleaned):
                name = cleaned
                break

    return {
        "name": name,
        "email": email_match.group(0) if email_match else "",
        "phone": phone_match.group(0) if phone_match else "",
        "linkedin": linkedin_match.group(0) if linkedin_match else "",
        "github": github_match.group(0) if github_match else "",
    }


def split_sections(text: str) -> dict[str, str]:
    """Split resume text into named sections based on common header patterns."""
    combined_pattern = "|".join(
        f"(?P<{key}>{pattern})" for key, pattern in SECTION_HEADERS.items()
    )
    header_re = re.compile(
        rf"^\s*(?:{combined_pattern})\s*:?\s*$",
        re.IGNORECASE | re.MULTILINE,
    )

    matches = list(header_re.finditer(text))
    sections: dict[str, str] = {}

    if not matches:
        sections["_raw"] = text
        return sections

    for i, match in enumerate(matches):
        section_name = next(k for k, v in match.groupdict().items() if v is not None)
        start = match.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        sections[section_name] = text[start:end].strip()

    header_end = matches[0].start()
    if header_end > 0:
        sections["_header"] = text[:header_end].strip()

    return sections


def parse_education(text: str) -> list[dict[str, Any]]:
    entries: list[dict[str, Any]] = []
    date_pattern = re.compile(
        r"(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z.]*\s*\d{4}"
        r"|(?:19|20)\d{2})"
        r"(?:\s*[-–—]\s*(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z.]*\s*\d{4}"
        r"|(?:19|20)\d{2}|[Pp]resent|[Cc]urrent))?",
        re.IGNORECASE,
    )

    blocks = re.split(r"\n{2,}", text.strip())
    for block in blocks:
        if not block.strip():
            continue
        lines = [l.strip() for l in block.split("\n") if l.strip()]
        if not lines:
            continue

        date_match = date_pattern.search(block)
        dates = date_match.group(0) if date_match else ""

        institution = lines[0] if lines else ""
        degree = lines[1] if len(lines) > 1 else ""
        details = [l for l in lines[2:] if l and l != dates]

        entries.append({
            "institution": institution,
            "degree": degree,
            "dates": dates,
            "details": details,
        })

    return entries if entries else [{"institution": text.strip(), "degree": "", "dates": "", "details": []}]


def parse_experience(text: str) -> list[dict[str, Any]]:
    entries: list[dict[str, Any]] = []
    date_pattern = re.compile(
        r"(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z.]*\s*\d{4}"
        r"|(?:19|20)\d{2})"
        r"(?:\s*[-–—]\s*(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z.]*\s*\d{4}"
        r"|(?:19|20)\d{2}|[Pp]resent|[Cc]urrent))?",
        re.IGNORECASE,
    )

    blocks = re.split(r"\n{2,}", text.strip())
    for block in blocks:
        if not block.strip():
            continue
        lines = [l.strip() for l in block.split("\n") if l.strip()]
        if not lines:
            continue

        date_match = date_pattern.search(block)
        dates = date_match.group(0) if date_match else ""

        title = lines[0] if lines else ""
        company = lines[1] if len(lines) > 1 else ""
        bullets = []
        for line in lines[2:]:
            cleaned = re.sub(r"^[\-•●○▪▸►◆*]\s*", "", line).strip()
            if cleaned and cleaned != dates:
                bullets.append(cleaned)

        entries.append({
            "company": company,
            "title": title,
            "dates": dates,
            "bullets": bullets,
        })

    return entries if entries else [{"company": "", "title": text.strip(), "dates": "", "bullets": []}]


def parse_skills(text: str) -> dict[str, list[str]]:
    skills: dict[str, list[str]] = {"languages": [], "frameworks": [], "tools": [], "other": []}

    category_patterns = {
        "languages": r"(?:languages?|programming)\s*:?\s*(.*)",
        "frameworks": r"(?:frameworks?|libraries)\s*:?\s*(.*)",
        "tools": r"(?:tools?|developer\s*tools?|platforms?|databases?)\s*:?\s*(.*)",
    }

    for category, pattern in category_patterns.items():
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            raw = match.group(1).strip()
            items = [s.strip() for s in re.split(r"[,;|]", raw) if s.strip()]
            skills[category] = items

    if not any(skills[k] for k in ["languages", "frameworks", "tools"]):
        all_items = [s.strip() for s in re.split(r"[,;|\n•●]", text) if s.strip() and len(s.strip()) > 1]
        skills["other"] = all_items

    return skills


def parse_projects(text: str) -> list[dict[str, str]]:
    projects: list[dict[str, str]] = []
    blocks = re.split(r"\n{2,}", text.strip())

    for block in blocks:
        if not block.strip():
            continue
        lines = [l.strip() for l in block.split("\n") if l.strip()]
        if not lines:
            continue

        name = lines[0]
        tech_match = re.search(r"[|:]\s*(?:em(?:ph)?|textit)?\{?([^}]+)\}?", name)
        technologies = tech_match.group(1).strip() if tech_match else ""
        if technologies:
            name = name[:tech_match.start()].strip()

        description = " ".join(
            re.sub(r"^[\-•●○▪▸►◆*]\s*", "", l).strip()
            for l in lines[1:]
            if l.strip()
        )

        projects.append({
            "name": name,
            "technologies": technologies,
            "description": description,
        })

    return projects


def parse_certifications(text: str) -> list[str]:
    items = []
    for line in text.split("\n"):
        cleaned = re.sub(r"^[\-•●○▪▸►◆*]\s*", "", line).strip()
        if cleaned and len(cleaned) > 3:
            items.append(cleaned)
    return items


def parse_resume(raw_text: str) -> dict[str, Any]:
    """Main entry point: takes raw resume text, returns structured JSON."""
    contact = extract_contact_info(raw_text)
    sections = split_sections(raw_text)

    result: dict[str, Any] = {
        "name": contact["name"],
        "email": contact["email"],
        "phone": contact["phone"],
        "linkedin": contact["linkedin"],
        "github": contact["github"],
        "summary": "",
        "education": [],
        "experience": [],
        "skills": {"languages": [], "frameworks": [], "tools": [], "other": []},
        "projects": [],
        "certifications": [],
    }

    if "summary" in sections:
        result["summary"] = sections["summary"].strip()

    if "education" in sections:
        result["education"] = parse_education(sections["education"])

    if "experience" in sections:
        result["experience"] = parse_experience(sections["experience"])

    if "skills" in sections:
        result["skills"] = parse_skills(sections["skills"])

    if "projects" in sections:
        result["projects"] = parse_projects(sections["projects"])

    if "certifications" in sections:
        result["certifications"] = parse_certifications(sections["certifications"])

    return result
