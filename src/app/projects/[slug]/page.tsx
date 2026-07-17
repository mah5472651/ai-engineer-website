import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AccessBadge from "@/components/AccessBadge";
import Footer from "@/components/Footer";
import MetricStrip from "@/components/MetricStrip";
import Navbar from "@/components/Navbar";
import ProjectArchitecture from "@/components/ProjectArchitecture";
import { getProjectBySlug, projects, site } from "@/data/portfolio";
import { debug } from "@/lib/debug";
import { buildPageMetadata, projectJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return buildPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    keywords: [...project.tags, "project", site.name, "AI Engineer"],
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    debug("project not found", slug);
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug);
  const jsonLd = projectJsonLd(project);

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="border-b border-card-border px-4 pb-10 pt-24 sm:px-8 sm:pb-16 sm:pt-28">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center font-mono text-xs text-muted transition hover:text-accent"
            >
              ← all projects
            </Link>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-6">
              <p className="font-mono text-xs text-accent break-all">
                $ cat projects/{project.slug}.md
              </p>
              <AccessBadge access={project.access} />
            </div>
            <p className="mt-2 font-mono text-xs text-muted">{project.year}</p>

            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground break-words sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:mt-5 sm:text-xl">
              {project.description}
            </p>

            <MetricStrip metrics={project.metrics} className="mt-8" />

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-card-border bg-card px-2.5 py-1 font-mono text-[11px] text-accent-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-lg border border-card-border bg-card px-4 py-2.5 text-foreground transition hover:border-accent/40 hover:text-accent"
                >
                  github ↗
                </a>
              )}
              {project.links.demo &&
                project.links.demo !== project.links.github && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg border border-card-border bg-card px-4 py-2.5 text-foreground transition hover:border-accent/40 hover:text-accent"
                  >
                    live demo ↗
                  </a>
                )}
              {project.links.writeup && (
                <Link
                  href={project.links.writeup}
                  className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2.5 text-background transition hover:brightness-110"
                >
                  related writeup →
                </Link>
              )}
              <Link
                href="/#contact"
                className="inline-flex min-h-11 items-center rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-accent transition hover:bg-accent/20"
              >
                discuss this project
              </Link>
            </div>

            {project.access !== "public" && (
              <p className="mt-4 max-w-2xl font-mono text-[11px] leading-relaxed text-muted">
                Source is not fully public. This case study documents architecture,
                metrics, and outcomes; request a private walkthrough via contact.
              </p>
            )}
          </div>
        </header>

        <article className="px-4 py-10 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-10 sm:space-y-14">
            {project.architecture && (
              <section>
                <h2 className="mb-5 font-mono text-sm text-accent">
                  $ render architecture.dot
                </h2>
                <ProjectArchitecture architecture={project.architecture} />
              </section>
            )}

            <section>
              <h2 className="mb-5 font-mono text-sm text-accent">
                $ cat highlights.log
              </h2>
              <ul className="space-y-3">
                {project.impact.map((item, i) => (
                  <li
                    key={item}
                    className="card-lift flex gap-3 rounded-xl border border-card-border bg-card/50 p-4 text-sm leading-relaxed text-muted sm:p-5 sm:text-base"
                  >
                    <span className="shrink-0 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.sections && project.sections.length > 0 && (
              <section className="space-y-6 sm:space-y-10">
                <h2 className="font-mono text-sm text-accent">
                  $ less deep-dive.md
                </h2>
                {project.sections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-2xl border border-card-border bg-card/40 p-5 sm:p-8"
                  >
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {section.title}
                    </h3>
                    <div className="mt-4 space-y-3">
                      {section.paragraphs.map((p) => (
                        <p
                          key={p}
                          className="text-sm leading-relaxed text-muted sm:text-base"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}

            <section>
              <h2 className="mb-4 font-mono text-sm text-accent">$ ls tech/</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chip-pop rounded-lg border border-card-border bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="glow-border rounded-2xl border border-card-border bg-card p-5 sm:p-8">
              <p className="font-mono text-xs text-accent">
                $ echo &quot;want something similar?&quot;
              </p>
              <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                Let&apos;s talk production AI systems.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                Open to collaborations, partnerships, and high-impact builds.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
                <Link
                  href="/#contact"
                  className="btn-glow inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-2.5 font-medium text-background"
                >
                  get in touch
                </Link>
                <Link
                  href="/#projects"
                  className="inline-flex min-h-11 items-center rounded-lg border border-card-border px-5 py-2.5 text-muted transition hover:border-accent/40 hover:text-accent"
                >
                  ← back to projects
                </Link>
              </div>
            </section>

            {otherProjects.length > 0 && (
              <section>
                <h2 className="mb-4 font-mono text-sm text-accent">
                  $ ls ../other-projects/
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {otherProjects.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="card-lift group block rounded-xl border border-card-border bg-card/40 p-4"
                      >
                        <p className="font-mono text-[10px] text-muted">
                          {p.year}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground break-words group-hover:text-accent">
                          {p.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs text-muted">
                          {p.summary}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
