import React from 'react';
import './RideCard.css';

const RideCard = ({ ride, service }) => {
  return (
    <div className="ride-card">
      <h2>{service}</h2>
      <p>Price Estimate: <span>{ride.priceEstimate}</span></p>
      <p>Duration: <span>{ride.duration}</span></p>
    </div>
  );
};

export default RideCard;
