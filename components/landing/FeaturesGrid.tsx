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
    title: 'Auto-Apply Multi-Plateformes',
    visual: 'platforms',
    screenshot: '/screenshots/extention.png',
    points: [
      'Détection d\'offres 24/7',
      'Évitement des doublons',
      'Respect des règles plateformes',
      'Adaptation aux formulaires',
    ],
  },
  {
    icon: Mail,
    title: 'Relances Auto Intelligentes',
    visual: 'email',
    screenshot: '/screenshots/relance.png',
    points: [
      'Relance automatique après 7 jours',
      'Message personnalisé',
      'Suivi des ouvertures',
      'Timing data-driven',
    ],
  },
  {
    icon: MapPin,
    title: 'Candidatures Spontanées Ciblées',
    visual: 'map',
    screenshot: '/screenshots/companies.png',
    points: [
      'Identification par profil',
      'Base de 50 000 entreprises',
      'Ciblage géographique',
      'Volume de 50 à 200 envois/mois',
    ],
  },
  {
    icon: BarChart3,
    title: 'Dashboard & Analytics',
    visual: 'dashboard',
    screenshot: '/screenshots/Dashboard.png',
    points: [
      'Vue d\'ensemble immédiate',
      'Taux de réponse par secteur',
      'Suggestions d\'amélioration',
      'Alertes temps réel',
    ],
  },
  {
    icon: FileText,
    title: 'Lettres de Motivation IA',
    visual: 'document',
    screenshot: '/screenshots/coverletter.png',
    points: [
      'Génération en 3 secondes',
      'Adaptation au secteur',
      'Mots-clés optimisés',
      'Ton professionnel et humain',
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
      className="relative w-full max-w-4xl mx-auto"
    >
      {/* Glassmorphism card with backdrop blur */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-[32px] border border-zen-rose/10 shadow-2xl p-5 sm:p-10 h-full">
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
          <div className="text-center mb-4 sm:mb-6 pr-12 sm:pr-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {feature.title}
            </h3>
          </div>

          {/* Screenshot or Platform Logos */}
          <div className="mb-4 sm:mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200/30 backdrop-blur-sm h-[200px] sm:h-[240px]">
            {index === 0 ? (
              // Platform logos for Auto-Apply Multi-Plateformes
              <div className="w-full h-full flex items-center justify-center gap-8 px-6">
                {/* LinkedIn Logo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-[#0A66C2] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">LinkedIn</span>
                </div>

                {/* Indeed Logo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100">
                    <svg className="w-16 h-16" viewBox="0 0 200 200" fill="none">
                      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#2557a7" fontSize="48" fontWeight="bold" fontFamily="Arial, sans-serif">
                        indeed
                      </text>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Indeed</span>
                </div>

                {/* HelloWork Logo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100 p-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/01/Logo_Hellowork.svg"
                      alt="HelloWork"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">HelloWork</span>
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
          <ul className="space-y-2 sm:space-y-3">
            {feature.points.map((point, pointIndex) => (
              <li
                key={pointIndex}
                className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-zen-gray"
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-zen-rose flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Number Indicator */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-zen-rose to-pink-500 flex items-center justify-center shadow-lg">
          <span className="text-base sm:text-lg font-bold text-white">{index + 1}</span>
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top -20%',
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
      className="relative bg-white overflow-hidden min-h-screen flex flex-col"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-zen-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-100/10 rounded-full blur-3xl" />
      </div>

      {/* Header with increased vertical spacing */}
      <div className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ce que ZenApply fait pour vous
          </h2>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto">
            Une automatisation complète pour rester serein durant votre recherche.
          </p>
        </div>
      </div>

      {/* Stacked Cards Container - Large and Centered */}
      <div
        ref={cardsContainerRef}
        className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-8"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        <div className="relative w-full max-w-4xl mx-auto h-[650px] sm:h-[550px]">
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
