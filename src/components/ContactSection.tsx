import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Clock, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

const scopes = [
  'Enterprise System',
  'Mobile App Development',
  'E-Commerce Store Build',
  'LMS Platform Development',
  'Custom Web Application',
];

const usdBugdetTiers = [
  '< $500',
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
  'Custom Amount',
];

const lkrBudgetTiers = [
  '< LKR 150,000',
  'LKR 150,000 – 300,000',
  'LKR 300,000 – 750,000',
  'LKR 750,000 – 1,500,000',
  'LKR 1,500,000+',
  'Custom Amount',
];

const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Enterprise System',
  isModal = false,
  onClose,
}) => {
  const [selectedScope, setSelectedScope] = useState<string>(initialService);
  const [currency, setCurrency] = useState<'USD' | 'LKR'>('USD');
  const [selectedBudget, setSelectedBudget] = useState<string>('$500 – $1,000');
  const [customBudget, setCustomBudget] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: 'Within 30 Days',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const budgetTiers = currency === 'USD' ? usdBugdetTiers : lkrBudgetTiers;

  const handleCurrencyChange = (newCurrency: 'USD' | 'LKR') => {
    setCurrency(newCurrency);
    if (newCurrency === 'USD') {
      setSelectedBudget('$500 – $1,000');
    } else {
      setSelectedBudget('LKR 150,000 – 300,000');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`relative overflow-hidden transition-colors duration-300 ${isModal ? 'p-0' : 'py-28 bg-slate-50 dark:bg-[#07090E]'}`}>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Start Your Project <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
                With Our Team
              </span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
              Tell us about your project requirements. We will review your inquiry and respond within 4 hours.
            </p>
          </div>
        )}

        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl relative">
          {submitted ? (
            <div className="py-16 text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-600 dark:text-teal-300 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                Project Inquiry Received
              </h3>
              <p className="text-slate-600 dark:text-gray-300 max-w-md mx-auto text-sm leading-relaxed mb-8">
                Thank you, <span className="text-teal-600 dark:text-cyan-300 font-semibold">{formData.name || 'Friend'}</span>. Our team is reviewing your requirements ({selectedScope} • {selectedBudget === 'Custom Amount' ? customBudget || 'Custom Budget' : selectedBudget}) and will contact you shortly.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    if (onClose) onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white text-sm font-semibold transition-colors border border-slate-200 dark:border-transparent"
                >
                  {isModal ? 'Close Window' : 'Submit Another Request'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Select Scope */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-teal-600 dark:text-teal-400 mb-3">
                  01 / What would you like to build?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {scopes.map((scope) => (
                    <button
                      type="button"
                      key={scope}
                      onClick={() => setSelectedScope(scope)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        selectedScope === scope
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-glow-cyan'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 dark:bg-white/[0.04] dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white dark:border-white/5'
                      }`}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Budget & Currency */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <label className="text-xs uppercase font-bold tracking-wider text-cyan-600 dark:text-cyan-400">
                    02 / Estimated Budget
                  </label>

                  {/* Currency Switcher */}
                  <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10">
                    <button
                      type="button"
                      onClick={() => handleCurrencyChange('USD')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        currency === 'USD'
                          ? 'bg-cyan-500 text-white shadow-sm'
                          : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      USD ($)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCurrencyChange('LKR')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        currency === 'LKR'
                          ? 'bg-teal-500 text-white shadow-sm'
                          : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      LKR (Rs)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                  {budgetTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setSelectedBudget(tier)}
                      className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all duration-200 ${
                        selectedBudget === tier
                          ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-glow-teal'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 dark:bg-white/[0.04] dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white dark:border-white/5'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>

                {/* Custom Budget Input if Custom Amount chosen or optional specification */}
                {selectedBudget === 'Custom Amount' && (
                  <div className="mt-3 animate-in fade-in duration-200">
                    <input
                      type="text"
                      placeholder={`Enter your exact budget (e.g. ${currency === 'USD' ? '$750 USD' : 'Rs. 200,000 LKR'})`}
                      value={customBudget}
                      onChange={(e) => setCustomBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-cyan-400/50 dark:border-cyan-400/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Step 3: Contact Details */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
                  03 / Your Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company or Project Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F1420] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="Immediately (1-2 Weeks)">Timeline: Fast (1-2 Weeks)</option>
                      <option value="Within 30 Days">Timeline: Within 30 Days</option>
                      <option value="Next 2-3 Months">Timeline: Next 2-3 Months</option>
                      <option value="Flexible / Exploring">Timeline: Flexible / Exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your project goals or specific features you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit & Guarantee */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Strict Confidentiality • Free Consultation • 4-Hour Response</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Project Inquiry
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
