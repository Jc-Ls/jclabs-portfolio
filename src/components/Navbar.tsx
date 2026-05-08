"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-mono tracking-tighter">
        
        {/* Stark Typographic Logo */}
        <Link href="/" className="group flex items-center space-x-2 z-50 relative">
          <div className="w-2 h-2 bg-white group-hover:scale-150 transition-transform duration-300"></div>
          <span className="font-bold text-white uppercase tracking-widest">JCLs.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-neutral-500 uppercase tracking-widest text-[10px]">
          <Link href="/about" className="hover:text-white transition-colors">Architect</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Systems</Link>
          <Link href="/contact" className="text-white border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors">Deploy</Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Full-Screen Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col justify-center items-center space-y-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Architect</Link>
        <Link href="/projects" onClick={() => setIsOpen(false)} className="text-2xl font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Systems</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-mono uppercase tracking-widest text-white border-b border-white pb-1">Deploy</Link>
      </div>
    </nav>
  );
};