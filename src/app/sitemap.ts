import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lifesynthesis.com";
  const paths = [
    "",
    "/vision",
    "/lifepod",
    "/lifehouse",
    "/lifefarms",
    "/technology",
    "/communities",
    "/partnerships",
    "/research",
    "/about",
    "/contact",
    "/news",
    "/privacy",
    "/terms",
    "/intellectual-property",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
