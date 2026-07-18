import Link from "next/link";
import { site } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-10">
      <Reveal
        variant="fade"
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"
      >
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">$</span> echo &quot;© {year} {site.name}
          &quot;
        </p>
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted"
        >
          <Link href="/#projects" className="min-h-11 inline-flex items-center transition hover:text-accent">
            projects
          </Link>
          <Link href="/#experience" className="min-h-11 inline-flex items-center transition hover:text-accent">
            experience
          </Link>
          <Link href="/#contact" className="min-h-11 inline-flex items-center transition hover:text-accent">
            contact
          </Link>
          <a
            href={site.resumeUrl}
            download
            className="min-h-11 inline-flex items-center transition hover:text-accent"
          >
            resume.pdf
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center transition hover:text-accent"
          >
            github
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center transition hover:text-accent"
          >
            linkedin
          </a>
        </nav>
      </Reveal>
    </footer>
  );
}
