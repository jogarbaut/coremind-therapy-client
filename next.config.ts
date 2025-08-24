import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(`https://methodical-bell-74e5631a7a.media.strapiapp.com/**`),
    ],
  },
}

export default nextConfig
