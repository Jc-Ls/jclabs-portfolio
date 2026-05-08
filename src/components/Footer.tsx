import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-12 pb-8 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center space-x-3">
          <span className="font-bold text-white uppercase tracking-widest text-sm">JCLs.</span>
          <span className="text-neutral-600 text-[10px] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Jare's Choice Labs
          </span>
        </div>

        {/* Social Comms (Replace # with your actual links) */}
        <div className="flex space-x-8 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
        </div>

        {/* System Status */}
        <div className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest text-center md:text-right">
          Engineered by Olowojare Muhammed<br/>
          All Systems Operational
        </div>

      </div>
    </footer>
  );
};