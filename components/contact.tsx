'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export function Contact() {
  const t = useTranslations()

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Contact Box */}
          <div>
            <div className="bg-blue-600 rounded-2xl p-12 text-white text-center space-y-4 h-full flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">{t('contact.title')}</span>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Support */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading text-gray-900">{t('contact.support')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{t('contact.supportPhone')}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{t('contact.supportEmail')}</span>
                  </div>
                </div>
              </div>

              {/* Sales */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading text-gray-900">{t('contact.sales')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{t('contact.salesPhone')}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{t('contact.salesEmail')}</span>
                  </div>
                </div>
              </div>
              
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition">
              <span>{t('contact.contactUs')}</span>
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
