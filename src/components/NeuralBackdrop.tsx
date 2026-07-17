"use client";

/**
 * Ambient AI backdrop — soft orbs + faint grid pulse.
 * Decorative only; disabled under prefers-reduced-motion.
 */
export default function NeuralBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="neural-orb neural-orb-a" />
      <div className="neural-orb neural-orb-b" />
      <div className="neural-orb neural-orb-c" />
      <div className="neural-scanline" />
    </div>
  );
}
