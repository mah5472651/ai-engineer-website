import { describe, expect, it } from "vitest";
import {
  about,
  contact,
  education,
  experience,
  projects,
  site,
  skills,
} from "./portfolio";

describe("site.emailHref", () => {
  it("builds a mailto link from site.email and site.name (no hard-coded drift)", () => {
    expect(site.emailHref).toBe(
      `mailto:${site.email}?subject=${encodeURIComponent(`Hello ${site.name}`)}`,
    );
    expect(site.emailHref.startsWith("mailto:")).toBe(true);
    expect(site.emailHref).toContain(site.email);
    expect(site.emailHref).toContain("subject=");
  });

  it("encodes the subject so spaces become %20", () => {
    expect(site.emailHref).toContain("Hello%20");
  });
});

describe("site contact channels", () => {
  it("uses a valid mailto target email", () => {
    expect(site.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("keeps WhatsApp phone and wa.me URL in sync", () => {
    const digits = site.whatsapp.phone.replace(/\D/g, "");
    expect(site.whatsapp.url).toBe(`https://wa.me/${digits}`);
    expect(site.social.whatsapp).toBe(site.whatsapp.url);
  });

  it("uses absolute https URLs for social profiles", () => {
    for (const [key, url] of Object.entries(site.social)) {
      expect(url, key).toMatch(/^https:\/\//);
    }
  });

  it("resume points at a site-relative PDF path", () => {
    expect(site.resumeUrl).toBe("/resume.pdf");
  });
});

describe("projects", () => {
  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses URL-safe slugs", () => {
    for (const p of projects) {
      expect(p.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("requires summary, description, tags, metrics, access, and impact", () => {
    for (const p of projects) {
      expect(p.title.trim().length).toBeGreaterThan(0);
      expect(p.summary.trim().length).toBeGreaterThan(0);
      expect(p.description.trim().length).toBeGreaterThan(0);
      expect(p.impact.length).toBeGreaterThan(0);
      expect(p.tags.length).toBeGreaterThan(0);
      expect(p.metrics.length).toBeGreaterThan(0);
      expect(["public", "private", "case-study"]).toContain(p.access);
      expect(p.year.trim().length).toBeGreaterThan(0);
    }
  });

  it("has at least three projects for a competitive portfolio grid", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });

  it("has at least one featured project for the homepage grid", () => {
    expect(projects.some((p) => p.featured)).toBe(true);
  });

  it("links writeups to site-relative paths or absolute URLs when present", () => {
    for (const p of projects) {
      if (!p.links.writeup) continue;
      expect(
        p.links.writeup.startsWith("/") || p.links.writeup.startsWith("https://"),
      ).toBe(true);
    }
  });

  it("architecture graphs only reference known node ids", () => {
    for (const p of projects) {
      if (!p.architecture) continue;
      const ids = new Set(p.architecture.nodes.map((n) => n.id));
      for (const e of p.architecture.edges) {
        expect(ids.has(e.from), `${p.slug} edge from ${e.from}`).toBe(true);
        expect(ids.has(e.to), `${p.slug} edge to ${e.to}`).toBe(true);
      }
    }
  });
});

describe("experience, education & skills", () => {
  it("lists experience with company, role, slug, and detail content", () => {
    expect(experience.length).toBeGreaterThan(0);
    const slugs = experience.map((j) => j.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const job of experience) {
      expect(job.company.trim().length).toBeGreaterThan(0);
      expect(job.role.trim().length).toBeGreaterThan(0);
      expect(job.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(job.bullets.length).toBeGreaterThan(0);
      expect(job.pageTitle.trim().length).toBeGreaterThan(0);
      expect(job.headline.trim().length).toBeGreaterThan(0);
      expect(job.overview.length).toBeGreaterThan(0);
      expect(job.responsibilities.length).toBeGreaterThan(0);
      expect(job.contributions.length).toBeGreaterThan(0);
      expect(job.focusAreas.length).toBeGreaterThan(0);
      expect(job.vision.trim().length).toBeGreaterThan(0);
      expect(job.journey.trim().length).toBeGreaterThan(0);
    }
  });

  it("has real education entries (not PDF-only placeholders)", () => {
    expect(education.length).toBeGreaterThanOrEqual(2);
    for (const ed of education) {
      expect(ed.school.trim().length).toBeGreaterThan(0);
      expect(ed.degree.trim().length).toBeGreaterThan(0);
      expect(ed.period.trim().length).toBeGreaterThan(0);
      expect(ed.school).not.toMatch(/see resume/i);
      expect(ed.degree).not.toMatch(/download resume/i);
    }
    const degrees = education.map((e) => e.degree);
    expect(degrees.some((d) => /HSC/i.test(d))).toBe(true);
    expect(degrees.some((d) => /SSC/i.test(d))).toBe(true);
  });

  it("groups skills into non-empty categories", () => {
    expect(skills.categories.length).toBeGreaterThan(0);
    for (const cat of skills.categories) {
      expect(cat.title.trim().length).toBeGreaterThan(0);
      expect(cat.items.length).toBeGreaterThan(0);
    }
  });

  it("about section has paragraphs and highlights", () => {
    expect(about.paragraphs.length).toBeGreaterThan(0);
    expect(about.highlights.length).toBeGreaterThan(0);
    expect(contact.headline.trim().length).toBeGreaterThan(0);
  });
});

describe("identity consistency", () => {
  it("does not ship placeholder template identity (Alex Rivera)", () => {
    const blob = JSON.stringify({ site, about, experience, projects, education });
    expect(blob).not.toMatch(/Alex Rivera/i);
    expect(blob).not.toMatch(/alex\.rivera@example\.com/i);
    expect(blob).not.toMatch(/Nova Labs/i);
    expect(site.name).toMatch(/Mahmud/i);
  });
});
