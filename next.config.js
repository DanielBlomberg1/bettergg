/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: ["ddragon.leagueoflegends.com"],
  },
  // add @components alias
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(__dirname, "/components");
    config.resolve.alias["@styles"] = path.join(__dirname, "/styles");
    config.resolve.alias["@utils"] = path.join(__dirname, "/utils");
    return config;
  },
  reactStrictMode: true,
  env: {
    HOSTED_AT: process.env.HOSTED_AT,
  },
  swcMinify: true,
};

module.exports = nextConfig;
