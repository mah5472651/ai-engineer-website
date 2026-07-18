"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { site } from "@/data/portfolio";
import ScrollProgress from "./ScrollProgress";

const sectionLinks = [
  { href: "/#about", label: "about" },
  { href: "/#skills", label: "skills" },
  { href: "/#projects", label: "projects" },
  { href: "/#experience", label: "experience" },
  { href: "/#contact", label: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const onInnerPage =
    pathname?.startsWith("/projects") || pathname?.startsWith("/experience");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const solid = scrolled || onInnerPage || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        solid
          ? "border-b border-card-border/80 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="min-w-0 truncate font-mono text-sm font-medium tracking-tight text-accent transition hover:opacity-80"
        >
          <span className="text-muted">~/</span>
          {site.name.toLowerCase().replace(/\s+/g, "-")}
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {sectionLinks.map((link) => {
            const active =
              (link.href === "/#projects" &&
                pathname?.startsWith("/projects")) ||
              (link.href === "/#experience" &&
                pathname?.startsWith("/experience"));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md px-2.5 py-2 font-mono text-xs transition hover:bg-accent/10 hover:text-accent lg:px-3 ${
                    active ? "text-accent" : "text-muted"
                  }`}
                >
                  ./{link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={site.resumeUrl}
              download
              className="ml-1 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent transition hover:bg-accent/20 lg:ml-2"
            >
              resume.pdf
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md font-mono text-xs text-muted transition hover:bg-accent/10 hover:text-accent md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </nav>

      <div
        id={menuId}
        hidden={!open}
        className="border-b border-card-border bg-background/95 px-4 py-3 backdrop-blur-md md:hidden"
      >
        <ul className="flex flex-col gap-1 pb-[env(safe-area-inset-bottom)]">
          {sectionLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block min-h-11 rounded-md px-3 py-3 font-mono text-sm text-muted hover:bg-accent/10 hover:text-accent"
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
              className="mt-1 block min-h-11 rounded-md border border-accent/40 px-3 py-3 font-mono text-sm text-accent"
            >
              resume.pdf
            </a>
          </li>
        </ul>
      </div>
      <ScrollProgress />
    </header>
  );
}
