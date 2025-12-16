import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div><strong>My Portfolio</strong></div>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
