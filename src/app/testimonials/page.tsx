"use client";

export default function Testimonials() {
  // Real-world context placeholders based on your actual ecosystem
  const testimonials = [
    {
      name: "Operations Director",
      company: "Quickserve Logistics",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=200&q=80",
      quote: "Olowojare didn't just write code; he architected an entire logistics ecosystem. His ability to connect Riders, Vendors, and the Admin panel seamlessly saved our operations. He builds solutions, not just websites.",
      rating: 5
    },
    {
      name: "Managing Partner",
      company: "AY'SMRT INVESTMENT LTD",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=200&q=80",
      quote: "Finding a developer who understands both complex backend databases and the actual business needs of a real estate firm is rare. The property tech platform he built is incredibly fast, secure, and user-friendly.",
      rating: 5
    },
    {
      name: "Community Tech Initiative",
      company: "Local NGO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=200&q=80",
      quote: "What sets him apart is his background in Public Administration. He doesn't just see pixels and code; he sees how internet technology can be deployed to solve actual societal challenges. Highly adaptable and brilliant.",
      rating: 5
    },
    {
      name: "Lead Organizer",
      company: "V&V Vintage and Voltage",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&q=80",
      quote: "We needed a high-performance promotional site for our automotive festival, and he delivered a masterpiece using pure HTML/CSS and Vanilla JS. The animations were flawless and the load time was instant.",
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
      
      {/* Page Header with Pulse Animation */}
      <div className="text-center mb-20 w-full">
        <h2 className="text-cyanGlow font-mono tracking-widest uppercase text-sm font-bold mb-3 animate-pulse">
          Client Success & Trust
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-forgeAmber">Experience</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Don't just take my word for it. Here is what directors, partners, and community leaders say about the digital ecosystems I engineer.
        </p>
      </div>

      {/* The Animated Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimony, idx) => (
          <div 
            key={idx} 
            className="group relative bg-surface border border-gray-800 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-cyanGlow hover:shadow-[0_10px_40px_rgba(0,240,255,0.15)]"
          >
            {/* Glowing Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-forgeAmber/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimony.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-forgeAmber" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimony.quote}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-4 border-t border-gray-800 pt-6">
                <img 
                  src={testimony.image} 
                  alt={testimony.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-700 group-hover:border-cyanGlow transition-colors duration-500"
                />
                <div>
                  <h4 className="text-white font-bold">{testimony.name}</h4>
                  <p className="text-cyanGlow text-sm font-medium">{testimony.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
