import React from "react";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Ezcolocker – Time Tracking App",
      desc: "Time tracking application where I implemented routing, UI enhancements, SCSS styling, and performance optimization.",
      tech: ["React", "SCSS", "Bootstrap", "Figma"],
      gradient: "from-purple-500 to-pink-500",
      link: "", 
    },
    {
      title: "DevConnect Portal – Collaboration Platform",
      desc: "Developer collaboration platform with authentication, task tracking, Redux-based state management, and responsive UI.",
      tech: ["React", "Redux", "Material UI", "REST APIs"],
      gradient: "from-blue-500 to-cyan-500",
      link: "", 
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with modern UI, smooth animations, responsive design, and clean reusable components.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      gradient: "from-orange-500 to-red-500",
      link: "https://yourportfolio.com",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 bg-[#0f0f13]">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 
          bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Real-world projects with clean UI, performance, and modern
          architecture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#1a1a1f] rounded-2xl overflow-hidden 
              border border-white/10 hover:border-purple-500/40 
              transition-all duration-300 hover:-translate-y-2 
              hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} opacity-90 
                group-hover:opacity-100 transition-opacity`}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-200">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 rounded-full text-sm 
                      border border-purple-500/20 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-cyan-700 
                    transition-colors font-medium"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
