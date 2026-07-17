/**
 * Generates public/resume.pdf from portfolio content.
 * Keep in sync with src/data/portfolio.ts (tested by content-integrity tests).
 * Run: node scripts/generate-resume.mjs
 */
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "resume.pdf");

// Must match src/data/portfolio.ts — regenerate after portfolio content changes.
const site = {
  name: "Mahmud Hasan",
  role: "AI Engineer",
  email: "mah5472651@gmail.com",
  location: "Barishal, Bangladesh",
  github: "github.com/mah5472651",
  linkedin: "linkedin.com/in/mahmudhasan-ai-engineer/",
  whatsapp: "+8801606587403",
};

const summary =
  "High-growth AI Engineer bridging advanced research and production-grade AI systems. COO of Craftly (building a frontier LLM) and Founder & CEO at Aeitron AI (multi-agent automation for high-ticket sectors). Specialized in multi-agent orchestration, advanced memory architectures, cybersecurity intelligence, and high-performance RAG pipelines.";

const experience = [
  {
    company: "Craftly",
    role: "COO · AI Engineer",
    period: "Present",
    location: "Bangladesh / Remote",
    bullets: [
      "Serve as COO while building a frontier LLM — aligning research, engineering, and product delivery.",
      "Drive production-grade AI systems: evaluation, reliability, and the path from prototype to shippable capability.",
      "Lead cross-functional teams to compete at a global level from Bangladesh.",
    ],
  },
  {
    company: "Aeitron AI",
    role: "Founder & CEO",
    period: "Present",
    location: "Barishal, Bangladesh / Remote",
    bullets: [
      "Founded Aeitron AI to engineer multi-agent automation workflows for high-ticket sectors including real estate.",
      "Specialize in multi-agent orchestration, advanced memory architectures, and high-performance RAG pipelines.",
      "Own product vision and technical direction for automation systems that operators can trust in production.",
    ],
  },
];

const projects = [
  {
    title: "Aeitron — Scratch-Trained Cybersecurity & Agentic Coding LLM",
    line: "From-scratch cybersecurity LLM: training control plane, defensive data mixing, FSDP/DeepSpeed workspace, and gated 1k→1M qualification.",
  },
  {
    title: "Aeitron AI Finance Dashboard",
    line: "Unified Agency OS for finance, invoicing, CRM, and team tools with an AI copilot for real estate lead analytics.",
  },
];

const skills = {
  "AI Systems":
    "Multi-agent orchestration, advanced memory, high-performance RAG, LLM productization, cybersecurity intelligence",
  "ML & Deep Learning":
    "PyTorch, Transformers, Fine-tuning / LoRA, NLP, Evaluation & evals, Prompt systems",
  "LLM Stack":
    "RAG pipelines, Agents & tools, Vector search, LangChain / LangGraph, vLLM / inference",
  Software: "Python, TypeScript, FastAPI, PostgreSQL, Team leadership, Product & ops (COO/CEO)",
};

const colors = {
  text: "#0f172a",
  muted: "#475569",
  accent: "#0d9488",
  line: "#cbd5e1",
};

function sectionTitle(doc, title) {
  doc.moveDown(0.6);
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(colors.accent)
    .text(title.toUpperCase(), { characterSpacing: 1 });
  doc
    .moveTo(doc.page.margins.left, doc.y + 2)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 2)
    .strokeColor(colors.line)
    .lineWidth(1)
    .stroke();
  doc.moveDown(0.45);
  doc.fillColor(colors.text);
}

const doc = new PDFDocument({
  margin: 50,
  size: "LETTER",
  info: {
    Title: `${site.name} — Resume`,
    Author: site.name,
  },
});

fs.mkdirSync(path.dirname(outPath), { recursive: true });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

// Header
doc
  .font("Helvetica-Bold")
  .fontSize(22)
  .fillColor(colors.text)
  .text(site.name);
doc
  .font("Helvetica")
  .fontSize(12)
  .fillColor(colors.accent)
  .text(site.role);
doc.moveDown(0.25);
doc
  .fontSize(9)
  .fillColor(colors.muted)
  .text(
    `${site.email}  ·  ${site.location}  ·  ${site.github}  ·  ${site.linkedin}`,
  );

// Summary
sectionTitle(doc, "Summary");
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(colors.text)
  .text(summary, { align: "left", lineGap: 2 });

// Experience
sectionTitle(doc, "Experience");
for (const job of experience) {
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(colors.text)
    .text(job.role, { continued: true })
    .font("Helvetica")
    .fillColor(colors.muted)
    .text(`  ·  ${job.company}`);
  doc
    .fontSize(9)
    .fillColor(colors.muted)
    .text(`${job.period}  ·  ${job.location}`);
  doc.moveDown(0.2);
  doc.font("Helvetica").fontSize(10).fillColor(colors.text);
  for (const b of job.bullets) {
    doc.text(`•  ${b}`, { indent: 8, lineGap: 1.5 });
  }
  doc.moveDown(0.35);
}

// Projects
sectionTitle(doc, "Selected Projects");
for (const p of projects) {
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(colors.text)
    .text(p.title);
  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor(colors.muted)
    .text(p.line, { lineGap: 1 });
  doc.moveDown(0.3);
}

// Skills
sectionTitle(doc, "Skills");
for (const [label, value] of Object.entries(skills)) {
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(colors.text)
    .text(`${label}: `, { continued: true })
    .font("Helvetica")
    .fillColor(colors.muted)
    .text(value);
  doc.moveDown(0.15);
}

doc.end();

stream.on("finish", () => {
  console.log(`Wrote ${outPath}`);
});

stream.on("error", (err) => {
  console.error("Failed to write resume PDF:", err);
  process.exitCode = 1;
});
