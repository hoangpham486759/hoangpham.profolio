'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Terminal, Shield } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  // Quick initial load simulation for cyberpunk aesthetic (1 sec max)
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 5;
      if (current >= 100) {
        setLoadPercentage(100);
        clearInterval(interval);
        setTimeout(() => setLoading(false), 200);
      } else {
        setLoadPercentage(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-neutral-950 flex flex-col justify-center items-center px-6 font-mono scanlines">
        <div className="w-full max-w-sm flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs animate-pulse">
            <Terminal className="w-4 h-4" />
            <span>ESTABLISHING SECURE TERMINAL CONNECTION...</span>
          </div>

          <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800 relative">
            <div
              className="h-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] transition-all duration-100"
              style={{ width: `${loadPercentage}%` }}
            />
          </div>

          <div className="flex justify-between w-full text-[10px] text-neutral-500 font-bold">
            <span>PACKETS: {loadPercentage * 10} / 1000</span>
            <span>{loadPercentage}%</span>
          </div>

          <div className="text-[9px] text-neutral-600 self-center mt-4 flex items-center gap-1">
            <Shield className="w-3 h-3 text-emerald-500/60" />
            <span>ENVELOPE CRYPTOGRAPHY VERIFIED // ALL CLEAR</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-neutral-100 select-none">
      {/* Top sticky/floating Nav bar */}
      <Navbar />

      {/* Main interactive layouts */}
      <main className="relative w-full">
        {/* Hero presentation with Interactive Magnet effect */}
        <Hero />

        {/* About info with animated statistics & core skill matrices */}
        <About />

        {/* UI services Bento grid with hover neon borders */}
        <Services />

        {/* Chronological work experience timeline built with GSAP */}
        <Timeline />

        {/* Projects showcase with live filters & external demo links */}
        <Projects />

        {/* Secure message transmitter form connected to Next API */}
        <Contact />
      </main>

      {/* High-fidelity visual footer */}
      <Footer />
    </div>
  );
}
