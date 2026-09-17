import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Clock, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

const scopes = [
  'Brand Strategy & Identity',
  'Custom Web & Mobile App',
  '3D Spatial & Motion',
  'AI Integration & CRO',
  'Complete Agency Retainer',
];

const budgetTiers = [
  '<$15,000',
  '$15,000 – $35,000',
  '$35,000 – $75,000',
  '$75,000+',
];

const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Brand Strategy & Identity',
  isModal = false,
  onClose,
}) => {
  const [selectedScope, setSelectedScope] = useState<string>(initialService);
  const [selectedBudget, setSelectedBudget] = useState<string>('$15,000 – $35,000');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: 'Within 30 Days',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`relative overflow-hidden ${isModal ? 'p-0' : 'py-28 bg-[#07090E]'}`}>
      {/* Glow Effects */}
      {!isModal && (
        <>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] ambient-glow-cyan blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] ambient-glow-indigo blur-3xl pointer-events-none" />
        </>
      )}

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isModal ? 'p-0' : ''}`}>
        {!isModal && (
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              Project Discovery
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Ready to Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                Extraordinary?
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Share your project vision below. We review inquiries within 4 business hours.
            </p>
          </div>
        )}

        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
          {submitted ? (
            <div className="py-16 text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Discovery Brief Received
              </h3>
              <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed mb-8">
                Thank you, <span className="text-cyan-300 font-semibold">{formData.name || 'Visionary'}</span>. Our Managing Director is reviewing your scope and will respond within 4 hours.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    if (onClose) onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                >
                  {isModal ? 'Close Window' : 'Submit Another Brief'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Select Scope */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-teal-400 mb-3">
                  01 / What is your primary objective?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {scopes.map((scope) => (
                    <button
                      type="button"
                      key={scope}
                      onClick={() => setSelectedScope(scope)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        selectedScope === scope
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-glow-cyan'
                          : 'bg-white/[0.04] text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                      }`}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Budget */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-cyan-400 mb-3">
                  02 / Target Investment Level
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {budgetTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setSelectedBudget(tier)}
                      className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all duration-200 ${
                        selectedBudget === tier
                          ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-glow-teal'
                          : 'bg-white/[0.04] text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-indigo-400 mb-3">
                  03 / Your Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Work Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name or Website"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1420] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Immediately (1-2 Weeks)">Timeline: Immediately (1-2 Weeks)</option>
                      <option value="Within 30 Days">Timeline: Within 30 Days</option>
                      <option value="Next Quarter">Timeline: Next Quarter</option>
                      <option value="Exploring Options">Timeline: Exploring Options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your goals, current bottlenecks, or desired outcomes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit & Guarantee */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Strict NDA • No spam guarantee • 4-hour response</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Discovery Brief
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
