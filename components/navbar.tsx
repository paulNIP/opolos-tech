'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { i18n, type Locale } from '@/i18n.config'
import { ArrowRight } from 'lucide-react'

interface NavbarProps {
  currentLanguage: Locale
  onLanguageChange: (lang: Locale) => void
}

// Flag color mapping for each language (supporting 2-3 colors)
const flagColors: Record<Locale, { colors: string[] }> = {
  en: { colors: ['#012169', '#FFFFFF', '#C8102E'] }, // UK: Blue, White, Red
  es: { colors: ['#C60B1E', '#FFC400', '#C60B1E'] }, // Spain: Red, Gold, Red
  fr: { colors: ['#002395', '#FFFFFF', '#C1121F'] }, // France: Blue, White, Red
  de: { colors: ['#000000', '#DD0000', '#FFCE00'] }, // Germany: Black, Red, Gold
  zh: { colors: ['#DE2910', '#FFDE00'] }, // China: Red, Gold
  pt: { colors: ['#006600', '#FFFFFF', '#FF0000'] }, // Portugal: Green, White, Red
  ja: { colors: ['#BC002D', '#FFFFFF'] }, // Japan: Red, White
}

export function Navbar({ currentLanguage, onLanguageChange }: NavbarProps) {
  const t = useTranslations()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false)
  const [mobileIndustriesSublinksOpen, setMobileIndustriesSublinksOpen] = useState<string | null>(null)

  const servicesLinks = [
    { key: 'servicesSoftware', label: t('nav.servicesSoftware') },
    { key: 'servicesCohnsulting', label: t('nav.servicesCohnsulting') },
    { key: 'servicesImplementation', label: t('nav.servicesImplementation') },
    { key: 'servicesSupport', label: t('nav.servicesSupport') },
  ]

  const industriesLinks = [
    { 
      key: 'industriesAirline', 
      label: t('nav.industriesAirline'),
      sublinks: t.raw('nav.industriesAirlineSublinks') as string[]
    },
    { 
      key: 'industriesHospitality', 
      label: t('nav.industriesHospitality'),
      sublinks: t.raw('nav.industriesHospitalitySublinks') as string[]
    },
    { 
      key: 'industriesRetail', 
      label: t('nav.industriesRetail'),
      sublinks: t.raw('nav.industriesRetailSublinks') as string[]
    },
    { 
      key: 'industriesFinance', 
      label: t('nav.industriesFinance'),
      sublinks: t.raw('nav.industriesFinanceSublinks') as string[]
    },
    { 
      key: 'industriesHealthcare', 
      label: t('nav.industriesHealthcare'),
      sublinks: t.raw('nav.industriesHealthcareSublinks') as string[]
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
            <span className="font-heading text-lg text-gray-900">OPOLOS TECHNOLOGIES</span>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#about" className="px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 transition rounded">
              {t('nav.about')}
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 transition rounded"
              >
                <span>{t('nav.services')}</span>
                <ChevronDown size={16} className={`transition ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 right-0 mt-0 w-screen ml-[calc(-50vw+50%)] bg-white border-b border-gray-200 shadow-2xl py-12 px-4 sm:px-6 lg:px-8 z-40">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesLinks.map((link) => (
                      <a
                        key={link.key}
                        href={`#${link.key}`}
                        className="p-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition group/item"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="text-sm font-medium text-gray-900 group-hover/item:text-blue-600" style={{fontWeight: 500}}>
                          {link.label}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Explore this service</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 transition rounded"
              >
                <span>{t('nav.industries')}</span>
                <ChevronDown size={16} className={`transition ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isIndustriesOpen && (
                <div className="absolute left-0 right-0 mt-0 w-screen ml-[calc(-50vw+50%)] bg-white border-b border-gray-200 shadow-2xl py-12 px-4 sm:px-6 lg:px-8 z-40">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* First Column - Featured Content */}
                    <div className="lg:col-span-1">
                      <div className="p-6 text-white h-full flex flex-col justify-between">
                        <p className="text-sm font-heading text-gray-900">
                          {t('nav.explore')}</p>
                        <a
                          href={`#industriesFeatured`}
                          className="block p-3 rounded-lg transition"
                          onClick={() => {}}
                        >
                          <div className="text-sm font-heading text-gray-900 flex items-center gap-2" style={{fontWeight: 500}}>
                            {t('nav.getStarted')}  <ArrowRight size={16} color="#DC3340"/>
                          </div>
                          
                        </a>
                      </div>
                    </div>

                    {/* Grid Layout - Industry Items */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {industriesLinks.map((link) => (
                        <div key={link.key} className="space-y-3">
                          <a
                            href={`#${link.key}`}
                            className="block p-3 rounded-lg hover:text-blue-600 transition"
                            onClick={() => setIsIndustriesOpen(false)}
                          >
                            <div className="text-sm font-heading text-gray-900" style={{fontWeight: 700}}>
                              {link.label}
                            </div>
                          </a>
                          {/* Sublinks */}
                          {link.sublinks && link.sublinks.map((sublink, idx) => (
                            <a
                              key={`${link.key}-${idx}`}
                              href={`#${link.key}-${idx}`}
                              className="block text-xs text-gray-600 hover:text-blue-600 pl-3 hover:border-blue-600 transition"
                              style={{fontWeight: 500}}
                              onClick={() => setIsIndustriesOpen(false)}
                            >
                              {sublink}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#press" className="px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 transition rounded">
              {t('nav.press')}
            </a>
            <a href="#careers" className="px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 transition rounded">
              {t('nav.careers')}
            </a>
            <a href="#contact" className="px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 transition rounded">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Desktop Language Selector and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-sm font-heading text-gray-700 hover:text-blue-600 transition px-2 py-1"
              >
                {/* Country Flag Colors */}
                <div className="w-5 h-5 rounded flex overflow-hidden">
                  {flagColors[currentLanguage].colors.map((color, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: color,
                        flex: 1,
                      }}
                    />
                  ))}
                </div>
                <span>{currentLanguage.toUpperCase()}</span>
                <ChevronDown size={16} />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {i18n.locales.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        onLanguageChange(lang)
                        setIsLanguageOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition flex items-center space-x-2 ${
                        currentLanguage === lang
                          ? 'bg-blue-50 text-blue-600 font-heading'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      style={{fontWeight: currentLanguage === lang ? 700 : 500}}
                    >
                      {/* Flag indicator in dropdown */}
                      <div className="w-4 h-4 rounded flex overflow-hidden flex-shrink-0">
                        {flagColors[lang].colors.map((color, idx) => (
                          <div
                            key={idx}
                            style={{
                              backgroundColor: color,
                              flex: 1,
                            }}
                          />
                        ))}
                      </div>
                      <span>{lang.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 mt-4 pt-4 space-y-2">
            <a href="#about" className="block px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">
              {t('nav.about')}
            </a>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full text-left flex items-center justify-between px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                <span>{t('nav.services')}</span>
                <ChevronDown size={16} className={`transition ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="bg-gray-50 border-l-4 border-blue-600 ml-3">
                  {servicesLinks.map((link) => (
                    <a
                      key={link.key}
                      href={`#${link.key}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white"
                      style={{fontWeight: 500}}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                className="w-full text-left flex items-center justify-between px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                <span>{t('nav.industries')}</span>
                <ChevronDown size={16} className={`transition ${isMobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileIndustriesOpen && (
                <div className="bg-gray-50 border-l-4 border-blue-600 ml-3 space-y-2 py-2">
                  {industriesLinks.map((link) => (
                    <div key={link.key}>
                      <button
                        onClick={() => setMobileIndustriesSublinksOpen(
                          mobileIndustriesSublinksOpen === link.key ? null : link.key
                        )}
                        className="w-full text-left flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white"
                        style={{fontWeight: 500}}
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={14} className={`transition ${mobileIndustriesSublinksOpen === link.key ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Sublinks */}
                      {mobileIndustriesSublinksOpen === link.key && link.sublinks && (
                        <div className="bg-white border-l-2 border-gray-300 ml-4">
                          {link.sublinks.map((sublink, idx) => (
                            <a
                              key={`${link.key}-${idx}`}
                              href={`#${link.key}-${idx}`}
                              className="block px-4 py-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                              style={{fontWeight: 500}}
                            >
                              • {sublink}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href="#press" className="block px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">
              {t('nav.press')}
            </a>
            <a href="#careers" className="block px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">
              {t('nav.careers')}
            </a>
            <a href="#contact" className="block px-3 py-2 text-sm font-heading text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">
              {t('nav.contact')}
            </a>
          </div>
        )}
      </div>
    </header>
  )
}



