'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'Comment ZenApply.io fonctionne exactement ?',
    answer: "L'IA analyse votre profil, identifie les offres pertinentes et personnalise chaque candidature pour maximiser vos chances de succès.",
  },
  {
    id: 2,
    question: "Est-ce légal d'automatiser ses candidatures ?",
    answer: "Oui, totalement. ZenApply.io est un outil d'assistance qui respecte les conditions d'utilisation des plateformes et la conformité RGPD.",
  },
  {
    id: 3,
    question: 'Sur quelles plateformes ZenApply.io postule ?',
    answer: 'Nous couvrons les leaders du marché : LinkedIn, Indeed et HelloWork.',
  },
  {
    id: 4,
    question: "L'IA personnalise-t-elle vraiment chaque lettre ?",
    answer: 'Absolument. Chaque lettre est rédigée en fonction de la description du poste et de vos expériences spécifiques.',
  },
  {
    id: 5,
    question: 'Puis-je annuler mon abonnement à tout moment ?',
    answer: 'Oui, la résiliation se fait en un clic depuis votre dashboard, sans engagement de durée.',
  },
  {
    id: 6,
    question: 'Mes données sont-elles sécurisées ?',
    answer: 'Vos données sont protégées par certificat SSL et hébergées en Europe sur des serveurs Hostinger sécurisés.',
  },
  {
    id: 7,
    question: "Puis-je vérifier les candidatures avant l'envoi ?",
    answer: 'Oui, le mode "Review" vous permet de valider chaque lettre de motivation avant qu\'elle ne soit expédiée.',
  },
  {
    id: 8,
    question: 'Quel est le délai moyen pour trouver une alternance ?',
    answer: "Nos utilisateurs trouvent leur contrat en 18 jours en moyenne grâce à la puissance de l'automatisation.",
  },
  {
    id: 9,
    question: 'Comment contacter le support en cas de besoin ?',
    answer: 'Notre équipe est disponible par email de 9h à 17h, tous les jours sauf le week-end.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-zen-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-full lg:max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Questions Fréquentes
          </h2>
          <p className="text-base sm:text-lg text-zen-gray px-4">
            Tout ce que vous devez savoir pour démarrer sereinement.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                openId === item.id
                  ? 'border-zen-rose/30 bg-zen-rose/5 shadow-lg'
                  : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-3 sm:gap-4 text-left"
                aria-expanded={openId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span
                  className={`text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 ${
                    openId === item.id ? 'text-zen-rose' : 'text-gray-900'
                  }`}
                >
                  {item.question}
                </span>

                {/* Icon with rotation animation */}
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0"
                >
                  {openId === item.id ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-zen-rose" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-zen-gray" strokeWidth={2.5} />
                  )}
                </motion.div>
              </button>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: 'easeInOut' },
                      opacity: { duration: 0.25, ease: 'easeInOut' },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                      <p className="text-sm sm:text-base text-zen-gray leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
