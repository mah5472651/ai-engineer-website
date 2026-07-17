import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectBySlug, projects, site } from "@/data/portfolio";

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
  return {
    title: `${project.title} · ${site.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <header className="border-b border-card-border px-5 pb-12 pt-28 sm:px-8 sm:pb-16">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/#projects"
              className="font-mono text-xs text-muted transition hover:text-accent"
            >
              ← all projects
            </Link>

            <p className="mt-6 font-mono text-xs text-accent">
              $ cat projects/{project.slug}.md
            </p>
            <p className="mt-2 font-mono text-xs text-muted">{project.year}</p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
              {project.description}
            </p>

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
                  className="rounded-lg border border-card-border bg-card px-4 py-2.5 text-foreground transition hover:border-accent/40 hover:text-accent"
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
                    className="rounded-lg border border-card-border bg-card px-4 py-2.5 text-foreground transition hover:border-accent/40 hover:text-accent"
                  >
                    demo ↗
                  </a>
                )}
              {project.links.writeup && (
                <Link
                  href={project.links.writeup}
                  className="rounded-lg bg-accent px-4 py-2.5 text-background transition hover:brightness-110"
                >
                  related writeup →
                </Link>
              )}
              <Link
                href="/#contact"
                className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-accent transition hover:bg-accent/20"
              >
                discuss this project
              </Link>
            </div>
          </div>
        </header>

        <article className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-14">
            {/* Highlights */}
            <section>
              <h2 className="mb-5 font-mono text-sm text-accent">
                $ cat highlights.log
              </h2>
              <ul className="space-y-3">
                {project.impact.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-card-border bg-card/50 p-5 text-sm leading-relaxed text-muted sm:text-base"
                  >
                    <span className="shrink-0 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Deep-dive sections */}
            {project.sections && project.sections.length > 0 && (
              <section className="space-y-10">
                <h2 className="font-mono text-sm text-accent">
                  $ less deep-dive.md
                </h2>
                {project.sections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-2xl border border-card-border bg-card/40 p-6 sm:p-8"
                  >
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {section.title}
                    </h3>
                    <div className="mt-4 space-y-3">
                      {section.paragraphs.map((p) => (
                        <p
                          key={p}
                          className="text-base leading-relaxed text-muted"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* Tech stack */}
            <section>
              <h2 className="mb-4 font-mono text-sm text-accent">
                $ ls tech/
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-card-border bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="glow-border rounded-2xl border border-card-border bg-card p-6 sm:p-8">
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
                  className="rounded-lg bg-accent px-5 py-2.5 font-medium text-background transition hover:brightness-110"
                >
                  get in touch
                </Link>
                <Link
                  href="/#projects"
                  className="rounded-lg border border-card-border px-5 py-2.5 text-muted transition hover:border-accent/40 hover:text-accent"
                >
                  ← back to projects
                </Link>
              </div>
            </section>

            {/* Other projects */}
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
                        className="group block rounded-xl border border-card-border bg-card/40 p-4 transition hover:border-accent/35"
                      >
                        <p className="font-mono text-[10px] text-muted">
                          {p.year}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground group-hover:text-accent">
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
