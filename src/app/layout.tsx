import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Jare's Choice Labs | Enterprise Architecture",
  description: "Engineering Absolute Scale. Portfolio of Olowojare Muhammed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* flex-col and min-h-screen ensure the footer always stays at the bottom */}
      <body className="bg-black text-white antialiased selection:bg-white selection:text-black flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}