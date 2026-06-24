'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Github, Filter, Layers } from 'lucide-react';
import Image from 'next/image';

interface ProjectType {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
}

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = t('projects.items') as ProjectType[];

  // Dynamic filter tags extraction
  const filters = ['ALL', 'React', 'Next.js', 'Nuxt', 'GSAP', 'TypeScript'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.tech.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section id="projects" className="py-24 bg-neutral-950 relative overflow-hidden grid-bg">
      {/* Decorative cyber elements */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-1 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
            05 // NETWORK_ARCHIVE
          </span>
          <h2 className="font-mono font-black text-3xl md:text-4xl tracking-tight text-white mb-4 uppercase">
            {t('projects.title')}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mb-4" />
          <p className="font-mono text-xs text-neutral-500 tracking-widest uppercase">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[10px] tracking-widest uppercase mr-2">
            <Filter className="w-3 h-3 text-cyan-400" />
            <span>FILTER //</span>
          </div>

          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 font-mono text-xs tracking-wider uppercase border rounded transition-all duration-300 cursor-pointer focus:outline-none ${
                activeFilter === f
                  ? 'bg-cyan-500 text-neutral-950 border-cyan-400 font-black shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-cyan-400 hover:border-cyan-400/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Cover with overlay zoom */}
              <div className="relative h-56 md:h-64 w-full bg-neutral-950 overflow-hidden border-b border-neutral-800/60">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Scanner effect overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-950/80 border border-neutral-800 backdrop-blur font-mono text-[9px] text-cyan-400 tracking-wider">
                  <Layers className="w-3 h-3 animate-pulse" />
                  <span>DEPLOYS // LIVE</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-mono text-lg font-black text-white tracking-widest mb-3 uppercase group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 font-mono text-[10px] text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions Link panel */}
                  <div className="flex items-center gap-4 border-t border-neutral-800/60 pt-4">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-cyan-400 hover:text-cyan-300 hover:neon-text-cyan transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t('projects.visit_demo')}</span>
                    </a>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-neutral-400 hover:text-white transition-colors ml-4"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t('projects.github')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
