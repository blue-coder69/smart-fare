import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features">
        <div className="feature">
          <h3>Multiple Ride Options</h3>
          <p>Whether you need a cab, auto, or bike, our app gives you the freedom to choose the best option that fits your budget and needs..</p>
        </div>
        <div className="feature">
          <h3>Transparent Pricing</h3>
          <p>We believe in providing clear and transparent pricing. No hidden fees or surprises—just accurate fare comparisons across multiple platforms.</p>
        </div>
        <div className="feature">
          <h3>User-Friendly App</h3>
          <p>Our app is designed with ease of use in mind, ensuring that you can compare fares and book your ride in just a few clicks.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
