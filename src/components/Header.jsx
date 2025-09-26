import React, { useState } from "react";
import "./Header.css";
import logoImg from "../assets/logo.png";

const Header = ({ scrollToSection, isMenuOpen, setIsMenuOpen, activeSection = "home" }) => {
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo & Brand */}
          <div className="header-left">
            <div 
              className="logo" 
              onClick={() => handleNavClick("home")} 
              style={{cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none'}}
            >
              <img src={logoImg} alt="Logo" className="logo-icon" />
              <span className="logo-text">proviniti</span>
            </div>
            <div className="divider">|</div>
            <div className="brand-text">
              servicen<span className="brand-highlight">o</span>w
            </div>
          </div>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
            <button
              className={`nav-link ${activeSection === "who-we-are" ? "active" : ""}`}
              onClick={() => handleNavClick("who-we-are")}
            >
              Who We Are
            </button>
            <button
              className={`nav-link ${activeSection === "what-we-do" ? "active" : ""}`}
              onClick={() => handleNavClick("what-we-do")}
            >
              What We Do
            </button>
            <button
              className={`nav-link ${activeSection === "resources" ? "active" : ""}`}
              onClick={() => handleNavClick("resources")}
            >
              Resources
            </button>
            <button
              className="contact-btn"
              onClick={() => handleNavClick("contact")}
            >
              Contact Us
            </button>
          </nav>

          {/* Hamburger Menu */}
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;