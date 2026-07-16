/**
 * Generates public/resume.pdf from portfolio content.
 * Run: node scripts/generate-resume.mjs
 */
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "resume.pdf");

const site = {
  name: "Alex Rivera",
  role: "AI Engineer",
  email: "alex.rivera@example.com",
  location: "San Francisco, CA",
  github: "github.com/alexrivera",
  linkedin: "linkedin.com/in/alexrivera",
};

const summary =
  "AI engineer specializing in production ML systems: LLM platforms, RAG, agents, fine-tuning, and MLOps. Focused on reliable inference, rigorous evaluation, and measurable product impact.";

const experience = [
  {
    company: "Nova Labs",
    role: "Senior AI Engineer",
    period: "2023 — Present",
    location: "San Francisco, CA",
    bullets: [
      "Lead LLM platform (RAG, agents, evals) powering core features for 50k+ users.",
      "Designed multi-tenant hybrid retrieval; improved answer faithfulness by 22%.",
      "Mentored 3 engineers; established model review and canary deployment practices.",
    ],
  },
  {
    company: "Horizon AI",
    role: "Machine Learning Engineer",
    period: "2021 — 2023",
    location: "Remote",
    bullets: [
      "Shipped vision + NLP document understanding; reduced manual review by 60%.",
      "Built K8s training pipelines with experiment tracking and regression tests.",
      "Defined offline/online evaluation loops with product partners.",
    ],
  },
  {
    company: "DataPulse",
    role: "ML Engineer",
    period: "2019 — 2021",
    location: "New York, NY",
    bullets: [
      "Productionized ranking and recommendation models for high-throughput APIs.",
      "Owned feature pipelines and monitoring for drift and latency SLOs.",
    ],
  },
];

const projects = [
  {
    title: "Aether — Multi-agent research system",
    line: "Agents with tools, memory, and eval gates; ~70% faster literature review.",
  },
  {
    title: "VectorForge — Production RAG",
    line: "Hybrid search + re-rank; 2M+ queries/mo at p99 < 180ms retrieval.",
  },
  {
    title: "SignalNet — Anomaly detection",
    line: "Streaming ML for infra metrics; 40% fewer false-positive pages.",
  },
  {
    title: "TuneKit — LoRA toolkit",
    line: "Shared fine-tuning CLI/evals adopted by 5 product teams.",
  },
];

const skills = {
  "ML & LLMs":
    "PyTorch, Transformers, LoRA/PEFT, RLHF/DPO, RAG, Agents, vLLM, eval harnesses",
  "MLOps": "Kubernetes, Docker, MLflow/W&B, CI/CD for models, GPU optimization",
  Software: "Python, TypeScript, FastAPI, PostgreSQL, Redis, AWS/GCP",
};

const education = [
  {
    school: "Carnegie Mellon University",
    degree: "M.S. Machine Learning",
    period: "2017 — 2019",
  },
  {
    school: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    period: "2013 — 2017",
  },
];

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

// Education
sectionTitle(doc, "Education");
for (const ed of education) {
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(colors.text)
    .text(ed.school, { continued: true })
    .font("Helvetica")
    .fillColor(colors.muted)
    .text(`  ·  ${ed.period}`);
  doc.fontSize(9.5).text(ed.degree);
  doc.moveDown(0.25);
}

doc.end();

stream.on("finish", () => {
  console.log(`Wrote ${outPath}`);
});
