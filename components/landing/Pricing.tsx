'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Check, X } from 'lucide-react';

const pricingPlans = {
  monthly: [
    {
      id: 1,
      name: 'Essentiel',
      price: '8,99',
      trial: '0€ puis',
      description: 'Idéal pour débuter votre recherche',
      features: [
        '20 candidatures / semaine (LinkedIn, Indeed, HelloWork)',
        '50 Candidatures spontanées par mail (IA)',
        'Relances automatiques par mail',
        'Suivi centralisé des candidatures',
        'Support client prioritaire',
      ],
      cta: 'Commencer',
      popular: false,
      disabled: false,
    },
    {
      id: 2,
      name: 'Booster',
      price: '19,99',
      description: 'Le meilleur choix pour maximiser vos chances',
      features: [
        'Candidatures illimitées (LinkedIn, Indeed, HelloWork)',
        '200 Candidatures spontanées par mail (IA)',
        'Relances automatiques par mail',
        'Suivi centralisé des candidatures',
        'Support client prioritaire',
      ],
      cta: 'Commencer',
      popular: true,
      disabled: false,
    },
    {
      id: 3,
      name: 'Équipe',
      price: '39,99',
      description: 'Pour les associations étudiantes',
      features: [
        '3 comptes utilisateurs en simultanés',
        'Candidatures illimitées (LinkedIn, Indeed)',
        'Lettres de motivation personnalisées par l\'IA',
        'Suivi de chaque candidature',
        'Support client (mail)',
      ],
      cta: 'Bientôt disponible',
      popular: false,
      disabled: true,
      comingSoon: true,
    },
  ],
  quarterly: [
    {
      id: 1,
      name: 'Essentiel',
      price: '5,99',
      trial: '0€ puis',
      originalPrice: '8,99',
      description: 'Idéal pour débuter votre recherche',
      features: [
        '20 candidatures / semaine (LinkedIn, Indeed, HelloWork)',
        '50 Candidatures spontanées par mail (IA)',
        'Relances automatiques par mail',
        'Suivi centralisé des candidatures',
        'Support client prioritaire',
      ],
      cta: 'Commencer',
      popular: false,
      disabled: false,
    },
    {
      id: 2,
      name: 'Booster',
      price: '13,33',
      originalPrice: '19,99',
      description: 'Le meilleur choix pour maximiser vos chances',
      features: [
        'Candidatures illimitées (LinkedIn, Indeed, HelloWork)',
        '200 Candidatures spontanées par mail (IA)',
        'Relances automatiques par mail',
        'Suivi centralisé des candidatures',
        'Support client prioritaire',
      ],
      cta: 'Commencer',
      popular: true,
      disabled: false,
    },
    {
      id: 3,
      name: 'Équipe',
      price: '26,66',
      originalPrice: '39,99',
      description: 'Pour les associations étudiantes',
      features: [
        '3 comptes utilisateurs en simultanés',
        'Candidatures illimitées (LinkedIn, Indeed)',
        'Lettres de motivation personnalisées par l\'IA',
        'Suivi de chaque candidature',
        'Support client (mail)',
      ],
      cta: 'Bientôt disponible',
      popular: false,
      disabled: true,
      comingSoon: true,
    },
  ],
};

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly'>('quarterly');

  const plans = pricingPlans[billingPeriod];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-zen-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Nos offres pour candidater automatiquement
          </h2>
          <p className="text-lg text-zen-gray mb-8">
            Sans engagement • essai gratuit
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-1.5 shadow-sm border border-gray-200">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-zen-rose text-white shadow-md'
                  : 'text-zen-gray hover:text-gray-900'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingPeriod('quarterly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                billingPeriod === 'quarterly'
                  ? 'bg-zen-rose text-white shadow-md'
                  : 'text-zen-gray hover:text-gray-900'
              }`}
            >
              Trimestriel
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                -33%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:scale-105 z-10' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-zen-rose to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Coming Soon Badge */}
              {plan.comingSoon && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-zen-gray text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    BIENTÔT DISPONIBLE
                  </div>
                </div>
              )}

              {/* Animated Border for Popular Card */}
              {plan.popular && (
                <>
                  {/* Rotating gradient border */}
                  <div className="absolute -inset-[2px] rounded-3xl overflow-hidden pointer-events-none">
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: 'conic-gradient(from 0deg, rgba(255,255,255,0.8) 0%, transparent 50%, rgba(255,255,255,0.8) 100%)',
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>

                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute -inset-4 rounded-3xl bg-white/20 blur-xl pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </>
              )}

              {/* Card */}
              <div
                className={`relative h-full rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-zen-rose text-white shadow-2xl hover:shadow-zen-rose/30'
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                } ${plan.disabled ? 'opacity-60' : ''}`}
              >
                {/* Plan Name */}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? 'text-white/90' : 'text-zen-gray'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  {plan.trial && (
                    <p
                      className={`text-sm mb-1 ${
                        plan.popular ? 'text-white/80' : 'text-zen-gray'
                      }`}
                    >
                      {plan.trial}
                    </p>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {plan.price}€
                    </span>
                    <span
                      className={`text-lg ${
                        plan.popular ? 'text-white/80' : 'text-zen-gray'
                      }`}
                    >
                      /mois
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <p
                      className={`text-sm mt-1 line-through ${
                        plan.popular ? 'text-white/60' : 'text-zen-gray/60'
                      }`}
                    >
                      {plan.originalPrice}€/mois
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  disabled={plan.disabled}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                    plan.disabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-white text-zen-rose hover:bg-gray-50 shadow-lg'
                      : 'bg-gradient-to-r from-zen-rose to-pink-500 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-white' : 'text-zen-rose'
                        }`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-white/90' : 'text-zen-gray'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zen-gray flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-zen-rose" />
              Annulez à tout moment
            </span>
            <span className="hidden sm:inline text-zen-gray/30">•</span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-zen-rose" />
              Paiement sécurisé par Stripe
            </span>
            <span className="hidden sm:inline text-zen-gray/30">•</span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-zen-rose" />
              Satisfaction garantie
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
