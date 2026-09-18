import React from 'react';
import { Linkedin, Twitter, Github, Sparkles, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import nipunImage from './mee.jpeg';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-28 bg-slate-50 dark:bg-[#07090E] relative overflow-hidden transition-colors duration-300">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ambient-glow-cyan blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            Agency Leadership
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Direct Leadership, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
              Uncompromised Standards
            </span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
            No middle managers, account reps, or junior hand-offs. You partner directly with leadership dedicated to executing your vision with precision.
          </p>
        </div>

        {/* Featured Single Founder Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-10 glass-panel border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 shadow-xl dark:shadow-none transition-all duration-300 overflow-hidden group">
            {/* Ambient inner glow */}
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
              {/* Avatar / Portrait Image */}
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-indigo-600 p-[2px] shadow-glow-cyan group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-slate-100 dark:bg-[#0A0D14] rounded-[22px] overflow-hidden">
                    <img
                      src={nipunImage}
                      alt="Nipun Harsh"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    Nipun Harsh
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 self-center sm:self-auto">
                    Executive Lead
                  </span>
                </div>

                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-1">
                  Founder & Strategic Technical Director
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-medium mb-4">
                  Full-Stack Architecture • Brand Systems • High-Impact Media
                </p>

                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                  Pioneering digital brand experiences, enterprise cloud systems, and high-impact visual media. Bringing executive strategy and hands-on engineering craft together to scale ambitious brands.
                </p>

                {/* Highlights Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6 pt-4 border-t border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-gray-300">
                  <div className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-cyan-500" />
                    <span>Direct 1-on-1 Access</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Award className="w-4 h-4 text-teal-500" />
                    <span>End-to-End Craft</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium col-span-2 sm:col-span-1">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>Rapid Turnaround</span>
                  </div>
                </div>

                {/* Social & Contact */}
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <a
                    href="https://www.linkedin.com/in/nipun-gamage-5676a6256"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black text-slate-600 dark:text-gray-400 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black text-slate-600 dark:text-gray-400 transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black text-slate-600 dark:text-gray-400 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="ml-auto inline-flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Discuss a Project
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
