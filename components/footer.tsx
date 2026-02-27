'use client'

import { useTranslations } from 'next-intl'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { MapPin } from 'lucide-react';

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
              <span className="font-bold text-lg">Opolos<br/> Technology</span>
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
        
      </div>

      
      <div className="bg-black/50 text-gray-400 text-sm">
  <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center sm:text-left">
    
    {/* Email */}
    <div className="flex items-center gap-2">
      <Mail size={16} className="text-blue-500" />
      <span>info@opolos.tech</span>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-2">
      <Phone size={16} className="text-blue-500" />
      <span>+1 (469) 712-4672</span>
    </div>

    {/* Address */}
    <div className="flex items-center gap-2">
      <MapPin size={16} className="text-blue-500" />
      <span>5511 Parkcrest Dr, Suite 103, Austin, TX 78731</span>
    </div>

    {/* Links */}
    <div className="flex items-center gap-4">
      <a href="#privacy" className="hover:text-white transition">
        Privacy Policy
      </a>
      <a href="#terms" className="hover:text-white transition">
        Terms of Service
      </a>
    </div>

  </div>
</div>

{/* Copyright */}
      <div className="bg-black/50 text-center py-4 text-gray-500 text-sm">
        <p>&copy; 2024 Opolos. All rights reserved.   </p>
        {/* <div className="flex justify-end space-x-6 pt-8">
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
        </div> */}
      </div>
      
    </footer>
  )
}
