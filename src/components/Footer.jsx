import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 mt-12 bg-[#070617] border-t border-purple-800/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Eshvari Kanathe — Frontend Developer</p>

        <div className="flex items-center gap-4 text-gray-300">
          <a href="https://github.com/eshvari-kanathe" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/eshvari-kanathe-3502b32a4/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="mailto:ishwarikanathe@gmail.com" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
