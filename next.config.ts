import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://192.168.31.91:3000",
    "http://192.168.31.91",
    "192.168.31.91"
  ]
};

export default nextConfig;
