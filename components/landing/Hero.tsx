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
    <section className="relative min-h-screen w-full max-w-full bg-gradient-to-b from-white via-pink-50/20 to-white overflow-hidden flex items-center pt-20">
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
          className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-[#FF69B4]/30 via-[#FF69B4]/10 to-transparent rounded-full blur-3xl"
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
          className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[700px] xl:h-[700px] bg-gradient-to-bl from-[#FF1493]/30 via-[#FF69B4]/10 to-transparent rounded-full blur-3xl"
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
          className="absolute top-0 left-0 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[500px] sm:h-[700px] md:h-[800px] lg:h-[900px]"
          style={{
            background: 'radial-gradient(ellipse 25% 100% at 20% 0%, rgba(255, 105, 180, 0.25) 0%, rgba(255, 105, 180, 0.15) 30%, rgba(255, 105, 180, 0.05) 60%, transparent 100%)',
            filter: 'blur(20px) sm:blur(25px) md:blur(30px)',
            transform: 'rotate(8deg)',
            transformOrigin: 'top left',
          }}
        />

        {/* Left spotlight inner core */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-0 left-0 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[400px] h-[450px] sm:w-[600px] md:h-[700px] lg:h-[800px]"
          style={{
            background: 'radial-gradient(ellipse 20% 100% at 15% 0%, rgba(255, 105, 180, 0.3) 0%, rgba(255, 105, 180, 0.1) 40%, transparent 80%)',
            filter: 'blur(15px) sm:blur(18px) md:blur(20px)',
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
          className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 lg:top-6 lg:left-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FF69B4] rounded-full blur-lg sm:blur-xl opacity-40"
        />

        {/* Top Right Spotlight - Realistic projector cone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
          className="absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[500px] sm:h-[700px] md:h-[800px] lg:h-[900px]"
          style={{
            background: 'radial-gradient(ellipse 25% 100% at 80% 0%, rgba(255, 105, 180, 0.25) 0%, rgba(255, 105, 180, 0.15) 30%, rgba(255, 105, 180, 0.05) 60%, transparent 100%)',
            filter: 'blur(20px) sm:blur(25px) md:blur(30px)',
            transform: 'rotate(-8deg)',
            transformOrigin: 'top right',
          }}
        />

        {/* Right spotlight inner core */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
          className="absolute top-0 right-0 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[400px] h-[450px] sm:h-[600px] md:h-[700px] lg:h-[800px]"
          style={{
            background: 'radial-gradient(ellipse 20% 100% at 85% 0%, rgba(255, 105, 180, 0.3) 0%, rgba(255, 105, 180, 0.1) 40%, transparent 80%)',
            filter: 'blur(15px) sm:blur(18px) md:blur(20px)',
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
          className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 lg:top-6 lg:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FF69B4] rounded-full blur-lg sm:blur-xl opacity-40"
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
            borderLeft: '60px solid transparent',
            borderRight: '120px solid transparent',
            borderTop: '500px solid rgba(255, 105, 180, 0.2)',
            filter: 'blur(30px)',
            transformOrigin: 'top left',
            transform: 'rotate(18deg) translateX(-15px)',
          }}
        />

        {/* Additional beam layers for more depth - Left (Desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
          className="hidden md:block absolute top-0 left-0"
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
            borderRight: '60px solid transparent',
            borderLeft: '120px solid transparent',
            borderTop: '500px solid rgba(255, 105, 180, 0.2)',
            filter: 'blur(30px)',
            transformOrigin: 'top right',
            transform: 'rotate(-18deg) translateX(15px)',
          }}
        />

        {/* Additional beam layers for more depth - Right (Desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
          className="hidden md:block absolute top-0 right-0"
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-[#FF69B4]/5 rounded-full blur-2xl sm:blur-3xl"
        />

        {/* Left diagonal light beam */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-10 sm:top-16 md:top-20 left-0 xl:-left-20 w-[300px] sm:w-[450px] md:w-[550px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gradient-to-br from-[#FF69B4]/10 via-transparent to-transparent rotate-45 blur-xl sm:blur-2xl"
        />

        {/* Right diagonal light beam */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-10 sm:top-16 md:top-20 right-0 xl:-right-20 w-[300px] sm:w-[450px] md:w-[550px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gradient-to-bl from-[#FF69B4]/10 via-transparent to-transparent -rotate-45 blur-xl sm:blur-2xl"
        />

        {/* Center glow behind title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[850px] lg:w-[1000px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] bg-gradient-radial from-[#FF69B4]/15 via-[#FF69B4]/5 to-transparent blur-2xl sm:blur-3xl"
        />
      </div>

      <motion.div
        className="relative mx-auto max-w-full w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Centered Content Layout */}
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Nouveauté Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#FF69B4]/10 to-[#FF1493]/10 border border-[#FF69B4]/30 rounded-full"
          >
            <span className="inline-block w-2 h-2 bg-[#FF69B4] rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#FF69B4] to-[#FF1493] bg-clip-text text-transparent">
              Nouveauté : fonctionne avec Indeed et HelloWork
            </span>
          </motion.div>

          {/* Headline - Centered */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 max-w-full lg:max-w-5xl px-2 sm:px-4 w-full">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] flex flex-col items-center"
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
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full lg:max-w-3xl mx-auto px-2"
            >
              La fin de la galère pour les étudiants. L&apos;IA qui postule pour vous 24/7 sur{' '}
              <span className="font-semibold text-gray-900">LinkedIn</span>,{' '}
              <span className="font-semibold text-gray-900">Indeed</span> et{' '}
              <span className="font-semibold text-gray-900">
                Hello Work
              </span>
            </motion.p>
          </motion.div>

          {/* Video Container with Glassmorphism - Below Title */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-full lg:max-w-4xl aspect-video px-2 sm:px-4"
          >
            {/* Glassmorphism Container */}
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl bg-white/60 border border-white/80 shadow-[0_10px_30px_rgba(255,105,180,0.15)] sm:shadow-[0_20px_60px_rgba(255,105,180,0.15)] p-2 sm:p-3">
              {/* Video */}
              <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
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
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 sm:pt-4 px-4"
          >
            {/* Primary CTA - Extra Prominent */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-[#FF69B4] text-white font-bold rounded-full text-base sm:text-lg md:text-xl shadow-[0_10px_30px_rgba(255,105,180,0.3)] sm:shadow-[0_20px_60px_rgba(255,105,180,0.3)] hover:shadow-[0_15px_40px_rgba(255,105,180,0.5)] sm:hover:shadow-[0_25px_80px_rgba(255,105,180,0.5)] transition-all duration-300 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
            >
              Démarrer Gratuitement
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF1493] to-[#FF69B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              />
            </motion.button>
          </motion.div>

          {/* Trust Bar - Companies Marquee */}
          <motion.div
            variants={itemVariants}
            className="pt-8 sm:pt-12 border-t border-gray-200 w-full"
          >
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">
                Ils ont été recrutés chez :
              </h3>

              {/* Scrolling Marquee Container */}
              <div className="relative overflow-hidden py-2 sm:py-4">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Marquee wrapper */}
                <motion.div
                  className="flex gap-8 sm:gap-12 md:gap-16 items-center"
                  animate={{
                    x: [0, -1600]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 35,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set of companies */}
                  {[
                    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
                    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
                    { name: 'Apple', logo: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg' },
                    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
                    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
                    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
                    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
                  ].map((company, index) => (
                    <div
                      key={`first-${company.name}-${index}`}
                      className="flex-shrink-0 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white rounded-lg border border-gray-200 shadow-sm opacity-70 hover:opacity-100 hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-6 sm:h-7 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {[
                    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
                    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
                    { name: 'Apple', logo: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg' },
                    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
                    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
                    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
                    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
                  ].map((company, index) => (
                    <div
                      key={`second-${company.name}-${index}`}
                      className="flex-shrink-0 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white rounded-lg border border-gray-200 shadow-sm opacity-70 hover:opacity-100 hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-6 sm:h-7 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
