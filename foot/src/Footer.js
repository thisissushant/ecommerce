import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Trendy</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Replacement</a>
            </li>
            <li>
              <a href="#services">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook fa-fade fa-xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-twitter fa-fade fa-xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram fa-fade fa-xl"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 The Trendy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
