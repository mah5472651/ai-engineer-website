/**
 * Canonical origin for SEO (metadataBase, sitemap, JSON-LD, OG URLs).
 * Prefer NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd) {
    const host = vercelProd.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}
