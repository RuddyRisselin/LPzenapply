'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[600px] xl:h-[600px] bg-zen-rose/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-full lg:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Pulsing Glow Effect */}
          <motion.div
            className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-zen-rose/20 to-pink-500/20 blur-2xl pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Main CTA Container */}
          <div className="relative bg-gradient-to-br from-zen-rose via-[#FF69B4] to-[#FF85C1] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden">
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6">
                Prêt à trouver votre alternance ?
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
                Rejoignez les + de 1000 étudiants qui ont fait le choix de l'automatisation intelligente.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white text-zen-rose font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-6 sm:mb-8 w-full sm:w-auto"
              >
                {/* Pulse Animation on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <span className="relative z-10">
                  Commencer gratuitement
                </span>
              </motion.button>

              {/* Reassurance Points */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 text-white/90">
                <span className="hidden sm:inline text-white/40">•</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                  <span className="text-xs sm:text-sm font-medium">20 candidatures offertes</span>
                </div>
                <span className="hidden sm:inline text-white/40">•</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                  <span className="text-xs sm:text-sm font-medium">Annulation en 1 clic</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
