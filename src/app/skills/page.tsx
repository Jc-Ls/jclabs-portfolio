import React from 'react';

const skillGroups = [
  {
    category: "Core Stack",
    skills: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS"],
    accent: "#00F0FF"
  },
  {
    category: "Data & Systems",
    skills: ["Drizzle ORM", "Neon DB", "Node.js", "PostgreSQL"],
    accent: "#FF8A00"
  },
  {
    category: "Architecture",
    skills: ["Scalable UI", "API Design", "Database Modeling", "Logistics Systems"],
    accent: "#00F0FF"
  }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-6 md:p-24 selection:bg-cyan-400/30 selection:text-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6">
            CAPABILITIES.
          </h1>
          <p className="text-neutral-400 text-lg uppercase tracking-[0.4em]">Engineered for Scale</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 p-10 rounded-xl hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-slate-900/50 transition-all duration-300 overflow-hidden">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-white font-bold text-xl mb-8 flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3 bg-cyan-400 group-hover:bg-purple-400 transition-colors"></span>
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="text-neutral-400 font-medium border-b border-cyan-500/10 pb-2 last:border-0 group-hover:text-cyan-300 transition-colors">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Ambient glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 blur-[80px] opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300 bg-gradient-to-br from-cyan-400 to-purple-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
