import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from 'lucide-react';
import logo from './logo.png';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#07090E]/85 dark:bg-[#07090E]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Mark */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Levistro logo"
            className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-transform group-hover:scale-105 duration-300"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              Levistro
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-teal-400/80 -mt-0.5">
              Creative Agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-white/[0.04] px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Discovery CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-300" />}
          </button>

          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden shadow-glow-cyan transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Background Gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Start Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-300" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-[#07090E]/95 backdrop-blur-2xl border-b border-white/10 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-glow-cyan"
              >
                <Sparkles className="w-4 h-4" />
                Start a Project
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
