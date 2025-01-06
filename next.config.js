/**
 * @type {import('next').NextConfig}
 */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  publicExcludes: ["!resume.pdf"],
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "imgur.com",
      "i.imgur.com",
      "activity-graph.herokuapp.com",
      "i.scdn.co", // images from spotify
      "scontent.cdninstagram.com", // instagram media
      "www.shutterstock.com",
      "www.pngkey.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
});
