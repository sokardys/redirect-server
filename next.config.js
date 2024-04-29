/** @type {import('next').NextConfig} */

const TO_URI = process.env.TO_URI;
const ALL_TO_URI= process.env.ALL_TO_URI;
const FIXED_URIS= JSON.parse(process.env.FIXED_URIS || '{}');

const getToURI = () => {
  if (TO_URI) {
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
  return [];
}

const getAllToURI = () => {
  if (ALL_TO_URI) {
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
  return [];
}

const fixedUris = () =>
  Object.entries(FIXED_URIS).map(([key, value]) => {
    return {
      source: key,
      destination: value,
      permanent: true
    }
  });

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  redirects: async () => {

    const routes = [
      ...fixedUris(),
      ...getToURI(),
      ...getAllToURI(),
    ]

    console.log('>>>> Redirects:', routes);
    return routes;
  },
}

module.exports = nextConfig
