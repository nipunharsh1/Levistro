import React, { useState } from 'react';
import { ArrowUpRight, X, TrendingUp } from 'lucide-react';
import { PortfolioItem } from '../types/database';
import { defaultPortfolioItems } from '../data/defaultData';

interface PortfolioProps {
  items?: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items = defaultPortfolioItems }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const displayItems = items.length > 0 ? items : defaultPortfolioItems;

  const categories = ['All', ...Array.from(new Set(displayItems.map((p) => p.category)))];

  const filteredProjects =
    activeCategory === 'All'
      ? displayItems
      : displayItems.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 bg-slate-50 dark:bg-[#07090E] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
              Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Craft That Moves Markets & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-300">
                Commands Attention
              </span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-glow-cyan'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Visual Hero Area */}
              <div className={`h-60 bg-gradient-to-br ${project.gradient || 'from-blue-600 via-indigo-700 to-slate-900'} relative p-6 flex flex-col justify-between overflow-hidden`}>
                {/* Visual Grid / Tech Mesh Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

                {/* Floating Metric Badge */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
                    {project.category}
                  </span>
                  <div className="px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/15 text-right">
                    <div className="text-base font-black text-cyan-300 leading-none">{project.metric}</div>
                    <div className="text-[9px] uppercase tracking-wider text-gray-300 mt-0.5">{project.metricLabel}</div>
                  </div>
                </div>

                {/* Abstract Stylized Brand Graphic */}
                <div className="relative z-10 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                    {project.client}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white dark:bg-[#0F1420]/60">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-white/5">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium text-slate-500 dark:text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0F1420] border border-slate-200 dark:border-white/15 p-6 sm:p-8 text-slate-900 dark:text-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-bold text-teal-600 dark:text-cyan-400 uppercase tracking-widest">
                {selectedProject.client} • {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
                {selectedProject.title}
              </h3>
            </div>

            {/* Key Metric Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-transparent border border-cyan-500/20 flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">{selectedProject.metric}</div>
                <div className="text-xs text-slate-600 dark:text-gray-300">{selectedProject.metricLabel}</div>
              </div>
            </div>

            {/* Deep-Dive Case Study Narrative */}
            <div className="space-y-4 text-sm text-slate-600 dark:text-gray-300 mb-6">
              {selectedProject.challenge && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1 text-teal-600 dark:text-teal-400">
                    The Challenge
                  </h4>
                  <p className="leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
                    {selectedProject.challenge}
                  </p>
                </div>
              )}
              {selectedProject.solution && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1 text-cyan-600 dark:text-cyan-400">
                    Our Strategic Execution
                  </h4>
                  <p className="leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
                    {selectedProject.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Tech Stack Tags */}
            <div className="mb-6">
              <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-2">
                Deliverables & Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-50 dark:bg-white/[0.06] border border-cyan-200 dark:border-white/10 text-cyan-800 dark:text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-transparent"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
