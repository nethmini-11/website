import React from "react";
import HeroCover from "../../assets/images/JourneyBikes_cover.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="section home bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${HeroCover})` }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 section-title">Discover Your Perfect Ride Today</h1>

          <p className="section-text">
            Experience top-tier performance and unmatched comfort with our
            premium bicycle selection. Whether for a casual ride through the
            city or an adrenaline-filled mountain adventure, we have the perfect
            bike for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
