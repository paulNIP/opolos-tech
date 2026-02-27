'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export function Process() {
  const t = useTranslations('process')
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: t('step1Title'),
      description: t('step1Desc'),
    },
    {
      id: 2,
      title: t('step2Title'),
      description: t('step2Desc'),
    },
    {
      id: 3,
      title: t('step3Title'),
      description: t('step3Desc'),
    },
    {
      id: 4,
      title: t('step4Title'),
      description: t('step4Desc'),
    },
    {
      id: 5,
      title: t('step5Title'),
      description: t('step5Desc'),
    },
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading text-gray-900 leading-tight">
            {t('title').split('Consultation')[0].trim()}<span className="text-blue-600"> {t('titleHighlight')}</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`relative p-6 rounded-lg cursor-pointer transition-all duration-300 group ${
                activeStep === step.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white border border-gray-200 hover:shadow-md'
              }`}
            >
              {/* Large Number Watermark - Bottom Right (Halfway in and out) */}
              <div
                className={`absolute text-9xl font-heading font-bold opacity-30 pointer-events-none leading-none ${
                  activeStep === step.id ? 'text-white' : 'text-gray-300'
                }`}
                style={{
                  bottom: '-40px',
                  right: '-20px',
                }}
              >
                {String(step.id).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Step Title */}
                <h3
                  className={`text-4xl font-heading font-bold mb-2 transition-all ${
                    activeStep === step.id ? 'text-white' : 'text-blue-00'
                  }`}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  className={`text-lg leading-relaxed font-heading transition-all ${
                    activeStep === step.id
                      ? 'text-blue-50 opacity-100'
                      : 'text-gray-600 opacity-100'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-heading font-bold px-8 py-3 rounded-lg transition-colors">
            {t('cta')}
          </button>
        </div>
      </div>
    </section>
  )
}
