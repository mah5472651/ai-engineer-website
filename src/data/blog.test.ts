import { describe, expect, it } from "vitest";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  posts,
} from "./blog";

describe("getAllPosts", () => {
  it("returns posts sorted by date descending (newest first)", () => {
    const sorted = getAllPosts();
    expect(sorted.length).toBe(posts.length);
    for (let i = 1; i < sorted.length; i++) {
      const prev = new Date(sorted[i - 1].date).getTime();
      const curr = new Date(sorted[i].date).getTime();
      expect(prev).toBeGreaterThanOrEqual(curr);
    }
  });

  it("does not mutate the source posts array order", () => {
    const before = posts.map((p) => p.slug);
    getAllPosts();
    expect(posts.map((p) => p.slug)).toEqual(before);
  });
});

describe("getPostBySlug", () => {
  it("returns the post for a known slug", () => {
    const first = posts[0];
    expect(getPostBySlug(first.slug)).toEqual(first);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getPostBySlug("does-not-exist")).toBeUndefined();
  });
});

describe("formatPostDate", () => {
  it("formats YYYY-MM-DD as a stable en-US calendar date", () => {
    expect(formatPostDate("2025-11-12")).toBe("Nov 12, 2025");
    expect(formatPostDate("2024-01-01")).toBe("Jan 1, 2024");
    expect(formatPostDate("2024-12-31")).toBe("Dec 31, 2024");
  });

  it("does not shift the calendar day for western timezones (UTC-safe)", () => {
    // Previously used local midnight without timeZone, which could disagree
    // between SSR (UTC) and browsers in US timezones for date-only parsing.
    expect(formatPostDate("2025-06-03")).toBe("Jun 3, 2025");
  });

  it("rejects non YYYY-MM-DD strings", () => {
    expect(() => formatPostDate("11/12/2025")).toThrow(/Invalid post date/);
    expect(() => formatPostDate("2025-11-12T00:00:00")).toThrow(
      /Invalid post date/,
    );
    expect(() => formatPostDate("")).toThrow(/Invalid post date/);
  });

  it("rejects impossible calendar dates", () => {
    expect(() => formatPostDate("2025-02-30")).toThrow(/Invalid calendar date/);
    expect(() => formatPostDate("2025-13-01")).toThrow(/Invalid calendar date/);
  });
});

describe("blog content invariants", () => {
  it("has unique slugs", () => {
    const slugs = posts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("requires non-empty title, description, body, and tags", () => {
    for (const post of posts) {
      expect(post.slug.length).toBeGreaterThan(0);
      expect(post.title.trim().length).toBeGreaterThan(0);
      expect(post.description.trim().length).toBeGreaterThan(0);
      expect(post.body.trim().length).toBeGreaterThan(0);
      expect(post.tags.length).toBeGreaterThan(0);
      expect(post.readingMinutes).toBeGreaterThan(0);
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      // formatPostDate must succeed for every published date
      expect(formatPostDate(post.date)).toMatch(/^\w{3} \d{1,2}, \d{4}$/);
    }
  });

  it("uses URL-safe slugs", () => {
    for (const post of posts) {
      expect(post.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });
});
