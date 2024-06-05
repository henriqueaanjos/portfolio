/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [
      'resend',
      '@react-email/components',
      '@react-email/render',
      '@react-email/tailwind'
    ]
  },
}
// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig
