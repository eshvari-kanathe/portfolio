import React, { useState, useEffect } from 'react';
import { Code, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-6 inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1" style={{animation: 'spin 3s linear infinite'}}>
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <Code className="w-16 h-16 text-purple-400" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
          Full Stack Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Crafting modern web experiences with React, Node.js & MongoDB
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300">
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-pink-400 transform hover:scale-110 transition-all duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <a href="#skills" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </a>
    </section>
  );
}