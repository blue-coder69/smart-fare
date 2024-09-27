import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
