import Link from "next/link";
import { site } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">$</span> echo &quot;© {year} {site.name}&quot;
        </p>
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted">
          <Link href="/blog" className="transition hover:text-accent">
            blog
          </Link>
          <a
            href={site.resumeUrl}
            download
            className="transition hover:text-accent"
          >
            resume.pdf
          </a>
          <span>next.js · tailwind</span>
        </div>
      </div>
    </footer>
  );
}
