import React from 'react';

const feedbacks = [
  { name: "SaaS Client", role: "Logistics Lead", quote: "The Quickserve architecture Olowojare built transformed our delivery efficiency. Precision is an understatement." },
  { name: "Public Sector Partner", role: "Project Manager", quote: "Araba 2027 is a masterpiece of digital governance. He bridges the gap between admin and tech perfectly." },
  { name: "Community Lead", role: "Ilorin Auto Fest", quote: "High-performance code that matches the energy of our festival. Truly a Senior Architect mindset." }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-6 md:p-24 selection:bg-cyan-400/30 selection:text-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center">
          <h2 className="text-cyan-400 text-xs font-bold uppercase tracking-[0.5em] mb-4">Verification</h2>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-8">Trusted by Industry.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedbacks.map((item, i) => (
            <div key={i} className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 p-12 rounded-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="relative z-10">
                <p className="text-neutral-300 text-lg leading-relaxed mb-10 font-light italic">"{item.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-400/20">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">{item.name}</h4>
                    <p className="text-neutral-400 text-xs uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
