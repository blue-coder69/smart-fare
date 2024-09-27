import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
       
     
      <div className="logo">Smart Fare</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#support">Support</a></li>
        <li><a href="#offers">Offers</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;