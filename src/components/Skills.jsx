import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Palette } from 'lucide-react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React JS', icon: Code, color: 'from-blue-400 to-cyan-400', level: 85 },
    { name: 'JavaScript', icon: Code, color: 'from-yellow-400 to-orange-400', level: 90 },
    { name: 'TypeScript', icon: Code, color: 'from-blue-500 to-blue-600', level: 80 },
    { name: 'Tailwind CSS', icon: Palette, color: 'from-cyan-400 to-teal-400', level: 90 },
    { name: 'Material UI', icon: Palette, color: 'from-blue-400 to-indigo-500', level: 85 },
    { name: 'Node.js', icon: Server, color: 'from-green-500 to-emerald-600', level: 80 },
    { name: 'Express.js', icon: Server, color: 'from-gray-600 to-gray-700', level: 85 },
    { name: 'MongoDB', icon: Database, color: 'from-green-600 to-green-700', level: 80 }
  ];

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-16">1 Year of Hands-on Experience</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-3">{skill.name}</h3>
              
              <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
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