import React from 'react';
import './HeroSection.css';
import captainImage from './Captain.jpeg'; // Import the image

const HeroSection = () => {
  return (
    <section className="hero">
      <div className='Image'>
      <img src={captainImage} alt="Captain" /> {/* Use the imported image */}
      </div>
      <div className='cards'>
        <h1>Compare. Choose. Go.</h1>
        <p>Seamlessly compare cab fares across platforms and book the best deal in seconds</p>
        <input type='text' placeholder='Enter Your Location' className='location' />
        <input type='text' placeholder='Enter Destination' className='destination' />
      </div>
      <div className='btn'>
        <button>See The fares</button>
      </div>
    </section>
  );
};

export default HeroSection;
