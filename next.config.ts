import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.yemak.uz",
      },
    ],
  },
};

module.exports = nextConfig

export default nextConfig;
