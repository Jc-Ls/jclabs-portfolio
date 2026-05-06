import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080B10] text-white p-6 md:p-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#FF8A00] bg-clip-text text-transparent mb-6">
            The Architect.
          </h1>
          <p className="text-gray-400 text-xl font-light tracking-wide">
            Olowojare Muhammed — Bridging Public Governance and Digital Ecosystems.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: The Narrative */}
          <div className="space-y-8">
            <section>
              <h2 className="text-[#00F0FF] text-xs font-bold uppercase tracking-[0.3em] mb-4">Background</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                My journey began at the intersection of public administration and healthcare, where I learned the value of 
                <strong> structured systems</strong> and <strong>scalable solutions</strong>. Transitioning into 
                full-stack engineering wasn't just a career change—it was a mission to build digital tools that 
                function as efficiently as vital public services.
              </p>
            </section>

            <section className="bg-[#111620] border border-white/5 p-8 rounded-3xl">
              <h2 className="text-[#FF8A00] text-xs font-bold uppercase tracking-[0.3em] mb-4">Philosophy</h2>
              <p className="text-gray-400 leading-relaxed italic">
                "I don't just write code; I engineer digital environments. Whether it is a logistics hub like Quickserve 
                or a cultural platform like Ilorin Auto Fest, the goal is always the same: Precision, Performance, and Premium UX."
              </p>
            </section>
          </div>

          {/* Right Column: Expertise Grid (Bento Style) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#111620] p-6 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">4+</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest">Tech Stacks</p>
            </div>
            <div className="bg-[#111620] p-6 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest">Digital Ventures</p>
            </div>
            <div className="col-span-2 bg-gradient-to-br from-[#111620] to-[#080B10] p-8 rounded-2xl border border-white/5 hover:border-[#00F0FF]/30 transition-colors">
              <h3 className="text-[#00F0FF] font-semibold mb-2 text-sm uppercase tracking-widest">Core Mission</h3>
              <p className="text-gray-400 text-sm">
                Transforming Jare’s Choice Labs into a global powerhouse for high-performance logistics, 
                fintech, and community-driven platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
