import React from 'react';
import { Reveal } from '@/components/Reveal';
import { HOMEPAGE_PROJECTS } from '@/constants/projects';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-cyan-400/30 selection:text-white pt-24 pb-20 overflow-hidden">
      
      {/* 1. BRUTALIST HERO SECTION */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-32 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left: Massive Typography */}
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <div className="flex items-center space-x-4 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">System Status: Online</span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-[0.9] mb-8 mt-4 md:mt-0">
                ENGINEERING <br />
                <span className="text-cyan-300/80">ABSOLUTE</span> <br />
                SCALE.
              </h1>
            </Reveal>
            
            <Reveal delay={300}>
              <p className="text-base md:text-lg text-neutral-400 font-light max-w-xl leading-relaxed">
                Jare's Choice Labs engineers zero-latency infrastructure. From public governance systems to high-frequency fintech protocols.
              </p>
            </Reveal>
          </div>

          {/* Right: Technical Console */}
          <div className="hidden sm:block lg:col-span-4 border-l border-white/10 pl-8 pb-4">
            <Reveal delay={400}>
              <div className="space-y-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
                <div>
                  <p className="text-white mb-1">Principal</p>
                  <p>Olowojare Muhammed</p>
                </div>
                <div>
                  <p className="text-white mb-1">Specialty</p>
                  <p>Logistics & Fintech SaaS</p>
                </div>
                <div>
                  <p className="text-white mb-1">Location</p>
                  <p>Global Execution</p>
                </div>
                <div className="pt-6">
                  <a href="/contact" className="inline-block bg-white text-black px-6 py-3 font-bold hover:bg-neutral-300 transition-colors">
                    [ Initiate Protocol ]
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 2. CORE SYSTEMS GRID */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal delay={100}>
          <div className="border-t border-white/10 pt-12">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500">Selected Architecture // Core Systems</h2>
              <a href="/projects" className="hidden md:block font-mono text-[10px] uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors border-b border-white/30 pb-1">
                View All Systems -{'>'}
              </a>
            </div>
            
            {/* 1px Border Grid System - Staggered Animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gradient-to-b from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              {HOMEPAGE_PROJECTS.map((project, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <a href="/projects" className="group bg-slate-900/50 backdrop-blur-sm p-8 hover:bg-cyan-500/5 border border-transparent group-hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between min-h-[200px] h-full block">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-2 h-2 bg-cyan-400 group-hover:bg-purple-400 transition-colors rounded-full"></div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-300/60 group-hover:text-purple-300 transition-colors">{project.status}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight mb-2">{project.name}</h3>
                      <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{project.type}</p>
                    </div>
                    <div className="text-neutral-700 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 mt-8">
                      [ Inspect ]
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <a href="/projects" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors border-b border-white/30 pb-1">
                View All Systems -{'>'}
              </a>
            </div>

          </div>
        </Reveal>
      </section>
      
    </main>
  );
}