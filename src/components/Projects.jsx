import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio built with React and CSS animations.",
      link: "#",
    },
    {
      name: "Todo App",
      description: "A full-featured todo app with React Hooks and local storage.",
      link: "#",
    },
    {
      name: "E-commerce UI",
      description: "Responsive e-commerce UI built with React and Tailwind CSS.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} className="project-btn" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
