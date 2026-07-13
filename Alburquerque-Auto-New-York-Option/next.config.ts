import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Alburquerque_Auto",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;