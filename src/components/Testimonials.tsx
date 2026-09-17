import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'Levistro completely transformed our market perception. Their strategic brand positioning and 3D web platform helped us close an oversubscribed $18M Series A in under 60 days.',
    author: 'David Chen',
    role: 'Co-Founder & CEO',
    company: 'Apex Innovations',
    metrics: '+340% Inbound Pipeline',
    avatar: 'DC',
    avatarBg: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    quote:
      'The engineering quality delivered by Levistro is nothing short of exceptional. Our developer portal load times plummeted to sub-second speeds, directly driving a 48% reduction in churn.',
    author: 'Sarah Lin, PhD',
    role: 'VP of Product',
    company: 'Solaria Cloud',
    metrics: '0.38s Page Load',
    avatar: 'SL',
    avatarBg: 'from-teal-500 to-emerald-600',
  },
  {
    id: 3,
    quote:
      'Working with Levistro feels like having a Silicon Valley tier-1 design and engineering task force embedded into your executive team. The ROI was apparent from week two.',
    author: 'Jonathan Sterling',
    role: 'Managing Partner',
    company: 'Hyperion Capital',
    metrics: '$450M Fund Closed',
    avatar: 'JS',
    avatarBg: 'from-indigo-500 to-purple-600',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 bg-white dark:bg-[#07090E] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
            Executive Validation
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Trusted by Leaders <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-300">
              Shaping Tomorrow
            </span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
            Read how category leaders scaled their valuation and client trust with Levistro.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl p-8 glass-panel border border-slate-200 dark:border-white/10 hover:border-teal-500/40 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-cyan-500/30 dark:text-white/10 dark:group-hover:text-cyan-400/20 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info + Impact Pill */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.avatarBg} flex items-center justify-center text-xs font-bold text-white shadow-md`}
                    >
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{item.author}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-gray-400">
                        {item.role}, <span className="text-slate-700 dark:text-gray-300 font-medium">{item.company}</span>
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-300 shrink-0">
                    {item.metrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
