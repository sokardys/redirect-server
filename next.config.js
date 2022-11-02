/** @type {import('next').NextConfig} */

const URI = process.env.TO_URI || 'http://localhost:3000';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  redirects: async () => {
    return [
      {
        source: '/:slug*',
        destination: `${URI}/:slug*`,
        permanent: true
      },
      {
        source: '/',
        destination: `${URI}/`,
        permanent: true
      }
    ]
  },
}

module.exports = nextConfig
