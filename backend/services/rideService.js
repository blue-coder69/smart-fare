const axios = require('axios');

// Uber API configuration
const UBER_API_URL = 'https://api.uber.com/v1.2/estimates/price';
const UBER_CLIENT_ID = process.env.UBER_CLIENT_ID; 
const UBER_CLIENT_SECRET = process.env.UBER_CLIENT_SECRET; 

// Ola API configuration
const OLA_API_URL = 'https://developer.olacabs.com/v1.0/products';
const OLA_CLIENT_ID = process.env.OLA_CLIENT_ID; 
const OLA_CLIENT_SECRET = process.env.OLA_CLIENT_SECRET; 

// Function to get Uber ride estimates
async function getUberEstimates(start_latitude, start_longitude, end_latitude, end_longitude) {
    try {
        const accessToken = await getUberAccessToken(); // Get the access token
        const response = await axios.get(UBER_API_URL, {
            params: {
                start_latitude,
                start_longitude,
                end_latitude,
                end_longitude,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data.prices; // Return ride prices
    } catch (error) {
        console.error('Error fetching Uber estimates:', error);
        throw error;
    }
}

// Function to get Ola ride estimates
async function getOlaEstimates(start_latitude, start_longitude) {
    try {
        const accessToken = await getOlaAccessToken(); // Get the access token
        const response = await axios.get(OLA_API_URL, {
            params: {
                start_latitude,
                start_longitude,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data; // Adjust according to Ola API response structure
    } catch (error) {
        console.error('Error fetching Ola estimates:', error);
        throw error;
    }
}

// Function to get Uber access token
async function getUberAccessToken() {
    const authUrl = 'https://login.uber.com/oauth/token';
    const params = new URLSearchParams();
    params.append('client_id', UBER_CLIENT_ID);
    params.append('client_secret', UBER_CLIENT_SECRET);
    params.append('grant_type', 'client_credentials');

    try {
        const response = await axios.post(authUrl, params);
        return response.data.access_token; // Return the access token
    } catch (error) {
        console.error('Error fetching Uber access token:', error);
        throw error;
    }
}

// Function to get Ola access token
async function getOlaAccessToken() {
    const authUrl = 'https://developer.olacabs.com/v1.0/oauth2/token';
    const params = new URLSearchParams();
    params.append('client_id', OLA_CLIENT_ID);
    params.append('client_secret', OLA_CLIENT_SECRET);
    params.append('grant_type', 'client_credentials');

    try {
        const response = await axios.post(authUrl, params);
        return response.data.access_token; // Return the access token
    } catch (error) {
        console.error('Error fetching Ola access token:', error);
        throw error;
    }
}

module.exports = {
    getUberEstimates,
    getOlaEstimates,
};
