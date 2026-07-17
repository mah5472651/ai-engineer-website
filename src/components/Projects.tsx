import Link from "next/link";
import { projects } from "@/data/portfolio";
import AccessBadge from "./AccessBadge";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="find ./projects -type f"
          title="Selected projects"
          subtitle="Metrics-first previews — open a case study for architecture and outcomes."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70} variant="up">
              <Link
                href={`/projects/${project.slug}`}
                className="card-lift group flex min-h-[13rem] flex-col rounded-xl border border-card-border bg-card/60 p-4 sm:p-5"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <p className="font-mono text-[10px] text-muted">{project.year}</p>
                  <div className="flex flex-wrap items-center justify-end gap-1.5">
                    <AccessBadge access={project.access} />
                    {project.featured && (
                      <span className="shrink-0 rounded border border-accent/25 bg-accent/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
                        featured
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground break-words transition group-hover:text-accent sm:text-[17px]">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                {project.metrics.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.metrics.slice(0, 2).map((m) => (
                      <span
                        key={m.label}
                        className="rounded border border-accent/15 bg-accent/5 px-1.5 py-0.5 font-mono text-[10px] text-accent"
                      >
                        <span className="text-muted">{m.label}:</span> {m.value}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-background/80 px-1.5 py-0.5 font-mono text-[10px] text-accent-2"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded px-1.5 py-0.5 font-mono text-[10px] text-muted">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <span className="mt-auto pt-3 font-mono text-xs text-accent opacity-90 transition group-hover:underline">
                  open case study →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
