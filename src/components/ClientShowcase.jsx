import React from "react";
import "./ClientShowcase.css";
import PepsicoImg from "../assets/pepsico.png";
import KrogerImg from "../assets/Kroger.png";
import SamsungImg from "../assets/samsung.png"
import ShopRiteImg from "../assets/ShopRite.png";
import TeladocHealthImg from "../assets/Teladoc.png";
import TiaaImg from "../assets/Tiaa.png";
import TrustpilotImg from "../assets/Trustpilot.png"

export default function ClientShowcase() {
 const logos = [
  { src: PepsicoImg, alt: "PepsiCo" },
  { src: KrogerImg, alt: "Kroger" },
  { src: SamsungImg, alt: "Samsung" },
  { src: ShopRiteImg, alt: "ShopRite" },
  { src: TeladocHealthImg, alt: "Teladoc Health" },
  { src:TiaaImg, alt: "TIAA" },
  { src: TrustpilotImg, alt: "Trustpilot" }
];

  return (
    <section className="client-showcase">
      <h2 className="section-title">Proviniti. Clear Choice. Clear Success</h2>
      <p className="section-desc">
        Tackling tangled tech or steering through mission-critical tasks, savvy industry leaders choose Proviniti.
      </p>

      <div className="logo-row">
        {logos.map((logo, index) => (
          <div key={index} className="logo-box">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}