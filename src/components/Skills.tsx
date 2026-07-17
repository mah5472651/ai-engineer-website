import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="ls skills/"
          title="Skills & stack"
          subtitle="Tools I use to train, serve, and evaluate models in production."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80} variant="up">
              <div className="card-lift rounded-xl border border-card-border bg-card/60 p-6">
                <h3 className="mb-4 font-mono text-sm font-medium text-accent">
                  {cat.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="chip-pop rounded-md border border-card-border bg-background/60 px-2.5 py-1 font-mono text-xs text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
