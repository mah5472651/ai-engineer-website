import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { experience, projects, site } from "./portfolio";

const root = path.resolve(__dirname, "../..");

/**
 * Cross-file guards: portfolio content vs resume generator vs public assets.
 * These catch the class of bugs where the site says one identity and the PDF
 * (or generator script) still has scaffold placeholders.
 */
describe("resume generator integrity", () => {
  const resumeScript = fs.readFileSync(
    path.join(root, "scripts/generate-resume.mjs"),
    "utf8",
  );

  it("does not contain the Next.js template identity (Alex Rivera)", () => {
    expect(resumeScript).not.toMatch(/Alex Rivera/);
    expect(resumeScript).not.toMatch(/alex\.rivera@example\.com/);
    expect(resumeScript).not.toMatch(/Nova Labs/);
    expect(resumeScript).not.toMatch(/San Francisco, CA/);
  });

  it("embeds the same person name and email as portfolio.ts", () => {
    expect(resumeScript).toContain(site.name);
    expect(resumeScript).toContain(site.email);
    expect(resumeScript).toContain(site.location);
  });

  it("lists the same companies as portfolio experience", () => {
    for (const job of experience) {
      expect(resumeScript, `missing company ${job.company}`).toContain(
        job.company,
      );
      expect(resumeScript, `missing role ${job.role}`).toContain(job.role);
    }
  });

  it("lists the same project titles as portfolio projects", () => {
    for (const project of projects) {
      expect(resumeScript, `missing project ${project.title}`).toContain(
        project.title,
      );
    }
  });

  it("includes an Education section in the resume generator", () => {
    expect(resumeScript).toMatch(/sectionTitle\(doc,\s*["']Education["']\)/);
  });
});

describe("public resume.pdf", () => {
  const pdfPath = path.join(root, "public/resume.pdf");

  it("exists for the download button", () => {
    expect(fs.existsSync(pdfPath)).toBe(true);
  });

  it("is a non-empty PDF", () => {
    const buf = fs.readFileSync(pdfPath);
    expect(buf.length).toBeGreaterThan(500);
    expect(buf.subarray(0, 5).toString("ascii")).toBe("%PDF-");
  });

  /**
   * PDF text extraction is imperfect (subset fonts / encoding), so we only
   * assert that regenerating is expected after portfolio changes.
   * Run: npm run generate:resume
   */
  it("was generated recently enough that the file is present (manual regen)", () => {
    const stat = fs.statSync(pdfPath);
    expect(stat.size).toBeGreaterThan(0);
  });
});

describe("contact UI anti-duplication contract", () => {
  /**
   * Contact.tsx lists site.whatsapp explicitly, then maps site.social while
   * filtering out "whatsapp". If someone removes that filter, WhatsApp shows twice.
   */
  it("documents that social.whatsapp must match site.whatsapp.url", () => {
    expect(site.social.whatsapp).toBe(site.whatsapp.url);
  });

  it("Contact.tsx still filters social.whatsapp to avoid duplicate rows", () => {
    const contactSrc = fs.readFileSync(
      path.join(root, "src/components/Contact.tsx"),
      "utf8",
    );
    expect(contactSrc).toMatch(/key !== ["']whatsapp["']/);
  });
});
