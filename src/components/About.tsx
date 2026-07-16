import { about, site } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="cat about.md"
          title="About"
          subtitle={`${site.role} · ${site.location}`}
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-card-border bg-card/80 p-5 transition hover:border-accent/30"
              >
                <p className="font-mono text-2xl font-semibold text-accent sm:text-3xl">
                  {h.value}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
