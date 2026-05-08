import React from 'react';

export default function ProjectsPage() {
  // Your full project arsenal data
  const projects = [
    {
      id: "01",
      name: "Quickserve",
      type: "Logistics SaaS",
      status: "Acquisition Open",
      description: "High-performance delivery and logistics architecture built for zero-latency dispatching and fleet management.",
      tech: ["Next.js", "WebSockets", "PostgreSQL"],
      // NOTE TO OLOWOJARE: Drop your image in the "public" folder and update this path
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
    },
    {
      id: "02",
      name: "TrustRelay",
      type: "Fintech Core Protocol",
      status: "Operational",
      description: "Secure, high-frequency financial transaction relayer designed with enterprise-grade encryption.",
      tech: ["React", "Node.js", "Redis"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "03",
      name: "Wedding-OS",
      type: "Event Ecosystem",
      status: "Seeking Partner",
      description: "Comprehensive digital operating system for high-end event management, guest tracking, and vendor coordination.",
      tech: ["Next.js", "Tailwind CSS", "Prisma"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "04",
      name: "Al-Kawthar",
      type: "Digital Quran",
      status: "Deployed",
      description: "A highly optimized, accessible digital Quran application engineered for seamless reading and global reach.",
      tech: ["React Native", "API Integrations"],
      image: "https://images.unsplash.com/photo-1608138378351-4091a080d9ee?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "05",
      name: "Dispatchr",
      type: "Fleet Management",
      status: "Deployed",
      description: "Real-time routing and dispatching system optimized for complex supply chain logistics.",
      tech: ["React", "Maps API", "Node.js"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8ed7e66a5a?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* PAGE HEADER */}
        <div className="mb-20 border-b border-white/10 pb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-2 h-2 bg-white"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">JCLs // Directory</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
            SYSTEM <br />
            <span className="text-neutral-600">ARCHITECTURE.</span>
          </h1>
        </div>

        {/* PROJECTS GRID */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
              
              {/* Left Side: 16:9 Image Container */}
              <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-video bg-neutral-900 border border-white/10 overflow-hidden">
                  {/* The Image */}
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="object-cover w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  {/* Brutalist Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity m-4"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity m-4"></div>
                </div>
              </div>

              {/* Right Side: Project Data */}
              <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">{project.id} //</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest px-3 py-1 border border-white/10 text-neutral-400">
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
                    <span key={i} className="text-[10px] font-mono text-white bg-white/5 px-3 py-1 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <button className="font-mono text-xs uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors border-b border-white pb-1 hover:border-neutral-400">
                    [ Inspect Architecture ]
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}