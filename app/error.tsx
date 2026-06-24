'use client';

import React, { useEffect } from 'react';
import { Terminal, ShieldAlert, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error safely to console for debugging
    console.error('System Pipeline Fault:', error);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 flex flex-col justify-center items-center px-6 relative overflow-hidden scanlines grid-bg">
      {/* Decorative cyber overlays */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/40 to-neutral-950 pointer-events-none z-10" />

      <div className="max-w-md w-full p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] relative z-20 text-center transition-all duration-300">
        {/* Cyberpunk corner details */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-rose-500" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-rose-500" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-rose-500" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-rose-500" />

        <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded bg-rose-950/40 border border-rose-500/30 text-rose-500 font-mono text-xs tracking-wider mb-8 mx-auto w-fit animate-pulse">
          <ShieldAlert className="w-4 h-4" />
          <span>SYSTEM_PIPELINE_FAULT</span>
        </div>

        <h1 className="font-mono font-black text-5xl md:text-7xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 hover:neon-text-magenta transition-all duration-300 select-none mb-4">
          FAULT
        </h1>

        <h2 className="font-mono text-xs font-bold tracking-widest text-rose-400 uppercase mb-4">
          PIPELINE EXCEPTION DETECTED
        </h2>

        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-8">
          A rendering pipeline exception has occurred in the client application runtime context.
          <br />
          <span className="font-mono text-[10px] text-neutral-500 mt-2 block break-all">
            DIGEST: {error.digest || 'ERR_UNKNOWN_CONTEXT'}
          </span>
        </p>

        <button
          onClick={() => reset()}
          className="w-full px-6 py-2.5 bg-rose-500 hover:bg-rose-400 text-neutral-950 font-mono text-xs font-black tracking-widest uppercase rounded flex items-center justify-center gap-2 border border-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.3)] hover:shadow-[0_0_20px_rgba(244,63,94,0.6)] transition-all cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
          <span>RESET PIPELINE</span>
        </button>
      </div>
    </div>
  );
}
