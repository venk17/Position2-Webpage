import React from 'react';
import "./WhatWeDo.css";
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import Industries from '../components/Industries';

const WhatWeDo = () => {
  return (
    <main className="what-we-do">
      {/* Hero Section */}
      <section className="dark-section hero-section">
        <div className="container">
          <h2>What We Do</h2>
          <p>
            Power up your present, pioneer your future! With Proviniti's ServiceNow solutions, 
            we aren't just transforming your business – we're revolutionizing the way you envision tomorrow. 
            Let's create a brighter future together.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <Services />
      </section>

      {/* Comment out other sections for now */}
      
      <section className="solutions-section">
        <Solutions />
      </section>

      <section className="industries-section">
        <Industries />
      </section>
      
    </main>
  );
};

export default WhatWeDo;