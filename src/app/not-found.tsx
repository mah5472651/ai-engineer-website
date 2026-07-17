import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center px-5 py-28 text-center sm:px-8"
      >
        <p className="font-mono text-sm text-accent">$ cat 404.log</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted">
          That route does not exist — or the slug moved. Head home and try
          another path.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-medium text-background transition hover:brightness-110"
          >
            go home
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-card-border bg-card px-5 py-2.5 font-mono text-sm text-foreground transition hover:border-accent/40 hover:text-accent"
          >
            blog
          </Link>
          <Link
            href="/#projects"
            className="rounded-lg border border-card-border bg-card px-5 py-2.5 font-mono text-sm text-foreground transition hover:border-accent/40 hover:text-accent"
          >
            projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
