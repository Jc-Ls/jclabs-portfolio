import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jare's Choice Labs | Portfolio",
  description: "Professional Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* THE CLOUD ENGINE BYPASS */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  void: '#080B10',
                  surface: '#111620',
                  cyanGlow: '#00F0FF',
                  forgeAmber: '#FF8A00',
                }
              }
            }
          }
        `}} />
      </head>
      <body className={`${inter.className} bg-void text-white min-h-screen flex flex-col`}>
        
        {/* PERSISTENT NAVBAR - Fully Responsive */}
        <nav className="fixed w-full top-0 z-50 bg-void/90 backdrop-blur-lg border-b border-surface">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            
            {/* JCLs Brand Logo Area */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center p-1 rounded-full bg-void shadow-[0_0_20px_rgba(0,240,255,0.1)] border border-gray-800">
                  <img 
                    src="/jcls-logo.png" 
                    alt="JCLs" 
                    className="w-full h-full object-contain filter hover:brightness-110 transition-all" 
                  />
              </div>
              <span className="hidden sm:block text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-forgeAmber group-hover:from-white group-hover:to-white transition-all">
                  Jare's Choice Labs
              </span>
            </Link>
            
            {/* Navigation - Uses flex-wrap to stack neatly on mobile */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-6 text-sm font-semibold text-gray-300">
              <Link href="/" className="hover:text-cyanGlow transition">Home</Link>
              <Link href="/about" className="hover:text-cyanGlow transition">About</Link>
              <Link href="/skills" className="hover:text-cyanGlow transition">Skills</Link>
              <Link href="/projects" className="hover:text-cyanGlow transition">Projects</Link>
              <Link href="/testimonials" className="hover:text-cyanGlow transition">Testimonials</Link>
              <Link href="/contact" className="hover:text-cyanGlow transition">Contact</Link>
            </div>

          </div>
        </nav>

        {/* PAGE CONTENT - Extra padding top on mobile to account for stacked menu */}
        <main className="flex-grow pt-32 md:pt-24">
          {children}
        </main>
        
        {/* GLOBAL FOOTER */}
        <footer className="border-t border-gray-800 bg-void/50 backdrop-blur-md py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-medium">
              © {new Date().getFullYear()} Jare's Choice Labs. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyanGlow transition-colors font-semibold text-sm">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-cyanGlow transition-colors font-semibold text-sm">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-cyanGlow transition-colors font-semibold text-sm">X (Twitter)</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
