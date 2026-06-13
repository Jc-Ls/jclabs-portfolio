'use client';

import React, { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import type { ContactFormData } from '@/types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20 px-6 md:px-12 selection:bg-cyan-400/30 selection:text-white">
      <div className="max-w-3xl mx-auto">
        <PageHero
          title="INITIATE"
          subtitle="DEPLOYMENT."
          status="secure"
          description="Available for enterprise architecture roles, technical co-founder positions, and high-level SaaS consulting."
        />

        {/* Modern Glassmorphism Contact Form */}
        <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 p-8 rounded-xl shadow-2xl shadow-cyan-500/10">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 rounded-xl"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-8 font-mono text-sm">
            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">Your Name / Organization</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-900/50 border-b-2 border-cyan-500/30 hover:border-cyan-400/60 focus:border-cyan-400 p-3 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-200 focus:bg-slate-900/70"
                placeholder="e.g., Acme Corp"
              />
            </div>
            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-900/50 border-b-2 border-cyan-500/30 hover:border-cyan-400/60 focus:border-cyan-400 p-3 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-200 focus:bg-slate-900/70"
                placeholder="director@acme.com"
              />
            </div>
            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">Project Details</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-900/50 border-b-2 border-cyan-500/30 hover:border-cyan-400/60 focus:border-cyan-400 p-3 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-200 resize-none focus:bg-slate-900/70"
                placeholder="Tell me about your project scope, goals, and vision..."
              />
            </div>

            {/* Error/Success Messages */}
            {error && <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-300 text-xs font-mono uppercase tracking-widest">{error}</div>}
            {success && <div className="p-3 bg-green-500/10 border border-green-500/30 rounded text-green-300 text-xs font-mono uppercase tracking-widest">✓ Message transmitted successfully</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold tracking-widest uppercase py-4 text-xs rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/30"
            >
              {loading ? '[ TRANSMITTING... ]' : '[ Send Message ]'}
            </button>
          </form>
        </div>

        {/* Direct Comms Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs uppercase tracking-widest border-t border-white/10 pt-12">
          <div>
            <p className="text-neutral-500 mb-2">Direct Comms</p>
            <a href="mailto:jareschoicalabs@gmail.com" className="text-white hover:text-neutral-400 border-b border-white/30 pb-1">jareschoicalabs@gmail.com</a>
          </div>
          <div>
            <p className="text-neutral-500 mb-2">Operating Base</p>
            <p className="text-white">Abuja, FCT, Nigeria</p>
          </div>
        </div>
      </div>
    </main>
  );
}