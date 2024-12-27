/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/project/:path*",
        destination: "https://mta-alerts-tracker.vercel.app/project/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/project/:path*",
        destination: "https://mta-alerts-tracker.vercel.app/project/:path*", // Proxy to blog app
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
