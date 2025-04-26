/** @type {import('next').NextConfig} */
const nextConfig = {
  // シンプルな設定に戻す
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  }
};

module.exports = nextConfig;
