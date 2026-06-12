'use client';

import React from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">System Error Detected</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
          SYSTEM <br />
          <span className="text-neutral-600">FAILURE.</span>
        </h1>
        
        <p className="text-neutral-400 font-light mb-8 leading-relaxed">
          {error.message || 'An unexpected error occurred. Our systems are investigating.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="font-mono text-xs uppercase tracking-[0.2em] px-6 py-3 bg-white text-black hover:bg-neutral-300 transition-colors font-bold"
          >
            [ Retry Protocol ]
          </button>
          <a
            href="/"
            className="font-mono text-xs uppercase tracking-[0.2em] px-6 py-3 border border-white/30 text-white hover:bg-white/5 transition-colors"
          >
            [ Return Home ]
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
          Error logged for diagnostics
        </div>
      </div>
    </main>
  );
}
