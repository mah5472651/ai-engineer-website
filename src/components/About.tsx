import { about, site } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="cat about.md"
          title="About"
          subtitle={`${site.role} · ${site.location}`}
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal variant="left" className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {about.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 80} variant="scale">
                <div className="card-lift rounded-xl border border-card-border bg-card/80 p-5">
                  <p className="font-mono text-2xl font-semibold text-accent sm:text-3xl">
                    {h.value}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">{h.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
