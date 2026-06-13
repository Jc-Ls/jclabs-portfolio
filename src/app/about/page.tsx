'use client';

import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const contactInfo = [
    {
      label: 'Phone (Primary)',
      value: '+234 704 098 2314',
      link: 'tel:+2347040982314',
      icon: '📱',
    },
    {
      label: 'Phone (Secondary)',
      value: '+234 912 269 0946',
      link: 'tel:+2349122690946',
      icon: '📞',
    },
    {
      label: 'Phone (Alternative)',
      value: '0903 336 9144',
      link: 'tel:+2349033369144',
      icon: '☎️',
    },
    {
      label: 'Email (Primary)',
      value: 'jareschoicelabs@gmail.com',
      link: 'mailto:jareschoicelabs@gmail.com',
      icon: '✉️',
    },
    {
      label: 'Email (Direct)',
      value: 'molowojare@gmail.com',
      link: 'mailto:molowojare@gmail.com',
      icon: '📧',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20 px-6 md:px-12 selection:bg-cyan-400 selection:text-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* 1. EXECUTIVE IDENTITY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Side: Brutalist Portrait */}
          <div className="relative group aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden">
            <Image
              src="/images/profile/olowojare.jpeg"
              alt="Olowojare Muhammed - Principal Architect"
              fill
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-black/80 backdrop-blur-sm border-t border-white/10">
              <h2 className="text-2xl font-black tracking-tighter uppercase text-white">Olowojare Muhammed</h2>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mt-2">Principal Architect</p>
            </div>
          </div>

          {/* Right Side: The Narrative */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-[1.1]">
                SYSTEMATIC <br/>
                <span className="text-cyan-300/80">EXECUTION.</span>
              </h1>
              <p className="text-lg text-neutral-400 font-light leading-relaxed">
                My journey bridges public administration, healthcare infrastructure, and high-performance digital ecosystems. I do not just write code; I architect assets designed for absolute scale and zero-latency execution.
              </p>
            </div>

            <div className="space-y-8 font-mono text-sm">
              <div className="border-l border-cyan-500/30 pl-6 hover:border-cyan-400 transition-colors">
                <h3 className="text-cyan-300 uppercase tracking-widest mb-2 font-bold text-xs">The Crossover</h3>
                <p className="text-neutral-400 leading-relaxed hover:text-neutral-300 transition-colors">
                  Transitioning from public governance to full-stack engineering wasn't a career change—it was an evolution of solving complex systemic problems with flawless logic.
                </p>
              </div>
              <div className="border-l border-cyan-500/30 pl-6 hover:border-cyan-400 transition-colors">
                <h3 className="text-cyan-300 uppercase tracking-widest mb-2 font-bold text-xs">Engineering Philosophy</h3>
                <p className="text-neutral-400 leading-relaxed hover:text-neutral-300 transition-colors">
                  Whether deploying a fintech protocol or a massive logistics engine, the standard remains the same: Enterprise-grade security, extreme reliability, and brutalist efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CONTACT INFORMATION SECTION */}
        <motion.div
          className="border-t border-cyan-500/30 pt-20 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              GET IN TOUCH
            </h2>
            <p className="text-neutral-400 font-light">
              Multiple channels available. Choose your preferred method of contact.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            viewport={{ once: true }}
          >
            {contactInfo.map((contact, i) => (
              <motion.a
                key={i}
                href={contact.link}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-400/50 p-6 rounded-lg transition-all duration-300 overflow-hidden"
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />

                <div className="relative z-10 space-y-3">
                  <div className="text-3xl">{contact.icon}</div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 group-hover:text-cyan-400 transition-colors">
                      {contact.label}
                    </p>
                    <p className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                      {contact.value}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-mono">Click to contact</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* 3. THE VENTURE DESK */}
        <div className="border-t border-cyan-500/30 pt-20 mt-20">
          <div className="mb-8">
            <h2 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-cyan-400 mb-2">The Venture Desk</h2>
            <p className="text-neutral-400 text-sm">Active platforms engineered and managed by JCLs. Open for strategic partnerships and institutional acquisition.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-sm min-w-[600px]">
              <thead>
                <tr className="text-neutral-500 border-b border-cyan-500/20">
                  <th className="pb-4 font-normal tracking-widest">Digital Asset</th>
                  <th className="pb-4 font-normal tracking-widest">Sector</th>
                  <th className="pb-4 font-normal tracking-widest text-right">Business Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-500/10">
                <tr className="group hover:bg-cyan-500/5 transition-colors cursor-pointer">
                  <td className="py-6 text-white font-bold tracking-tight">Quickserve App</td>
                  <td className="py-6 text-neutral-400">Logistics SaaS</td>
                  <td className="py-6 text-right">
                    <span className="text-cyan-300 border border-cyan-400/30 px-3 py-1 text-[10px] uppercase tracking-widest">[ Open For Acquisition ]</span>
                  </td>
                </tr>
                <tr className="group hover:bg-cyan-500/5 transition-colors cursor-pointer">
                  <td className="py-6 text-white font-bold tracking-tight">Wedding-OS</td>
                  <td className="py-6 text-neutral-400">Event Ecosystem</td>
                  <td className="py-6 text-right">
                    <span className="text-neutral-400 border border-neutral-700 px-3 py-1 text-[10px] uppercase tracking-widest">[ Seeking Partnership ]</span>
                  </td>
                </tr>
                <tr className="group hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="py-6 text-white font-bold tracking-tight">TrustRelay</td>
                  <td className="py-6 text-neutral-400">Fintech Protocol</td>
                  <td className="py-6 text-right">
                    <span className="text-neutral-600 px-3 py-1 text-[10px] uppercase tracking-widest">[ Operational ]</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}