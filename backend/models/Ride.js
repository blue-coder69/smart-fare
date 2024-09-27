const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    service: { type: String, required: true },
    price: { type: Number, required: true },
    eta: { type: Number, required: true },
});

module.exports = mongoose.model('Ride', rideSchema);
