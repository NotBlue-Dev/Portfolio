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

process.on('unhandledRejection', error => {
	console.log('unhandledRejection', error);
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
    formats: ['image/webp', 'image/avif'],  
  },
  typescript: {
    ignoreBuildErrors: false,
  },
});
