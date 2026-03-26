"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [showNative, setShowNative] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNative((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-20">
      
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 mb-20">
        
        {/* Left: Massive Text & Hooks */}
        <div className="flex-1 space-y-8 text-center md:text-left z-10">
          <h2 className="text-cyanGlow font-mono tracking-widest uppercase text-sm md:text-base font-bold animate-pulse">
            Welcome to Jare's Choice Labs
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight text-white">
            Hi, I'm a <br/>
            {/* BULLETPROOF INLINE STYLE GRADIENT */}
            <span style={{ backgroundImage: 'linear-gradient(to right, #00F0FF, #FF8A00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', paddingBottom: '0.5rem' }}>
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto md:mx-0">
            Crafting modern, responsive, and user-friendly web applications with passion, precision, and a focus on highly scalable architecture.
          </p>
          
          {/* Elegant Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 pt-4">
            {/* BULLETPROOF INLINE STYLE BUTTON */}
            <button style={{ background: 'linear-gradient(to right, #00F0FF, #FF8A00)' }} className="w-full sm:w-auto px-8 py-4 rounded-full text-black font-extrabold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              Download Resume
            </button>
            <Link href="/projects" className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-600 text-white font-medium hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors text-center text-lg">
              View My Work
            </Link>
          </div>
        </div>

        {/* Right: The Orbital Profile Picture */}
        <div className="flex-1 flex justify-center md:justify-end w-full mt-10 md:mt-0">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyanGlow animate-[spin_30s_linear_infinite] opacity-40"></div>
            
            <div className="absolute inset-5 rounded-full border-4 border-surface shadow-[0_0_80px_rgba(255,138,0,0.15)] bg-surface overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=500&q=80" alt="Native Attire Placeholder" className={`absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out ${showNative ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}/>
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=500&q=80" alt="Corporate Attire Placeholder" className={`absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out ${showNative ? 'opacity-0' : 'opacity-100'} group-hover:scale-105`}/>
            </div>

            <div className="absolute top-12 left-0 md:-left-6 w-16 h-16 bg-void rounded-full flex items-center justify-center border-2 border-cyanGlow shadow-[0_0_20px_rgba(0,240,255,0.5)] z-10 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-cyanGlow font-bold text-sm">JS</span>
            </div>
            <div className="absolute bottom-12 right-0 md:-right-6 w-16 h-16 bg-void rounded-full flex items-center justify-center border-2 border-forgeAmber shadow-[0_0_20px_rgba(255,138,0,0.5)] z-10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <span className="text-forgeAmber font-bold text-sm">Re</span>
            </div>
          </div>
        </div>
      </div>

      {/* Robust Stats / Milestones Bar */}
      <div className="max-w-7xl mx-auto w-full border-t border-gray-800 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
          <div className="flex flex-col space-y-2">
            <span className="text-4xl font-extrabold text-white">4+</span>
            <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Tech Stacks</span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-4xl font-extrabold text-white">10+</span>
            <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Projects Built</span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-4xl font-extrabold text-white">100%</span>
            <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Client Success</span>
          </div>
          <div className="flex flex-col space-y-2">
            {/* BULLETPROOF INLINE STYLE GRADIENT */}
            <span style={{ backgroundImage: 'linear-gradient(to right, #00F0FF, #FF8A00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }} className="text-4xl font-extrabold">24/7</span>
            <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">System Reliability</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
