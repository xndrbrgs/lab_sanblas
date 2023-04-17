/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co','cdn.sanity.io'],
  },
}

module.exports = nextConfig
