import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Jare's Choice Labs | Enterprise Architecture",
  description: "Engineering Scalable Digital Ecosystems. Portfolio of Olowojare Muhammed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B132B] text-white antialiased selection:bg-[#C5A059] selection:text-[#0B132B]">
        <Navbar />
        {/* Added padding-top to account for the fixed Navbar */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
