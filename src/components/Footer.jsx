import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0d0d16",
        color: "#ccc",
        padding: "50px 20px",
        marginTop: "60px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* PROFILE + TEXT */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <h2 style={{ color: "white", marginBottom: "5px", fontSize: "26px" }}>
          Moazzam Hussain Qadri
        </h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
  <img
    src={profile}
    alt="Profile"
    style={{
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #444"
    }}
  />
</div>
        <p style={{ margin: "4px 0" }}>Computer Science Student</p>
        <p style={{ margin: "4px 0" }}>Web Developer</p>
        <p style={{ margin: "4px 0" }}>Tech Enthusiast</p>
      </div>

      {/* SOCIAL ICONS */}
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <a
          href="https://github.com/moazzamqadri03"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "12px", color: "#ccc", fontSize: "30px" }}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/moazzam-hussain-qadri-989144376"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "12px", color: "#0e76a8", fontSize: "30px" }}
        >
          <FaLinkedin />
        </a>
      </div>

      {/* QUICK LINKS */}
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <h3 style={{ color: "white", marginBottom: "10px" }}>Quick Links</h3>
        <div style={{ lineHeight: "2" }}>
          <a href="#home" style={{ color: "#ccc", textDecoration: "none" }}>
            Home
          </a>
          <br />
          <a href="#about" style={{ color: "#ccc", textDecoration: "none" }}>
            About
          </a>
          <br />
          <a href="#skills" style={{ color: "#ccc", textDecoration: "none" }}>
            Skills
          </a>
          <br />
          <a href="#projects" style={{ color: "#ccc", textDecoration: "none" }}>
            Projects
          </a>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <p style={{ margin: "6px 0" }}>
          Email: <span style={{ color: "#fff" }}>moazzamqadri03@gmail.com</span>
        </p>
        <p style={{ margin: "6px 0" }}>Kashmir, India</p>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "#aaa",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "15px",
        }}
      >
        © {new Date().getFullYear()} Moazzam Hussain Qadri — All Rights
        Reserved.
      </div>
    </footer>
  );
}