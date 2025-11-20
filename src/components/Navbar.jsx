import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f0f13]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Eshvari Kanathe
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="/Eshwari_kanatheCV (2).pdf"
              download
              className="px-5 py-2 border-2 border-purple-500 rounded-full font-semibold 
            text-purple-300 hover:bg-purple-500/10 hover:scale-105 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="/Eshwari_kanatheCV (2).pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold 
            text-purple-300 hover:bg-purple-500/10 hover:scale-105 transition-all"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
