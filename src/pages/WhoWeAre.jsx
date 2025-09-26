import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import ClientShowcase from "../components/ClientShowcase";
import TestimonialSection from "../components/TestimonialSection";

export default function WhoWeArePage() {
  return (
    <main>
      {/* About Section */}
      <WhoWeAre />

      {/* Client Showcase Section */}
      <ClientShowcase />

      {/* Testimonials */}
      <TestimonialSection />
    </main>
  );
}
