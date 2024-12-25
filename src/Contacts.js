import React from "react";

export default function Contacts() {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact Me</h2>
        <h4>Let's Work Together</h4>
        <p>
          I will help you with your next project. Contact me through the details
          below.
        </p>
        <ul className="contact-list">
          <li>
            <a href="#">Thane,Maharashtra</a>
          </li>
          <li>
            <a href="mailto:pujachande2024@gmail.com">
              pujachande2024@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+917559210027">+91 7559210027</a>
          </li>
        </ul>
        <a href="mailto:pujachande2024@gmail.com">
          <button className="btn">Let's Chat</button>
        </a>
      </div>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/puja-chande-614389242"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>

        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href="tel:+917559210027" title="+91 7559210027">
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
    </section>
  );
}
