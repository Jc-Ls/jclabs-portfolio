import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative bg-[#0B132B] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Massive Faded Typographic Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-black text-white tracking-tighter">JCLs.</span>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] mb-6">Sitemap</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">The Architect</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Selected Architecture</a></li>
              <li><a href="/skills" className="hover:text-white transition-colors">Core Capabilities</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] mb-6">Legal & Operations</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Protocol</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Architecture</li>
              <li className="hover:text-white transition-colors cursor-pointer">Client Engagement</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] mb-6">Network</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-mono">
              <li><a href="https://linkedin.com/in/olowojare" className="hover:text-[#C5A059] transition-colors">[ LINKEDIN ]</a></li>
              <li><a href="https://github.com/Jc-Ls" className="hover:text-[#C5A059] transition-colors">[ GITHUB ]</a></li>
              <li><a href="https://x.com/yourhandle" className="hover:text-[#C5A059] transition-colors">[ X ]</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-xs mb-6 md:mb-0 tracking-widest uppercase">
            © 2026 Jare's Choice Labs. Engineered for Performance.
          </p>
          {/* Trust Anchor: System Status */}
          <div className="flex items-center space-x-3 bg-black/30 px-4 py-2 rounded-sm border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
              System Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
