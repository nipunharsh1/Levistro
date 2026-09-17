import React, { useState, useEffect } from 'react';
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
import { X } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('levistro_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Dark mode default
  });
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Brand Strategy & Identity');

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
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090E] text-slate-900 dark:text-white font-inter selection:bg-cyan-500 selection:text-white transition-colors duration-300">
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
        <Services onSelectService={(service) => handleOpenContact(service)} />

        {/* 4. Filterable Case Studies Showcase */}
        <Portfolio />

        {/* 5. 4-Step Working Methodology */}
        <Methodology />

        {/* 6. Creative Leadership Team */}
        <Team />

        {/* 7. Executive Client Testimonials */}
        <Testimonials />

        {/* 8. High-Converting Project Discovery Gateway */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Global Mega Footer with Live World Clocks */}
      <Footer />

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