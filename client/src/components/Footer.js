import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='container'>
        <div className="contact-info">
          <div className="text">
            Smart Fare
          </div>
          <div className='contact-link'>
            <a href='#contact'>Contact Us</a>
          </div>
        </div>
        <div className='copyright'>
          &#169;All Rights Reserved | We Don't Own the Cabs, Just the Comparison! 2024 Smart Fare.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
