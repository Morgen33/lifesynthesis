import type { MetadataRoute } from "next";
import { ecosystem } from "@/content/ecosystem";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lifesynthesis.com";
  const paths = [
    "",
    "/ecosystem",
    ...ecosystem.map((item) => `/ecosystem/${item.slug}`),
    "/contact",
    "/privacy",
    "/terms",
    "/intellectual-property",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
