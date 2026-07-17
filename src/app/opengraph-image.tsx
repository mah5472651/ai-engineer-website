import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic OG image for LinkedIn / X / Slack previews.
 */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050508",
          backgroundImage:
            "linear-gradient(to right, #12161f 1px, transparent 1px), linear-gradient(to bottom, #12161f 1px, transparent 1px), radial-gradient(ellipse 70% 50% at 20% 0%, #00e5a822, transparent), radial-gradient(ellipse 50% 40% at 90% 80%, #38bdf815, transparent)",
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          padding: "56px 64px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#00e5a8",
            fontSize: 22,
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#00e5a8",
              boxShadow: "0 0 16px #00e5a8",
            }}
          />
          LIVE · AI Engineer Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#00e5a8",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#e8edf5",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#8b95a8",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8b95a8",
            fontSize: 20,
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span>multi-agent · RAG · cybersecurity LLM</span>
          <span style={{ color: "#00e5a8" }}>{site.location}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
