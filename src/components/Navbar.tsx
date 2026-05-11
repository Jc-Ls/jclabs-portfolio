"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LiveClock } from './LiveClock';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevents the background website from scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Desktop Logo */}
        <Link href="/" className="hidden md:flex items-center space-x-1 group">
          <span className="font-bold text-xl text-white tracking-widest">JCLs</span>
          <span className="text-[#EAB308] text-2xl group-hover:animate-bounce">.</span>
        </Link>

        {/* Mobile Logo / Menu Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex items-center space-x-1 z-50 relative p-2 -ml-2"
        >
          <span className="font-bold text-xl text-white tracking-widest uppercase">JCLs</span>
          <span className={`text-[#EAB308] text-2xl transition-transform duration-500 ${isOpen ? 'rotate-180 scale-150' : ''}`}>.</span>
        </button>

        {/* Live Clock (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <LiveClock />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-mono uppercase tracking-[0.2em] text-[10px]">
          <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">Architect</Link>
          <Link href="/projects" className="text-neutral-400 hover:text-white transition-colors">Systems</Link>
          <Link href="/contact" className="text-[#EAB308] hover:text-white transition-colors">Deploy</Link>
        </div>
      </div>

      {/* Premium Mobile Slide-Down Drawer */}
      <div className={`fixed inset-0 min-h-screen w-full bg-[#050505] z-40 flex flex-col pt-32 px-8 space-y-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        
        <div className="border-b border-white/10 pb-4 mb-4">
          <LiveClock />
        </div>
        
        <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-[0.3em] uppercase text-neutral-400 hover:text-white transition-colors">Architect</Link>
        <Link href="/projects" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-[0.3em] uppercase text-neutral-400 hover:text-white transition-colors">Systems</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-[0.3em] uppercase text-[#EAB308]">Deploy</Link>
        
        {/* Menu Footer */}
        <div className="mt-auto pb-12 pt-8 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
          System Operations <br/>
          Olowojare Muhammed
        </div>
      </div>
    </nav>
  );
};
