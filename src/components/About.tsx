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

        <div className="grid items-start gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-10">
          <Reveal
            variant="up"
            className="space-y-4 text-base leading-relaxed text-muted sm:text-lg"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          {/* Keep highlight cards top-aligned with the about copy (2×2) */}
          <div className="grid grid-cols-2 gap-3 self-start">
            {about.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 60} variant="up" className="h-full">
                <div className="card-lift flex h-full min-h-[6.5rem] flex-col justify-center rounded-xl border border-card-border bg-card/80 p-4 sm:min-h-[7rem] sm:p-5">
                  <p className="font-mono text-base font-semibold leading-snug text-accent sm:text-lg lg:text-xl">
                    {h.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] text-muted sm:text-xs">
                    {h.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
