import type { MetadataRoute } from "next";
import { ecosystem, ecosystemPagesLive } from "@/content/ecosystem";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lifesynthesis.com";
  const paths = [
    "",
    "/ecosystem",
    ...(ecosystemPagesLive ? ecosystem.map((item) => `/ecosystem/${item.slug}`) : []),
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
