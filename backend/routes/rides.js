const express = require('express');
const { getUberEstimates, getOlaEstimates } = require('../services/rideService');
const router = express.Router();

// Endpoint to get ride estimates
router.post('/estimates', async (req, res) => {
    const { start_latitude, start_longitude, end_latitude, end_longitude } = req.body;

    try {
        const uberEstimates = await getUberEstimates(start_latitude, start_longitude, end_latitude, end_longitude);
        const olaEstimates = await getOlaEstimates(start_latitude, start_longitude);
        res.status(200).json({ uberEstimates, olaEstimates });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ride estimates', error });
    }
});

module.exports = router;
