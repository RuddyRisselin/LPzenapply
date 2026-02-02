'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF69B4] to-[#FF1493] bg-clip-text text-transparent">
              ZenApply
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-[#FF69B4] font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Connexion Button */}
            <motion.a
              href="#connexion"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 text-gray-700 hover:text-[#FF69B4] font-semibold rounded-full border-2 border-gray-300 hover:border-[#FF69B4] transition-all duration-200"
            >
              Connexion
            </motion.a>

            {/* Inscription Button - Highlighted */}
            <motion.a
              href="#inscription"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white font-bold rounded-full shadow-[0_10px_40px_rgba(255,105,180,0.3)] hover:shadow-[0_15px_60px_rgba(255,105,180,0.5)] transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Inscription
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF1493] to-[#FF69B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Navigation Links */}
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-[#FF69B4] hover:bg-pink-50 rounded-lg font-medium transition-all duration-200"
            >
              {item.name}
            </motion.a>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="pt-4 space-y-3 border-t border-gray-200">
            <motion.a
              href="#connexion"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-3 text-center text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-[#FF69B4] hover:text-[#FF69B4] transition-all duration-200"
            >
              Connexion
            </motion.a>

            <motion.a
              href="#inscription"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-8 py-3 text-center bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white font-bold rounded-full shadow-[0_10px_40px_rgba(255,105,180,0.3)] transition-all duration-300"
            >
              Inscription →
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
