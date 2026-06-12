import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import FirstVisitRedirect from '@/components/FirstVisitRedirect';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const jetBrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Jare's Choice Labs | Enterprise Architecture",
  description: "Engineering Absolute Scale. Portfolio of Principal Architect Olowojare Muhammed. Specializing in high-frequency fintech and logistics SaaS.",
  openGraph: {
    title: "JCLs | System Architecture",
    description: "Zero-latency infrastructure and brutalist engineering by Olowojare Muhammed.",
    url: 'https://jclabs-portfolio.vercel.app',
    siteName: "Jare's Choice Labs",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JCLs Enterprise Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JCLs | System Architecture',
    description: 'Engineering Absolute Scale.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetBrains.variable} ${inter.variable} font-sans bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white antialiased selection:bg-cyan-400/30 selection:text-white flex flex-col min-h-screen`}>
        <FirstVisitRedirect />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-slate-950 to-slate-950 animate-pulse-slow"></div>
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
