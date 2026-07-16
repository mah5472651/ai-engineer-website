"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/portfolio";

const sectionLinks = [
  { href: "/#about", label: "about" },
  { href: "/#skills", label: "skills" },
  { href: "/#projects", label: "projects" },
  { href: "/#experience", label: "experience" },
  { href: "/blog", label: "blog" },
  { href: "/#contact", label: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onBlog = pathname?.startsWith("/blog");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || onBlog
          ? "border-b border-card-border/80 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-accent transition hover:opacity-80"
        >
          <span className="text-muted">~/</span>
          {site.name.toLowerCase().replace(/\s+/g, "-")}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {sectionLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-md px-3 py-2 font-mono text-xs transition hover:bg-accent/10 hover:text-accent ${
                  link.href === "/blog" && onBlog ? "text-accent" : "text-muted"
                }`}
              >
                ./{link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.resumeUrl}
              download
              className="ml-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent transition hover:bg-accent/20"
            >
              resume.pdf
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          className="font-mono text-xs text-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </nav>

      {open && (
        <div className="border-b border-card-border bg-background/95 px-5 py-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 font-mono text-sm text-muted hover:bg-accent/10 hover:text-accent"
                >
                  ./{link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-md border border-accent/40 px-3 py-2.5 font-mono text-sm text-accent"
              >
                resume.pdf
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
