"use client";

import { useEffect, useState } from "react";

/** Thin accent bar at the top that tracks page scroll depth. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const next = max > 0 ? (window.scrollY / max) * 100 : 0;
        setProgress(Math.min(100, Math.max(0, next)));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-transparent"
      aria-hidden
    >
      <div
        className="scroll-progress-bar h-full origin-left bg-gradient-to-r from-accent via-accent-2 to-accent shadow-[0_0_12px_var(--accent-dim)]"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
