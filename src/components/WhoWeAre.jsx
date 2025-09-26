import React from "react";
import { FaCog, FaHandshake, FaGlobe, FaMapMarkerAlt, FaMicrochip } from "react-icons/fa";
import "./WhoWeAre.css";

export default function WhoWeAre() {
  return (
    <section className="who-section">
      <h2 className="section-title">Who We Are</h2>
      <p className="section-desc">
        Welcome to Proviniti; your pathway to a digitally transformed future.
        We're a global powerhouse in ServiceNow consulting and integration.
        Proviniti is your locally present, globally aware partner. We are not just about
        business; at Proviniti, we continuously strive to redefine the future of the
        digital world, today. Choose Proviniti for a future-forward approach to doing
        business.
      </p>

      <div className="who-icons">
        <div className="who-card">
          <FaCog className="who-icon" />
          <p>Proviniti: Your Powerhouse for ServiceNow</p>
        </div>
        <span className="divider"></span>
        <div className="who-card">
          <FaHandshake className="who-icon" />
          <p>Your Trusted Allies for Success</p>
        </div>
        <span className="divider"></span>
        <div className="who-card">
          <FaGlobe className="who-icon" />
          <p>Expertise Across Sectors</p>
        </div>
        <span className="divider"></span>
        <div className="who-card">
          <FaMapMarkerAlt className="who-icon" />
          <p>Global Reach, Local Impact</p>
        </div>
        <span className="divider"></span>
        <div className="who-card">
          <FaMicrochip className="who-icon" />
          <p>Transforming Digital Landscape</p>
        </div>
      </div>

      <button className="primary-btn">Know About Us</button>
    </section>
  );
}
