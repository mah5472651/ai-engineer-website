import type { ProjectMetric } from "@/data/portfolio";
import Reveal from "./Reveal";

type Props = {
  metrics: ProjectMetric[];
  className?: string;
};

/** Scannable metric chips for project cards and case studies. */
export default function MetricStrip({ metrics, className = "" }: Props) {
  if (!metrics.length) return null;

  return (
    <ul
      className={`grid grid-cols-2 gap-2 sm:grid-cols-4 ${className}`}
      aria-label="Key metrics"
    >
      {metrics.map((m, i) => (
        <Reveal key={m.label} delay={i * 60} variant="scale" as="li">
          <div className="metric-chip h-full rounded-lg border border-card-border bg-background/60 px-3 py-2.5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {m.label}
            </p>
            <p className="mt-1 font-mono text-sm font-semibold text-accent">
              {m.value}
            </p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
