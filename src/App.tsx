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
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Brand Strategy & Identity');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-white font-inter selection:bg-cyan-500 selection:text-black">
      {/* Global Navigation */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Agency Experience */}
      <main>
        {/* 1. Hero Section with 3D Globe & Live Metrics */}
        <Hero onOpenContact={() => handleOpenContact()} />

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0F1420] border border-white/15 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors z-20"
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