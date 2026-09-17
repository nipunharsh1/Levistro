import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowRight, Check, Globe, Mail, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [times, setTimes] = useState({ ny: '', london: '', tokyo: '' });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        ny: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        tokyo: now.toLocaleTimeString('en-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 text-slate-600 border-t border-slate-200 dark:bg-[#05060A] dark:text-gray-400 dark:border-white/10 pt-20 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] ambient-glow-cyan blur-[120px] pointer-events-none opacity-30 dark:opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* World Clocks Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-12 mb-16 border-b border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 dark:bg-white/[0.02] dark:border-white/5 shadow-sm dark:shadow-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-gray-400 font-bold">New York Hub</p>
              <p className="text-sm font-black text-slate-900 dark:text-white">{times.ny || '08:30 AM'} EST</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 dark:bg-white/[0.02] dark:border-white/5 shadow-sm dark:shadow-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-gray-400 font-bold">London Studio</p>
              <p className="text-sm font-black text-slate-900 dark:text-white">{times.london || '01:30 PM'} GMT</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 dark:bg-white/[0.02] dark:border-white/5 shadow-sm dark:shadow-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-gray-400 font-bold">Tokyo Presence</p>
              <p className="text-sm font-black text-slate-900 dark:text-white">{times.tokyo || '10:30 PM'} JST</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-indigo-500 p-[1px]">
                <div className="w-full h-full bg-white dark:bg-[#07090E] rounded-[11px] flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-300 font-extrabold text-base">
                    L
                  </span>
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Levistro</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 max-w-sm">
              An elite creative engineering agency delivering bespoke brand systems, 3D WebGL experiences, and high-conversion platforms for global market leaders.
            </p>
            <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Crafted with uncompromising precision.
            </div>
          </div>

          {/* Nav Col 1: Capabilities */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Brand Strategy</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Custom Web Apps</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">3D & Spatial UI</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">AI & Performance</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Design Systems</a></li>
            </ul>
          </div>

          {/* Nav Col 2: Studio */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#portfolio" className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors">Case Studies</a></li>
              <li><a href="#methodology" className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors">Methodology</a></li>
              <li><a href="#team" className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors">Leadership</a></li>
              <li><a href="#testimonials" className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors">Direct Inquiry</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              The Levistro Dispatch
            </h4>
            <p className="text-xs text-slate-600 dark:text-gray-400 mb-4 leading-relaxed">
              Curated strategic insights on brand equity, emerging WebGL tech, and digital product architecture.
            </p>
            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-300 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                You're on the priority dispatch list.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your executive email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 dark:bg-white/[0.04] dark:border-white/10 dark:text-white dark:placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors shadow-sm dark:shadow-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:opacity-90 transition-opacity"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Levistro Global Studio Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Confidentiality & Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-200 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:border-transparent flex items-center justify-center transition-colors shadow-sm dark:shadow-none"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
