'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { i18n, type Locale } from '@/i18n.config'

interface NavbarProps {
  currentLanguage: Locale
  onLanguageChange: (lang: Locale) => void
}

export function Navbar({ currentLanguage, onLanguageChange }: NavbarProps) {
  const t = useTranslations()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
            <span className="font-bold text-lg text-gray-900">create</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              {t('nav.about')}
            </a>
            <a href="#products" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              {t('nav.products')}
            </a>
            <a href="#press" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              {t('nav.press')}
            </a>
            <a href="#careers" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              {t('nav.careers')}
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
            >
              <span>{currentLanguage.toUpperCase()}</span>
              <ChevronDown size={16} />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
                {i18n.locales.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      onLanguageChange(lang)
                      setIsLanguageOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition ${
                      currentLanguage === lang
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
