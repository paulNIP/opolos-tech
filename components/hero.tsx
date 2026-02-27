'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { AvatarGroup } from './avatar-group'

export function Hero() {
  const t = useTranslations()

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-heading text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-gray-600">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
              <span>{t('hero.cta')}</span>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <ArrowRight size={16} />
              </div>
            </button>

            {/* Avatar Group */}
            <div>
              <AvatarGroup count={500} maxDisplay={4} />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl opacity-90"></div>
            <div className="absolute inset-3 bg-blue-900 rounded-2xl overflow-hidden flex items-center justify-center text-white text-center p-6">
              <div className="space-y-4">
                <p className="text-sm font-medium text-blue-200">City Skyline</p>
                <p className="text-3xl font-bold">Modern Software</p>
                <p className="text-blue-100">Enterprise Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
