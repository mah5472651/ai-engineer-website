"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

type Variant = "up" | "down" | "left" | "right" | "scale" | "fade";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Stagger delay in ms */
  delay?: number;
  variant?: Variant;
  /** Once visible, stay visible (default true) */
  once?: boolean;
  as?: ElementType;
  style?: CSSProperties;
};

function subscribeReducedMotion(onChange: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Scroll-triggered reveal. Pure CSS transforms + IntersectionObserver.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  id,
  delay = 0,
  variant = "up",
  once = true,
  as: Tag = "div",
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [visible, setVisible] = useState(false);
  const show = reduceMotion || visible;

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, reduceMotion]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal reveal-${variant}${show ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ ...style, transitionDelay: show ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
