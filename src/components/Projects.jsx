import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    { name: "Project 1", description: "Built with React" },
    { name: "Project 2", description: "Another awesome project" },
    { name: "Project 3", description: "Yet another project" },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
