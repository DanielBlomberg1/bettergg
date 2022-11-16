/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: ["ddragon.leagueoflegends.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
