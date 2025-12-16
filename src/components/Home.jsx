import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight">Tarun</span>
        </h1>
        <p className="subtitle">A passionate React developer</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
}
