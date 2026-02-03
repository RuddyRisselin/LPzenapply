'use client';

import { Heart, Shield, Server, CreditCard } from 'lucide-react';

const footerLinks = {
  produit: [
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Features', href: '#features' },
    { label: 'Démo', href: '#demo' },
    { label: 'Changelog', href: '#changelog' },
  ],
  ressources: [
    { label: 'Blog', href: '#blog' },
    { label: 'Guides', href: '#guides' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: '#support' },
  ],
  legal: [
    { label: 'CGV', href: '#cgv' },
    { label: 'CGU', href: '#cgu' },
    { label: 'Mentions Légales', href: '#mentions' },
    { label: 'RGPD', href: '#rgpd' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#F9FAFB] border-t border-gray-200 overflow-x-hidden">
      <div className="max-w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Produit Column */}
          <div>
            <h3 className="text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Produit
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.produit.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zen-gray hover:text-zen-rose transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources Column */}
          <div>
            <h3 className="text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Ressources
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zen-gray hover:text-zen-rose transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal Column */}
          <div>
            <h3 className="text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Légal
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zen-gray hover:text-zen-rose transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Social
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zen-gray hover:text-zen-rose transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6 sm:mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-zen-gray text-xs sm:text-sm text-center sm:text-left">
            <span>© 2026 RUMA SOLUTIONS</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-1 sm:gap-1.5">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-zen-rose fill-zen-rose" /> by Ruddy Risselin
            </span>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zen-gray">
              <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2} />
              <span>Paiement Stripe</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zen-gray">
              <Server className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2} />
              <span>Hébergé par Hostinger</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zen-gray">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2} />
              <span>Conforme RGPD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
