// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav style={{ padding: "18px 0", textAlign: "center" }}>
      <a href="#home" style={{ margin: "0 12px" }}>Home</a>
      <a href="#about" style={{ margin: "0 12px" }}>About</a>
      <a href="#skills" style={{ margin: "0 12px" }}>Skills</a>
      <a href="#projects" style={{ margin: "0 12px" }}>Projects</a>
      {/* Contact link removed from navbar on purpose */}
    </nav>
  );
}