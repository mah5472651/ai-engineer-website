import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, site } from "@/data/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} · ${site.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 px-5 pb-24 pt-28 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="font-mono text-xs text-muted transition hover:text-accent"
          >
            ← all projects
          </Link>

          <header className="mt-6 border-b border-card-border pb-8">
            <p className="font-mono text-xs text-muted">{project.year}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-muted">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-card-border bg-card px-2 py-0.5 font-mono text-[11px] text-accent-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-card-border bg-card px-4 py-2 text-foreground transition hover:border-accent/40 hover:text-accent"
                >
                  github ↗
                </a>
              )}
              {project.links.demo && project.links.demo !== project.links.github && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-card-border bg-card px-4 py-2 text-foreground transition hover:border-accent/40 hover:text-accent"
                >
                  demo ↗
                </a>
              )}
              {project.links.writeup && (
                <Link
                  href={project.links.writeup}
                  className="rounded-lg bg-accent px-4 py-2 text-background transition hover:brightness-110"
                >
                  related writeup →
                </Link>
              )}
            </div>
          </header>

          <section className="mt-10">
            <h2 className="mb-3 font-mono text-sm text-accent">
              $ cat overview.md
            </h2>
            <p className="text-base leading-relaxed text-muted">
              {project.description}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 font-mono text-sm text-accent">
              $ cat impact.log
            </h2>
            <ul className="space-y-3">
              {project.impact.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-card-border bg-card/50 p-4 text-sm text-muted"
                >
                  <span className="text-accent">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
