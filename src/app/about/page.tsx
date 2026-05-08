import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">

        {/* 1. EXECUTIVE IDENTITY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Side: Brutalist Portrait */}
          <div className="relative group aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden">
            {/* Placeholder Image - You will swap this with your actual photo */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              alt="Olowojare Muhammed"
              className="object-cover w-full h-full grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-black/80 backdrop-blur-sm border-t border-white/10">
              <h2 className="text-2xl font-black tracking-tighter uppercase text-white">Olowojare Muhammed</h2>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mt-2">Principal Architect</p>
            </div>
          </div>

          {/* Right Side: The Narrative */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white leading-[1.1]">
                SYSTEMATIC <br/>
                <span className="text-neutral-600">EXECUTION.</span>
              </h1>
              <p className="text-lg text-neutral-400 font-light leading-relaxed">
                My journey bridges public administration, healthcare infrastructure, and high-performance digital ecosystems. I do not just write code; I architect assets designed for absolute scale and zero-latency execution.
              </p>
            </div>

            <div className="space-y-8 font-mono text-sm">
              <div className="border-l border-white/20 pl-6">
                <h3 className="text-white uppercase tracking-widest mb-2 font-bold text-xs">The Crossover</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Transitioning from public governance to full-stack engineering wasn't a career change—it was an evolution of solving complex systemic problems with flawless logic.
                </p>
              </div>
              <div className="border-l border-white/20 pl-6">
                <h3 className="text-white uppercase tracking-widest mb-2 font-bold text-xs">Engineering Philosophy</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Whether deploying a fintech protocol or a massive logistics engine, the standard remains the same: Enterprise-grade security, extreme reliability, and brutalist efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE VENTURE DESK (Relocated here) */}
        <div className="border-t border-white/10 pt-16">
          <div className="mb-8">
            <h2 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500 mb-2">The Venture Desk</h2>
            <p className="text-neutral-400 text-sm">Active platforms engineered and managed by JCLs. Open for strategic partnerships and institutional acquisition.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-sm min-w-[600px]">
              <thead>
                <tr className="text-neutral-500 border-b border-white/10">
                  <th className="pb-4 font-normal tracking-widest">Digital Asset</th>
                  <th className="pb-4 font-normal tracking-widest">Sector</th>
                  <th className="pb-4 font-normal tracking-widest text-right">Business Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="group hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="py-6 text-white font-bold tracking-tight">Quickserve App</td>
                  <td className="py-6 text-neutral-400">Logistics SaaS</td>
                  <td className="py-6 text-right">
                    <span className="text-white border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest">[ Open For Acquisition ]</span>
                  </td>
                </tr>
                <tr className="group hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="py-6 text-white font-bold tracking-tight">Wedding-OS</td>
                  <td className="py-6 text-neutral-400">Event Ecosystem</td>
                  <td className="py-6 text-right">
                    <span className="text-neutral-400 border border-neutral-700 px-3 py-1 text-[10px] uppercase tracking-widest">[ Seeking Partnership ]</span>
                  </td>
                </tr>
                <tr className="group hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="py-6 text-white font-bold tracking-tight">TrustRelay</td>
                  <td className="py-6 text-neutral-400">Fintech Protocol</td>
                  <td className="py-6 text-right">
                    <span className="text-neutral-600 px-3 py-1 text-[10px] uppercase tracking-widest">[ Operational ]</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}