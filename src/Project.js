import React from "react";

export default function Projects() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2>My Project</h2>
        <h4>Some Of My Distinguished Works</h4>
      </div>

      <div className="portfolio-content">
        {/* Project 1 */}
        <div className="row">
          <a
            href="https://github.com/pujachande/Dictionary-Web-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Project Link</p>
          </a>
          <div className="main-row"></div>
          <h3>Word Dictionary</h3>
        </div>

        {/* Project 2 */}
        <div className="row">
          <a
            href="https://github.com/pujachande/Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Project Link</p>
          </a>
          <div className="main-row"></div>
          <h3>Weather Forecasting App</h3>
        </div>
      </div>
    </section>
  );
}
