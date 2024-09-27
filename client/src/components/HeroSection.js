import React from 'react';
import './HeroSection.css';
import captainImage from './Captain.jpeg'; // Import the image

const HeroSection = () => {
  return (
    <section className="hero">
      <div className='Image'>
        <img src={captainImage} alt="Captain" /> Use the imported image
      </div>
      <div className='cards'>

        <div className='left'>
          <h1>Compare. Choose. Go.</h1>
          <p>Seamlessly compare cab fares across platforms and book the best deal in seconds</p>
        </div>
        <div className='right'>
          <input type='text' placeholder='Enter Your Location' className='location' />
          <input type='text' placeholder='Enter Destination' className='destination' />
          <button className='btn'>See The fares</button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
