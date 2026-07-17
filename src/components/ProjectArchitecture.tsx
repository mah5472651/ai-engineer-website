import type { ProjectArchitecture as Arch } from "@/data/portfolio";

type Props = {
  architecture: Arch;
  className?: string;
};

/**
 * Lightweight architecture flow diagram (SVG).
 * No external chart library — production-friendly and theme-aware.
 */
export default function ProjectArchitecture({ architecture, className = "" }: Props) {
  const { nodes, edges, title } = architecture;
  if (nodes.length === 0) return null;

  const w = 720;
  const h = 120;
  const padX = 48;
  const usable = w - padX * 2;
  const step = nodes.length > 1 ? usable / (nodes.length - 1) : 0;

  const positions = new Map(
    nodes.map((n, i) => [
      n.id,
      { x: padX + i * step, y: h / 2, label: n.label },
    ]),
  );

  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-card-border bg-card/50 p-4 sm:p-6 ${className}`}
    >
      <figcaption className="mb-4 flex items-center justify-between gap-2">
        <span className="font-mono text-xs text-accent">$ diagram architecture</span>
        <span className="font-mono text-[11px] text-muted">{title}</span>
      </figcaption>

      {/* Mobile: stacked list (SVG can be cramped on narrow screens) */}
      <ol className="flex flex-col gap-2 sm:hidden">
        {nodes.map((n, i) => (
          <li
            key={n.id}
            className="arch-node flex items-center gap-3 rounded-lg border border-card-border bg-background/70 px-3 py-2.5 font-mono text-xs text-foreground"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/15 text-[10px] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{n.label}</span>
            {i < nodes.length - 1 && (
              <span className="ml-auto text-muted" aria-hidden>
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal SVG flow */}
      <div className="hidden sm:block">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="arch-svg h-auto w-full"
          role="img"
          aria-label={title}
        >
          <defs>
            <linearGradient id="arch-edge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.35" />
            </linearGradient>
            <filter id="arch-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {edges.map((e) => {
            const a = positions.get(e.from);
            const b = positions.get(e.to);
            if (!a || !b) return null;
            return (
              <g key={`${e.from}-${e.to}`}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="url(#arch-edge)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="arch-edge"
                />
                {/* pulse dot along edge */}
                <circle r="3" fill="var(--accent)" className="arch-pulse" filter="url(#arch-glow)">
                  <animateMotion
                    dur="2.8s"
                    repeatCount="indefinite"
                    path={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
                  />
                </circle>
              </g>
            );
          })}

          {nodes.map((n, i) => {
            const p = positions.get(n.id);
            if (!p) return null;
            return (
              <g key={n.id} className="arch-node-svg" style={{ animationDelay: `${i * 90}ms` }}>
                <rect
                  x={p.x - 52}
                  y={p.y - 22}
                  width={104}
                  height={44}
                  rx={10}
                  fill="var(--card)"
                  stroke="var(--card-border)"
                  strokeWidth="1.5"
                />
                <rect
                  x={p.x - 52}
                  y={p.y - 22}
                  width={104}
                  height={44}
                  rx={10}
                  fill="var(--accent)"
                  fillOpacity="0.06"
                />
                <text
                  x={p.x}
                  y={p.y + 4}
                  textAnchor="middle"
                  fill="var(--foreground)"
                  fontSize="11"
                  fontFamily="var(--font-mono), ui-monospace, monospace"
                >
                  {n.label.length > 14 ? `${n.label.slice(0, 13)}…` : n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
}
