import React, { useState } from 'react';
import { X, Plus, Trash2, Edit3, Save, Database, ShieldCheck, Lock, Sparkles, RefreshCw } from 'lucide-react';
import { PortfolioItem, ServiceItem } from '../types/database';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioItems: PortfolioItem[];
  serviceItems: ServiceItem[];
  onRefreshData: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  portfolioItems,
  serviceItems,
  onRefreshData,
}) => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'services'>('portfolio');
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Form states
  const [editingPortfolio, setEditingPortfolio] = useState<Partial<PortfolioItem> | null>(null);
  const [editingService, setEditingService] = useState<Partial<ServiceItem> | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple passcode check (Default passkey: admin123 or set via env)
    const validPass = import.meta.env.VITE_ADMIN_PASSCODE || 'admin123';
    if (passcode === validPass) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect Passcode. Try: admin123');
    }
  };

  // --- Portfolio CRUD Handlers ---
  const handleSavePortfolio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPortfolio) return;
    setLoading(true);

    const tagsArray = typeof editingPortfolio.tags === 'string'
      ? (editingPortfolio.tags as string).split(',').map((t) => t.trim())
      : editingPortfolio.tags || [];

    const payload = {
      title: editingPortfolio.title || 'New Work',
      client: editingPortfolio.client || 'Client Name',
      category: editingPortfolio.category || 'Web Platforms',
      metric: editingPortfolio.metric || '+100%',
      metricLabel: editingPortfolio.metricLabel || 'Growth Metric',
      description: editingPortfolio.description || '',
      challenge: editingPortfolio.challenge || '',
      solution: editingPortfolio.solution || '',
      tags: tagsArray,
      gradient: editingPortfolio.gradient || 'from-blue-600 via-indigo-700 to-slate-900',
      accent: editingPortfolio.accent || 'text-cyan-400',
    };

    try {
      if (isSupabaseConfigured && supabase) {
        if (editingPortfolio.id) {
          await supabase.from('portfolio_items').update(payload).eq('id', editingPortfolio.id);
        } else {
          await supabase.from('portfolio_items').insert([payload]);
        }
      }
      onRefreshData();
      setEditingPortfolio(null);
    } catch (err: any) {
      alert('Error saving item: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePortfolio = async (id: string | number) => {
    if (!confirm('Are you sure you want to delete this portfolio item?')) return;
    setLoading(true);
    try {
      if (isSupabaseConfigured && supabase) {
        await supabase.from('portfolio_items').delete().eq('id', id);
      }
      onRefreshData();
    } catch (err: any) {
      alert('Error deleting item: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // --- Service CRUD Handlers ---
  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    setLoading(true);

    const featuresArray = typeof editingService.features === 'string'
      ? (editingService.features as string).split(',').map((f) => f.trim())
      : editingService.features || [];

    const payload = {
      title: editingService.title || 'New Service',
      tagline: editingService.tagline || 'Service Tagline',
      description: editingService.description || '',
      iconName: editingService.iconName || 'Code2',
      features: featuresArray,
      stats: editingService.stats || '+100% Impact',
      colSpan: editingService.colSpan || 'lg:col-span-6',
      gradient: editingService.gradient || 'from-cyan-500/20 via-blue-500/10 to-transparent',
      accentColor: editingService.accentColor || 'text-cyan-400',
      borderColor: editingService.borderColor || 'group-hover:border-cyan-500/40',
    };

    try {
      if (isSupabaseConfigured && supabase) {
        if (editingService.id) {
          await supabase.from('services').update(payload).eq('id', editingService.id);
        } else {
          await supabase.from('services').insert([payload]);
        }
      }
      onRefreshData();
      setEditingService(null);
    } catch (err: any) {
      alert('Error saving service: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service card?')) return;
    setLoading(true);
    try {
      if (isSupabaseConfigured && supabase) {
        await supabase.from('services').delete().eq('id', id);
      }
      onRefreshData();
    } catch (err: any) {
      alert('Error deleting service: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0F131C] border border-cyan-500/20 rounded-2xl shadow-2xl overflow-hidden text-white my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0A0D14]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Levistro CMS Admin Panel</h2>
              <p className="text-xs text-gray-400">
                {isSupabaseConfigured ? '🟢 Connected to Supabase Cloud' : '🟡 Offline Demo Mode (Set .env for Cloud DB)'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="p-8 max-w-md mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-cyan-500/20">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Admin Authentication</h3>
            <p className="text-sm text-gray-400 mb-6">Enter your secret passcode to edit work and service cards.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter passcode (default: admin123)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {errorMsg && <p className="text-xs text-rose-400">{errorMsg}</p>}
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
              >
                Unlock Dashboard
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard Interface */
          <div className="p-6">
            {/* Navigation Tabs */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
              <div className="flex gap-2">
                <button
                  onClick={() => { setActiveTab('portfolio'); setEditingPortfolio(null); setEditingService(null); }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'portfolio'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  Portfolio Work Cards ({portfolioItems.length})
                </button>
                <button
                  onClick={() => { setActiveTab('services'); setEditingPortfolio(null); setEditingService(null); }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'services'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  Service Cards ({serviceItems.length})
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={onRefreshData}
                  className="px-3 py-1.5 rounded-lg bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 text-xs flex items-center gap-1.5 border border-gray-800"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Refresh
                </button>
                {activeTab === 'portfolio' ? (
                  <button
                    onClick={() => setEditingPortfolio({ tags: [] })}
                    className="px-4 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1 hover:bg-cyan-400 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add Work Card
                  </button>
                ) : (
                  <button
                    onClick={() => setEditingService({ features: [] })}
                    className="px-4 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1 hover:bg-cyan-400 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add Service Card
                  </button>
                )}
              </div>
            </div>

            {/* PORTFOLIO TAB */}
            {activeTab === 'portfolio' && (
              <div>
                {editingPortfolio ? (
                  /* Edit Portfolio Form */
                  <form onSubmit={handleSavePortfolio} className="space-y-4 bg-gray-900/60 p-4 rounded-xl border border-gray-800">
                    <h4 className="text-sm font-bold text-cyan-400">
                      {editingPortfolio.id ? 'Edit Portfolio Card' : 'Create New Portfolio Card'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Title</label>
                        <input
                          type="text"
                          required
                          value={editingPortfolio.title || ''}
                          onChange={(e) => setEditingPortfolio({ ...editingPortfolio, title: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Client Name</label>
                        <input
                          type="text"
                          required
                          value={editingPortfolio.client || ''}
                          onChange={(e) => setEditingPortfolio({ ...editingPortfolio, client: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Category</label>
                        <select
                          value={editingPortfolio.category || 'Web Platforms'}
                          onChange={(e) => setEditingPortfolio({ ...editingPortfolio, category: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        >
                          <option value="Branding">Branding</option>
                          <option value="Web Platforms">Web Platforms</option>
                          <option value="AI & Mobile">AI & Mobile</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Metric (e.g. +340%)</label>
                        <input
                          type="text"
                          value={editingPortfolio.metric || ''}
                          onChange={(e) => setEditingPortfolio({ ...editingPortfolio, metric: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Metric Label (e.g. Enterprise Revenue)</label>
                        <input
                          type="text"
                          value={editingPortfolio.metricLabel || ''}
                          onChange={(e) => setEditingPortfolio({ ...editingPortfolio, metricLabel: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Tags (comma separated)</label>
                        <input
                          type="text"
                          placeholder="React, TypeScript, WebGL"
                          value={Array.isArray(editingPortfolio.tags) ? editingPortfolio.tags.join(', ') : editingPortfolio.tags || ''}
                          onChange={(e) => setEditingPortfolio({ ...editingPortfolio, tags: e.target.value as any })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Description</label>
                      <textarea
                        rows={2}
                        value={editingPortfolio.description || ''}
                        onChange={(e) => setEditingPortfolio({ ...editingPortfolio, description: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setEditingPortfolio(null)}
                        className="px-4 py-2 rounded text-xs bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 rounded text-xs bg-cyan-500 font-bold text-slate-950 hover:bg-cyan-400"
                      >
                        {loading ? 'Saving...' : 'Save Card'}
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Portfolio Item List */
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                    {portfolioItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-900/40 rounded-xl border border-gray-800/80 hover:border-gray-700 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                              {item.category}
                            </span>
                            <h4 className="font-bold text-white text-sm">{item.title}</h4>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Client: {item.client} | Metric: {item.metric} ({item.metricLabel})</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingPortfolio(item)}
                            className="p-2 rounded bg-gray-800 text-gray-300 hover:text-cyan-400 transition-colors"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeletePortfolio(item.id)}
                            className="p-2 rounded bg-gray-800 text-gray-300 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SERVICES TAB */}
            {activeTab === 'services' && (
              <div>
                {editingService ? (
                  /* Edit Service Form */
                  <form onSubmit={handleSaveService} className="space-y-4 bg-gray-900/60 p-4 rounded-xl border border-gray-800">
                    <h4 className="text-sm font-bold text-cyan-400">
                      {editingService.id ? 'Edit Service Card' : 'Create New Service Card'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Service Title</label>
                        <input
                          type="text"
                          required
                          value={editingService.title || ''}
                          onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Tagline</label>
                        <input
                          type="text"
                          value={editingService.tagline || ''}
                          onChange={(e) => setEditingService({ ...editingService, tagline: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Icon Name (Palette, Code2, Box, Cpu)</label>
                        <input
                          type="text"
                          value={editingService.iconName || 'Code2'}
                          onChange={(e) => setEditingService({ ...editingService, iconName: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Stats Badge (e.g. +180% Brand Recall)</label>
                        <input
                          type="text"
                          value={editingService.stats || ''}
                          onChange={(e) => setEditingService({ ...editingService, stats: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Features (comma separated)</label>
                      <input
                        type="text"
                        placeholder="Feature 1, Feature 2, Feature 3"
                        value={Array.isArray(editingService.features) ? editingService.features.join(', ') : editingService.features || ''}
                        onChange={(e) => setEditingService({ ...editingService, features: e.target.value as any })}
                        className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Description</label>
                      <textarea
                        rows={2}
                        value={editingService.description || ''}
                        onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded text-sm text-white"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setEditingService(null)}
                        className="px-4 py-2 rounded text-xs bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 rounded text-xs bg-cyan-500 font-bold text-slate-950 hover:bg-cyan-400"
                      >
                        {loading ? 'Saving...' : 'Save Service'}
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Service Item List */
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                    {serviceItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-900/40 rounded-xl border border-gray-800/80 hover:border-gray-700 transition-colors"
                      >
                        <div>
                          <h4 className="font-bold text-white text-sm">{item.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{item.tagline} | Stats: {item.stats}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingService(item)}
                            className="p-2 rounded bg-gray-800 text-gray-300 hover:text-cyan-400 transition-colors"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteService(item.id)}
                            className="p-2 rounded bg-gray-800 text-gray-300 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
