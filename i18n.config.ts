export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'de', 'zh', 'pt', 'ja'],
} as const

export type Locale = (typeof i18n.locales)[number]

// Region to language mapping for automatic detection
export const regionLanguageMap: Record<string, Locale> = {
  // Americas
  'US': 'en',
  'CA': 'en',
  'MX': 'es',
  'BR': 'pt',
  'AR': 'es',
  'CL': 'es',
  'CO': 'es',
  // Europe
  'GB': 'en',
  'DE': 'de',
  'FR': 'fr',
  'ES': 'es',
  'IT': 'es',
  'NL': 'en',
  'SE': 'en',
  'NO': 'en',
  'PL': 'en',
  'CH': 'de',
  'AT': 'de',
  'PT': 'pt',
  // Asia
  'CN': 'zh',
  'TW': 'zh',
  'HK': 'zh',
  'JP': 'ja',
  'KR': 'en',
  'IN': 'en',
  'SG': 'en',
  'TH': 'en',
  // Middle East & Africa
  'SA': 'en',
  'AE': 'en',
  'ZA': 'en',
  'EG': 'en',
  // Default
  'UNKNOWN': 'en',
}
