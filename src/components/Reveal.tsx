"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { debug } from "@/lib/debug";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      debug("Reveal: reduced-motion → instant visible", id ?? variant);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          debug("Reveal: visible", id ?? variant);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, id, variant]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal reveal-${variant}${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
