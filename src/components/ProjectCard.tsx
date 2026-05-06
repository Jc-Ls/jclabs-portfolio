import React from 'react';

interface ProjectProps {
  title: string;
  category: string;
  status: string;
  description: string;
}

export const ProjectCard = ({ title, category, status, description }: ProjectProps) => (
  <div className="group relative bg-[#111620] border border-white/5 p-8 rounded-3xl transition-all duration-500 hover:border-[#00F0FF]/30 hover:-translate-y-1">
    <div className="flex items-center justify-between mb-6">
      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#080B10] border border-white/10 text-[#FF8A00]">
        {status}
      </span>
      <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#00F0FF] transition-colors">{title}</h3>
    <p className="text-gray-500 text-xs mb-6 uppercase tracking-tighter">{category}</p>
    <p className="text-gray-400 text-sm leading-relaxed mb-8">{description}</p>
    <div className="pt-6 border-t border-white/5 flex items-center text-[10px] font-bold text-white/20 group-hover:text-white transition-colors">
      CASE STUDY <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
    </div>
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00F0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </div>
);
