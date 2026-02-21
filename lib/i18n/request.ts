import { getRequestConfig } from 'next-intl/server'
import { i18n, type Locale } from '@/i18n.config'

async function getLocaleFromRequest() {
  // Get from headers or URL
  const locales = i18n.locales
  return locales[0] as Locale
}

export default getRequestConfig(async () => {
  const locale = await getLocaleFromRequest()
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  }
})
