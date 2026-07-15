import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
