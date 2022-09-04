/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["pps.whatsapp.net"],
  },
};

module.exports = nextConfig;
