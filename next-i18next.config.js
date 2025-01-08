/** @type {import('next-i18next').UserConfig} */

// @ts-expect-error path is imported with require
const path = require('path')

module.exports = {
    i18n: {
        locales: ['en-US', 'fr'],
        defaultLocale: 'fr',
        localeDetection:false,
    },
    fallbackLng: {
        default: ['en-US'],
        'fr': ['en-US'],
        'en-US': ['fr'],
        nonExplicitSupportedLngs: true,
    },
    // @ts-expect-error path is not typed
    localePath: path.resolve('./public/locales')
  }