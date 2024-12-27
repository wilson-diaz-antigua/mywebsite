/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/:path*",
        destination: `http://localhost:3000/blog/:path*`, // Proxy to blog app
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
