import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Award, ShieldCheck, Globe } from 'lucide-react';

interface HeroProps {
  darkMode?: boolean;
  onOpenContact: () => void;
}

declare global {
  interface Window {
    VANTA?: {
      GLOBE: (config: Record<string, unknown>) => { destroy: () => void };
    };
  }
}

const Hero: React.FC<HeroProps> = ({ darkMode = true, onOpenContact }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    // Destroy previous instance if theme changes
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    // Try to mount Vanta Globe if available in window
    if (window.VANTA && window.VANTA.GLOBE && vantaRef.current) {
      try {
        vantaEffect.current = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: darkMode ? 0x06b6d4 : 0x0891b2,
          color2: darkMode ? 0x14b8a6 : 0x0d9488,
          backgroundColor: darkMode ? 0x07090e : 0xf8fafc,
          size: 1.05,
        });
      } catch (err) {
        console.warn('Vanta globe init fallback:', err);
      }
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [darkMode]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20 bg-slate-50 dark:bg-[#07090E] transition-colors duration-300">
      {/* 3D Vanta Globe / Background Canvas */}
      <div ref={vantaRef} className="absolute inset-0 z-0 opacity-40 md:opacity-60 pointer-events-none" />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full ambient-glow-cyan blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full ambient-glow-indigo blur-3xl pointer-events-none" />

      {/* Kinetic CSS Swirl Elements */}
      <div className="hero-swirl-bg z-0 pointer-events-none">
        <div className="swirl-container">
          <div className="spiral-line spiral-1" />
          <div className="spiral-line spiral-2" />
          <div className="spiral-line spiral-3" />
          <div className="flow-line line-1" />
          <div className="flow-line line-2" />
          <div className="flow-line line-3" />
          <div className="curve-path path-1" />
          <div className="curve-path path-2" />
          <div className="vortex-subtle vortex-1" />
          <div className="vortex-subtle vortex-2" />
        </div>
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 animate-float shadow-sm dark:shadow-glass">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-cyan-300">
            Full-Service Digital & Creative Agency
          </span>
        </div>

        {/* High-Impact Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-5xl mb-6">
          Engineering Scalable Software.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
            Producing High-Impact Media.
          </span>
        </h1>

        {/* Value Proposition Description */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          We bridge technical engineering with cinematic visual production — delivering custom web platforms, mobile apps, video production, and commercial media engineered to grow ambitious brands.
        </p>

        {/* Dual Primary & Secondary Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 shadow-glow-cyan hover:shadow-glow-teal hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Sparkles className="w-5 h-5 text-cyan-200" />
            Start Your Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white bg-white hover:bg-slate-100 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-200 flex items-center justify-center gap-2"
          >
            View Case Studies
          </a>
        </div>

        {/* Floating Live Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl pt-4 border-t border-slate-200 dark:border-white/10">
          {/* Metric 1 */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-left border border-slate-200 dark:border-white/10 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900 dark:text-white">+240%</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/30">
                  AVG
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Average Client Efficiency Gain</p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-left border border-slate-200 dark:border-white/10 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900 dark:text-white">50+</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Digital Systems Delivered</p>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-left border border-slate-200 dark:border-white/10 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900 dark:text-white">99.8%</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                  5★
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Client Satisfaction & Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
