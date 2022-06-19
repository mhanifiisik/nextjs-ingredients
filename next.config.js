/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  webpack5: true,
  wepback: (config) => {
    config.resolve.falback = { fs: false };
    return config;
  },
  images: {
    domains: ["spoonacular.com"],
  },
};
