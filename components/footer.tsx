'use client'

import { useTranslations } from 'next-intl'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
              <span className="font-bold text-lg">create</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional software solutions for enterprise scale.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition">
              {t('footer.about')}
            </a>
            <a href="#products" className="text-gray-400 hover:text-white text-sm transition">
              {t('footer.products')}
            </a>
            <a href="#press" className="text-gray-400 hover:text-white text-sm transition">
              {t('footer.press')}
            </a>
            <a href="#careers" className="text-gray-400 hover:text-white text-sm transition">
              {t('footer.careers')}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition">
              {t('footer.contact')}
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-end space-x-6 pt-8">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <Facebook size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/50 text-center py-4 text-gray-500 text-sm">
        <p>&copy; 2024 CREATE Software Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}
