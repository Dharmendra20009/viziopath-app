"""
Builds an ATS-friendly PDF resume from structured JSON data.

Uses ReportLab for clean, single-column PDF output with standard fonts.
"""

from io import BytesIO
from typing import Any

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
)
from reportlab.lib.colors import HexColor


def _build_styles():
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(
        "ResumeName",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=18,
        alignment=TA_CENTER,
        spaceAfter=4,
        textColor=HexColor("#1a1a1a"),
    ))

    styles.add(ParagraphStyle(
        "ContactInfo",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=9,
        alignment=TA_CENTER,
        spaceAfter=12,
        textColor=HexColor("#555555"),
    ))

    styles.add(ParagraphStyle(
        "SectionHeading",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=12,
        spaceBefore=14,
        spaceAfter=4,
        textColor=HexColor("#1a1a1a"),
    ))

    styles.add(ParagraphStyle(
        "EntryTitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10,
        spaceBefore=6,
        spaceAfter=1,
    ))

    styles.add(ParagraphStyle(
        "EntrySubtitle",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=10,
        spaceAfter=2,
        textColor=HexColor("#444444"),
    ))

    styles.add(ParagraphStyle(
        "BulletItem",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=10,
        leftIndent=18,
        spaceBefore=1,
        spaceAfter=1,
        bulletIndent=6,
    ))

    styles.add(ParagraphStyle(
        "BodyText2",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=10,
        spaceAfter=2,
    ))

    return styles


def build_pdf(data: dict[str, Any]) -> bytes:
    buffer = BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        topMargin=0.6 * inch,
        bottomMargin=0.6 * inch,
        leftMargin=0.7 * inch,
        rightMargin=0.7 * inch,
    )

    styles = _build_styles()
    story: list = []

    # --- Header ---
    if data.get("name"):
        story.append(Paragraph(data["name"], styles["ResumeName"]))

    contact_parts = []
    for field in ["phone", "email", "linkedin", "github"]:
        if data.get(field):
            contact_parts.append(data[field])
    if contact_parts:
        story.append(Paragraph(" &nbsp;|&nbsp; ".join(contact_parts), styles["ContactInfo"]))

    def add_section(title: str):
        story.append(Spacer(1, 6))
        story.append(Paragraph(title.upper(), styles["SectionHeading"]))
        story.append(HRFlowable(
            width="100%", thickness=0.5,
            color=HexColor("#999999"),
            spaceAfter=4,
        ))

    # --- Summary ---
    if data.get("summary"):
        add_section("Summary")
        story.append(Paragraph(data["summary"], styles["BodyText2"]))

    # --- Education ---
    if data.get("education"):
        add_section("Education")
        for edu in data["education"]:
            title_parts = []
            if edu.get("institution"):
                title_parts.append(edu["institution"])
            if edu.get("dates"):
                title_parts.append(edu["dates"])
            if title_parts:
                story.append(Paragraph(" &nbsp;|&nbsp; ".join(title_parts), styles["EntryTitle"]))
            if edu.get("degree"):
                story.append(Paragraph(edu["degree"], styles["EntrySubtitle"]))
            for detail in edu.get("details", []):
                story.append(Paragraph(f"\u2022 {detail}", styles["BulletItem"]))

    # --- Experience ---
    if data.get("experience"):
        add_section("Experience")
        for exp in data["experience"]:
            title_parts = []
            if exp.get("title"):
                title_parts.append(exp["title"])
            if exp.get("dates"):
                title_parts.append(exp["dates"])
            if title_parts:
                story.append(Paragraph(" &nbsp;|&nbsp; ".join(title_parts), styles["EntryTitle"]))
            if exp.get("company"):
                story.append(Paragraph(exp["company"], styles["EntrySubtitle"]))
            for bullet in exp.get("bullets", []):
                story.append(Paragraph(f"\u2022 {bullet}", styles["BulletItem"]))

    # --- Projects ---
    if data.get("projects"):
        add_section("Projects")
        for proj in data["projects"]:
            proj_title = proj.get("name", "")
            if proj.get("technologies"):
                proj_title += f" &nbsp;|&nbsp; <i>{proj['technologies']}</i>"
            if proj_title:
                story.append(Paragraph(proj_title, styles["EntryTitle"]))
            if proj.get("description"):
                story.append(Paragraph(proj["description"], styles["BodyText2"]))

    # --- Skills ---
    if data.get("skills"):
        skills = data["skills"]
        has_skills = any(skills.get(k) for k in ["languages", "frameworks", "tools", "other"])
        if has_skills:
            add_section("Technical Skills")
            if skills.get("languages"):
                story.append(Paragraph(
                    f"<b>Languages:</b> {', '.join(skills['languages'])}",
                    styles["BodyText2"],
                ))
            if skills.get("frameworks"):
                story.append(Paragraph(
                    f"<b>Frameworks:</b> {', '.join(skills['frameworks'])}",
                    styles["BodyText2"],
                ))
            if skills.get("tools"):
                story.append(Paragraph(
                    f"<b>Tools:</b> {', '.join(skills['tools'])}",
                    styles["BodyText2"],
                ))
            if skills.get("other"):
                story.append(Paragraph(
                    f"<b>Skills:</b> {', '.join(skills['other'])}",
                    styles["BodyText2"],
                ))

    # --- Certifications ---
    if data.get("certifications"):
        add_section("Certifications")
        for cert in data["certifications"]:
            story.append(Paragraph(f"\u2022 {cert}", styles["BulletItem"]))

    doc.build(story)
    return buffer.getvalue()
