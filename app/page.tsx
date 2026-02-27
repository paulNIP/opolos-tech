'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { IntlProvider } from 'next-intl'
import { i18n, type Locale, regionLanguageMap } from '@/i18n.config'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { Press } from '@/components/press'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Process } from '@/components/process'
import enMessages from '@/messages/en.json'
import esMessages from '@/messages/es.json'
import frMessages from '@/messages/fr.json'
import deMessages from '@/messages/de.json'
import zhMessages from '@/messages/zh.json'
import ptMessages from '@/messages/pt.json'
import jaMessages from '@/messages/ja.json'

const messages: Record<Locale, any> = {
  en: enMessages,
  es: esMessages,
  fr: frMessages,
  de: deMessages,
  zh: zhMessages,
  pt: ptMessages,
  ja: jaMessages,
}

function PageContent({ currentLanguage, onLanguageChange }: { currentLanguage: Locale; onLanguageChange: (lang: Locale) => void }) {
  return (
    <IntlProvider messages={messages[currentLanguage]} locale={currentLanguage}>
      <div className="min-h-screen flex flex-col">
        <Navbar currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
        <main className="flex-1">
          <Hero />
          <About />
          <Products />
          <Process />
          <Press />
          <Contact />
        </main>
        <Footer />
      </div>
    </IntlProvider>
  )
}

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<Locale>('en')
  const [isClient, setIsClient] = useState(false)
  const [isDetecting, setIsDetecting] = useState(true)

  useEffect(() => {
    setIsClient(true)

    // Check if user has a saved preference
    const saved = localStorage.getItem('preferred-language')
    if (saved && i18n.locales.includes(saved as Locale)) {
      setCurrentLanguage(saved as Locale)
      setIsDetecting(false)
      return
    }

    // Try to detect from browser language
    const browserLang = navigator.language.split('-')[0].toUpperCase()
    const langMap: Record<string, Locale> = {
      'EN': 'en',
      'ES': 'es',
      'FR': 'fr',
      'DE': 'de',
      'ZH': 'zh',
      'PT': 'pt',
      'JA': 'ja',
    }

    if (langMap[browserLang]) {
      setCurrentLanguage(langMap[browserLang])
      setIsDetecting(false)
      return
    }

    // Try geolocation
    async function detectByLocation() {
      try {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                const { latitude, longitude } = position.coords
                const response = await fetch(
                  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                )
                const data = await response.json()
                const country = data.address?.country_code?.toUpperCase()

                if (country && regionLanguageMap[country]) {
                  setCurrentLanguage(regionLanguageMap[country])
                }
              } catch {
                console.log('[v0] Geolocation detection failed')
              }
              setIsDetecting(false)
            },
            () => {
              // Try IP geolocation
              tryIPGeolocation()
            }
          )
        } else {
          tryIPGeolocation()
        }
      } catch {
        setIsDetecting(false)
      }
    }

    async function tryIPGeolocation() {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        const country = data.country_code?.toUpperCase()

        if (country && regionLanguageMap[country]) {
          setCurrentLanguage(regionLanguageMap[country])
        }
      } catch {
        console.log('[v0] IP geolocation detection failed')
      }
      setIsDetecting(false)
    }

    detectByLocation()
  }, [])

  const handleLanguageChange = (lang: Locale) => {
    setCurrentLanguage(lang)
    localStorage.setItem('preferred-language', lang)
  }

  if (!isClient) {
    return null
  }

  return (
    <PageContent currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
  )
}
