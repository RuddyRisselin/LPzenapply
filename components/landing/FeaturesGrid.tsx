'use client';

import { useRef, useLayoutEffect, useState } from 'react';
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
    icon: FileText,
    title: 'Lettres de Motivation IA',
    visual: 'document',
    points: [
      'Génération en 3 secondes',
      'Adaptation au secteur',
      'Mots-clés optimisés',
      'Ton professionnel et humain',
    ],
  },
  {
    icon: Target,
    title: 'Auto-Apply Multi-Plateformes',
    visual: 'platforms',
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
    points: [
      'Relance automatique après 7 jours',
      'Message personnalisé',
      'Suivi des ouvertures',
      'Timing data-driven',
    ],
  },
  {
    icon: BarChart3,
    title: 'Dashboard & Analytics',
    visual: 'dashboard',
    points: [
      'Vue d\'ensemble immédiate',
      'Taux de réponse par secteur',
      'Suggestions d\'amélioration',
      'Alertes temps réel',
    ],
  },
  {
    icon: MapPin,
    title: 'Candidatures Spontanées Ciblées',
    visual: 'map',
    points: [
      'Identification par profil',
      'Base de 50 000 entreprises',
      'Ciblage géographique',
      'Volume de 50 à 200 envois/mois',
    ],
  },
  {
    icon: Smartphone,
    title: 'Suivi Centralisé',
    visual: 'mobile',
    points: [
      'Application mobile dédiée',
      'Notifications push',
      'Synchronisation automatique',
      'Interface épurée',
    ],
  },
];

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

      // Set initial positions: all cards stacked on the right
      gsap.set(cards, {
        x: 0,
        y: 0,
        scale: 0.9,
        opacity: 0.3,
        zIndex: (i) => cards.length - i,
      });

      // Set first card as active
      gsap.set(cards[0], {
        scale: 1,
        opacity: 1,
        zIndex: cards.length + 1,
      });

      // Create timeline for scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${window.innerHeight * cards.length * 1.0}`, // Reduced scroll distance
          scrub: 0.8, // More responsive
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (cards.length - 1),
            duration: 0.5,
            ease: 'power2.inOut',
          },
          invalidateOnRefresh: true,
        },
      });

      // Animate each card with proper spacing between transitions
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Skip last card (it just stays)

        // Each card gets: [display time] → [transition time]
        const displayDuration = 0.7; // Time card is fully visible
        const transitionDuration = 0.3; // Time for the transition itself
        const cardCycle = displayDuration + transitionDuration;

        const startTime = index * cardCycle;
        const transitionStart = startTime + displayDuration;

        // Current card fades out AFTER display time
        tl.to(
          card,
          {
            x: -200,
            opacity: 0,
            scale: 0.8,
            ease: 'power2.inOut',
            duration: transitionDuration,
          },
          transitionStart
        );

        // Next card comes to center at the same time
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
      className="relative bg-white overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-100/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl" />
      </div>

      {/* Header - Stays visible */}
      <div className="absolute top-0 left-0 right-0 pt-16 pb-8 px-4 sm:px-6 lg:px-8 z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ce que ZenApply fait pour vous
          </h2>
          <p className="text-lg text-[#808080] max-w-2xl mx-auto">
            Une automatisation complète pour rester serein durant votre recherche.
          </p>
        </div>
      </div>

      {/* Stacked Cards Container */}
      <div
        ref={cardsContainerRef}
        className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="stack-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <div className="relative bg-white rounded-3xl border border-[#F3F4F6] shadow-2xl p-8 sm:p-10 transition-all duration-300 group">
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/20 to-transparent rounded-3xl pointer-events-none" />

              {/* Active Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF69B4]/30 to-pink-300/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FF69B4]/10 to-pink-200/10 mb-6">
                    <feature.icon className="w-10 h-10 text-[#FF69B4]" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                </div>

                {/* Visual Placeholder */}
                <div className="mb-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 p-8 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 mb-3">
                      <feature.icon className="w-10 h-10 text-[#FF69B4]/40" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                      {feature.visual === 'document' && 'Document Preview'}
                      {feature.visual === 'platforms' && 'LinkedIn · Indeed · HelloWork'}
                      {feature.visual === 'email' && 'Email Mockup'}
                      {feature.visual === 'dashboard' && 'Analytics Dashboard'}
                      {feature.visual === 'map' && 'Location Map'}
                      {feature.visual === 'mobile' && 'iOS / Android App'}
                    </p>
                  </div>
                </div>

                {/* Feature Points */}
                <ul className="space-y-4">
                  {feature.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 text-base text-[#808080]"
                    >
                      <Check className="w-6 h-6 text-[#FF69B4] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Number Indicator */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF69B4] to-pink-500 flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-white">{index + 1}</span>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-transparent via-pink-50/50 to-pink-100/50 rounded-br-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
        <p className="text-sm text-[#808080] mb-2">Scroll pour découvrir</p>
        <div className="w-6 h-10 border-2 border-[#808080]/30 rounded-full mx-auto flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#FF69B4] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
