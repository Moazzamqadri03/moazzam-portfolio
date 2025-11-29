// src/components/AnimatedBg.jsx
import React from "react";
import "./AnimatedBg.css";

export default function AnimatedBg() {
  // Render a few floating "bubbles" — CSS controls their animation
  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="bubbles">
        <span className="bubble b1" />
        <span className="bubble b2" />
        <span className="bubble b3" />
        <span className="bubble b4" />
        <span className="bubble b5" />
        <span className="bubble b6" />
      </div>
    </div>
  );
}