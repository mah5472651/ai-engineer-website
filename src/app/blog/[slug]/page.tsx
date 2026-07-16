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
  return {
    title: `${post.title} · ${site.name}`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 px-5 pb-24 pt-28 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="font-mono text-xs text-muted transition hover:text-accent"
          >
            ← back to blog
          </Link>

          <header className="mt-6 border-b border-card-border pb-8">
            <p className="font-mono text-xs text-muted">
              {formatPostDate(post.date)} · {post.readingMinutes} min read
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-lg text-muted">{post.description}</p>
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

          <div className="mt-10">
            <Markdown content={post.body.trim()} />
          </div>

          <footer className="mt-16 rounded-xl border border-card-border bg-card/50 p-6">
            <p className="font-mono text-xs text-accent">$ echo &quot;thanks for reading&quot;</p>
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
