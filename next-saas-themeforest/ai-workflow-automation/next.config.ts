import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lunnoa-assets-global.s3.eu-central-1.amazonaws.com',
        pathname: '/assets/apps/**',
      },
    ],
  },
};

export default nextConfig;
