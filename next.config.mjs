/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/project",
        destination: `willdiaz.me/project`,
      },
      {
        source: "/project/:path+",
        destination: `willdiaz.me/project/:path+`,
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
