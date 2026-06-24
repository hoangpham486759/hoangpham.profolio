'use client';

import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-indigo-500" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand identity */}
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs font-black tracking-widest text-neutral-400">
            H.HOANG <span className="text-cyan-400">{"//"}</span> PORTFOLIO v1.0.4
          </span>
        </div>

        {/* Operational Status */}
        <div className="font-mono text-[9px] tracking-widest text-emerald-400 flex items-center gap-1.5 bg-emerald-950/20 px-3 py-1 rounded border border-emerald-500/20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>ALL CLIENT CHANNELS COMPATIBLE // SECURE_SEC</span>
        </div>

        {/* Copyright */}
        <div className="font-mono text-[10px] text-neutral-500 text-center md:text-right">
          &copy; {currentYear} PHẠM NGUYỄN HUY HOÀNG. ALL DATA PROTOCOLS RESERVED.
        </div>

      </div>
    </footer>
  );
}
