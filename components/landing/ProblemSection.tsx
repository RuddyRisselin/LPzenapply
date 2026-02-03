'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, Clock, MailWarning, AlertCircle } from 'lucide-react';
import { useRef } from 'react';

const problems = [
  {
    icon: BarChart3,
    title: 'Un marché saturé',
    content: 'Plus de 400 000 étudiants sont en compétition simultanée. Les meilleures offres sont pourvues en moins de 48 heures.',
    stat: '400K+',
    statLabel: 'candidats actifs',
    keywords: 'recherche alternance étudiants compétition marché saturé',
  },
  {
    icon: Clock,
    title: 'Une gestion chronophage',
    content: 'Comptez 30 minutes par candidature personnalisée. Entre les cours et les examens, maintenir ce rythme est impossible.',
    stat: '30min',
    statLabel: 'par candidature',
    keywords: 'candidature personnalisée gestion temps étudiant',
  },
  {
    icon: MailWarning,
    title: 'Un manque de retour',
    content: '80% des candidatures restent sans réponse. Les efforts manuels ne garantissent plus de visibilité auprès des recruteurs.',
    stat: '80%',
    statLabel: 'sans réponse',
    keywords: 'taux réponse recruteurs visibilité candidature',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-x-hidden"
      aria-labelledby="problem-section-title"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          style={{ y, opacity }}
          className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 xl:left-0 bg-pink-100/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
          className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 xl:right-0 bg-purple-100/20 rounded-full blur-3xl"
        />

        {/* Floating Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FF69B4] rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#FF69B4] rounded-full" />
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#FF69B4] rounded-full" />
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#FF69B4] rounded-full" />
        </div>
      </div>

      <div className="max-w-full lg:max-w-7xl mx-auto relative z-10">
        {/* SEO-optimized Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-3 sm:mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pink-50 border border-pink-100">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF69B4]" />
            <span className="text-xs sm:text-sm font-medium text-[#808080]">
              Trouver une alternance en France
            </span>
          </span>
        </motion.div>

        {/* Title with SEO Keywords */}
        <motion.h2
          id="problem-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 sm:mb-6 px-4"
        >
          Le défi de la recherche d'alternance en 2026
        </motion.h2>

        {/* SEO Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-base sm:text-lg text-[#808080] mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4"
        >
          Entre candidatures sans réponse, recherche chronophage et marché ultra-compétitif,
          <strong className="text-gray-900"> trouver une alternance</strong> devient un parcours du combattant pour les étudiants.
        </motion.p>

        {/* Cards Grid with Enhanced Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16"
        >
          {problems.map((problem, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              data-keywords={problem.keywords}
            >
              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated Corner Accent */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF69B4]/5 rounded-full blur-2xl group-hover:bg-[#FF69B4]/10 transition-all duration-500"
                animate={floatingAnimation}
              />

              <div className="relative z-10">
                {/* Icon with Pulse Effect */}
                <div className="mb-4 sm:mb-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 group-hover:from-pink-100 group-hover:to-pink-200 transition-all duration-300 shadow-sm group-hover:shadow-md"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                  >
                    <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FF69B4]" strokeWidth={2} />
                  </motion.div>
                </div>

                {/* Stat Badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                  className="inline-flex flex-col items-start mb-3 sm:mb-4 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <span className="text-xl sm:text-2xl font-bold text-[#FF69B4]">{problem.stat}</span>
                  <span className="text-xs text-[#808080] font-medium">{problem.statLabel}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#FF69B4] transition-colors duration-300">
                  {problem.title}
                </h3>

                {/* Content */}
                <p className="text-sm sm:text-base leading-relaxed text-[#808080] mb-3 sm:mb-4">
                  {problem.content}
                </p>

                {/* Decorative Bottom Line */}
                <motion.div
                  className="w-0 h-1 bg-gradient-to-r from-[#FF69B4] to-purple-400 rounded-full group-hover:w-full transition-all duration-500"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>


        {/* SEO Keywords (hidden but indexed) */}
        <div className="sr-only">
          <h3>Problèmes recherche alternance France 2026</h3>
          <p>
            Candidature alternance sans réponse, recherche alternance étudiant,
            marché alternance saturé, taux réponse recruteur, candidature personnalisée,
            gestion temps recherche emploi, offre alternance France,
            trouver une alternance rapidement, plateforme recherche alternance,
            automatisation candidature alternance
          </p>
        </div>
      </div>
    </section>
  );
}
