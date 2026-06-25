'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Github, Linkedin, Send, ShieldAlert, CheckCircle2, MessageSquare, Terminal } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      // POST to our server side api router
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GITHUB', url: 'https://hoangpham486759.github.io/hoangpham.profolio' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LINKEDIN', url: 'https://www.linkedin.com/in/hoangpham486759' },
    { icon: <Mail className="w-5 h-5" />, label: 'EMAIL', url: 'mailto:hoangpham486759@gmail.com' }
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-900/40 relative overflow-hidden cyber-dots">
      {/* Glow dividers */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Connections and description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-mono text-xs text-pink-500 tracking-widest uppercase mb-1 drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]">
              06 // TRANSMISSION
            </span>
            <h2 className="font-mono font-black text-3xl md:text-4xl tracking-tight text-white mb-6 uppercase">
              {t('contact.title')}
            </h2>
            <p className="font-mono text-xs text-cyan-400 tracking-wider mb-8 uppercase font-bold border-b border-cyan-500/20 pb-4 w-full">
              {t('contact.subtitle')}
            </p>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Secure key-exchange initialized. Fill out the digitized matrix panel on the right side to establish direct terminal connection with me.
            </p>

            {/* Social Grid connection cards */}
            <h3 className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">
              {t('contact.socials_title')}
            </h3>

            <div className="flex flex-col gap-3 w-full max-w-sm">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-neutral-950/70 border border-neutral-800/80 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] flex items-center justify-between group transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition-all">
                      {link.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-300 tracking-widest group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-neutral-500 group-hover:text-cyan-400 transition-colors">
                    ESTABLISH // CONNECT
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Digital Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 md:p-10 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 relative overflow-hidden">
              {/* Corner decor */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-500/20" />

              <div className="flex items-center gap-2 mb-8 font-mono text-xs text-neutral-500 border-b border-neutral-800/60 pb-4">
                <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>SECURE TRANSMISSION ENVELOPE</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full name input with reactive glowing border */}
                <div className="flex flex-col gap-1.5 relative group">
                  <label className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">
                    {t('contact.form_name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all font-sans"
                    placeholder="E.g. Elon Musk"
                  />
                </div>

                {/* Email input */}
                <div className="flex flex-col gap-1.5 relative group">
                  <label className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">
                    {t('contact.form_email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all font-sans"
                    placeholder="E.g. elon@spacex.com"
                  />
                </div>

                {/* Company input */}
                <div className="flex flex-col gap-1.5 relative group">
                  <label className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">
                    {t('contact.form_company')}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all font-sans"
                    placeholder="E.g. SpaceX Corp"
                  />
                </div>

                {/* Message Box */}
                <div className="flex flex-col gap-1.5 relative group">
                  <label className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">
                    {t('contact.form_message')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all resize-none font-sans"
                    placeholder="Write details of your digital project specifications here..."
                  />
                </div>

                {/* Submission State Panels */}
                {status === 'success' && (
                  <div className="flex items-start gap-2.5 p-4 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0 animate-bounce" />
                    <span>{t('contact.success_msg')}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-2.5 p-4 rounded bg-rose-950/40 border border-rose-500/30 text-rose-400 font-mono text-xs">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{t('contact.error_msg')}</span>
                  </div>
                )}

                {/* Submit button with cyber overlay glowing status */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-mono text-xs font-black tracking-widest uppercase rounded relative overflow-hidden group cursor-pointer border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-3.5 h-3.5" />
                    {status === 'sending' ? t('contact.sending') : t('contact.send_btn')}
                  </span>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
