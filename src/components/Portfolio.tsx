import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, X, Check, Award, TrendingUp, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  client: string;
  category: 'Branding' | 'Web Platforms' | 'AI & Mobile';
  metric: string;
  metricLabel: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  gradient: string;
  accent: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Autonomous Fintech Rebrand & Design System',
    client: 'Apex Innovations',
    category: 'Branding',
    metric: '+340%',
    metricLabel: 'Inbound Enterprise Pipeline',
    description: 'Complete strategic repositioning, global brand identity, and multi-tier design tokens for a $200M autonomous fintech platform.',
    challenge: 'Apex was perceived as a generic payment gateway rather than an intelligent algorithmic financial operating system.',
    solution: 'Engineered a monolithic, high-contrast visual system featuring 3D dynamic asset tokens and an executive brand narrative.',
    tags: ['Brand Identity', '3D Design Tokens', 'Visual Architecture', 'Styleguide'],
    gradient: 'from-blue-600 via-indigo-700 to-slate-900',
    accent: 'text-cyan-400',
  },
  {
    id: 2,
    title: 'Hyperscale Cloud Platform & Developer Hub',
    client: 'Solaria Cloud',
    category: 'Web Platforms',
    metric: '0.38s',
    metricLabel: 'Global Page Load Time',
    description: 'Engineered a lightning-fast web infrastructure and interactive developer documentation with real-time WebGL server telemetry.',
    challenge: 'Complex server analytics led to 65% drop-off in the developer onboarding funnel.',
    solution: 'Re-architected with Vite, React, and WebGL visualizations, cutting developer onboarding friction by 48%.',
    tags: ['React', 'TypeScript', 'WebGL Visuals', 'Tailwind', 'Edge CDN'],
    gradient: 'from-teal-600 via-cyan-800 to-slate-900',
    accent: 'text-teal-400',
  },
  {
    id: 3,
    title: 'AI Medical Diagnostics Assistant Interface',
    client: 'Vanguard Health',
    category: 'AI & Mobile',
    metric: '99.8%',
    metricLabel: 'Physician Accuracy Rate',
    description: 'Human-centric UI/UX design for real-time generative AI clinical decision support systems deployed across 40+ hospitals.',
    challenge: 'Physicians experienced extreme cognitive overload from dense unorganized raw diagnostic records.',
    solution: 'Designed an ergonomic clinical workspace with instant AI summaries, confidence scoring chips, and dark-room medical UI.',
    tags: ['AI/ML Interface', 'Ergonomic UX', 'Healthcare DS', 'Mobile Tablet'],
    gradient: 'from-emerald-600 via-teal-800 to-slate-900',
    accent: 'text-emerald-400',
  },
  {
    id: 4,
    title: 'Decentralized Liquidity Protocol Portal',
    client: 'Orion Protocol',
    category: 'Web Platforms',
    metric: '$1.4B',
    metricLabel: 'Total Value Locked in 90 Days',
    description: 'Sleek, friction-free decentralized exchange terminal featuring sub-second swap execution and 3D kinetic token visualizations.',
    challenge: 'DeFi protocols often suffer from intimidating, confusing cryptographic parameters and high abandonment.',
    solution: 'Crafted a consumer-grade trading experience with seamless wallet integration and tactile micro-interactions.',
    tags: ['Web3 Terminal', 'Interactive 3D', 'Next.js', 'Fintech UI'],
    gradient: 'from-indigo-600 via-purple-800 to-slate-900',
    accent: 'text-indigo-400',
  },
  {
    id: 5,
    title: 'Luxury EV Digital Showroom & Configurator',
    client: 'Nova Mobility',
    category: 'AI & Mobile',
    metric: '4.2x',
    metricLabel: 'Pre-Order Conversion Lift',
    description: 'Photorealistic WebGL vehicle configurator allowing high-net-worth buyers to customize bespoke interior trims and paints in real-time.',
    challenge: 'Traditional static car brochures failed to convey bespoke luxury craftsmanship for a $140K EV.',
    solution: 'Built an in-browser 60FPS 3D configurator with studio lighting presets and seamless order reservation.',
    tags: ['3D WebGL Configurator', 'Interactive Motion', 'Luxury E-Commerce'],
    gradient: 'from-slate-700 via-cyan-900 to-black',
    accent: 'text-cyan-300',
  },
  {
    id: 6,
    title: 'Global Rebrand for Venture Fund',
    client: 'Hyperion Capital',
    category: 'Branding',
    metric: '$450M',
    metricLabel: 'New LP Capital Closed',
    description: 'Executive digital presence and comprehensive brand guidelines for a Silicon Valley tier-1 deep tech investment firm.',
    challenge: 'Needed to stand out among legacy institutional venture firms to attract AI and quantum computing founders.',
    solution: 'Crafted an avant-garde editorial typography system paired with dynamic portfolio performance dashboards.',
    tags: ['Editorial Branding', 'Executive Web Presence', 'Content Strategy'],
    gradient: 'from-violet-600 via-blue-900 to-slate-950',
    accent: 'text-violet-400',
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Branding', 'Web Platforms', 'AI & Mobile'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 bg-[#07090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
              Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Craft That Moves Markets & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                Commands Attention
              </span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-glow-cyan'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
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
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Visual Hero Area */}
              <div className={`h-60 bg-gradient-to-br ${project.gradient} relative p-6 flex flex-col justify-between overflow-hidden`}>
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
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#0F1420]/60">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.04] text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium text-gray-400">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0F1420] border border-white/15 p-6 sm:p-8 text-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                {selectedProject.client} • {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
                {selectedProject.title}
              </h3>
            </div>

            {/* Key Metric Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-transparent border border-cyan-500/20 flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{selectedProject.metric}</div>
                <div className="text-xs text-gray-300">{selectedProject.metricLabel}</div>
              </div>
            </div>

            {/* Deep-Dive Case Study Narrative */}
            <div className="space-y-4 text-sm text-gray-300 mb-6">
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-teal-400">
                  The Challenge
                </h4>
                <p className="leading-relaxed bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                  {selectedProject.challenge}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-cyan-400">
                  Our Strategic Execution
                </h4>
                <p className="leading-relaxed bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="mb-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Deliverables & Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/[0.06] border border-white/10 text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-gray-300"
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
