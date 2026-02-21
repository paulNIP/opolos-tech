'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

export function Press() {
  const t = useTranslations()

  return (
    <section id="press" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('press.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('press.description')}
            </p>
            <button className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition">
              <span>{t('press.readMore')}</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <ArrowRight size={16} />
              </div>
            </button>
          </div>

          {/* Right - Image Grid */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-48 overflow-hidden"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-32 overflow-hidden"></div>
              <div className="bg-gradient-to-br from-blue-300 to-blue-700 rounded-2xl h-32 overflow-hidden"></div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <p className="text-gray-600 font-medium mb-8">{t('partners')}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
            {['Lenovo', 'Citrix', 'GitHub', 'Mapster', 'Microsoft', 'Netdepo'].map((partner) => (
              <div key={partner} className="text-gray-400 font-bold text-sm opacity-60 hover:opacity-100 transition">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
