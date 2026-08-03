import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 92, 100],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/pencil-booking-gcash",
        destination: "/blog/barnabas-system-study",
        permanent: true,
      },
      {
        source: "/blog/barnabas-scheduling",
        destination: "/blog/barnabas-system-study",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
