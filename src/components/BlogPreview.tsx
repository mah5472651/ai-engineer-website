import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/data/blog";
import SectionHeading from "./SectionHeading";

export default function BlogPreview() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            command="ls blog/"
            title="From the blog"
            subtitle="Notes on evals, retrieval, fine-tuning, and shipping ML systems."
          />
          <Link
            href="/blog"
            className="shrink-0 font-mono text-sm text-accent transition hover:underline sm:mb-1"
          >
            view all posts →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-card-border bg-card/60 p-5 transition hover:border-accent/35"
            >
              <p className="font-mono text-[11px] text-muted">
                {formatPostDate(post.date)} · {post.readingMinutes} min
              </p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-foreground group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-background/80 px-2 py-0.5 font-mono text-[10px] text-accent-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
