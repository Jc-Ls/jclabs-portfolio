"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { LiveClock } from './LiveClock';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Desktop Logo (Normal Link) */}
        <Link href="/" className="hidden md:flex items-center space-x-1 group">
          <span className="font-bold text-xl text-white tracking-widest">JCLs</span>
          <span className="text-[#EAB308] text-2xl group-hover:animate-bounce">.</span>
        </Link>

        {/* Mobile Logo (Acts as Hamburger Menu Trigger) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex items-center space-x-1 z-50 relative"
        >
          <span className="font-bold text-xl text-white tracking-widest uppercase">JCLs</span>
          <span className={`text-[#EAB308] text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>.</span>
        </button>

        {/* The Live Clock embedded in the Nav */}
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

      {/* Full-Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center items-center space-y-12 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <LiveClock />
        <Link href="/about" onClick={() => setIsOpen(false)} className="text-3xl font-bold tracking-widest text-neutral-400 hover:text-white transition-colors">ARCHITECT</Link>
        <Link href="/projects" onClick={() => setIsOpen(false)} className="text-3xl font-bold tracking-widest text-neutral-400 hover:text-white transition-colors">SYSTEMS</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-bold tracking-widest text-[#EAB308]">DEPLOY</Link>
      </div>
    </nav>
  );
};