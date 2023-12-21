import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section  ">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-heading">Best Sneakers</h1>
        <p className="hero-subheading">Buy Affordable and Best Sneakers</p>
        <a href="#cta" className="hero-button">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
