"use client";

export default function Contact() {
  // We will connect this to a real email sender (like Resend) later!
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form UI is working! We will connect the backend email sender soon.");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center items-center">
      
      {/* Page Header */}
      <div className="text-center mb-16 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-forgeAmber">Connect</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Have a project in mind, need a logistical ecosystem built, or just want to chat? Drop me a message.
        </p>
      </div>

      {/* The Contact Form */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-surface border border-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-2xl relative group"
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyanGlow to-forgeAmber rounded-t-3xl opacity-80"></div>
        
        <div className="space-y-6">
          
          {/* Name Input */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Name</label>
            <input 
              type="text" 
              required 
              className="w-full bg-void border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyanGlow focus:ring-1 focus:ring-cyanGlow transition-colors" 
              placeholder="Your full name" 
            />
          </div>
          
          {/* Email Input */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              required 
              className="w-full bg-void border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyanGlow focus:ring-1 focus:ring-cyanGlow transition-colors" 
              placeholder="you@example.com" 
            />
          </div>
          
          {/* Message Textarea */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Message</label>
            <textarea 
              required 
              rows={5} 
              className="w-full bg-void border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyanGlow focus:ring-1 focus:ring-cyanGlow transition-colors resize-none" 
              placeholder="Tell me about your project or idea..."
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-cyanGlow to-forgeAmber text-void font-extrabold text-lg hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          >
            Send Message
          </button>

        </div>
      </form>

    </div>
  );
}
