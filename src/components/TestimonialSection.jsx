import React from "react";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Left Section */}
        <div className="testimonial-left">
          <h4 className="testimonial-subtitle">Testimonials</h4>
          <h2 className="testimonial-title">
            See What Our Clients Say About How We Are Driving Value Across The Ecosystem
          </h2>
          <p className="testimonial-description">
            When it comes to complex technology challenges and mission-critical tasks, industry-leading companies trust Proviniti.
          </p>
        </div>

        {/* Right Section */}
        <div className="testimonial-right">
          <div className="quote-icon">“</div>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ullamcorper diam.
            Praesent pretium lacus sit amet ante hendrerit eleifend.
          </p>
          <h4 className="testimonial-author">Robert Williams</h4>
          <span className="testimonial-company">Company name</span>

          {/* Avatars */}
          <div className="testimonial-avatars">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="user2" />
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
