/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/services/:path*",
        destination: process.env.NEXT_PUBLIC_BACKEND_URL + ":path*",
      },
    ];
  },
};

export default nextConfig;
