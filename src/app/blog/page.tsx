import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { formatPostDate, getAllPosts } from "@/data/blog";
import { site } from "@/data/portfolio";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description: `Writing on ML systems, RAG, agents, evals, and production AI by ${site.name}.`,
  path: "/blog",
  keywords: [
    "AI blog",
    "RAG",
    "LLM evaluation",
    "MLOps",
    "fine-tuning",
    site.name,
  ],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex-1 px-4 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28"
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 font-mono text-sm text-accent">$ ls blog/</p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Blog
          </h1>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Notes on evaluation, retrieval, fine-tuning, and shipping ML
            systems.
          </p>

          <ul className="mt-10 space-y-4 sm:mt-12">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-card-border bg-card/50 p-4 transition hover:border-accent/35 sm:p-5"
                >
                  <p className="font-mono text-[11px] text-muted">
                    {formatPostDate(post.date)} · {post.readingMinutes} min
                    read
                  </p>
                  <h2 className="mt-2 text-base font-semibold leading-snug text-foreground break-words group-hover:text-accent sm:text-lg">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
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
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
