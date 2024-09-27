import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Transparent. Safe. Reliable</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Nulla vel amet vivamus pretium.</p>
      <button className="cta-button">Book Now</button>
      <div className="ride-options">
        <button className="option">Local Taxi</button>
        <button className="option">Rental</button>
        <button className="option">Outstation</button>
      </div>
    </section>
  );
};

export default HeroSection;
