import React from 'react';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B132B] text-white selection:bg-[#C5A059] selection:text-[#0B132B]">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        
        {/* Background Video (Silent, Looping) */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full opacity-40">
            {/* Generic High-End Placeholder Video. You can replace the src later. */}
            <source src="https://cdn.pixabay.com/video/2020/05/25/40134-424933069_large.mp4" type="video/mp4" />
          </video>
          {/* Deep Corporate Blue Overlay for Readability */}
          <div className="absolute inset-0 bg-[#0B132B]/85 backdrop-blur-[2px]"></div>
        </div>

        {/* Executive Copywriting */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-20">
          <div className="mb-8 inline-flex items-center space-x-3 border border-white/10 bg-black/20 px-5 py-2 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">Principal Architect</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 text-white leading-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E6C98A]">Enterprise-Grade</span><br />
            Digital Ecosystems.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Jare's Choice Labs bridges the gap between public governance and high-performance architecture, delivering secure fintech protocols and scalable logistics infrastructure.
          </p>
          
          {/* Muted Bronze Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/contact" className="w-full sm:w-auto px-10 py-4 bg-[#C5A059] hover:bg-[#E6C98A] text-[#0B132B] font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500">
              Start a Project
            </a>
            <a href="/projects" className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[#C5A059]/50 hover:border-[#C5A059] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#C5A059]/5">
              Explore Architecture
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE VENTURE DESK (Acquisition Board) */}
      <section className="py-32 px-6 md:px-12 bg-[#080D1F] border-t border-white/5 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.4em] mb-4">Acquisition Board</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">The Venture Desk.</h3>
            <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed text-lg font-light">
              Active platforms engineered and managed by JCLs. Currently open for strategic partnerships, seed rounds, and institutional acquisition.
            </p>
          </div>

          <div className="bg-[#0B132B] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-500 bg-black/30">
                    <th className="p-8 font-medium">Digital Asset</th>
                    <th className="p-8 font-medium">Sector</th>
                    <th className="p-8 font-medium text-right">Business Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-8 font-bold text-white group-hover:text-[#C5A059] transition-colors text-lg">Quickserve App</td>
                    <td className="p-8 text-gray-400">Logistics SaaS</td>
                    <td className="p-8 text-right">
                      <span className="inline-block px-4 py-2 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 text-xs font-mono tracking-widest uppercase">
                        [ Open for Acquisition ]
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-8 font-bold text-white group-hover:text-blue-400 transition-colors text-lg">Wedding-OS</td>
                    <td className="p-8 text-gray-400">Event Ecosystem</td>
                    <td className="p-8 text-right">
                      <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono tracking-widest uppercase">
                        [ Seeking Partnership ]
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-8 font-bold text-white group-hover:text-green-400 transition-colors text-lg">TrustRelay</td>
                    <td className="p-8 text-gray-400">Fintech Protocol</td>
                    <td className="p-8 text-right">
                      <span className="inline-block px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-mono tracking-widest uppercase">
                        [ Operational ]
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. ENTERPRISE FOOTER */}
      <Footer />
      
    </main>
  );
}
