import React from 'react';
import { FaServer, FaCogs, FaChartLine, FaMoneyBillWave, FaUsers } from 'react-icons/fa';
import "./Solutions.css";

const Solutions = () => {
  const solutions = [
    {
      icon: <FaServer />,
      title: "IT Operations Management",
      description: "Avail of our holistic IT operations management solutions to detect and resolve issues early, automate remediation, and enhance operational efficiency."
    },
    {
      icon: <FaCogs />,
      title: "IT Asset Management",
      description: "Efficiently track, manage, and optimize your IT assets throughout their lifecycle, minimizing costs and mitigating risks."
    },
    {
      icon: <FaChartLine />,
      title: "In-platform Process Mining & Optimization",
      description: "Use our in-platform process mining solutions to identify areas of improvement and optimize your processes for maximum efficiency."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Source-2-Pay Operations",
      description: "Proviniti's ServiceNow Source-to-Pay solution simplifies procurement by automating and bridging systems, data, and stakeholders on one platform."
    },
    {
      icon: <FaUsers />,
      title: "Customer Service Management",
      description: "Transform your customer service operations with ServiceNow's powerful tools to deliver exceptional customer experiences."
    }
  ];

  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <h2 className="solutions-title">Solutions</h2>
        <div className="solutions-list">
          {solutions.map((solution, index) => (
            <div key={index} className="solutions-item">
              <div className="solutions-icon-box">{solution.icon}</div>
              <div className="solutions-content">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
              <div className="solutions-arrow">
                <span>&gt;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
