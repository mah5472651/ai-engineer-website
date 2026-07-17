import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Markdown from "@/components/Markdown";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
} from "@/data/blog";
import { site } from "@/data/portfolio";
import { blogPostingJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: [...post.tags, "AI blog", site.name],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = blogPostingJsonLd(post);

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex-1 px-4 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center font-mono text-xs text-muted transition hover:text-accent"
          >
            ← back to blog
          </Link>

          <header className="mt-4 border-b border-card-border pb-6 sm:mt-6 sm:pb-8">
            <p className="font-mono text-xs text-muted">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              {" · "}
              {post.readingMinutes} min read
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground break-words sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-base text-muted sm:text-lg">
              {post.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-card-border bg-card px-2 py-0.5 font-mono text-[11px] text-accent-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-8 sm:mt-10">
            <Markdown content={post.body.trim()} />
          </div>

          <footer className="mt-12 rounded-xl border border-card-border bg-card/50 p-5 sm:mt-16 sm:p-6">
            <p className="font-mono text-xs text-accent">
              $ echo &quot;thanks for reading&quot;
            </p>
            <p className="mt-2 text-sm text-muted">
              Want to talk systems, evals, or roles?{" "}
              <Link href="/#contact" className="text-accent hover:underline">
                Get in touch
              </Link>{" "}
              or download the{" "}
              <a
                href={site.resumeUrl}
                download
                className="text-accent hover:underline"
              >
                resume
              </a>
              .
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
