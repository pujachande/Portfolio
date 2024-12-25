import React from "react";
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h4>Hello</h4>
        <h1>
          I'm Puja <br /> <span>Chande</span>
        </h1>
        <h3>Front End Developer</h3>
        <a
          href="https://drive.google.com/file/d/1qHsyHpckhuoVkSRIXwvQN3KecxLGydAx/view?usp=sharing"
          className="btn"
          target="_blank"
          rel="noopener noreferrer" // For security purposes
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
