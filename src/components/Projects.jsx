import React from "react";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Ezcolocker – Time Tracking App",
      desc: "A time tracking application where I worked on routing, UI enhancement, SCSS styling, and overall performance optimization.",
      tech: ["React", "SCSS", "Bootstrap", "Figma"],
      gradient: "from-purple-500 to-pink-500",
      link: "",
    },
    {
      title: "DevConnect Portal – Collaboration Platform",
      desc: "A developer collaboration platform featuring authentication, task tracking, Redux state management, API integration, and responsive UI.",
      tech: ["React", "Redux", "Material UI", "REST APIs", "Vercel"],
      gradient: "from-blue-500 to-cyan-500",
      link: "",
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with modern layout, smooth animations, responsive design, and clean reusable components.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      gradient: "from-orange-500 to-red-500",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Real-world frontend projects built with React & modern tools
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-purple-600 hover:text-cyan-600 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 m-3" />
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
