'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FileText,
  Target,
  Mail,
  BarChart3,
  MapPin,
  Smartphone,
  Check,
} from 'lucide-react';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Target,
    title: 'Candidature Automatique Multi-Plateformes',
    visual: 'platforms',
    screenshot: '/screenshots/extention.png',
    points: [
      'Détection d\'offres d\'emploi 24/7',
      'Évitement automatique des doublons',
      'Respect des règles de chaque plateforme',
      'Adaptation intelligente aux formulaires',
    ],
  },
  {
    icon: Mail,
    title: 'Relance Automatique Intelligente',
    visual: 'email',
    screenshot: '/screenshots/relance.png',
    points: [
      'Relance de recruteurs automatique après 7 jours',
      'Email de relance personnalisé à chaque entreprise',
      'Suivi des taux d\'ouverture et de réponse',
      'Timing optimisé par intelligence artificielle',
    ],
  },
  {
    icon: MapPin,
    title: 'Candidature Spontanée Ciblée',
    visual: 'map',
    screenshot: '/screenshots/companies.png',
    points: [
      'Identification d\'entreprises selon votre profil',
      'Base de données de 50 000 entreprises françaises',
      'Ciblage géographique et sectoriel précis',
      'Envoi automatique de 50 à 200 candidatures par mois',
    ],
  },
  {
    icon: BarChart3,
    title: 'Tableau de Bord & Statistiques',
    visual: 'dashboard',
    screenshot: '/screenshots/Dashboard.png',
    points: [
      'Vue d\'ensemble de vos candidatures en temps réel',
      'Analyse du taux de réponse par secteur',
      'Recommandations personnalisées d\'amélioration',
      'Alertes et notifications en temps réel',
    ],
  },
  {
    icon: FileText,
    title: 'Lettre de Motivation par IA',
    visual: 'document',
    screenshot: '/screenshots/coverletter.png',
    points: [
      'Génération de lettre de motivation en 3 secondes',
      'Personnalisation automatique selon le secteur',
      'Optimisation avec mots-clés recherchés par les recruteurs',
      'Ton professionnel, naturel et convaincant',
    ],
  },
];

// Feature Card Component with mouse-following shimmer effect
interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const visualLabels: Record<string, string> = {
    document: 'Document Preview',
    platforms: 'Multi-Platform Integration',
    email: 'Email Automation',
    dashboard: 'Analytics Dashboard',
    map: 'Geographic Targeting',
    mobile: 'Mobile Experience',
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-full lg:max-w-4xl mx-auto"
    >
      {/* Glassmorphism card with backdrop blur */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-[32px] border border-zen-rose/10 shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 h-full">
        {/* Mouse-following radial gradient shimmer */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255, 105, 180, 0.1), transparent 40%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Title Section */}
          <div className="text-center mb-3 sm:mb-4 md:mb-6 pr-12 sm:pr-0">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              {feature.title}
            </h3>
          </div>

          {/* Screenshot or Platform Logos */}
          <div className="mb-3 sm:mb-4 md:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200/30 backdrop-blur-sm h-[180px] sm:h-[200px] md:h-[240px]">
            {index === 0 ? (
              // Platform logos for Auto-Apply Multi-Plateformes
              <div className="w-full h-full flex items-center justify-center gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4 md:px-6">
                {/* LinkedIn Logo */}
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#0A66C2] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">LinkedIn</span>
                </div>

                {/* Indeed Logo */}
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg border border-gray-100">
                    <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 200 200" fill="none">
                      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#2557a7" fontSize="48" fontWeight="bold" fontFamily="Arial, sans-serif">
                        indeed
                      </text>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Indeed</span>
                </div>

                {/* HelloWork Logo */}
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg border border-gray-100 p-1.5 sm:p-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/01/Logo_Hellowork.svg"
                      alt="HelloWork"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">HelloWork</span>
                </div>
              </div>
            ) : (
              // Regular screenshot for other cards
              <img
                src={feature.screenshot}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Feature Points */}
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
            {feature.points.map((point, pointIndex) => (
              <li
                key={pointIndex}
                className="flex items-start gap-1.5 sm:gap-2 md:gap-3 text-xs sm:text-sm md:text-base text-zen-gray"
              >
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-zen-rose flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Number Indicator */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-zen-rose to-pink-500 flex items-center justify-center shadow-lg">
          <span className="text-sm sm:text-base md:text-lg font-bold text-white">{index + 1}</span>
        </div>

        {/* Subtle shimmer border accent */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-zen-rose/5 via-transparent to-zen-rose/5 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function FeaturesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = cardsContainerRef.current;

      if (!section || !container) return;

      const cards = gsap.utils.toArray<HTMLElement>('.stack-card');
      if (cards.length === 0) return;

      // Set initial positions: all cards stacked in center
      gsap.set(cards, {
        x: 0,
        y: 0,
        scale: 0.9,
        opacity: 0.5,
        zIndex: (i) => cards.length - i,
      });

      // Set first card as active and fully visible
      gsap.set(cards[0], {
        scale: 1,
        opacity: 1,
        zIndex: cards.length + 1,
      });

      // Create timeline for scroll animation
      const isMobile = window.innerWidth < 640;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isMobile ? 'top 5%' : 'top top',
          end: () => `+=${window.innerHeight * cards.length * 1.2}`,
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (cards.length - 1),
            duration: 0.5,
            ease: 'power2.inOut',
          },
          invalidateOnRefresh: true,
        },
      });

      // Animate each card with scale and fade effects
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const displayDuration = 0.7;
        const transitionDuration = 0.3;
        const cardCycle = displayDuration + transitionDuration;

        const startTime = index * cardCycle;
        const transitionStart = startTime + displayDuration;

        // Current card scales down and fades out
        tl.to(
          card,
          {
            x: -100,
            opacity: 0,
            scale: 0.9,
            ease: 'power2.inOut',
            duration: transitionDuration,
          },
          transitionStart
        );

        // Next card scales up and fades in
        if (index < cards.length - 1) {
          tl.to(
            cards[index + 1],
            {
              scale: 1,
              opacity: 1,
              x: 0,
              ease: 'power2.inOut',
              duration: transitionDuration,
            },
            transitionStart
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-x-hidden min-h-screen flex flex-col"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-zen-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-purple-100/10 rounded-full blur-3xl" />
      </div>

      {/* Header with reduced vertical spacing */}
      <div className="relative pt-8 sm:pt-16 md:pt-20 pb-4 sm:pb-8 md:pb-10 px-4 sm:px-6 lg:px-8 z-20 pointer-events-none">
        <div className="max-w-full lg:max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-6">
            Ce que ZenApply.io fait pour vous
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zen-gray max-w-3xl mx-auto px-4">
            Une automatisation complète pour rester serein durant votre recherche.
          </p>
        </div>
      </div>

      {/* Stacked Cards Container - Large and Centered */}
      <div
        ref={cardsContainerRef}
        className="relative z-10 flex-1 flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-2 sm:pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12 overflow-x-hidden"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        <div className="relative w-full max-w-full lg:max-w-4xl mx-auto h-[500px] sm:h-[550px] md:h-[600px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="stack-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-full group"
            >
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
