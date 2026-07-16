import Link from "next/link";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="find ./projects -type f"
          title="Selected projects"
          subtitle="Production systems with concrete metrics — not just demos."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col rounded-xl border border-card-border bg-card/70 p-6 transition hover:border-accent/35 hover:shadow-[0_0_40px_-12px_var(--accent-dim)]"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="mb-1 font-mono text-[11px] text-muted">
                    {project.year}
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  featured
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <ul className="mb-5 space-y-1.5">
                {project.impact.slice(0, 2).map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs leading-relaxed text-muted"
                  >
                    <span className="mt-0.5 text-accent">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-background/80 px-2 py-0.5 font-mono text-[11px] text-accent-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3 border-t border-card-border pt-4 font-mono text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-accent transition hover:underline"
                >
                  case study →
                </Link>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition hover:text-accent"
                  >
                    github ↗
                  </a>
                )}
                {project.links.writeup && (
                  <Link
                    href={project.links.writeup}
                    className="text-muted transition hover:text-accent"
                  >
                    writeup →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-xl border border-card-border/80 bg-card/40 p-5 transition hover:border-accent/25"
              >
                <p className="mb-1 font-mono text-[11px] text-muted">
                  {project.year}
                </p>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-background/80 px-2 py-0.5 font-mono text-[11px] text-accent-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 font-mono text-xs">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-accent transition hover:underline"
                  >
                    case study →
                  </Link>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition hover:text-accent"
                    >
                      github ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
