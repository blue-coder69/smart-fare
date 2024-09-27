import React, { useState } from 'react';
import { getRideEstimates } from '../services/apiService';
import RideCard from '../components/RideCard';
import './RideCard.css';

const Compare = () => {
  const [rides, setRides] = useState(null);

  const handleCompare = async () => {
    const startCoords = { lat: 12.9716, lng: 77.5946 };  // Example: Bangalore
    const endCoords = { lat: 13.0358, lng: 77.5970 };    // Example: Nearby location

    const rideData = await getRideEstimates(startCoords, endCoords);
    setRides(rideData);
  };

  return (
    <div className="container">
      <button className="compare-btn" onClick={handleCompare}>
        Compare Rides
      </button>
      {rides && (
        <div className="ride-container">
          <RideCard ride={rides.uber} service="Uber" />
          <RideCard ride={rides.ola} service="Ola" />
          <RideCard ride={rides.rapido} service="Rapido" />
        </div>
      )}
    </div>
  );
};

export default Compare;