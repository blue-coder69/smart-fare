import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import RideCard from '../components/RideCard'
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <HeroSection />
      {/* <RideCard/> */}
      <AboutUs />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
