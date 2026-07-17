import { describe, expect, it } from "vitest";
import {
  absoluteUrl,
  blogPostingJsonLd,
  buildPageMetadata,
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
    expect(absoluteUrl("/blog")).toBe(`${getSiteUrl()}/blog`);
    expect(absoluteUrl("/")).toBe(getSiteUrl());
  });
});

describe("buildPageMetadata", () => {
  it("sets canonical and open graph fields", () => {
    const meta = buildPageMetadata({
      title: "Blog",
      description: "Test description for SEO.",
      path: "/blog",
    });
    expect(meta.description).toBe("Test description for SEO.");
    expect(meta.alternates?.canonical).toBe(`${getSiteUrl()}/blog`);
    expect(meta.openGraph?.url).toBe(`${getSiteUrl()}/blog`);
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

  it("builds project and blog schemas", () => {
    const project = projectJsonLd({
      title: "Test",
      description: "Desc",
      summary: "Sum",
      slug: "test",
      tags: ["AI"],
    });
    const post = blogPostingJsonLd({
      title: "Post",
      description: "About",
      slug: "post",
      date: "2025-01-01",
      tags: ["RAG"],
    });
    expect(project["@type"]).toBe("CreativeWork");
    expect(post["@type"]).toBe("BlogPosting");
    expect(post.datePublished).toBe("2025-01-01");
  });
});
