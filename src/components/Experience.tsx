import { education, experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="git log --oneline career"
          title="Experience"
          subtitle="Roles where I owned models, platforms, and outcomes."
        />

        <ol className="relative space-y-0 border-l border-card-border pl-6 sm:pl-8">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={i * 90} variant="up" as="li">
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[1.55rem] top-1.5 flex h-3 w-3 items-center justify-center sm:-left-[2.05rem]">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ring-4 ring-background ${
                      i === 0
                        ? "timeline-live bg-accent shadow-[0_0_12px_var(--accent)]"
                        : "bg-muted"
                    }`}
                  />
                </span>

                <div className="card-lift rounded-xl border border-card-border bg-card/50 p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.role}
                      </h3>
                      <p className="font-mono text-sm text-accent">{job.company}</p>
                    </div>
                    <div className="mt-1 font-mono text-xs text-muted sm:mt-0 sm:text-right">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 shrink-0 font-mono text-accent/70">
                          ▹
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Education — full on-page story (not PDF-only) */}
        <div id="education" className="mt-16 scroll-mt-24 sm:mt-20">
          <SectionHeading
            command="cat education.md"
            title="Education"
            subtitle="Applied track on-page; formal credentials also on resume.pdf."
          />

          <ul className="grid gap-3">
            {education.map((ed, i) => (
              <Reveal key={ed.school + ed.degree} delay={i * 80} variant="up" as="li">
                <div className="card-lift rounded-xl border border-card-border bg-card/50 p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {ed.degree}
                      </h3>
                      <p className="font-mono text-sm text-accent">{ed.school}</p>
                    </div>
                    <div className="mt-1 font-mono text-xs text-muted sm:mt-0 sm:text-right">
                      {ed.period && <p>{ed.period}</p>}
                      {ed.location && <p>{ed.location}</p>}
                    </div>
                  </div>
                  {ed.bullets && ed.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {ed.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-1.5 shrink-0 font-mono text-accent/70">
                            ▹
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-4 font-mono text-[11px] text-muted">
                    <a
                      href="/resume.pdf"
                      download
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      resume.pdf ↓
                    </a>{" "}
                    — full academic details
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
