export default function Projects() {
  // This is a JavaScript Array holding our data. 
  // In the future, this could come from a database!
  const portfolioProjects = [
    {
      title: "Quickserve Ecosystem",
      type: "Full-Stack Logistics App",
      description: "A comprehensive logistics platform featuring interconnected interfaces for Riders, Vendors, and Restaurants, unified by a centralized Admin Panel.",
      tech: ["React", "Node.js", "Flutter"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real Estate Portal",
      type: "Property Tech Platform",
      description: "A dynamic property listing application designed for seamless property discovery, featuring advanced filtering and secure data handling.",
      tech: ["Next.js", "Tailwind CSS", "Database"],
      github: "#",
      demo: "#"
    },
    {
      title: "V&V Vintage and Voltage",
      type: "Front-End Event Site",
      description: "An immersive, high-performance promotional website for an automotive festival, built with a focus on raw performance and custom UI animations.",
      tech: ["HTML5", "CSS3", "Vanilla JS"],
      github: "#",
      demo: "#"
    }
  ];

  // Everything inside the 'return()' is the "HTML" that gets rendered to the screen.
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
      
      {/* Page Header */}
      <div className="mb-16 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Featured <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-forgeAmber">
            Projects
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto md:mx-0">
          A selection of my recent engineering work, ranging from complex logistical ecosystems to high-performance event platforms.
        </p>
      </div>

      {/* The Grid Layout 
        'grid-cols-1' makes it 1 column on phones.
        'md:grid-cols-2' makes it 2 columns on tablets.
        'lg:grid-cols-3' makes it 3 columns on laptops.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* We use .map() to loop through our JavaScript array and generate a card for each project */}
        {portfolioProjects.map((project, index) => (
          <div key={index} className="bg-surface border border-gray-800 rounded-2xl overflow-hidden hover:border-cyanGlow transition duration-500 flex flex-col group shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] relative">
            
            {/* Image Section */}
            <div className="h-56 bg-void relative overflow-hidden flex items-center justify-center border-b border-gray-800">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyanGlow to-forgeAmber opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt={project.title} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
              />
            </div>
            
            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-xs text-forgeAmber font-bold tracking-widest uppercase mb-4">{project.type}</p>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Badges Loop */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-void border border-cyanGlow/30 text-cyanGlow text-xs px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3 mt-auto">
                <a href={project.demo} className="flex-1 text-center bg-cyanGlow/10 text-cyanGlow border border-cyanGlow py-2.5 rounded-lg font-bold text-sm hover:bg-cyanGlow hover:text-void transition-colors">
                  Live Demo
                </a>
                <a href={project.github} className="flex-1 text-center bg-transparent border border-gray-600 text-gray-300 py-2.5 rounded-lg font-bold text-sm hover:border-forgeAmber hover:text-forgeAmber transition-colors">
                  Source Code
                </a>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
