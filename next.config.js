/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercelでのデプロイ用の設定
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: process.env.VERCEL_ENV === 'production' ? false : true,
    domains: [],
    remotePatterns: [],
  },
};

module.exports = nextConfig;
