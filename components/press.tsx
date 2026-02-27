'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Press() {
  const t = useTranslations()
  const [scrollPosition, setScrollPosition] = useState(0)

  const partners = [
    { name: 'Lenovo', logo: '/logos/lenovo.jpg' },
    { name: 'Citrix', logo: '/logos/citrix.jpg' },
    { name: 'GitHub', logo: '/logos/github.jpg' },
    { name: 'Mapster', logo: '/logos/mapster.jpg' },
    { name: 'Microsoft', logo: '/logos/microsoft.jpg' },
    { name: 'Netdepo', logo: '/logos/netdepo.jpg' },
  ]
  
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners]
  const itemWidth = 180 // width of each logo item
  const totalWidth = partners.length * itemWidth

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1
        // Reset when reaching the end for seamless loop
        return newPosition >= totalWidth ? 0 : newPosition
      })
    }, 40) // Smooth scrolling speed

    return () => clearInterval(interval)
  }, [totalWidth])

  return (
    <section id="press" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-heading text-gray-900 leading-tight">
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

        {/* Partners Section with Auto-Scrolling Carousel */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <p className="text-gray-600 font-medium mb-12">{t('partners')}</p>
          
          {/* Auto-Scrolling Carousel - All Screen Sizes */}
          <div className="relative w-full overflow-hidden bg-white rounded-lg py-8">
            <div
              className="flex gap-12"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                transition: 'transform 0.04s linear',
              }}
            >
              {duplicatedPartners.map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex items-center justify-center flex-shrink-0 h-16 w-40 opacity-70 hover:opacity-100 transition"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={70}
                    className="max-h-14 object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Gradient fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
