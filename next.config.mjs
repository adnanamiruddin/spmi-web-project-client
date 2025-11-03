/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "66.42.60.252",
        port: "8000",
      },
    ],
  },
};

export default nextConfig;
