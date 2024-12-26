/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/project",
        destination: `https://willdiaz.me/project`,
      },
      {
        source: "/project/:path+",
        destination: `https://willdiaz.me/project/:path+`,
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
