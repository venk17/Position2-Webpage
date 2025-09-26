import React, { useState, useRef, useCallback } from 'react';
import "./Industries.css";
import FinancialServicesImg from "../assets/Financial Services img.png";
import TelecomIndustryImg from "../assets/Telecom Industry img.jpeg";
import ManufacturingIndustryImg from "../assets/Manufacturing Industry img.jpg";
import HealthcareIndustryImg from "../assets/Healthcare Industry img.jpg";
import RetailHospitalityImg from "../assets/Retail & Hospitality img.jpg";
import MediaTechImg from "../assets/Media & Tech img.jpg";

const Industries = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const industries = [
    {
      title: "Financial Services",
      description: "Proviniti's ServiceNow platform tailored, cost-effective financial solutions, enhancing visibility, compliance, customer retention, wealth management, and insurance satisfaction.",
      image: FinancialServicesImg
    },
    {
      title: "Telecom Industry", 
      description: "Enhance customer experiences, reduce costs, and boost efficiency through advanced automation with the customized telecom solutions from Proviniti's ServiceNow platform.",
      image: TelecomIndustryImg
    },
    {
      title: "Manufacturing Industry",
      description: "Enhance Industry 4.0 readiness and improve productivity, customer service, and smart manufacturing with Proviniti's ServiceNow solutions.",
      image: ManufacturingIndustryImg
    },
    {
      title: "Healthcare Industry",
      description: "Proviniti's ServiceNow solutions enhance patient care processes with streamlined workflows and improved operational efficiency.",
      image: HealthcareIndustryImg
    },
    {
      title: "Retail & Hospitality",
      description: "Leverage cutting-edge solutions for tech companies to streamline operations and drive innovation.",
      image: RetailHospitalityImg
    },
    {
      title: "Media & Tech",
      description: "Transform retail operations with customized ServiceNow solutions for enhanced customer experiences.",
      image: MediaTechImg
    }
  ];

  // Mouse drag handlers
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  // Touch handlers
  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  // Auto-update dots
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const scrollPosition = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.children[0].offsetWidth + 30;
    const newSlide = Math.round(scrollPosition / cardWidth);
    setCurrentSlide(newSlide);
  }, []);

  // Go to slide
  const goToSlide = (slideIndex) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth + 30;
      carouselRef.current.scrollTo({
        left: slideIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="industries-section">
      <div className="container">
        <h2 className="industries-title">Industries</h2>
        <p className="industries-subtitle">
          Obtain industry-specific ServiceNow solutions that drive digital transformation with efficient workflows - all with Proviniti's expertise.
        </p>
        
        <div 
          className="carousel-container"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          onScroll={handleScroll}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="industries-slider">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="industry-card"
                style={{ backgroundImage: `url(${industry.image})` }}
              >
                <div className="industry-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <a href="#" className="read-more">
                    Read more <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="carousel-nav">
          {Array.from({length: Math.ceil(industries.length / 3)}).map((_, index) => (
            <div 
              key={index}
              className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
