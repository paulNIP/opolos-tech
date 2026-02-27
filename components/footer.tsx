'use client'

import { useTranslations } from 'next-intl'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-gray-900 text-white">

      {/* Map Section */}
      <div className="w-full h-64 lg:h-80 bg-gray-800 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2155256750735!2d-74.005974!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sCREATE%20Software%20Solutions!2s10%20E%2040th%20St%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content - Brand on Left, 4 Columns on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-8 border-b border-gray-800 mb-12">
          {/* Brand Section - Left Side */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
              <span className="font-heading text-lg font-bold">OPOLOS TECHNOLOGIES</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional software solutions for enterprise scale.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* 4 Column Footer Links - Right Side */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Services Column */}
            <div>
              <h3 className="text-blue-400 font-heading font-bold text-lg mb-6">
                {t('footer.services')}
              </h3>
              <ul className="space-y-3">
                {t.raw('footer.servicesItems').map((item: string, idx: number) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-blue-400 font-heading font-bold text-lg mb-6">
                {t('footer.products')}
              </h3>
              <ul className="space-y-3">
                {t.raw('footer.productsItems').map((item: string, idx: number) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-blue-400 font-heading font-bold text-lg mb-6">
                {t('footer.company')}
              </h3>
              <ul className="space-y-3">
                {t.raw('footer.companyItems').map((item: string, idx: number) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-blue-400 font-heading font-bold text-lg mb-6">
                {t('footer.resources')}
              </h3>
              <ul className="space-y-3">
                {t.raw('footer.resourcesItems').map((item: string, idx: number) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
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
