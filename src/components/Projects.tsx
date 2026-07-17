import Link from "next/link";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="find ./projects -type f"
          title="Selected projects"
          subtitle="Compact previews — open a project for the full story."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-xl border border-card-border bg-card/60 p-4 transition hover:border-accent/40 hover:bg-card hover:shadow-[0_0_28px_-12px_var(--accent-dim)] sm:p-5"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <p className="font-mono text-[10px] text-muted">{project.year}</p>
                {project.featured && (
                  <span className="shrink-0 rounded border border-accent/25 bg-accent/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
                    featured
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground transition group-hover:text-accent sm:text-[17px]">
                {project.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>

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

              <span className="mt-3 font-mono text-xs text-accent opacity-90 transition group-hover:underline">
                open project →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
