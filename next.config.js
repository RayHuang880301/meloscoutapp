/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/meloscoutapp',
  assetPrefix: '/meloscoutapp/',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
}

module.exports = nextConfig
