'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { UserPlus, FileUp, Briefcase } from 'lucide-react';
import { useRef, useState } from 'react';

const timelineSteps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Inscrivez-vous sur ZenApply.io',
    items: [
      'Créez votre compte gratuitement en quelques clics',
      'Accédez à notre interface intuitive',
      'Aucune carte bancaire requise',
    ],
  },
  {
    icon: FileUp,
    number: '02',
    title: 'Importez votre CV',
    items: [
      'Importez votre CV en un clic',
      'Personnalisez votre lettre de motivation',
      'Définissez vos critères de recherche',
    ],
  },
  {
    icon: Briefcase,
    number: '03',
    title: 'Passez les entretiens',
    items: [
      'Recevez des propositions d\'entretien',
      'Préparez-vous avec notre IA',
      'Maximisez vos chances de succès',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function SolutionTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll progress for the timeline progress bar
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Liquid Progress: Add spring physics for fluid, bouncy animation
  const rawProgress = useTransform(timelineProgress, [0, 1], [0, 100]);
  const springProgress = useSpring(rawProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate which icons should be "activated" based on progress
  // Each step occupies ~33.33% of the timeline (100% / 3 steps)
  const getIconActivation = (index: number) => {
    const stepThreshold = (index + 1) * 33.33; // 33.33%, 66.66%, 100%
    return useTransform(springProgress, (progress) => progress >= stepThreshold);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #F3F4F6 0%, #FFFFFF 70%)',
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute top-40 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-pink-100/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-purple-100/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-full lg:max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            ZenApply.io, La seule solution
          </h2>
          <p className="text-base sm:text-lg text-[#808080] max-w-2xl mx-auto px-4">
            Une approche simplifiée pour des résultats concrets.
          </p>
        </motion.div>

        {/* Horizontal Timeline - Desktop */}
        <motion.div
          ref={timelineRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden lg:block"
        >
          {/* Timeline Steps Container */}
          <div className="relative">
            {/* Timeline Steps Grid */}
            <div className="relative grid grid-cols-3 gap-4 lg:gap-6">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative flex flex-col items-center"
                >
                  {/* Step Content Card - Positioned ABOVE the line */}
                  <motion.div
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                    className="relative bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-md border border-[#F3F4F6] hover:shadow-xl transition-all duration-300 w-full mb-6 flex flex-col"
                    style={{ minHeight: '220px', height: '100%' }}
                  >
                    {/* Glassmorphism overlay - subtle */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/20 to-transparent rounded-2xl pointer-events-none" />

                    <div className="relative z-10">
                      {/* Title */}
                      <h3 className="text-sm lg:text-base xl:text-lg font-bold text-gray-900 mb-3 lg:mb-4 text-center min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center">
                        {step.title}
                      </h3>

                      {/* List Items */}
                      <ul className="space-y-1.5 lg:space-y-2.5">
                        {step.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1 + itemIndex * 0.05 }}
                            className="flex items-start gap-1.5 lg:gap-2 text-xs lg:text-sm text-[#808080]"
                          >
                            <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-[#FF69B4] mt-1 lg:mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Decorative Corner Accent */}
                    <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-br from-transparent via-pink-50 to-pink-100 rounded-br-2xl opacity-30" />
                  </motion.div>

                  {/* Step Icon Circle - Positioned ON the line */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      y: -8,
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                    className="relative z-20"
                  >
                    <div className="relative">
                      {/* Glow Effect - Intensifies when activated by progress */}
                      <motion.div
                        style={{
                          opacity: useTransform(
                            springProgress,
                            [index * 33.33 - 5, index * 33.33 + 5],
                            [0.2, hoveredIndex === index ? 0.7 : 0.5]
                          ),
                          scale: useTransform(
                            springProgress,
                            [index * 33.33 - 5, index * 33.33 + 5],
                            [0.8, hoveredIndex === index ? 1.3 : 1.1]
                          ),
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-[#FF69B4] rounded-full blur-xl"
                      />

                      {/* Icon Container - Scales and pulses when activated */}
                      <motion.div
                        style={{
                          scale: useTransform(
                            springProgress,
                            [index * 33.33 - 5, index * 33.33],
                            [1, 1.08]
                          ),
                        }}
                        className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg border-3 lg:border-4 border-[#FF69B4] flex items-center justify-center"
                      >
                        <step.icon className="w-7 h-7 lg:w-9 lg:h-9 text-[#FF69B4]" strokeWidth={2} />
                      </motion.div>

                      {/* Step Number Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                        className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-[#FF69B4] to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <span className="text-[10px] lg:text-xs font-bold text-white">{step.number}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar - Positioned through the icon centers */}
            <div
              className="absolute left-0 right-0 h-1.5 pointer-events-none"
              style={{
                top: 'calc(100% - 10px)', // Position at icon center (icon is 20px, so 10px from bottom)
                transform: 'translateY(-50%)'
              }}
            >
              {/* Background line that transitions from gray to pink based on scroll progress */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: useTransform(
                    springProgress,
                    [0, 33.33, 66.66, 100],
                    ['#E5E7EB', '#F5B8D0', '#FA9CC0', '#FF69B4']
                  ),
                }}
              />

              {/* Liquid Progress Line (Zen Rose with spring animation) */}
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full origin-left"
                style={{
                  scaleX: useTransform(springProgress, [0, 100], [0, 1]),
                  background: 'linear-gradient(90deg, #FF69B4 0%, #FF85C0 50%, #FF69B4 100%)',
                  boxShadow: '0 0 25px rgba(255, 105, 180, 0.5), 0 0 40px rgba(255, 105, 180, 0.3)',
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Vertical Timeline - Mobile & Tablet */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="lg:hidden space-y-6 sm:space-y-8 relative"
        >
          {/* Vertical Progress Line Container */}
          <div className="absolute left-8 sm:left-10 top-16 sm:top-20 bottom-16 sm:bottom-20 w-1 sm:w-1.5 -translate-x-1/2 pointer-events-none">
            {/* Background track */}
            <div className="absolute inset-0 bg-[#E5E7EB] rounded-full" />
            {/* Liquid progress line */}
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full origin-top"
              style={{
                scaleY: useTransform(springProgress, [0, 100], [0, 1]),
                background: 'linear-gradient(180deg, #FF69B4 0%, #FF85C0 50%, #FF69B4 100%)',
                boxShadow: '0 0 15px rgba(255, 105, 180, 0.4)',
              }}
            />
          </div>

          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative flex gap-4 sm:gap-6"
            >

              {/* Icon Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#FF69B4] rounded-full blur-lg opacity-40" />

                  {/* Icon Container */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg border-3 sm:border-4 border-[#FF69B4] flex items-center justify-center">
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF69B4]" strokeWidth={2} />
                  </div>

                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                    className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-[#FF69B4] to-pink-500 rounded-full flex items-center justify-center shadow-md"
                  >
                    <span className="text-[10px] sm:text-xs font-bold text-white">{step.number}</span>
                  </motion.div>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-[#F3F4F6] hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  {step.title}
                </h3>

                <ul className="space-y-1.5 sm:space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#808080]"
                    >
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#FF69B4] mt-1 sm:mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#FF69B4] to-pink-500 text-white text-base sm:text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              boxShadow: '0 10px 30px rgba(255, 105, 180, 0.3)',
            }}
          >
            Configurer mon profil
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
