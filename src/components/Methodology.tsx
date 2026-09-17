import React from 'react';
import { Compass, Sparkles, Layers, Rocket } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Compass,
    title: 'Insight & Architecture',
    description:
      'We deconstruct your competitive landscape, interview key stakeholders, and engineer a bulletproof technical and visual roadmap before writing a single line of code.',
    deliverable: 'Strategic Blueprint & Information Architecture',
    accent: 'text-cyan-400',
    borderGlow: 'hover:border-cyan-500/40',
  },
  {
    step: '02',
    icon: Sparkles,
    title: 'High-Craft Design',
    description:
      'We sculpt iconic brand identities, fluid UI motion choreographies, and design systems that establish immediate luxury and trust.',
    deliverable: 'Interactive Prototypes & Multi-Tier Design Tokens',
    accent: 'text-teal-400',
    borderGlow: 'hover:border-teal-500/40',
  },
  {
    step: '03',
    icon: Layers,
    title: 'Precision Engineering',
    description:
      'We bring designs to life with enterprise-grade React, TypeScript, WebGL shaders, and headless infrastructures built for sub-second execution.',
    deliverable: 'Production-Grade, Ultra-Fast Web App',
    accent: 'text-indigo-400',
    borderGlow: 'hover:border-indigo-500/40',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Exponential Scale',
    description:
      'We calibrate conversion funnels, deploy intelligent automation, and track analytics to guarantee continuous revenue acceleration.',
    deliverable: 'Performance Analytics & Growth Optimization',
    accent: 'text-sky-400',
    borderGlow: 'hover:border-sky-500/40',
  },
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-28 bg-white dark:bg-[#07090E] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
            The Levistro Formula
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            A Repeatable Framework for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
              Unfair Market Advantage
            </span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
            Eliminating guesswork with a scientific fusion of creative intuition and rigorous technical execution.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`group relative rounded-3xl p-8 glass-panel border border-slate-200 dark:border-white/10 ${item.borderGlow} shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between`}
              >
                <div>
                  {/* Step Number + Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black text-slate-300 dark:text-white/20 group-hover:text-slate-400 dark:group-hover:text-white/40 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${item.accent}`} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Output Pill */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-gray-400 block mb-1">
                    Deliverable
                  </span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-gray-200">{item.deliverable}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
