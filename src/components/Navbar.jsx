import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent cursor-pointer">
            Eshvari
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-200"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex items-center space-x-8 text-gray-200 font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-300 transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <a
              href="/Eshwari_kanatheCV (2).pdf"
              download
              className="px-4 py-2 rounded-full border border-purple-500/40 hover:border-purple-500 hover:bg-purple-500/20 transition text-sm"
            >
              Download Resume
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2 text-gray-200 font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-cyan-300 transition"
              >
                {item}
              </a>
            ))}

            <a
              href="/Eshwari_kanatheCV (2).pdf"
              download
              className="block w-fit mt-3 px-4 py-2 rounded-full border border-purple-500/40 hover:bg-purple-500/20 transition text-sm"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
