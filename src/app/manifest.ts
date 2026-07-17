import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} · ${site.role}`,
    short_name: site.name,
    description: site.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#050508",
    theme_color: "#00e5a8",
    lang: "en",
    categories: ["portfolio", "technology", "business"],
  };
}
