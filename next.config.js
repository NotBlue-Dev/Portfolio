/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require('./next-i18next.config')

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  publicExcludes: ["!resume.pdf"],
});

module.exports = withPWA({
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      "imgur.com",
      "i.imgur.com",
      "activity-graph.herokuapp.com",
      "i.scdn.co", // images from spotify
      "scontent.cdninstagram.com", // instagram media
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
});
