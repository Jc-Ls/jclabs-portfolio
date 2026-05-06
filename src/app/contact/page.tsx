import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080B10] text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-6xl md:text-9xl font-bold bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent mb-12">
          Start a Project.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="mailto:your-email@example.com" className="bg-[#111620] border border-white/5 p-6 rounded-2xl hover:bg-[#00F0FF] hover:text-[#080B10] transition-all duration-500 group">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#080B10]/60 mb-2">Email</span>
            Inquiry →
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="bg-[#111620] border border-white/5 p-6 rounded-2xl hover:bg-[#FF8A00] hover:text-[#080B10] transition-all duration-500 group">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#080B10]/60 mb-2">Professional</span>
            LinkedIn →
          </a>
          <a href="https://github.com/jc-ls" className="bg-[#111620] border border-white/5 p-6 rounded-2xl hover:bg-white hover:text-[#080B10] transition-all duration-500 group">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#080B10]/60 mb-2">Source Code</span>
            GitHub →
          </a>
        </div>
        
        <p className="mt-20 text-gray-600 text-sm tracking-tighter">
          Currently based in Lagos, Nigeria. Operating globally. 24/7 System Reliability.
        </p>
      </div>
    </div>
  );
}
