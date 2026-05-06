import React from 'react';

const feedbacks = [
  { name: "SaaS Client", role: "Logistics Lead", quote: "The Quickserve architecture Olowojare built transformed our delivery efficiency. Precision is an understatement." },
  { name: "Public Sector Partner", role: "Project Manager", quote: "Araba 2027 is a masterpiece of digital governance. He bridges the gap between admin and tech perfectly." },
  { name: "Community Lead", role: "Ilorin Auto Fest", quote: "High-performance code that matches the energy of our festival. Truly a Senior Architect mindset." }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#080B10] text-white p-6 md:p-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center">
          <h2 className="text-[#FF8A00] text-xs font-bold uppercase tracking-[0.5em] mb-4">Verification</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Trusted by Industry.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedbacks.map((item, i) => (
            <div key={i} className="bg-[#111620] border border-white/5 p-12 rounded-3xl hover:border-[#00F0FF]/20 transition-all duration-500">
              <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light italic">"{item.quote}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F0FF] to-[#FF8A00]"></div>
                <div>
                  <h4 className="font-bold text-white tracking-wide">{item.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
