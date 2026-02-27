import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { hostname: "images2.imgbox.com", pathname: "**" },
      { hostname: "play-lh.googleusercontent.com", pathname: "**" },
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
