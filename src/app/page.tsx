export default function Home() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
        {/* Left: Massive Text & Hooks */}
        <div className="flex-1 space-y-8 text-center md:text-left z-10">
          <h2 className="text-cyanGlow font-mono tracking-widest uppercase text-sm md:text-base font-bold">
            Welcome to Jare's Choice Labs
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
            Hi, I'm a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-forgeAmber">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto md:mx-0">
            Crafting modern, responsive, and user-friendly web applications with passion, precision, and a focus on highly scalable architecture.
          </p>
          
          {/* Elegant Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyanGlow to-forgeAmber text-void font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              Download Resume
            </button>
            <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-600 text-white font-medium hover:border-cyanGlow hover:text-cyanGlow transition-colors text-center text-lg">
              View GitHub
            </a>
          </div>
        </div>

        {/* Right: The Orbital Profile Picture */}
        <div className="flex-1 flex justify-center md:justify-end w-full mt-10 md:mt-0">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            
            {/* Outer Spinning Dashed Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyanGlow animate-[spin_30s_linear_infinite] opacity-40"></div>
            
            {/* Inner Solid Image Container */}
            <div className="absolute inset-5 rounded-full border-4 border-surface shadow-[0_0_80px_rgba(255,138,0,0.15)] bg-surface overflow-hidden">
              
              {/* YOUR PROFILE PICTURE GOES HERE */}
              {/* Just replace the src URL with a link to your actual photo */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
              
            </div>

            {/* Floating Tech Badges (Like the screenshot) */}
            <div className="absolute top-12 left-0 md:-left-6 w-16 h-16 bg-void rounded-full flex items-center justify-center border-2 border-cyanGlow shadow-[0_0_20px_rgba(0,240,255,0.5)] z-10">
              <span className="text-cyanGlow font-bold text-sm">JS</span>
            </div>
            <div className="absolute bottom-12 right-0 md:-right-6 w-16 h-16 bg-void rounded-full flex items-center justify-center border-2 border-forgeAmber shadow-[0_0_20px_rgba(255,138,0,0.5)] z-10">
              <span className="text-forgeAmber font-bold text-sm">Re</span>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
