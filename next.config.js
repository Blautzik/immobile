/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: false,
    inlineCss: true,
    useCache: true,
    reactOwnerStack: true,
    newDevOverlay: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ],
    domains: ['images.unsplash.com']
  }
};
module.exports = nextConfig