import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      { source: '/careers', destination: '/it-jobs-pune', permanent: true },
      { source: '/case-studies', destination: '/web-development-case-studies', permanent: true },
      { source: '/contact', destination: '/hire-software-developers-pune', permanent: true },
      { source: '/industries', destination: '/it-solutions-industries', permanent: true },
      { source: '/portfolio', destination: '/web-development-portfolio', permanent: true },
      { source: '/process', destination: '/agile-software-development-process', permanent: true },
      { source: '/services', destination: '/software-development-services-pune', permanent: true },
      { source: '/technologies', destination: '/mern-stack-development-company', permanent: true },
    ];
  },
};

export default nextConfig;
