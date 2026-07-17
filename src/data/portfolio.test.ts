import { describe, expect, it } from "vitest";
import {
  about,
  contact,
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

  it("requires summary, description, tags, and at least one impact bullet", () => {
    for (const p of projects) {
      expect(p.title.trim().length).toBeGreaterThan(0);
      expect(p.summary.trim().length).toBeGreaterThan(0);
      expect(p.description.trim().length).toBeGreaterThan(0);
      expect(p.impact.length).toBeGreaterThan(0);
      expect(p.tags.length).toBeGreaterThan(0);
      expect(p.year.trim().length).toBeGreaterThan(0);
    }
  });

  it("has at least one featured project for the homepage grid", () => {
    expect(projects.some((p) => p.featured)).toBe(true);
  });
});

describe("experience & skills", () => {
  it("lists experience with company, role, and bullets", () => {
    expect(experience.length).toBeGreaterThan(0);
    for (const job of experience) {
      expect(job.company.trim().length).toBeGreaterThan(0);
      expect(job.role.trim().length).toBeGreaterThan(0);
      expect(job.bullets.length).toBeGreaterThan(0);
    }
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
    const blob = JSON.stringify({ site, about, experience, projects });
    expect(blob).not.toMatch(/Alex Rivera/i);
    expect(blob).not.toMatch(/alex\.rivera@example\.com/i);
    expect(blob).not.toMatch(/Nova Labs/i);
    expect(site.name).toMatch(/Mahmud/i);
  });
});
