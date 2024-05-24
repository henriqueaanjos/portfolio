/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}
// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig
