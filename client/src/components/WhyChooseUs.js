import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features">
        <div className="feature">
          <h3>Multiple Ride Options</h3>
          <p>Whether you need a cab, auto, or bike, our app gives you the freedom to choose the best option that fits your budget and needs.</p>
        </div>
        <div className="feature">
          <h3>Transparent Pricing</h3>
          <p>We believe in providing clear and transparent pricing. No hidden fees or surprises—just accurate fare comparisons across multiple platforms.</p>
        </div>
        <div className="feature">
          <h3>User-Friendly App</h3>
          <p>Our app is designed with ease of use in mind, ensuring that you can compare fares and book your ride in just a few clicks.</p>
        </div>
        <div className="feature">
          <h3>Real-Time Updates</h3>
          <p>Receive live updates on fares and availability, ensuring you have the most current information at your fingertips.</p>
        </div>
        <div className="feature">
          <h3>Safety First</h3>
          <p>We prioritize your safety with verified drivers and secure payment options, providing peace of mind with every ride.</p>
        </div>
        <div className="feature">
          <h3>Customer Support</h3>
          <p>Our dedicated support team is available 24/7 to assist you with any inquiries or issues that may arise.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
