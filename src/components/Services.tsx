import React from 'react';
import { Palette, Code2, Box, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

const services = [
  {
    id: 'brand-strategy',
    icon: Palette,
    title: 'Brand Strategy & Identity',
    tagline: 'Definitive positioning for global dominance',
    description:
      'We forge cohesive brand ecosystems from the ground up: corporate identity, design tokens, voice & tone guidelines, and multi-channel asset suites.',
    features: ['Brand Positioning & Narrative', 'Visual Identity & Design Systems', '3D Asset Guidelines', 'Packaging & Collateral'],
    stats: '+180% Brand Recall',
    colSpan: 'lg:col-span-7',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentColor: 'text-cyan-400',
    borderColor: 'group-hover:border-cyan-500/40',
  },
  {
    id: 'web-engineering',
    icon: Code2,
    title: 'Custom Web & Mobile Platforms',
    tagline: 'High-craft engineering with sub-second speeds',
    description:
      'Bespoke web applications, interactive marketing sites, and high-frequency digital platforms engineered with React, TypeScript, and modern headless architectures.',
    features: ['Full-Stack Cloud Architecture', 'Fluid Micro-Interactions', '99.9% Lighthouse Perf', 'Enterprise Headless CMS'],
    stats: '0.4s Avg Page Load',
    colSpan: 'lg:col-span-5',
    gradient: 'from-teal-500/20 via-emerald-500/10 to-transparent',
    accentColor: 'text-teal-400',
    borderColor: 'group-hover:border-teal-500/40',
  },
  {
    id: 'motion-3d',
    icon: Box,
    title: '3D Spatial & Motion Storytelling',
    tagline: 'Visually arresting interactive moments',
    description:
      'Cinematic 3D WebGL experiences, Three.js spatial scenes, and physics-driven micro-animations that mesmerize visitors and drive engagement.',
    features: ['Three.js / WebGL Visuals', 'Kinetic Typography & UI Motion', 'Product 3D Configurator', 'Interactive Spatial Walkthroughs'],
    stats: '3.4x Longer Session',
    colSpan: 'lg:col-span-5',
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    accentColor: 'text-indigo-400',
    borderColor: 'group-hover:border-indigo-500/40',
  },
  {
    id: 'ai-growth',
    icon: Cpu,
    title: 'AI Solutions & Conversion Growth',
    tagline: 'Data-calibrated conversion funnels',
    description:
      'Automated intelligence engines, conversational interfaces, and programmatic growth funnels tailored to amplify your client acquisition velocity.',
    features: ['AI Agent & Chatbot Deployment', 'Conversion Rate Optimization (CRO)', 'Predictive Attribution Analytics', 'High-ROAS Ad Creatives'],
    stats: '+310% Funnel Efficiency',
    colSpan: 'lg:col-span-7',
    gradient: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    accentColor: 'text-cyan-400',
    borderColor: 'group-hover:border-sky-500/40',
  },
];

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-28 bg-white dark:bg-[#07090E] relative overflow-hidden transition-colors duration-300">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-96 h-96 ambient-glow-cyan blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 ambient-glow-indigo blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineered for Brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
                That Demand Distinction
              </span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-gray-400 max-w-md text-base leading-relaxed">
            We don't do template work. Every engagement is custom-architected to establish category dominance and deliver compounded ROI.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectService && onSelectService(item.title)}
                className={`group relative rounded-3xl p-8 sm:p-10 glass-panel border border-slate-200 dark:border-white/10 ${item.borderColor} shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden ${item.colSpan}`}
              >
                {/* Radial Glow Highlight on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Row: Icon + Performance Stat Tag */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-7 h-7 ${item.accentColor}`} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300">
                        {item.stats}
                      </span>
                    </div>

                    {/* Headline and Description */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-teal-600 dark:text-teal-400/90 mb-4">{item.tagline}</p>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>

                    {/* Bullet Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {item.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 dark:text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      Discuss Scope & Pricing
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-[#07090E] flex items-center justify-center text-slate-600 dark:text-gray-300 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
