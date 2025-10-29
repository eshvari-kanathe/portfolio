import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Full-stack e-commerce app with React, Node.js, Express, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      gradient: 'from-purple-500 to-pink-500',
      link: '#'
    },
    {
      title: 'Task Management System',
      desc: 'Real-time task tracker with TypeScript and Material UI',
      tech: ['TypeScript', 'React', 'Material UI', 'Express'],
      gradient: 'from-blue-500 to-cyan-500',
      link: '#'
    },
    {
      title: 'Social Media Dashboard',
      desc: 'Analytics dashboard with interactive charts and data visualization',
      tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      gradient: 'from-orange-500 to-red-500',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-16">Building real-world applications</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="flex items-center gap-2 text-purple-400 hover:text-cyan-400 transition-colors">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}