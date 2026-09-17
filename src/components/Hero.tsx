import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Award, ShieldCheck, Globe } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

declare global {
  interface Window {
    VANTA?: {
      GLOBE: (config: Record<string, unknown>) => { destroy: () => void };
    };
  }
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    // Try to mount Vanta Globe if available in window
    if (window.VANTA && window.VANTA.GLOBE && vantaRef.current && !vantaEffect.current) {
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
          color: 0x06b6d4,
          color2: 0x14b8a6,
          backgroundColor: 0x07090e,
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
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20 bg-[#07090E]">
      {/* 3D Vanta Globe / Background Canvas */}
      <div ref={vantaRef} className="absolute inset-0 z-0 opacity-40 md:opacity-60 pointer-events-none" />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full ambient-glow-cyan blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full ambient-glow-indigo blur-3xl pointer-events-none" />

      {/* Kinetic CSS Swirl Elements (Integrated from design assets) */}
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
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8 animate-float shadow-glass">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Available for Q3/Q4 Strategic Partnerships
          </span>
        </div>

        {/* High-Impact Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] max-w-5xl mb-6">
          Elevate Your Brand{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
            Into The Future
          </span>
        </h1>

        {/* Value Proposition Description */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          We engineer category-defining brand identities, high-craft digital experiences, and high-velocity growth engines for ambitious global visionaries.
        </p>

        {/* Dual Primary & Secondary Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 shadow-glow-cyan hover:shadow-glow-teal hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Sparkles className="w-5 h-5 text-cyan-200" />
            Launch Your Vision
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            Explore Case Studies
          </a>
        </div>

        {/* Floating Live Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl pt-4 border-t border-white/10">
          {/* Metric 1 */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-left border border-white/10 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white">+240%</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  AVG
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Average Client Growth</p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-left border border-white/10 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white">$48M+</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Client Revenue Unlocked</p>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 text-left border border-white/10 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white">99.4%</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  5★
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Client Satisfaction Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
