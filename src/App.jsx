import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f13] text-gray-200 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] 
          bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />

        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] 
          bg-cyan-500/20 rounded-full blur-[150px] animate-pulse 
          [animation-delay:1s]" />

        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] 
          bg-pink-500/20 rounded-full blur-[150px] animate-pulse 
          [animation-delay:2s]" />
      </div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
