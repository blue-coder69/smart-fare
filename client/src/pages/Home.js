import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
