import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>Empowering Your Travel Experience</h2>
      <p>Fermentum luctus convallis non lectus. Aliquam at ut viverra non arcu.</p>
      <div className="skills">
        <div className="skill">
          <span>Experienced</span>
          <div className="progress-bar"><div className="progress" style={{ width: '98%' }}></div></div>
        </div>
        <div className="skill">
          <span>Reliable</span>
          <div className="progress-bar"><div className="progress" style={{ width: '86%' }}></div></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
