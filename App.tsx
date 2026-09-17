import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Brands from './components/Brands';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <Hero />
      <Portfolio />
      <Team />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;