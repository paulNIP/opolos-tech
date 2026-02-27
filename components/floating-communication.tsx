'use client'

import { MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

export function FloatingCommunication() {
  const [isExpanded, setIsExpanded] = useState(false)

  // WhatsApp contact number (replace with your actual number)
  const whatsappPhone = '1234567890'
  const whatsappMessage = 'Hello! I would like to know more about your services.'

  // Telegram username (replace with your actual username)
  const telegramUsername = 'your_telegram_username'

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/${whatsappPhone}?text=${encodedMessage}`, '_blank')
  }

  const openTelegram = () => {
    window.open(`https://t.me/${telegramUsername}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      {/* WhatsApp Button */}
      {isExpanded && (
        <button
          onClick={openWhatsApp}
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-2"
          title="Chat with us on WhatsApp"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.767 1.167c-.1.045-.203.092-.302.144L2.308 3.686c.316.95 1.235 4.053 2.032 6.683.08.235.162.468.246.699.79 2.232 1.674 4.733 2.48 6.928 1.126 3.174 2.38 6.75 2.381 6.77.004.017.112.297.252.558.146.279.383.636.612.636.193 0 .4-.129.594-.415.194-.285.386-.607.577-.923.383-.645.764-1.296 1.117-1.854.506-.833 1.009-1.668 1.417-2.364l.065-.114c.175-.307.306-.532.429-.758.149-.272.294-.548.396-.819.258-.688.31-1.423.14-2.098-1.286-4.855-2.834-10.597-3.46-13.265z"/>
          </svg>
          <span className="text-sm font-medium">WhatsApp</span>
        </button>
      )}

      {/* Telegram Button */}
      {isExpanded && (
        <button
          onClick={openTelegram}
          className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-2"
          title="Chat with us on Telegram"
        >
          <Send size={20} />
          <span className="text-sm font-medium">Telegram</span>
        </button>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        title="Open communication options"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
