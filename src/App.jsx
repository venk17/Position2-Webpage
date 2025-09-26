import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  // Set up intersection observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
        rootMargin: "-20% 0px -20% 0px" // Adjust triggering points
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to section by id
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // close menu on mobile
      setActiveSection(id); // immediately set active section
    }
  };

  // Assign ref to each section
  const setSectionRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="App">
      <Header 
        scrollToSection={scrollToSection} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />

      {/* Sections */}
      <section id="home" ref={setSectionRef("home")}>
        <Home scrollToSection={scrollToSection} />
      </section>

       <section id="what-we-do" ref={setSectionRef("what-we-do")}>
        <WhatWeDo />
      </section>

      
      <section id="who-we-are" ref={setSectionRef("who-we-are")}>
        <WhoWeAre />
      </section>


      <section id="resources" ref={setSectionRef("resources")}>
        <Resources />
      </section>

      <section id="contact" ref={setSectionRef("contact")}>
        <Contact />
      </section>
    </div>
  );
}

export default App;