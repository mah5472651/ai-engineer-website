/**
 * Dev-only debug helpers. Never log secrets or PII in production.
 * Usage: debug("projects", projects.length)
 */

const PREFIX = "[portfolio]";

function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

export function debug(...args: unknown[]): void {
  if (!isDev()) return;
  // eslint-disable-next-line no-console -- intentional dev diagnostics
  console.debug(PREFIX, ...args);
}

export function debugWarn(...args: unknown[]): void {
  if (!isDev()) return;
  // eslint-disable-next-line no-console -- intentional dev diagnostics
  console.warn(PREFIX, ...args);
}

/** Assert a condition in development; no-ops in production. */
export function debugAssert(
  condition: unknown,
  message: string,
): asserts condition {
  if (condition) return;
  if (isDev()) {
    // eslint-disable-next-line no-console -- intentional dev diagnostics
    console.error(PREFIX, "assert failed:", message);
  }
}
