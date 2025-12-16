import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I’m a frontend developer specializing in <span className="highlight">React</span> and modern web development. I love creating
          interactive, responsive, and user-friendly web applications.
        </p>
        <div className="skills">
          <h3>Skills:</h3>
          <ul>
            <li>React & Redux</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
            <li>Tailwind CSS / CSS Modules</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
