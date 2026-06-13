import React from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/constants/projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20 px-6 md:px-12 selection:bg-cyan-400/30 selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* PAGE HEADER */}
        <div className="mb-20 border-b border-white/10 pb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-2 h-2 bg-white"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">JCLs // Directory</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-[0.9]">
            SYSTEM <br />
            <span className="text-cyan-300/80">ARCHITECTURE.</span>
          </h1>
        </div>

        {/* PROJECTS GRID */}
        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
              
              {/* Left Side: 16:9 Image Container */}
              <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-video bg-neutral-900 border border-white/10 overflow-hidden">
                  {/* The Image */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    priority={index === 0}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                </div>
              </div>

              {/* Right Side: Project Data */}
              <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-cyan-300/60 uppercase tracking-widest">{project.id} //</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest px-3 py-1 border border-cyan-500/30 text-cyan-300/80 bg-cyan-500/5 rounded">
                    {project.status}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                  {project.name}
                </h2>
                
                <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-6 border-l border-white/20 pl-4">
                  {project.type}
                </p>
                
                <p className="text-neutral-400 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono text-cyan-200 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 uppercase tracking-widest rounded hover:bg-cyan-500/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <a 
                    href={project.link || '/projects'} 
                    target={project.link ? '_blank' : undefined}
                    rel={project.link ? 'noopener noreferrer' : undefined}
                    className="font-mono text-xs uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors border-b border-white pb-1 hover:border-neutral-400"
                  >
                    {project.link ? '[ View Live ]' : '[ Inspect Architecture ]'}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}