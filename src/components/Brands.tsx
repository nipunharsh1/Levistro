import React from 'react';

const brands = [
  { name: 'Apex Innovations', symbol: 'AI', sector: 'AI & Robotics' },
  { name: 'Hyperion Capital', symbol: 'HC', sector: 'Venture & Fintech' },
  { name: 'Solaria Cloud', symbol: 'SC', sector: 'Enterprise SaaS' },
  { name: 'Vanguard Health', symbol: 'VH', sector: 'BioTech' },
  { name: 'Orion Protocol', symbol: 'OP', sector: 'Decentralized Web' },
  { name: 'Nova Mobility', symbol: 'NM', sector: 'Electric Vehicles' },
  { name: 'Luminary Media', symbol: 'LM', sector: 'Streaming Media' },
  { name: 'Kroma Studio', symbol: 'KS', sector: 'Consumer Luxury' },
];

const Brands: React.FC = () => {
  return (
    <section className="py-14 bg-slate-100/60 dark:bg-[#07090E] border-y border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-transparent to-slate-100 dark:from-[#07090E] dark:via-transparent dark:to-[#07090E] z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs uppercase font-bold tracking-[0.25em] text-slate-500 dark:text-gray-400 flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 bg-slate-300 dark:bg-white/20" />
          Trusted by Industry Titans & Fast-Scaling Pioneers
          <span className="h-[1px] w-8 bg-slate-300 dark:bg-white/20" />
        </p>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="flex items-center gap-8 shrink-0 animate-marquee py-2">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-white/[0.06] shadow-sm dark:shadow-none transition-all duration-300 cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-gray-800 dark:to-gray-700 group-hover:from-cyan-500 group-hover:to-teal-400 flex items-center justify-center text-xs font-black text-slate-700 dark:text-white group-hover:text-white transition-all duration-300 shadow-sm">
                {brand.symbol}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 font-medium">
                  {brand.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
