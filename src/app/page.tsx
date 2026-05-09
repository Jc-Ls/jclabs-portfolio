import React from 'react';
import { Reveal } from '@/components/Reveal';

export default function HomePage() {
  const projects = [
    { name: "TrustRelay", type: "Fintech Core", status: "Deployed" },
    { name: "Quickserve", type: "Logistics SaaS", status: "Deployed" },
    { name: "Wedding-OS", type: "Event Ecosystem", status: "Venture" },
    { name: "Dispatchr", type: "Fleet Management", status: "Deployed" },
    { name: "Al-Kawthar", type: "Digital Quran", status: "Deployed" },
    { name: "Araba2027", type: "Political Platform", status: "Archived" },
    { name: "Beacon-Hub", type: "Content Engine", status: "Deployed" },
    { name: "Auto Fest", type: "Event Architecture", status: "Deployed" },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-24 pb-20 overflow-hidden">
      
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
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 mt-4 md:mt-0">
                ENGINEERING <br />
                <span className="text-neutral-600">ABSOLUTE</span> <br />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {projects.map((project, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <a href="/projects" className="group bg-black p-8 hover:bg-white/5 transition-colors flex flex-col justify-between min-h-[200px] h-full block">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-1.5 h-1.5 bg-neutral-700 group-hover:bg-white transition-colors"></div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-600 group-hover:text-neutral-400 transition-colors">{project.status}</span>
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