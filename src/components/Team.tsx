import React from 'react';
import { Linkedin, Twitter, Github, Sparkles } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  initials: string;
  gradient: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Nipun Harsh',
    role: 'Founder & Strategic Director',
    specialty: 'Brand Systems & Exponential Growth',
    bio: 'Pioneering digital brand experiences and enterprise digital transformation for over a decade.',
    initials: 'NH',
    gradient: 'from-cyan-500 to-blue-600',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Head of Design & 3D Spatial',
    specialty: 'WebGL, Three.js & UI Architecture',
    bio: 'Former lead interactive designer at award-winning European studios, crafting sensory UI.',
    initials: 'ER',
    gradient: 'from-teal-500 to-emerald-600',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    id: 3,
    name: 'Marcus Vance',
    role: 'Principal Systems Architect',
    specialty: 'Full-Stack React & Edge Infrastructure',
    bio: 'Passionate about sub-second web performance, scalable microservices, and rock-solid cloud stacks.',
    initials: 'MV',
    gradient: 'from-indigo-500 to-violet-600',
    socials: { github: '#', twitter: '#' },
  },
  {
    id: 4,
    name: 'Chloe Laurent',
    role: 'Director of Growth & CRO',
    specialty: 'Algorithmic Funnels & Attribution',
    bio: 'Obsessed with high-converting purchase loops, behavioral psychometrics, and multi-channel ROI.',
    initials: 'CL',
    gradient: 'from-pink-500 to-rose-600',
    socials: { linkedin: '#', twitter: '#' },
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-28 bg-slate-50 dark:bg-[#07090E] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              The Creative Collective
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Masters of the Craft, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
                United by Relentless Standards
              </span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-gray-400 max-w-md text-base leading-relaxed">
            No junior hand-offs or outsourced layers. You work directly with battle-tested principals dedicated to your vision.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl p-6 glass-panel border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Avatar Display */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${member.gradient} p-[2px] shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="w-full h-full bg-slate-100 dark:bg-[#0F1420] rounded-[14px] flex items-center justify-center">
                      <span className="text-2xl font-black text-slate-900 dark:text-white tracking-wider">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#07090E] border border-slate-200 dark:border-white/10 text-[10px] font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-2.5 h-2.5" />
                    Principal
                  </div>
                </div>

                {/* Identity */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-1">{member.role}</p>
                <p className="text-[11px] text-slate-500 dark:text-gray-400 font-medium mb-3">{member.specialty}</p>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{member.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-200 dark:border-white/5">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black text-slate-600 dark:text-gray-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black text-slate-600 dark:text-gray-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black text-slate-600 dark:text-gray-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
