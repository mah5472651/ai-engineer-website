import { site } from "@/data/portfolio";

const socialEntries = Object.entries(site.social).filter(
  ([key]) => key !== "whatsapp",
);

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28"
    >
      {/* Soft ambient glow — decorative only */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="hero-orb absolute left-1/2 top-0 h-[28rem] w-[min(100%,42rem)] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="hero-orb hero-orb-delay absolute bottom-10 right-0 h-64 w-64 rounded-full bg-accent-2/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
        {/* ── Left: identity ── */}
        <div className="min-w-0">
          <div className="animate-fade-up mb-6 flex flex-wrap items-center gap-2">
            <span className="hero-status inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-accent sm:text-xs">
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
                <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              </span>
              LIVE
              <span className="text-accent/50" aria-hidden>
                ·
              </span>
              <span className="text-foreground/80">open to work</span>
            </span>
            <span className="inline-flex items-center rounded-full border border-card-border bg-card/70 px-3 py-1.5 font-mono text-[11px] text-muted sm:text-xs">
              {site.location}
            </span>
          </div>

          <p className="animate-fade-up delay-1 mb-3 font-mono text-xs text-accent sm:text-sm">
            <span className="text-muted">$</span> whoami
          </p>

          <h1 className="animate-fade-up delay-1 max-w-xl text-[2.15rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl">
            <span className="glow-text block text-accent">{site.name}</span>
            <span className="mt-1 block text-foreground/90">{site.role}</span>
          </h1>

          <p className="animate-fade-up delay-2 mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-lg">
            <span className="text-foreground/85">{site.tagline}</span>{" "}
            {site.heroExtra}
          </p>

          <div className="animate-fade-up delay-3 mt-8 flex flex-col gap-5 sm:mt-10">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-glow inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-medium text-background shadow-[0_0_24px_-6px_var(--accent-dim)]"
              >
                view projects
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-card-border bg-card/80 px-5 py-2.5 font-mono text-sm text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                get in touch
              </a>
              <a
                href={site.resumeUrl}
                download
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-transparent px-3 py-2.5 font-mono text-sm text-muted transition hover:text-accent sm:px-4"
              >
                resume.pdf ↓
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 border-t border-card-border/80 pt-5">
              <span className="mr-1 font-mono text-[10px] uppercase tracking-wider text-muted/80">
                connect
              </span>
              {socialEntries.map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip-pop inline-flex min-h-9 items-center rounded-md border border-card-border bg-card/50 px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {key}
                </a>
              ))}
              <a
                href={site.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="chip-pop inline-flex min-h-9 items-center rounded-md border border-card-border bg-card/50 px-3 py-1.5 font-mono text-xs text-muted"
                aria-label="WhatsApp"
              >
                whatsapp
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: terminal card ── */}
        <div className="animate-fade-up delay-2 min-w-0 lg:justify-self-end">
          <div className="terminal-panel glow-border relative w-full max-w-xl overflow-hidden rounded-2xl border border-card-border bg-card/90 shadow-2xl backdrop-blur-sm lg:max-w-none">
            <div className="flex items-center gap-3 border-b border-card-border px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-danger/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/85" />
              </div>
              <div className="min-w-0 flex-1 truncate text-center font-mono text-[11px] text-muted">
                mahmud@aeitron — zsh
              </div>
              <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                online
              </span>
            </div>

            <div className="space-y-3 p-4 font-mono text-[12px] leading-relaxed sm:p-5 sm:text-[13px]">
              <p className="text-muted">
                <span className="text-accent">➜</span>{" "}
                <span className="text-accent-2">~</span> cat profile.json
              </p>

              <pre className="overflow-x-auto rounded-lg border border-card-border/80 bg-background/60 p-3 text-[11px] leading-6 text-foreground/90 sm:p-4 sm:text-xs">
                <code>
                  <span className="text-muted">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-accent-2">&quot;name&quot;</span>
                  <span className="text-muted">: </span>
                  <span className="text-accent">&quot;{site.name}&quot;</span>
                  <span className="text-muted">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-accent-2">&quot;role&quot;</span>
                  <span className="text-muted">: </span>
                  <span className="text-accent">&quot;{site.role}&quot;</span>
                  <span className="text-muted">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-accent-2">&quot;roles&quot;</span>
                  <span className="text-muted">: </span>
                  <span className="text-accent">&quot;{site.heroRoles}&quot;</span>
                  <span className="text-muted">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-accent-2">&quot;focus&quot;</span>
                  <span className="text-muted">: </span>
                  <span className="text-accent">&quot;{site.heroFocus}&quot;</span>
                  <span className="text-muted">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-accent-2">&quot;status&quot;</span>
                  <span className="text-muted">: </span>
                  <span className="text-accent">&quot;available&quot;</span>
                  {"\n"}
                  <span className="text-muted">{"}"}</span>
                </code>
              </pre>

              <p className="text-muted">
                <span className="text-accent">➜</span>{" "}
                <span className="text-accent-2">~</span>{" "}
                <span className="terminal-cursor text-foreground/70">_</span>
              </p>
            </div>
          </div>

          <p className="mt-3 hidden text-center font-mono text-[10px] text-muted/70 lg:block">
            production AI · agents · RAG · cybersecurity
          </p>
        </div>
      </div>

      {/* Soft scroll cue — desktop only, respects reduced motion via CSS */}
      <a
        href="#about"
        className="scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[10px] tracking-wider text-muted/70 transition hover:text-accent sm:flex"
        aria-label="Scroll to about section"
      >
        <span>scroll</span>
        <span className="scroll-cue-line block h-6 w-px bg-gradient-to-b from-accent/60 to-transparent" aria-hidden />
      </a>
    </section>
  );
}
