/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/meloscoutapp/',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
}

module.exports = nextConfig
