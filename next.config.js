/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: ["ddragon.leagueoflegends.com"],
  },
  reactStrictMode: true,
  env: {
    HOSTED_AT: process.env.HOSTED_AT,
  },
  swcMinify: true,
};

module.exports = nextConfig;
