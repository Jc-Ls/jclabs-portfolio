import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-3xl mx-auto">
        
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <span className="animate-pulse w-2 h-2 bg-white"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Secure Channel Open</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6">
            INITIATE <br/>
            <span className="text-neutral-600">DEPLOYMENT.</span>
          </h1>
          <p className="text-neutral-400 font-light leading-relaxed">
            Available for enterprise architecture roles, technical co-founder positions, and high-level SaaS consulting.
          </p>
        </div>

        {/* Brutalist Contact Form */}
        <div className="bg-[#050505] border border-white/10 p-8">
          <form className="space-y-8 font-mono text-sm">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Identify (Name / Org)</label>
              <input type="text" className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="e.g. Acme Corp" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Return Vector (Email)</label>
              <input type="email" className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="director@acme.com" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Directives (Project Scope)</label>
              <textarea rows={4} className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors resize-none" placeholder="Detail your system requirements..."></textarea>
            </div>
            <button type="button" className="w-full bg-white text-black font-bold tracking-widest uppercase py-4 text-xs hover:bg-neutral-300 transition-colors">
              [ Transmit Data ]
            </button>
          </form>
        </div>

        {/* Direct Comms Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs uppercase tracking-widest border-t border-white/10 pt-12">
          <div>
            <p className="text-neutral-500 mb-2">Direct Comms</p>
            <a href="mailto:jareschoicalabs@gmail.com" className="text-white hover:text-neutral-400 border-b border-white/30 pb-1">jareschoicalabs@gmail.com</a>
          </div>
          <div>
            <p className="text-neutral-500 mb-2">Operating Base</p>
            <p className="text-white">Abuja, FCT, Nigeria</p>
          </div>
        </div>

      </div>
    </main>
  );
}