'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['une alternance', 'un stage'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const wordVariants = {
    enter: {
      y: 20,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };


  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-white via-pink-50/20 to-white overflow-hidden flex items-center">
      {/* Background Decorative Assets - Modern SaaS/AI Style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 left-10 w-[600px] h-[600px] bg-gradient-to-br from-[#FF69B4]/30 via-[#FF69B4]/10 to-transparent rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-10 w-[700px] h-[700px] bg-gradient-to-bl from-[#FF1493]/30 via-[#FF69B4]/10 to-transparent rounded-full blur-3xl"
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-[15%] w-32 h-32 border-2 border-[#FF69B4]/20 rounded-lg"
        />

        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 right-[20%] w-24 h-24 border-2 border-[#FF1493]/20 rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            rotate: [45, 225, 405],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-[45%] left-[10%] w-20 h-20 border-2 border-[#FF69B4]/15"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />

        {/* Abstract Line Patterns */}
        <motion.div
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            pathLength: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[20%] right-[10%]"
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <motion.path
              d="M 10 100 Q 50 50 100 100 T 190 100"
              stroke="rgba(255, 105, 180, 0.3)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[30%] left-[8%]"
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <motion.circle
              cx="75"
              cy="75"
              r="60"
              stroke="rgba(255, 20, 147, 0.3)"
              strokeWidth="2"
              fill="none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>

        {/* Sparkle/Star Elements */}
        {[
          { top: '15%', left: '25%', delay: 0 },
          { top: '30%', right: '15%', delay: 2 },
          { top: '50%', left: '18%', delay: 4 },
          { top: '40%', right: '25%', delay: 1.5 },
        ].map((pos, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: pos.delay,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-[#FF69B4]"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          />
        ))}

        {/* Subtle Mesh Gradient */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 30% 20%, rgba(255, 105, 180, 0.15), transparent 50%),
              radial-gradient(ellipse 600px 500px at 70% 60%, rgba(255, 20, 147, 0.1), transparent 50%)
            `,
          }}
        />
      </div>

      {/* Dynamic Background Light Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Spotlight - Realistic projector cone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-0 left-0 w-[500px] h-[900px]"
          style={{
            background: 'radial-gradient(ellipse 25% 100% at 20% 0%, rgba(255, 105, 180, 0.25) 0%, rgba(255, 105, 180, 0.15) 30%, rgba(255, 105, 180, 0.05) 60%, transparent 100%)',
            filter: 'blur(30px)',
            transform: 'rotate(8deg)',
            transformOrigin: 'top left',
          }}
        />

        {/* Left spotlight inner core */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-0 left-0 w-[400px] h-[800px]"
          style={{
            background: 'radial-gradient(ellipse 20% 100% at 15% 0%, rgba(255, 105, 180, 0.3) 0%, rgba(255, 105, 180, 0.1) 40%, transparent 80%)',
            filter: 'blur(20px)',
            transform: 'rotate(8deg)',
            transformOrigin: 'top left',
          }}
        />

        {/* Left spotlight source glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.4, 0.5, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-6 left-6 w-12 h-12 bg-[#FF69B4] rounded-full blur-xl opacity-40"
        />

        {/* Top Right Spotlight - Realistic projector cone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
          className="absolute top-0 right-0 w-[500px] h-[900px]"
          style={{
            background: 'radial-gradient(ellipse 25% 100% at 80% 0%, rgba(255, 105, 180, 0.25) 0%, rgba(255, 105, 180, 0.15) 30%, rgba(255, 105, 180, 0.05) 60%, transparent 100%)',
            filter: 'blur(30px)',
            transform: 'rotate(-8deg)',
            transformOrigin: 'top right',
          }}
        />

        {/* Right spotlight inner core */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
          className="absolute top-0 right-0 w-[400px] h-[800px]"
          style={{
            background: 'radial-gradient(ellipse 20% 100% at 85% 0%, rgba(255, 105, 180, 0.3) 0%, rgba(255, 105, 180, 0.1) 40%, transparent 80%)',
            filter: 'blur(20px)',
            transform: 'rotate(-8deg)',
            transformOrigin: 'top right',
          }}
        />

        {/* Right spotlight source glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.4, 0.5, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute top-6 right-6 w-12 h-12 bg-[#FF69B4] rounded-full blur-xl opacity-40"
        />

        {/* Additional beam layers for more depth - Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
          className="absolute top-0 left-0"
          style={{
            width: '0',
            height: '0',
            borderLeft: '120px solid transparent',
            borderRight: '250px solid transparent',
            borderTop: '900px solid rgba(255, 105, 180, 0.2)',
            filter: 'blur(40px)',
            transformOrigin: 'top left',
            transform: 'rotate(18deg) translateX(-30px)',
          }}
        />

        {/* Additional beam layers for more depth - Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
          className="absolute top-0 right-0"
          style={{
            width: '0',
            height: '0',
            borderRight: '120px solid transparent',
            borderLeft: '250px solid transparent',
            borderTop: '900px solid rgba(255, 105, 180, 0.2)',
            filter: 'blur(40px)',
            transformOrigin: 'top right',
            transform: 'rotate(-18deg) translateX(30px)',
          }}
        />

        {/* Radial spotlight from top pointing to center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FF69B4]/5 rounded-full blur-3xl"
        />

        {/* Left diagonal light beam */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-20 -left-40 w-[600px] h-[400px] bg-gradient-to-br from-[#FF69B4]/10 via-transparent to-transparent rotate-45 blur-2xl"
        />

        {/* Right diagonal light beam */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-20 -right-40 w-[600px] h-[400px] bg-gradient-to-bl from-[#FF69B4]/10 via-transparent to-transparent -rotate-45 blur-2xl"
        />

        {/* Center glow behind title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-radial from-[#FF69B4]/15 via-[#FF69B4]/5 to-transparent blur-3xl"
        />
      </div>

      <motion.div
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Centered Content Layout */}
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Headline - Centered */}
          <motion.div variants={itemVariants} className="space-y-6 max-w-5xl px-4 w-full">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] flex flex-col items-center"
            >
              {/* Mobile: 3 lines, Desktop: 2 lines */}
              {/* Desktop version - 2 lines */}
              <span className="hidden sm:flex items-center justify-center">
                <span>Trouvez</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`desktop-${wordIndex}`}
                    variants={wordVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="inline-block whitespace-nowrap text-[#FF69B4] mx-4"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="whitespace-nowrap">en moins de 30 jours</span>
              </span>

              {/* Mobile version - 3 lines */}
              <span className="flex sm:hidden items-center justify-center">
                <span>Trouvez</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`mobile-${wordIndex}`}
                    variants={wordVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="inline-block whitespace-nowrap text-[#FF69B4] mx-3"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="block sm:hidden mt-1">
                en moins de 30 jours
              </span>

              <span className="block mt-1 sm:mt-2">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] bg-clip-text text-transparent">
                    grâce à l&apos;IA
                  </span>
                </span>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              L&apos;automatisation intelligente qui postule pour vous 24/7 sur{' '}
              <span className="font-semibold text-gray-900">LinkedIn</span>,{' '}
              <span className="font-semibold text-gray-900">Indeed</span> et{' '}
              <span className="font-semibold text-gray-900">
                Welcome to the Jungle
              </span>
            </motion.p>
          </motion.div>

          {/* Video Container with Glassmorphism - Below Title */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-4xl aspect-video"
          >
            {/* Glassmorphism Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden backdrop-blur-xl bg-white/60 border border-white/80 shadow-[0_20px_60px_rgba(255,105,180,0.15)] p-3">
              {/* Video */}
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/video/VSL.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>

          </motion.div>

          {/* CTA Section - Prominent Below Video */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            {/* Primary CTA - Extra Prominent */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-[#FF69B4] text-white font-bold rounded-full text-xl shadow-[0_20px_60px_rgba(255,105,180,0.3)] hover:shadow-[0_25px_80px_rgba(255,105,180,0.5)] transition-all duration-300 flex items-center gap-3"
            >
              Démarrer Gratuitement
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF1493] to-[#FF69B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              />
            </motion.button>
          </motion.div>

          {/* Trust Bar - Social Proof */}
          <motion.div
            variants={itemVariants}
            className="pt-12 border-t border-gray-200 w-full max-w-4xl"
          >
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 mb-6">
                Rejoint par +1,247 étudiants de :
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
                {['HEC Paris', 'ESSEC', 'ESCP', 'EM Lyon', 'EDHEC'].map(
                  (school) => (
                    <motion.div
                      key={school}
                      whileHover={{ scale: 1.05 }}
                      className="grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                    >
                      <div className="px-6 py-3 bg-gray-50 rounded-lg border border-gray-200">
                        <span className="text-sm font-bold text-gray-700">
                          {school}
                        </span>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
