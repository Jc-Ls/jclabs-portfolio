import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B132B]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Typographic Logo - No Image Needed */}
        <Link href="/" className="group flex items-center space-x-1">
          <span className="text-2xl font-black text-white tracking-tighter group-hover:opacity-80 transition-opacity">
            JCLs
          </span>
          <span className="text-3xl font-black text-[#C5A059]">.</span>
        </Link>

        {/* Executive Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <Link href="/about" className="hover:text-white transition-colors">The Architect</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Architecture</Link>
          <Link href="/skills" className="hover:text-white transition-colors">Arsenal</Link>
          <Link href="/contact" className="hover:text-[#C5A059] transition-colors">Engage</Link>
        </div>

        {/* Mobile Menu Pill (Placeholder for functionality) */}
        <div className="md:hidden flex items-center">
          <button className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white hover:bg-white/5 transition-colors">
            Menu
          </button>
        </div>

      </div>
    </nav>
  );
};
