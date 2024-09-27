import axios from 'axios';

export const getRideEstimates = async (startCoords, endCoords) => {
  const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/rides/compare`, {
    params: {
      startLat: startCoords.lat,
      startLng: startCoords.lng,
      endLat: endCoords.lat,
      endLng: endCoords.lng,
    },
  });

  return response.data;
};
