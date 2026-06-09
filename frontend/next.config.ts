import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 100],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Explicitly set the outputFileTracingRoot to the workspace root
  // to avoid Next.js inferring a different workspace when multiple
  // lockfiles exist. This does not change app appearance.
  outputFileTracingRoot: path.resolve(__dirname, ".."),
};

export default nextConfig;
