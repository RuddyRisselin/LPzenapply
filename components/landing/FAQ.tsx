'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'Est-ce que les entreprises voient que les candidatures sont automatisées ?',
    answer: "Non. Les entreprises ne voient pas que les candidatures spontanées sont automatisées. Les candidatures spontanées envoyées via ZenApply.io apparaissent comme des candidatures classiques, et les candidatures spontanées sont envoyées depuis ta propre boîte Gmail, sans mention d'automatisation.",
  },
  {
    id: 2,
    question: 'Est-ce que les candidatures automatiques permettent d\'avoir plus de réponses ?',
    answer: 'Oui. Les candidatures automatiques permettent de postuler avec plus de volume. Candidater automatiquement augmente donc les chances d\'obtenir des réponses par rapport à des candidatures envoyées une par une. ZenApply.io permet de candidater automatiquement sur LinkedIn, Indeed et HelloWork.',
  },
  {
    id: 3,
    question: 'Peut-on envoyer des candidatures spontanées par mail automatiquement ?',
    answer: 'Oui. Avec ZenApply.io, tu peux envoyer des candidatures spontanées par mail automatiquement : les messages sont générés depuis l\'application, vérifiés par toi, puis envoyés depuis ta propre boîte Gmail en un clic.',
  },
  {
    id: 4,
    question: 'Peut-on vérifier et modifier une candidature spontanée avant de l\'envoyer ?',
    answer: 'Oui. Avant chaque envoi, tu peux vérifier et modifier la candidature spontanée générée par ZenApply.io, afin de t\'assurer que le message te correspond parfaitement.',
  },
  {
    id: 5,
    question: 'Comment suivre toutes ses candidatures au même endroit ?',
    answer: 'ZenApply.io permet de suivre toutes ses candidatures au même endroit, dans un tableau de suivi centralisé.',
  },
  {
    id: 6,
    question: 'Peut-on annuler son abonnement ZenApply.io à tout moment ?',
    answer: 'Oui. L\'abonnement ZenApply.io peut être annulé à tout moment, sans engagement et directement depuis ton espace personnel et sans frais.',
  },
  {
    id: 7,
    question: 'Combien de candidatures faut-il envoyer pour obtenir des réponses ?',
    answer: 'Il n\'existe pas de nombre exact mais utiliser un outil pour candidater automatiquement comme ZenApply.io augmente grandement vos chances d\'obtenir des réponses. ZenApply.io couvre un maximum de sites comme LinkedIn, HelloWork, Indeed et permet également les candidatures spontanées et les relances automatiques par mail.',
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
