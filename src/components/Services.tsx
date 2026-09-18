import React from 'react';
import {
  Server,
  Smartphone,
  ShoppingCart,
  GraduationCap,
  Palette,
  Code2,
  Box,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Video,
  Film,
  Camera,
  Megaphone,
  Target,
  Sparkles,
  Share2,
} from 'lucide-react';
import { ServiceItem } from '../types/database';
import { defaultServiceItems } from '../data/defaultData';

interface ServicesProps {
  items?: ServiceItem[];
  onSelectService?: (serviceName: string) => void;
}

const iconMap: Record<string, any> = {
  Server,
  Smartphone,
  ShoppingCart,
  GraduationCap,
  Palette,
  Code2,
  Box,
  Cpu,
  Video,
  Film,
  Camera,
  Megaphone,
  Target,
  Sparkles,
  Share2,
};

const Services: React.FC<ServicesProps> = ({ items = defaultServiceItems, onSelectService }) => {
  const displayItems = items.length > 0 ? items : defaultServiceItems;

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
              What We Deliver
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              High-Impact Digital Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
                Built For Real Business Growth
              </span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-gray-400 max-w-md text-base leading-relaxed">
            From custom web platforms and mobile apps to viral reels, commercial photography, and high-converting ad campaigns — we engineer scalable growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {displayItems.map((item) => {
            const itemAny = item as any;
            const iconKey = item.iconName || itemAny.iconname || 'Code2';
            const Icon = iconMap[iconKey] || Code2;
            const colSpanClass = item.colSpan || itemAny.colspan || 'lg:col-span-6';
            const borderColorClass = item.borderColor || itemAny.bordercolor || 'group-hover:border-cyan-500/40';
            const accentColorClass = item.accentColor || itemAny.accentcolor || 'text-cyan-400';

            return (
              <div
                key={item.id}
                onClick={() => onSelectService && onSelectService(item.title)}
                className={`group relative rounded-3xl p-8 bg-slate-50 dark:bg-[#0F1420]/70 border border-slate-200 dark:border-white/10 ${borderColorClass} ${colSpanClass} transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden`}
              >
                {/* Ambient Glow */}
                <div
                  className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${
                    item.gradient || 'from-cyan-500/20 via-blue-500/10 to-transparent'
                  } blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-200/80 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.stats && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                        {item.stats}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className={`text-xs font-semibold ${accentColorClass} mb-4`}>
                    {item.tagline}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/80 dark:border-white/5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(item.features || []).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
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
