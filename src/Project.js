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
            href="https://www.geeksforgeeks.org/library-management-system/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/lib1.jpg" alt="Library Management System" />
          </a>
          <div className="main-row"></div>
          <h3>Word Dictionary</h3>
        </div>

        {/* Project 2 */}
        <div className="row">
          <a
            href="https://www.geeksforgeeks.org/forecast-weather-project-check-today-weather-for-any-location/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/weather.jpg" alt="Weather Forecasting App" />
          </a>
          <div className="main-row"></div>
          <h3>Weather Forecasting App</h3>
        </div>
      </div>
    </section>
  );
}
