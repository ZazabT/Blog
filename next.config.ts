import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["www.w3schools.com"], // Add the allowed domains here
  },
};

export default nextConfig;
