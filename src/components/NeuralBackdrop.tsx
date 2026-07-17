/**
 * Ambient AI backdrop — soft orbs (static on mobile; light drift on desktop).
 * Decorative only; motion gated via CSS prefers-reduced-motion.
 * Server component: no client JS cost.
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
