import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",   // IMPORTANT for standalone build
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: '/about', destination: '/it-outsourcing-agency-pune', permanent: true },
      { source: '/blogs', destination: '/software-industry-blog', permanent: true },
      { source: '/portfolio', destination: '/web-development-portfolio', permanent: true },
      { source: '/services', destination: '/software-development-services-pune', permanent: true },
      { source: '/hire-software-developers-pune', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
