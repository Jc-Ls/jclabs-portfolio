export default function Skills() {
  // We organize your skills into distinct, professional categories
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: [
        { name: "JavaScript", level: 9 },
        { name: "TypeScript", level: 8 },
        { name: "Python", level: 7 },
        { name: "HTML5 / CSS3", level: 9 }
      ]
    },
    {
      title: "Frontend & Frameworks",
      skills: [
        { name: "React", level: 9 },
        { name: "Next.js", level: 8 },
        { name: "Tailwind CSS", level: 9 },
        { name: "Flutter", level: 6 } 
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 7 },
        { name: "Neon DB", level: 8 },
        { name: "MongoDB", level: 8 },
        { name: "Supabase", level: 8 }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
      
      {/* Page Header */}
      <div className="text-center md:text-left mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-forgeAmber">Arsenal</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto md:mx-0">
          A quantified breakdown of the languages, frameworks, and database architectures I use to engineer scalable solutions.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-surface border border-gray-800 p-8 rounded-2xl hover:border-cyanGlow transition duration-500 shadow-lg relative overflow-hidden group">
            
            {/* Subtle background glow on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyanGlow to-forgeAmber opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h2 className="text-xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
              {category.title}
            </h2>
            
            <div className="space-y-7">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex flex-col gap-2">
                  
                  {/* Skill Name & Number */}
                  <div className="flex justify-between items-center text-sm font-bold tracking-wide">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-forgeAmber">{skill.level} <span className="text-gray-600">/ 10</span></span>
                  </div>
                  
                  {/* The Glowing Dot Meters */}
                  <div className="flex gap-1.5 sm:gap-2">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-500 ${
                          i < skill.level
                            ? "bg-cyanGlow shadow-[0_0_10px_rgba(0,240,255,0.7)]"
                            : "bg-void border border-gray-700"
                        }`}
                      ></div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
