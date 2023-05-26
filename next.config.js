/** @type {import('next').NextConfig} */

const TO_URI = process.env.TO_URI;
const ALL_TO_URI= process.env.ALL_TO_URI;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  redirects: async () => {
    if (TO_URI) {
      console.log('TO_URI');
      return [
        {
          source: '/:slug*',
          destination: `${TO_URI}/:slug*`,
          permanent: true
        },
        {
          source: '/',
          destination: `${TO_URI}/`,
          permanent: true
        }
      ]
    }
    if (ALL_TO_URI) {
      console.log('ALL_TO_URI');
      return [
        {
          source: '/:slug*',
          destination: `${ALL_TO_URI}`,
          permanent: true
        },
        {
          source: '/',
          destination: `${ALL_TO_URI}/`,
          permanent: true
        }
      ]
    }
  },
}

module.exports = nextConfig
