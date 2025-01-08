/** @type {import('next-i18next').UserConfig} */

import path from 'path';

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
    localePath: path.resolve('./public/locales')
  }