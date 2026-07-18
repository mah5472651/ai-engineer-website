import type { Metadata } from "next";
import { site } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site-url";

export const siteKeywords = [
  "AI Engineer",
  "Mahmud Hasan",
  "LLM",
  "RAG",
  "multi-agent systems",
  "cybersecurity AI",
  "fine-tuning",
  "MLOps",
  "Aeitron AI",
  "Craftly",
  "Bangladesh",
  "production AI",
] as const;

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Page metadata with canonical, Open Graph, and Twitter.
 * Pass a short `title` segment (template in root layout appends · Name),
 * or set absoluteTitle for the home page / full override.
 */
export function buildPageMetadata({
  title,
  absoluteTitle,
  description,
  path = "/",
  type = "website",
  keywords,
}: {
  title?: string;
  absoluteTitle?: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const displayTitle =
    absoluteTitle ??
    (title ? `${title} · ${site.name}` : `${site.name} · ${site.role}`);

  return {
    title: absoluteTitle
      ? { absolute: absoluteTitle }
      : title
        ? title
        : { absolute: displayTitle },
    description,
    keywords: keywords?.length ? [...keywords] : [...siteKeywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: displayTitle,
      description,
      url,
      siteName: `${site.name} · ${site.role}`,
      locale: "en_US",
      type,
      // Images come from app/opengraph-image.tsx (Next file convention)
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      // Images come from app/twitter-image.tsx
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.tagline,
    email: site.email,
    url: getSiteUrl(),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barishal",
      addressCountry: "BD",
    },
    sameAs: [site.social.github, site.social.linkedin, site.social.whatsapp],
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "Retrieval Augmented Generation",
      "Multi-agent systems",
      "Cybersecurity",
      "Machine Learning",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} · ${site.role}`,
    description: `${site.tagline} Portfolio of ${site.name}.`,
    url: getSiteUrl(),
    author: {
      "@type": "Person",
      name: site.name,
    },
    inLanguage: "en",
  };
}

export function projectJsonLd(project: {
  title: string;
  description: string;
  summary: string;
  slug: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description || project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    author: {
      "@type": "Person",
      name: site.name,
    },
    keywords: project.tags.join(", "),
  };
}

export function experienceJsonLd(role: {
  pageTitle: string;
  summary: string;
  slug: string;
  company: string;
  role: string;
  focusAreas: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: role.pageTitle,
    description: role.summary,
    url: absoluteUrl(`/experience/${role.slug}`),
    mainEntity: {
      "@type": "Person",
      name: site.name,
      jobTitle: role.role,
      worksFor: {
        "@type": "Organization",
        name: role.company,
      },
      knowsAbout: role.focusAreas,
    },
  };
}

