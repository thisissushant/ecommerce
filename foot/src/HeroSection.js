import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-heading">Your Hero Headline</h1>
        <p className="hero-subheading">
          A brief description of your awesome website.
        </p>
        <a href="#cta" className="hero-button">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
