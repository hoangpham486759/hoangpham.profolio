'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface JobType {
  role: string;
  company: string;
  period: string;
  desc: string;
}

export default function Timeline() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const jobs = t('timeline.jobs') as JobType[];

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        // Timeline items fade up and slide in smoothly
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 40,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
              invalidateOnRefresh: true,
            }
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert(); // clean memory safely!
  }, [jobs]);

  return (
    <section id="experience" ref={timelineRef} className="py-24 bg-neutral-900/40 relative overflow-hidden cyber-dots">
      {/* Decorative vertical background line with neon flow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-pink-500 tracking-widest uppercase mb-1 drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]">
            04 // PROFESSIONAL LOGS
          </span>
          <h2 className="font-mono font-black text-3xl md:text-4xl tracking-tight text-white mb-4 uppercase">
            {t('timeline.title')}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-pink-500 to-cyan-400 mb-4" />
          <p className="font-mono text-xs text-neutral-500 tracking-widest uppercase">
            {t('timeline.subtitle')}
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l border-neutral-800 dark:border-neutral-800 ml-4 md:ml-32 space-y-12 py-4">
          
          {jobs.map((job, idx) => (
            <div
              key={idx}
              ref={(el) => { itemsRef.current[idx] = el; }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-neutral-700 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-cyan-400 transition-colors" />
              </div>

              {/* Sidebar Period (Desktop only) */}
              <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right font-mono text-xs font-bold text-cyan-400/80 uppercase">
                {job.period}
              </div>

              {/* Job Card Block */}
              <div className="p-6 md:p-8 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 relative">
                {/* Decorative glow tags */}
                <div className="absolute top-0 right-0 px-3 py-1 bg-neutral-900 border-b border-l border-neutral-800 text-[10px] font-mono text-neutral-500 rounded-tr-xl rounded-bl">
                  LOG_ID // 00{idx + 1}
                </div>

                {/* Mobile Period Indicator (Visible only on mobile) */}
                <div className="flex md:hidden items-center gap-1.5 font-mono text-xs text-cyan-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{job.period}</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-mono text-base font-black text-white uppercase group-hover:text-cyan-400 transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  {job.desc}
                </p>

                {/* Cyber indicators */}
                <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-400/60 font-bold uppercase tracking-wider">
                  <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
                  <span>INTEGRITY CHECK PASSED</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
