/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/project/:path*",
        destination: `https://mta-alerts-tracker.vercel.app/projects/:path*`, // Proxy to blog app
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
