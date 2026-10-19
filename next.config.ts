import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted anywhere (Vercel, Netlify, S3, Nginx...).
  // Remove `output` if you later need server features (API routes, ISR).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
