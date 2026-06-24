'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Menu, X, Globe, Sun, Moon, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect to shrink Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-neutral-950/85 dark:bg-black/85 backdrop-blur-md border-b border-cyan-500/30'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <Cpu className="w-5 h-5 text-cyan-400 animate-pulse group-hover:text-magenta-500 transition-colors" />
            <span className="font-mono font-black text-lg tracking-widest text-neutral-100 dark:text-white">
              H.HOANG<span className="text-cyan-400 group-hover:text-pink-500 transition-colors"> {"//"}</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="font-mono text-xs tracking-wider text-neutral-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors py-2 uppercase relative group focus:outline-none cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Tech Controls: Language & Theme */}
            <div className="flex items-center gap-4 border-l border-neutral-800 dark:border-neutral-800 pl-6">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
                className="flex items-center gap-1.5 font-mono text-xs text-neutral-400 hover:text-cyan-400 cursor-pointer focus:outline-none"
                title="Change language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'EN' : 'VI'}</span>
              </button>

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer focus:outline-none"
                title={theme === 'dark' ? 'Light Cyber' : 'Dark Cyber'}
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-400" />}
              </button>
            </div>
          </nav>

          {/* Mobile Actions: Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              className="p-1.5 rounded bg-neutral-900/60 border border-neutral-800/60 text-neutral-400 focus:outline-none"
            >
              <span className="font-mono text-xs font-bold">{language === 'en' ? 'EN' : 'VI'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded bg-neutral-900/60 border border-neutral-800/60 text-neutral-400 focus:outline-none"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-200 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center px-6"
          >
            <ul className="flex flex-col items-center gap-6 mb-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="font-mono text-lg tracking-widest text-neutral-300 hover:text-cyan-400 transition-colors uppercase py-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 border border-cyan-400/50 hover:bg-cyan-400/10 text-cyan-400 font-mono text-xs px-6 py-2.5 rounded tracking-widest uppercase transition-all duration-300"
            >
              <X className="w-4 h-4" /> CLOSE CONNECTIONS
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
