'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Layers, Award, Coffee, Sparkles } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({ exp: 0, proj: 0, coffee: 0, clients: 0 });
  const aboutRef = useRef<HTMLDivElement>(null);

  // Trigger statistic rolling increment animation on mount/visible
  useEffect(() => {
    let active = true;
    const animateStats = () => {
      const targets = { exp: 5, proj: 35, coffee: 840, clients: 20 };
      const steps = 60;
      let step = 0;

      const interval = setInterval(() => {
        if (!active) return;
        step++;
        setStats({
          exp: Math.min(Math.round((targets.exp / steps) * step), targets.exp),
          proj: Math.min(Math.round((targets.proj / steps) * step), targets.proj),
          coffee: Math.min(Math.round((targets.coffee / steps) * step), targets.coffee),
          clients: Math.min(Math.round((targets.clients / steps) * step), targets.clients),
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, 20);
    };

    // Use IntersectionObserver to trigger when section comes in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      active = false;
      observer.disconnect();
    };
  }, []);

  const skillCategories = [
    {
      title: 'LANGUAGES',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Sass', 'Node.js']
    },
    {
      title: 'FRAMEWORKS & LIBS',
      skills: ['React', 'Next.js 14/15', 'Vue.js 3', 'Nuxt 3', 'Express']
    },
    {
      title: 'STATE & DATA',
      skills: ['Redux Toolkit', 'Pinia', 'Context API', 'GraphQL', 'RESTful APIs']
    },
    {
      title: 'MOTION & INTERACTIVITY',
      skills: ['GSAP (GreenSock)', 'Framer Motion', 'Tailwind CSS v4', 'Three.js']
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-24 bg-neutral-900/40 relative overflow-hidden cyber-dots">
      {/* Visual glowing overlay lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Description & Stats */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-mono text-xs text-pink-500 tracking-widest uppercase mb-1 drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]">
              01 // BIOGRAPHY
            </span>
            <h2 className="font-mono font-black text-3xl md:text-4xl tracking-tight text-white mb-6 uppercase">
              {t('about.title')}
            </h2>
            <p className="font-mono text-xs text-cyan-400 tracking-wider mb-8 uppercase font-bold border-b border-cyan-500/20 pb-4 w-full">
              {t('about.subtitle')}
            </p>

            <div className="space-y-6 text-neutral-300 text-sm md:text-base leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>

            {/* Glowing Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 w-full mt-10">
              <div className="p-4 rounded-lg bg-neutral-950/50 border border-neutral-800/80 hover:border-cyan-400/30 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-[9px] tracking-widest text-neutral-500">{t('about.stats.experience')}</span>
                </div>
                <div className="font-mono text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {stats.exp}+
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950/50 border border-neutral-800/80 hover:border-pink-500/30 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-pink-500" />
                  <span className="font-mono text-[9px] tracking-widest text-neutral-500">{t('about.stats.projects')}</span>
                </div>
                <div className="font-mono text-3xl font-black text-white group-hover:text-pink-500 transition-colors">
                  {stats.proj}+
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950/50 border border-neutral-800/80 hover:border-cyan-400/30 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="font-mono text-[9px] tracking-widest text-neutral-500">{t('about.stats.coffee')}</span>
                </div>
                <div className="font-mono text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {stats.coffee}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950/50 border border-neutral-800/80 hover:border-pink-500/30 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-pink-500" />
                  <span className="font-mono text-[9px] tracking-widest text-neutral-500">{t('about.stats.clients')}</span>
                </div>
                <div className="font-mono text-3xl font-black text-white group-hover:text-pink-500 transition-colors">
                  {stats.clients}+
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div className="lg:col-span-6 w-full flex flex-col items-start">
            <span className="font-mono text-xs text-pink-500 tracking-widest uppercase mb-1 drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]">
              02 // SKILLS MATRIX
            </span>
            <h2 className="font-mono font-black text-3xl md:text-4xl tracking-tight text-white mb-6 uppercase">
              {t('about.skills_title')}
            </h2>
            <p className="font-mono text-xs text-cyan-400 tracking-wider mb-8 uppercase font-bold border-b border-cyan-500/20 pb-4 w-full">
              INTERSECTING HARDWARE TECH STACKS
            </p>

            <div className="w-full space-y-6">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-neutral-950/70 border border-neutral-800/60 relative group hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
                >
                  {/* Category Accent lines */}
                  <div className="absolute top-0 left-0 w-3 h-[2px] bg-cyan-400 opacity-50 group-hover:opacity-100 group-hover:w-8 transition-all" />
                  <div className="absolute top-0 left-0 w-[2px] h-3 bg-cyan-400 opacity-50 group-hover:opacity-100 group-hover:h-8 transition-all" />

                  <h3 className="font-mono text-xs font-black tracking-widest text-pink-500 mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:border-cyan-400/80 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
