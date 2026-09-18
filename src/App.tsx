import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Methodology from './components/Methodology';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { PortfolioItem, ServiceItem } from './types/database';
import { defaultPortfolioItems, defaultServiceItems } from './data/defaultData';
import { supabase, isSupabaseConfigured } from './lib/supabase';
import { X, Database, Settings } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('levistro_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Dark mode default
  });
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [adminModalOpen, setAdminModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Enterprise System');

  // Dynamic state for CMS items
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(defaultPortfolioItems);
  const [serviceItems, setServiceItems] = useState<ServiceItem[]>(defaultServiceItems);

  // Fetch items from Supabase or fallback
  const fetchCMSData = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) {
      setPortfolioItems(defaultPortfolioItems);
      setServiceItems(defaultServiceItems);
      return;
    }

    try {
      // Fetch portfolio items
      const { data: portData, error: portError } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('id', { ascending: true });

      if (!portError && portData && portData.length > 0) {
        setPortfolioItems(portData);
      }

      // Fetch service items
      const { data: servData, error: servError } = await supabase
        .from('services')
        .select('*')
        .order('id', { ascending: true });

      if (!servError && servData && servData.length > 0) {
        setServiceItems(servData);
      }
    } catch (err) {
      console.warn('Could not load data from Supabase, using default data.', err);
    }
  }, []);

  useEffect(() => {
    fetchCMSData();
  }, [fetchCMSData]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('levistro_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('levistro_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090E] text-slate-900 dark:text-white font-inter selection:bg-cyan-500 selection:text-white transition-colors duration-300 relative">
      {/* Global Navigation */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Agency Experience */}
      <main>
        {/* 1. Hero Section with 3D Globe & Live Metrics */}
        <Hero darkMode={darkMode} onOpenContact={() => handleOpenContact()} />

        {/* 2. Infinite Marquee Brands */}
        <Brands />

        {/* 3. Core Capabilities Bento Grid */}
        <Services items={serviceItems} onSelectService={(service) => handleOpenContact(service)} />

        {/* 4. Filterable Case Studies Showcase */}
        <Portfolio items={portfolioItems} />

        {/* 5. 4-Step Working Methodology */}
        <Methodology />

        {/* 6. Agency Leadership Spotlight */}
        <Team />

        {/* 7. Executive Client Testimonials */}
        <Testimonials />

        {/* 8. High-Converting Project Discovery Gateway */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Global Mega Footer with Live World Clocks */}
      <Footer />

      {/* Floating CMS Admin Trigger Button */}
      <button
        onClick={() => setAdminModalOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-4 py-2.5 rounded-full bg-slate-900/90 dark:bg-[#0F1420]/90 border border-cyan-500/30 text-cyan-400 font-bold text-xs shadow-xl backdrop-blur-md hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center gap-2 group"
        title="Open CMS Admin to edit Work & Service cards"
      >
        <Database className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span>CMS Admin</span>
      </button>

      {/* Admin Dashboard Modal */}
      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        portfolioItems={portfolioItems}
        serviceItems={serviceItems}
        onRefreshData={fetchCMSData}
      />

      {/* Global Contact / Discovery Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0F1420] border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <ContactSection
              isModal={true}
              initialService={selectedService}
              onClose={() => setContactModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;