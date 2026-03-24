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
        
        {/* PERSISTENT NAVBAR */}
        <nav className="fixed w-full top-0 z-50 bg-void/90 backdrop-blur-lg border-b border-surface">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            {/* JCLs Brand Logo Area */}
            <div className="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
               <span className="text-white bg-gradient-to-br from-cyanGlow to-blue-600 px-2 rounded">JCLs</span>
               <span className="hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-forgeAmber">
                 Jare's Choice Labs
               </span>
            </div>
            
            {/* Navigation */}
            <div className="flex space-x-6 text-sm font-semibold text-gray-300">
              <Link href="/" className="hover:text-cyanGlow transition">Home</Link>
              <Link href="/projects" className="hover:text-cyanGlow transition">Projects</Link>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="flex-grow pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
