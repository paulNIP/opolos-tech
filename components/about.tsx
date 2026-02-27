'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

export function About() {
  const t = useTranslations()

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Image Grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* About Us Box */}
              <div className="bg-blue-600 rounded-2xl p-8 flex items-center justify-center text-white font-bold text-lg col-span-1 h-32">
                ABOUT<br />US
              </div>
              {/* Image 2 */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-32 overflow-hidden"></div>
            </div>
            {/* Large Image */}
            <div className="bg-gradient-to-br from-blue-300 to-blue-700 rounded-2xl h-40 overflow-hidden"></div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-heading text-gray-900 leading-tight max-w-2xl">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description')}
            </p>
            <button className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition">
              <span>{t('about.readMore')}</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <ArrowRight size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
