import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131318]/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-200 hover:text-white"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <div className="hidden md:flex space-x-10 text-gray-300 font-medium">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group hover:text-white transition-colors duration-300"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all"></span>
              </a>
            ))}
          </div>

        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 mt-2 space-y-3 bg-[#1a1a1f]/80 rounded-xl px-4 py-3 border border-white/10 backdrop-blur-xl">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-white py-2 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}
