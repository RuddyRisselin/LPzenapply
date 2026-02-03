'use client';

import { Heart, Shield, Server, CreditCard, Linkedin, Instagram } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const footerLinks = {
  produit: [
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Fonctionalité', href: '#Fonctionalité' },
  ],
  ressources: [
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'CGV', href: '#cgv' },
    { label: 'CGU', href: '#cgu' },
    { label: 'Mentions Légales', href: '#mentions' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/zenapply-io', icon: 'linkedin' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@zenapply.io', icon: 'tiktok' },
    { label: 'Instagram', href: 'https://www.instagram.com/zenapply.io/', icon: 'instagram' },
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
            <div className="flex items-center gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zen-gray hover:text-zen-rose transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon === 'linkedin' && <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {link.icon === 'tiktok' && <TikTokIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {link.icon === 'instagram' && <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />}
                </a>
              ))}
            </div>
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
        </div>
      </div>
    </footer>
  );
}
