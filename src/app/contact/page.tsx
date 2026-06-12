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
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-3xl mx-auto">
        <PageHero
          title="INITIATE"
          subtitle="DEPLOYMENT."
          status="secure"
          description="Available for enterprise architecture roles, technical co-founder positions, and high-level SaaS consulting."
        />

        {/* Brutalist Contact Form */}
        <div className="bg-[#050505] border border-white/10 p-8">
          <form onSubmit={handleSubmit} className="space-y-8 font-mono text-sm">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Identify (Name / Org)</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="e.g. Acme Corp"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Return Vector (Email)</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="director@acme.com"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Directives (Project Scope)</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Detail your system requirements..."
              />
            </div>

            {/* Error/Success Messages */}
            {error && <p className="text-red-500 text-xs font-mono uppercase tracking-widest">{error}</p>}
            {success && <p className="text-green-500 text-xs font-mono uppercase tracking-widest">✓ Message transmitted successfully</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-bold tracking-widest uppercase py-4 text-xs hover:bg-neutral-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '[ TRANSMITTING... ]' : '[ Transmit Data ]'}
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