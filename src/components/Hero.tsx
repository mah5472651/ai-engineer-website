import { site } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="animate-fade-up mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-card-border bg-card/60 px-3 py-1 font-mono text-[11px] text-muted sm:mb-6 sm:text-xs">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          available for opportunities
        </div>

        <p className="animate-fade-up delay-1 mb-3 font-mono text-sm text-accent">
          $ whoami
        </p>

        <h1 className="animate-fade-up delay-1 max-w-3xl text-[2rem] font-semibold leading-tight tracking-tight text-foreground sm:text-6xl sm:leading-none lg:text-7xl">
          <span className="glow-text text-accent">{site.name}</span>
          <br />
          <span className="text-foreground/90">{site.role}</span>
        </h1>

        <p className="animate-fade-up delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-xl">
          {site.tagline}{" "}
          <span className="text-foreground/80">{site.heroExtra}</span>
        </p>

        {/* Terminal window */}
        <div className="animate-fade-up delay-3 glow-border mt-8 max-w-2xl overflow-hidden rounded-xl border border-card-border bg-card sm:mt-10">
          <div className="flex items-center gap-2 border-b border-card-border px-3 py-2.5 sm:px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/80" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" aria-hidden />
            <span className="ml-2 font-mono text-[11px] text-muted">
              shell — zsh
            </span>
          </div>
          <div className="space-y-2 overflow-x-auto p-3 font-mono text-xs leading-relaxed sm:p-4 sm:text-sm">
            <p>
              <span className="text-accent-2">→</span>{" "}
              <span className="text-muted">roles</span>
            </p>
            <p className="pl-4 break-words text-foreground/90">{site.heroRoles}</p>
            <p>
              <span className="text-accent-2">→</span>{" "}
              <span className="text-muted">focus</span>
            </p>
            <p className="pl-4 break-words text-foreground/90">{site.heroFocus}</p>
            <p className="terminal-cursor text-accent" aria-hidden>
              <span className="text-accent-2">→</span>{" "}
              <span className="text-muted">_</span>
            </p>
          </div>
        </div>

        <div className="animate-fade-up delay-4 mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-medium text-background transition hover:brightness-110"
          >
            view projects
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-lg border border-card-border bg-card px-5 py-2.5 font-mono text-sm text-foreground transition hover:border-accent/40 hover:text-accent"
          >
            get in touch
          </a>
          <div className="flex w-full flex-wrap gap-x-4 gap-y-2 sm:ml-2 sm:w-auto">
            {Object.entries(site.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-mono text-xs text-muted underline-offset-4 transition hover:text-accent hover:underline"
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
