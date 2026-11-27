import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives inside another project's folder; pin the workspace root to it.
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
