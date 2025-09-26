import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import "./FooterSection.css"
import LogoImg from "../assets/logo.png"
const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* Left About */}
        <div className="footer-about">
          <img src={LogoImg}  alt="logo img" className="logo-img"></img>
          <p>
            Proviniti is a deep tech firm that helps businesses leverage
            innovation to build smarter technologies, drive results, and fuel
            progress.
          </p>
        </div>

        {/* Locations */}
        <div className="footer-locations">
          <h3>Locations</h3>
          <div className="footer-columns">
            <div>
              <h4>US</h4>
              <p><strong>NEW YORK CITY HQ</strong><br />501 Madison Avenue 5th Floor, New York, NY 10022</p>
              <p><strong>NEW YORK</strong><br />324 South Service Road, Suite 201 Melville, NY 11747</p>
              <p><strong>SAN FRANCISCO, CALIFORNIA</strong><br />101 Jefferson Dr, Menlo Park, CA 94025</p>
              <p><strong>PALO ALTO, CALIFORNIA</strong></p>
              <p><strong>AUSTIN, TEXAS</strong></p>
              <p><strong>CHICAGO, ILLINOIS</strong></p>
            </div>
            <div>
              <h4>Europe</h4>
              <p><strong>PALERMO</strong><br />Via Enzo Ed Elvira Sellerio, 50-90141 Palermo, Italy</p>
              <h4>UK</h4>
              <p><strong>LONDON</strong><br />1540 Rockwell Avenue Bristol, London</p>
            </div>
            <div>
              <h4>Asia</h4>
              <p><strong>BANGALORE, INDIA</strong></p>
              <p><strong>MANILLA, PHILIPPINES</strong></p>
            </div>
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><FaEnvelope /> info@proviniti.com</p>
          <p><FaPhone /> +1 800-935-6846</p>

          <h3>Socials</h3>
          <div className="footer-socials">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2024 Proviniti. All Rights Reserved.</p>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
