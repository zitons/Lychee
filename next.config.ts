/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-01
 * @FilePath: /AisCai-Lab/next.config.ts
 * Helllllloo
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "137.184.36.245",
        // port: '8000',
        // pathname: '/media/**',
        search: "",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
