import React from 'react';
import "./Home.css";
import homeImg from "../assets/home.jpg";

const Home = () => {
  return (
    <div className="home">
      <section 
        className="hero"
        style={{
          backgroundImage: `url(${homeImg})`
        }}
      >
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            Igniting Transformation, Powering Progress
          </h1>
          <p className="hero-subtitle">
            Your gateway to ServiceNow powered tech-transformation with precision and passion.
          </p>
          <a href="#what-we-do" className="btn btn-primary">
            Discover Our Solutions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
