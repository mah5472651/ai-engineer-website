import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  experience,
  getExperienceBySlug,
  site,
} from "@/data/portfolio";
import { buildPageMetadata, experienceJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getExperienceBySlug(slug);
  if (!role) return { title: "Experience not found" };
  return buildPageMetadata({
    title: role.pageTitle,
    description: role.summary,
    path: `/experience/${role.slug}`,
    keywords: [
      role.company,
      role.role,
      ...role.focusAreas.slice(0, 6),
      site.name,
      "AI Engineer",
    ],
  });
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const role = getExperienceBySlug(slug);
  if (!role) {
    notFound();
  }

  const otherRoles = experience.filter((e) => e.slug !== role.slug);
  const jsonLd = experienceJsonLd(role);

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="border-b border-card-border px-4 pb-10 pt-24 sm:px-8 sm:pb-16 sm:pt-28">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/#experience"
              className="inline-flex min-h-11 items-center font-mono text-xs text-muted transition hover:text-accent"
            >
              ← all experience
            </Link>

            <p className="mt-4 font-mono text-xs text-accent break-all sm:mt-6">
              $ cat experience/{role.slug}.md
            </p>
            <p className="mt-2 font-mono text-xs text-muted">
              {role.period} · {role.location}
            </p>

            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground break-words sm:text-4xl lg:text-5xl">
              {role.pageTitle}
            </h1>
            <p className="mt-3 text-lg font-medium text-accent sm:text-xl">
              {role.headline}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
              {role.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {role.focusAreas.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-card-border bg-card px-2.5 py-1 font-mono text-[11px] text-accent-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
              <Link
                href="/#contact"
                className="inline-flex min-h-11 items-center rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-accent transition hover:bg-accent/20"
              >
                discuss this role
              </Link>
              <Link
                href="/#experience"
                className="inline-flex min-h-11 items-center rounded-lg border border-card-border bg-card px-4 py-2.5 text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                ← timeline
              </Link>
            </div>
          </div>
        </header>

        <article className="px-4 py-10 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-10 sm:space-y-14">
            <section className="space-y-4">
              <h2 className="font-mono text-sm text-accent">$ cat overview.md</h2>
              <div className="rounded-2xl border border-card-border bg-card/40 p-5 sm:p-8">
                <div className="space-y-4">
                  {role.overview.map((p) => (
                    <p
                      key={p.slice(0, 48)}
                      className="text-sm leading-relaxed text-muted sm:text-base"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-5 font-mono text-sm text-accent">
                $ ls responsibilities/
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {role.responsibilities.map((item) => (
                  <li
                    key={item.title}
                    className="card-lift rounded-xl border border-card-border bg-card/50 p-5"
                  >
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-5 font-mono text-sm text-accent">
                $ cat contributions.log
              </h2>
              <ul className="space-y-3">
                {role.contributions.map((item, i) => (
                  <li
                    key={item}
                    className="card-lift flex gap-3 rounded-xl border border-card-border bg-card/50 p-4 text-sm leading-relaxed text-muted sm:p-5 sm:text-base"
                  >
                    <span className="shrink-0 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-mono text-sm text-accent">
                $ ls focus-areas/
              </h2>
              <div className="flex flex-wrap gap-2">
                {role.focusAreas.map((tag) => (
                  <span
                    key={tag}
                    className="chip-pop rounded-lg border border-card-border bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-6 sm:space-y-8">
              <div className="rounded-2xl border border-card-border bg-card/40 p-5 sm:p-8">
                <h2 className="font-mono text-sm text-accent">$ cat vision.md</h2>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  Vision
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {role.vision}
                </p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card/40 p-5 sm:p-8">
                <h2 className="font-mono text-sm text-accent">$ cat journey.md</h2>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  My Journey at {role.company}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {role.journey}
                </p>
              </div>
            </section>

            <section className="glow-border rounded-2xl border border-card-border bg-card p-5 sm:p-8">
              <p className="font-mono text-xs text-accent">
                $ echo &quot;want to collaborate?&quot;
              </p>
              <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                Let&apos;s talk operations and production AI.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                Open to collaborations, partnerships, and high-impact builds.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
                <Link
                  href="/#contact"
                  className="btn-glow inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-2.5 font-medium text-background"
                >
                  get in touch
                </Link>
                <Link
                  href="/#experience"
                  className="inline-flex min-h-11 items-center rounded-lg border border-card-border px-5 py-2.5 text-muted transition hover:border-accent/40 hover:text-accent"
                >
                  ← back to experience
                </Link>
              </div>
            </section>

            {otherRoles.length > 0 && (
              <section>
                <h2 className="mb-4 font-mono text-sm text-accent">
                  $ ls ../other-roles/
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {otherRoles.map((e) => (
                    <li key={e.slug}>
                      <Link
                        href={`/experience/${e.slug}`}
                        className="card-lift group block rounded-xl border border-card-border bg-card/40 p-4"
                      >
                        <p className="font-mono text-[10px] text-muted">
                          {e.period}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground break-words group-hover:text-accent">
                          {e.role} · {e.company}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs text-muted">
                          {e.summary}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
