import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMui, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'from-orange-500 to-red-500', level: 90 },
    { name: 'CSS', icon: FaCss3Alt, color: 'from-blue-500 to-blue-700', level: 90 },
    { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-yellow-600', level: 90 },
    { name: 'React JS', icon: FaReact, color: 'from-blue-400 to-cyan-400', level: 90 },
    { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-500 to-blue-600', level: 80 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-400 to-teal-400', level: 90 },
    { name: 'Material UI', icon: SiMui, color: 'from-blue-400 to-indigo-500', level: 85 },
    { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-600 to-black', level: 70 },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 bg-[#0f0f13]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 
          bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 mb-16">
          1+ Year of Hands-on Experience in Frontend Development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="group relative bg-[#1a1a1f] rounded-2xl p-6 border border-white/10 
              hover:border-purple-500/40 transition-all duration-300 
              hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} 
                flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-center text-gray-200 mb-4">
                {skill.name}
              </h3>

              <div className="w-full bg-[#2a2a2e] rounded-full h-2 mb-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
              </div>

              <p className="text-center text-sm text-gray-400">{skill.level}%</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
