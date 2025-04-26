/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export'設定を削除してVercelで正常にデプロイできるようにする
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: [],
    remotePatterns: [],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // 静的アセットのキャッシュ制御
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  generateEtags: false,
};

module.exports = nextConfig;
