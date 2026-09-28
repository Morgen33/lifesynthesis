import type { NextConfig } from "next";
import path from "node:path";

const retiredRoutes: Record<string, string> = {
  "/vision": "/",
  "/about": "/",
  "/news": "/",
  "/lifepod": "/ecosystem/lifepod",
  "/lifehouse": "/ecosystem/lifehouse",
  "/lifefarms": "/ecosystem/lifefarms",
  "/communities": "/ecosystem/communities",
  "/technology": "/ecosystem",
  "/research": "/ecosystem",
  "/partnerships": "/contact?intent=partner",
};

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return Object.entries(retiredRoutes).map(([source, destination]) => ({
      source,
      destination,
      permanent: false,
    }));
  },
};

export default nextConfig;
