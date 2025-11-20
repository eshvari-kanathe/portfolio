import React, { useState, useEffect } from 'react';
import { Code, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 bg-[#0f0f13]"
    >
      <div
        className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >

        <div className="mb-6 inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-[2px] animate-spin-slow">
            <div className="w-full h-full rounded-full bg-[#1a1a1f] flex items-center justify-center shadow-md">
              <Code className="w-16 h-16 text-purple-400 drop-shadow-lg" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Frontend Developer
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Building clean, modern, and performance-focused UI experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full 
            font-semibold shadow-lg shadow-purple-600/20 hover:scale-105 transition-all"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold 
            text-purple-300 hover:bg-purple-500/10 hover:scale-105 transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6 text-gray-300">
          <a
            href="#"
            className="hover:text-purple-400 hover:scale-110 transition-all"
          >
            <Github className="w-7 h-7" />
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 hover:scale-110 transition-all"
          >
            <Linkedin className="w-7 h-7" />
          </a>

          <a
            href="mailto:your.email@example.com"
            className="hover:text-pink-400 hover:scale-110 transition-all"
          >
            <Mail className="w-7 h-7" />
          </a>
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-purple-400"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
