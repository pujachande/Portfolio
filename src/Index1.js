import React from "react";
import "./style.css"; // assuming your custom CSS is in the same folder

export default function Index1() {
  return (
    <>
      {/* Header */}
      <header>
        <h2 className="logo">
          Portfo<span>lio</span>
        </h2>
        <ul className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#achievement">Achievements</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>

      {/* Technical Languages Section */}
      <div className="inner">
        <div className="Tech_header">
          <h1>Languages</h1>
        </div>
        <div className="Tcontainer">
          <div className="skill-box">
            <div className="skill-title">
              <div className="tech_img"></div>
              <h3>HTML</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="tech_img"></div>
              <h3>CSS</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="tech_img"></div>
              <h3>Bootstrap</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="tech_img"></div>
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="tech_img"></div>
              <h3>React</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <a href="#" className="top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </>
  );
}
