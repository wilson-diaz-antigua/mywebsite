/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/:path*",
        destination: `https://willdiaz.me/projects/:path*`, // Proxy to blog app
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
