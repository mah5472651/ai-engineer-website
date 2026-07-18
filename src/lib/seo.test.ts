import { describe, expect, it } from "vitest";
import {
  absoluteUrl,
  buildPageMetadata,
  experienceJsonLd,
  personJsonLd,
  projectJsonLd,
  websiteJsonLd,
} from "./seo";
import { getSiteUrl } from "./site-url";

describe("getSiteUrl", () => {
  it("returns a non-empty origin string", () => {
    const url = getSiteUrl();
    expect(url.length).toBeGreaterThan(0);
    expect(url).toMatch(/^https?:\/\//);
    expect(url.endsWith("/")).toBe(false);
  });
});

describe("absoluteUrl", () => {
  it("joins path to site origin", () => {
    expect(absoluteUrl("/projects")).toBe(`${getSiteUrl()}/projects`);
    expect(absoluteUrl("/")).toBe(getSiteUrl());
  });
});

describe("buildPageMetadata", () => {
  it("sets canonical and open graph fields", () => {
    const meta = buildPageMetadata({
      title: "Projects",
      description: "Test description for SEO.",
      path: "/projects/test",
    });
    expect(meta.description).toBe("Test description for SEO.");
    expect(meta.alternates?.canonical).toBe(`${getSiteUrl()}/projects/test`);
    expect(meta.openGraph?.url).toBe(`${getSiteUrl()}/projects/test`);
  });

  it("supports absolute home title", () => {
    const meta = buildPageMetadata({
      absoluteTitle: "Mahmud Hasan · AI Engineer",
      description: "Home",
      path: "/",
    });
    expect(meta.title).toEqual({ absolute: "Mahmud Hasan · AI Engineer" });
  });
});

describe("JSON-LD builders", () => {
  it("builds Person and WebSite graphs", () => {
    const person = personJsonLd();
    const web = websiteJsonLd();
    expect(person["@type"]).toBe("Person");
    expect(person.name).toMatch(/Mahmud/i);
    expect(web["@type"]).toBe("WebSite");
  });

  it("builds project schema", () => {
    const project = projectJsonLd({
      title: "Test",
      description: "Desc",
      summary: "Sum",
      slug: "test",
      tags: ["AI"],
    });
    expect(project["@type"]).toBe("CreativeWork");
    expect(project.url).toBe(`${getSiteUrl()}/projects/test`);
  });

  it("builds experience schema", () => {
    const exp = experienceJsonLd({
      pageTitle: "COO — Craftly",
      summary: "Operations and frontier AI.",
      slug: "craftly-coo",
      company: "Craftly",
      role: "COO",
      focusAreas: ["AI Operations"],
    });
    expect(exp["@type"]).toBe("ProfilePage");
    expect(exp.url).toBe(`${getSiteUrl()}/experience/craftly-coo`);
  });
});
