import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ka', 'en'],
  defaultLocale: 'ka',
  localePrefix: 'always', // every URL is explicit: /ka/... and /en/...
  localeDetection: false, // don't redirect based on browser language
})