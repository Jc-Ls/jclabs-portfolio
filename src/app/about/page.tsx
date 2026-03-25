export default function About() {
  const services = [
    {
      title: "Full-Stack & Static Web Development",
      description: "From blazing-fast static promotional sites to complex, interactive web applications using React and Next.js.",
      icon: "🌐"
    },
    {
      title: "Database Architecture & APIs",
      description: "Designing scalable, secure backend systems and RESTful APIs using Neon DB, MongoDB, and Supabase.",
      icon: "💾"
    },
    {
      title: "Systems & App Architecture",
      description: "Structuring large-scale digital ecosystems, including multi-platform logistics applications and secure email routing.",
      icon: "🏗️"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
      
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Column: The Narrative */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            <h2 className="text-cyanGlow font-mono tracking-widest uppercase text-sm font-bold mb-3">
              About The Developer
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-forgeAmber">Olowojare Muhammed</span>
            </h1>
          </div>

          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              I am a self-taught Full-Stack Developer based in Nigeria, driven by a singular mission: using internet technologies to architect solutions for real-world societal and community challenges.
            </p>
            <p>
              My background is unconventional, and that is my greatest strength. With a degree and an ongoing MSc in Public Administration, I understand large-scale human systems, governance, and organizational needs. I taught myself software engineering to bridge the gap between public administration and digital innovation. 
            </p>
            <p>
              I thrive on building comprehensive ecosystems from the ground up. Whether it is engineering a bootstrapped, multi-interface logistics platform like Quickserve, or deploying scalable databases with Neon DB and Supabase, my approach is always the same: highly adaptable, relentlessly curious, and confident enough to build anything.
            </p>
          </div>

          {/* Core Tech Stack Pills */}
          <div className="pt-4">
            <h3 className="text-white font-bold mb-4">Core Arsenal:</h3>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'Python', 'Next.js', 'React', 'Neon DB', 'MongoDB', 'Supabase'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-surface border border-gray-800 rounded-full text-sm font-medium text-gray-300 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Services Grid */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
          <h2 className="text-2xl font-bold text-white mb-8">Specialized Expertise</h2>
          
          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-surface border border-gray-800 p-6 rounded-2xl hover:border-cyanGlow transition duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] flex gap-5 items-start"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyanGlow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
