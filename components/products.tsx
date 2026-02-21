'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  title: string
  description: string
  icon: string
}

function ProductCard({ title, description, icon }: ProductCardProps) {
  const t = useTranslations()

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden">
      <div className="h-24 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
        {icon}
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition">
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

export function Products() {
  const t = useTranslations()

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {t('products.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('products.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            icon="C"
            title={t('productCard.citrix')}
            description={t('productCard.citrixDesc')}
          />
          <ProductCard
            icon="G"
            title={t('productCard.github')}
            description={t('productCard.githubDesc')}
          />
          <ProductCard
            icon="M"
            title={t('productCard.mapster')}
            description={t('productCard.mapsterDesc')}
          />
        </div>

        {/* Demo Carousel Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          <button className="w-2 h-2 bg-blue-600 rounded-full"></button>
          <button className="w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"></button>
          <button className="w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"></button>
        </div>
      </div>
    </section>
  )
}
