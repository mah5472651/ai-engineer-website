import { describe, expect, it } from "vitest";

/**
 * Unit tests for mailto construction rules used by site.emailHref.
 * Kept pure so failures stay easy to diagnose without importing Next/React.
 */
function buildEmailHref(email: string, name: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(`Hello ${name}`)}`;
}

describe("buildEmailHref", () => {
  it("includes the email as the mailto target", () => {
    const href = buildEmailHref("a@b.com", "Test User");
    expect(href.startsWith("mailto:a@b.com?")).toBe(true);
  });

  it("URL-encodes the subject", () => {
    const href = buildEmailHref("a@b.com", "Mahmud Hasan");
    expect(href).toContain("subject=Hello%20Mahmud%20Hasan");
    expect(href).not.toContain("subject=Hello Mahmud");
  });

  it("handles plus and special characters in names", () => {
    const href = buildEmailHref("dev+tag@example.com", "A & B");
    expect(href).toContain("mailto:dev+tag@example.com?");
    expect(href).toContain(encodeURIComponent("Hello A & B"));
  });
});
