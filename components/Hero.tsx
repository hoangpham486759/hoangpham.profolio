'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowDown, Terminal, Download, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const { language, t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = t('hero.titles') as string[];

  // For interactive magnet effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  // Typewriter effect logic
  useEffect(() => {
    if (!titles || titles.length === 0) return;
    const currentTitle = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, titles]);

  // Magnet effect logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (magnetRef.current) {
        const rect = magnetRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 250) {
          // Attract element slightly
          setMagnetPos({
            x: distanceX * 0.15,
            y: distanceY * 0.15,
          });
        } else {
          setMagnetPos({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg scanlines">
      {/* Dynamic Cyberpunk grid and visual layers */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/40 to-neutral-950 pointer-events-none z-10" />

      {/* Floating Animated Ambient Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-[10%] left-0 w-full h-[1px] bg-cyan-400 animate-pulse" />
        <div className="absolute top-[40%] left-0 w-full h-[1px] bg-magenta-500 animate-pulse delay-75" />
        <div className="absolute top-[70%] left-0 w-full h-[1px] bg-cyan-400 animate-pulse delay-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Decorative System Code */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-6">
            <Terminal className="w-3.5 h-3.5 animate-pulse" />
            <span>{t('hero.greet')}</span>
          </div>

          {/* Name Display with Glitchy Visuals */}
          <h1 className="relative font-mono font-black text-5xl md:text-7xl tracking-tight text-white mb-2 uppercase select-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400">
              Phạm Nguyễn
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:neon-text-cyan transition-all duration-300">
              Huy Hoàng
            </span>
          </h1>

          {/* Typewriter Title */}
          <div className="h-8 md:h-10 flex items-center mb-6">
            <span className="font-mono text-lg md:text-2xl font-bold tracking-widest text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
              {typedText}
              <span className="animate-pulse ml-1 text-cyan-400">_</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="font-mono text-xs text-cyan-400/80 tracking-widest uppercase mb-4 font-bold border-l-2 border-cyan-400 pl-4">
            {t('hero.tagline')}
          </p>

          {/* Main Description */}
          <p className="text-neutral-400 text-sm md:text-base max-w-xl font-normal leading-relaxed mb-10">
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-mono text-xs font-black tracking-widest uppercase rounded relative overflow-hidden group cursor-pointer border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('hero.cta_primary')} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-neutral-100 font-mono text-xs font-bold tracking-widest uppercase rounded border border-neutral-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            >
              {t('hero.cta_secondary')}
            </button>

            {/* Resume Export with neat visual feedback */}
            <a
              href="/Phạm_Nguyễn_Huy_Hoàng_cv.pdf"
              download
              className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-cyan-400 transition-colors ml-2 py-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t('hero.download_cv')}</span>
            </a>
          </div>
        </div>

        {/* Right Column: High-Tech Interactive Magnet HUD Element */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div
            ref={magnetRef}
            style={{
              transform: `translate3d(${magnetPos.x}px, ${magnetPos.y}px, 0px)`,
              transition: magnetPos.x === 0 ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-2xl relative border-2 border-cyan-500/25 bg-neutral-950/80 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] group hover:border-cyan-400/60 transition-all duration-300 cursor-grab"
          >
            {/* Outer Cyberpunk Corners decoration */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

            {/* Glowing core graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 opacity-40 pointer-events-none" />

            {/* SVG Interactive Geometry Line art */}
            <div className="absolute inset-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="40" stroke="currentColor" className="text-cyan-400" strokeWidth="0.5" strokeDasharray="4 2" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" className="text-pink-500 animate-spin" style={{ transformOrigin: 'center', animationDuration: '20s' }} strokeWidth="0.5" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" className="text-cyan-400" strokeWidth="0.25" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" className="text-cyan-400" strokeWidth="0.25" />
              </svg>
            </div>

            {/* HUD Content details */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="font-mono text-[10px] tracking-widest text-cyan-400/75">
                STATUS: ENCRYPTED // ONLINE<br />
                COORDINATE: X={mousePos.x}, Y={mousePos.y}
              </div>
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center my-auto">
              {/* Abstract code representation */}
              <div className="font-mono text-xs text-emerald-400/80 leading-relaxed text-left max-w-full">
                <span className="text-pink-500">const</span> engineer = &#123;<br />
                &nbsp;&nbsp;name: <span className="text-cyan-300">&quot;Huy Hoang&quot;</span>,<br />
                &nbsp;&nbsp;role: <span className="text-cyan-300">&quot;Software Engineer&quot;</span>,<br />
                &nbsp;&nbsp;skills: [<span className="text-amber-300">&quot;React&quot;, &quot;Next.js&quot;, &quot;Vue&quot;, &quot;Nuxt&quot;, &quot;TypeScript&quot;</span>],<br />
                &nbsp;&nbsp;speed: <span className="text-purple-400">100</span><br />
                &#125;;
              </div>
            </div>

            <div className="relative z-10 flex justify-between items-end font-mono text-[9px] tracking-widest text-neutral-500">
              <span>SYS_V // 1.0.4</span>
              <span className="text-cyan-400">MAGNET_HUD_ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce Down Indicator */}
      <button
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group text-neutral-400 hover:text-cyan-400 transition-colors focus:outline-none"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">READ ARCHIVE</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </button>
    </section>
  );
}
