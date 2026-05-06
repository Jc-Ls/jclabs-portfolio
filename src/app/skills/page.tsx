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
    <div className="min-h-screen bg-[#080B10] text-white p-6 md:p-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#FF8A00] bg-clip-text text-transparent mb-6">
            Capabilities.
          </h1>
          <p className="text-gray-500 text-lg uppercase tracking-[0.4em]">Engineered for Performance</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="bg-[#111620] border border-white/5 p-10 rounded-[2rem] relative overflow-hidden group">
              <h3 className="text-white font-bold text-xl mb-8 flex items-center">
                <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: group.accent }}></span>
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill, i) => (
                  <li key={i} className="text-gray-400 font-medium border-b border-white/5 pb-2 last:border-0 group-hover:text-white transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
              {/* shadcn-style background shading */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 blur-[80px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40" style={{ backgroundColor: group.accent }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
