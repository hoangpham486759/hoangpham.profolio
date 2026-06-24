import React from 'react';
import Link from 'next/link';
import { Terminal, RefreshCw, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 flex flex-col justify-center items-center px-6 relative overflow-hidden scanlines grid-bg">
      {/* Decorative cyber overlays */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/40 to-neutral-950 pointer-events-none z-10" />

      <div className="max-w-md w-full p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] relative z-20 text-center transition-all duration-300">
        {/* Cyberpunk corner details */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-pink-500" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-pink-500" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-500" />

        <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded bg-pink-950/40 border border-pink-500/30 text-pink-500 font-mono text-xs tracking-wider mb-8 mx-auto w-fit">
          <Terminal className="w-4 h-4 animate-pulse" />
          <span>ROUTE_CRITICAL_ERROR // 404</span>
        </div>

        <h1 className="font-mono font-black text-6xl md:text-8xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 hover:neon-text-magenta transition-all duration-300 select-none mb-4">
          404
        </h1>

        <h2 className="font-mono text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">
          SECTOR NOT FOUND // ADDR_CORRUPTED
        </h2>

        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-8">
          The requested cyber-grid node does not exist or has been permanently dereferenced from Nexus central index.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-mono text-xs font-black tracking-widest uppercase rounded flex items-center justify-center gap-2 border border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-transparent hover:bg-white/5 text-neutral-300 font-mono text-xs font-bold tracking-widest uppercase rounded border border-neutral-700 hover:border-cyan-400 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>RE-CONNECT</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
