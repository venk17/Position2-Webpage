import React from "react";
import "./Resources.css";
import preesReals from "../assets/PressRealsImg.png";
import BolgImg from "../assets/BlogImg.jpg";
import preeImg from "../assets/PressImg.png"

const resources = [
  {
    type: "Press Release",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta vitae tortor ut posuere.",
    image:preesReals,
    link: "#",
  },
  {
    type: "Blog",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta vitae tortor ut posuere.",
    image: BolgImg,
    link: "#",
  },
  {
    type: "Press Release",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta vitae tortor ut posuere.",
    image: preeImg,
    link: "#",
  },
];

export default function Resources() {
  return (
    <div className="resources-section">
      <h2 className="resources-title">Resources</h2>
      <p className="resources-subtitle">
        When it comes to complex technology challenges and mission-critical tasks,
        industry-leading companies trust Proviniti
      </p>

      <div className="resources-grid">
        {resources.map((item, index) => (
          <div
            key={index}
            className="resource-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="overlay"></div>
            <div className="resource-content">
              <span className="resource-type">{item.type}</span>
              <h3 className="resource-text">{item.title}</h3>
              <a href={item.link} className="read-more">
                Read more <span className="arrow">&gt;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
