const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // Import connectDB function

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // Establish database connection

// Import routes
const ridesRoutes = require('./routes/rides');
app.use('/api/rides', ridesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
