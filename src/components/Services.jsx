import React from "react";
import "./Services.css";
import { Lightbulb, Cog, RefreshCcw } from "lucide-react"; // icons

const Services = () => {
  const services = [
    {
      icon: <Lightbulb size={40} color="#8efc63" />,
      title: "Advisory and Consulting Services",
      description:
        "Embark on a transformative voyage with Proviniti's Advisory and Consulting Services. We clear the path, align your vision, and craft strategic roadmaps. Together, we'll navigate the challenges of digital transformation, transforming your business into a beacon of success."
    },
    {
      icon: <Cog size={40} color="#8efc63" />,
      title: "Implementation Services",
      description:
        "Dive into the future with Proviniti's Implementation Solutions, where we redefine the digital experience, delivering targeted results. Our experienced team navigates your unique challenges, crafting solutions that drive success. Experience the evolution of business with us."
    },
    {
      icon: <RefreshCcw size={40} color="#8efc63" />,
      title: "Migration and Upgradation Services",
      description:
        "Power up your digital transformation with Proviniti's Migration and Upgrade Services. Combining the strength of ServiceNow and Gen AI, we ensure a smooth transition for greater efficiency and growth. Let's conquer the pinnacle of digital evolution together."
    }
  ];

  return (
    <div className="services-container">
      <h2 className="services-heading">Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="read-more">
              Read more <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
