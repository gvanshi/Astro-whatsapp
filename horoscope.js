const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

// Fetch Horoscope from RapidAPI
async function getHoroscope(sign) {
    try {
        const response = await axios.get('https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope', {
            params: { zodiacSign: sign }, // Use the zodiac sign provided by the user
            headers: {
                'x-rapidapi-host': process.env.RAPIDAPI_HOST, // Use the environment variable
                'x-rapidapi-key': process.env.RAPIDAPI_KEY // Use the environment variable
            }
        });

        // Log the full response to check its structure
        console.log('API Response:', response.data);

        // Ensure the response has the structure we're expecting
        if (response.data && response.data.prediction) {
            const result = response.data;

            // Format the response for better readability
            return `*Horoscope for ${sign}:*\n\n` +
                   `*Prediction:* ${result.prediction || 'No prediction available'}\n\n` +
                   `*Lucky Numbers:* ${result.number || 'No lucky numbers available'}\n` +
                   `*Lucky Colors:* ${result.color || 'No lucky colors available'}\n\n` +
                   `*Strengths:* ${result.strength || 'No strengths available'}\n` +
                   `*Weaknesses:* ${result.weakness || 'No weaknesses available'}\n`;
        } else {
            return `Horoscope data is unavailable for ${sign}. Please try again later.`;
        }

    } catch (error) {
        // Log detailed error for debugging
        console.error('Error fetching horoscope:', error.response ? error.response.data : error.message);
        return 'Error fetching your horoscope. Please try again later.';
    }
}

module.exports = { getHoroscope };
