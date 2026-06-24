'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Code, Zap, MoveUpRight, Star, Database, Flame } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-neutral-950 relative overflow-hidden grid-bg">
      {/* Decorative linear glow */}
      <div className="absolute top-[30%] left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-1 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
            03 // SERVICES PROTOCOLS
          </span>
          <h2 className="font-mono font-black text-3xl md:text-4xl tracking-tight text-white mb-4 uppercase">
            {t('services.title')}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mb-4" />
          <p className="font-mono text-xs text-neutral-500 tracking-widest uppercase">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Bento-Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          
          {/* Card 1: Figma/PSD to Code (Col Span 7) */}
          <div className="md:col-span-7 p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group transition-all duration-300 flex flex-col justify-between relative overflow-hidden min-h-[260px]">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <div className="w-12 h-12 rounded-lg bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-lg font-bold text-white mb-3 tracking-wider group-hover:text-cyan-400 transition-colors">
                {t('services.figma.title')}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-lg">
                {t('services.figma.desc')}
              </p>
            </div>

            <div className="flex items-center justify-between mt-8 border-t border-neutral-800/60 pt-4 font-mono text-[10px] tracking-widest text-neutral-500 group-hover:text-cyan-400 transition-colors">
              <span>PIXEL_PERFECT // RESPONSIVE</span>
              <MoveUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* Card 2: Performance Overclocking (Col Span 5) */}
          <div className="md:col-span-5 p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] group transition-all duration-300 flex flex-col justify-between relative overflow-hidden min-h-[260px]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <div className="w-12 h-12 rounded-lg bg-pink-950/40 border border-pink-500/40 flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 group-hover:border-pink-500 transition-all duration-300">
                <Zap className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="font-mono text-lg font-bold text-white mb-3 tracking-wider group-hover:text-pink-500 transition-colors">
                {t('services.performance.title')}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {t('services.performance.desc')}
              </p>
            </div>

            <div className="flex items-center justify-between mt-8 border-t border-neutral-800/60 pt-4 font-mono text-[10px] tracking-widest text-neutral-500 group-hover:text-pink-500 transition-colors">
              <span>SEO_READY // LIGHTHOUSE_100</span>
              <Flame className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </div>
          </div>

          {/* Card 3: Interactive Motion (Col Span 5) */}
          <div className="md:col-span-5 p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] group transition-all duration-300 flex flex-col justify-between relative overflow-hidden min-h-[260px]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <div className="w-12 h-12 rounded-lg bg-pink-950/40 border border-pink-500/40 flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 group-hover:border-pink-500 transition-all duration-300">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-lg font-bold text-white mb-3 tracking-wider group-hover:text-pink-500 transition-colors">
                {t('services.animations.title')}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {t('services.animations.desc')}
              </p>
            </div>

            <div className="flex items-center justify-between mt-8 border-t border-neutral-800/60 pt-4 font-mono text-[10px] tracking-widest text-neutral-500 group-hover:text-pink-500 transition-colors">
              <span>GSAP // SCROLL_TRIGGER // CANVAS</span>
              <MoveUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </div>
          </div>

          {/* Card 4: Enterprise Web Apps (Col Span 7) */}
          <div className="md:col-span-7 p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group transition-all duration-300 flex flex-col justify-between relative overflow-hidden min-h-[260px]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <div className="w-12 h-12 rounded-lg bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-lg font-bold text-white mb-3 tracking-wider group-hover:text-cyan-400 transition-colors">
                {t('services.webapp.title')}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-lg">
                {t('services.webapp.desc')}
              </p>
            </div>

            <div className="flex items-center justify-between mt-8 border-t border-neutral-800/60 pt-4 font-mono text-[10px] tracking-widest text-neutral-500 group-hover:text-cyan-400 transition-colors">
              <span>SSR_READY // NEXT.JS // NUXT</span>
              <MoveUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
