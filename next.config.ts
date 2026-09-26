import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cloud-knowledge",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;