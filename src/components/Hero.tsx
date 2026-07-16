import { site } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center px-5 pb-20 pt-28 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/60 px-3 py-1 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          available for opportunities
        </div>

        <p className="animate-fade-up delay-1 mb-3 font-mono text-sm text-accent">
          $ whoami
        </p>

        <h1 className="animate-fade-up delay-1 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="glow-text text-accent">{site.name}</span>
          <br />
          <span className="text-foreground/90">{site.role}</span>
        </h1>

        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {site.tagline}{" "}
          <span className="text-foreground/80">
            Multi-agent systems, high-performance RAG, and frontier LLM
            productization — from Bangladesh to global scale.
          </span>
        </p>

        {/* Terminal window */}
        <div className="animate-fade-up delay-3 glow-border mt-10 max-w-2xl overflow-hidden rounded-xl border border-card-border bg-card">
          <div className="flex items-center gap-2 border-b border-card-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
            <span className="ml-2 font-mono text-[11px] text-muted">
              shell — zsh
            </span>
          </div>
          <div className="space-y-2 p-4 font-mono text-sm leading-relaxed">
            <p>
              <span className="text-accent-2">→</span>{" "}
              <span className="text-muted">roles</span>
            </p>
            <p className="pl-4 text-foreground/90">
              coo @ craftly · founder &amp; ceo @ aeitron ai
            </p>
            <p>
              <span className="text-accent-2">→</span>{" "}
              <span className="text-muted">focus</span>
            </p>
            <p className="pl-4 text-foreground/90">
              multi-agent · memory · rag · cybersecurity intelligence
            </p>
            <p className="terminal-cursor text-accent">
              <span className="text-accent-2">→</span>{" "}
              <span className="text-muted">_</span>
            </p>
          </div>
        </div>

        <div className="animate-fade-up delay-4 mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-medium text-background transition hover:brightness-110"
          >
            view projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-card-border bg-card px-5 py-2.5 font-mono text-sm text-foreground transition hover:border-accent/40 hover:text-accent"
          >
            get in touch
          </a>
          <div className="ml-0 flex gap-3 sm:ml-2">
            {Object.entries(site.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted underline-offset-4 transition hover:text-accent hover:underline"
              >
                {key}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
