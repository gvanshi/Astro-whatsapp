const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to serve static files (like your HTML file)
app.use(express.static(path.join(__dirname, 'public'))); // Assuming you have a 'public' directory for static files

// MongoDB connection setup
const uri = `mongodb+srv://vanshika2021cs017:${process.env.DB_PASSWORD}@cluster0.q9dtt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
let db;

// Initialize MongoDB connection
async function connectDB() {
    try {
        await client.connect();
        db = client.db('whatsappBotDB');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

// Call this function once at the start of your app
connectDB();

// Endpoint to add an allowed number
app.post('/add-allowed-number', async (req, res) => {
    const { number } = req.body;

    // Format the number to WhatsApp format
    const formattedNumber = `91${number}@c.us`; // Prepend country code and append '@c.us'

    try {
        const collection = db.collection('allowed_numbers');
        
        // Check if the number already exists
        const existingNumber = await collection.findOne({ number: formattedNumber });
        if (existingNumber) {
            return res.status(400).send('This number is already in the allowed list.');
        }

        await collection.insertOne({ number: formattedNumber });
        res.status(200).send('Allowed number added successfully.');
    } catch (error) {
        console.error('Error adding allowed number:', error);
        res.status(500).send('Error adding allowed number.');
    }
});

// Endpoint to add a paid number
app.post('/add-paid-number', async (req, res) => {
    const { number } = req.body;

    // Format the number to WhatsApp format
    const formattedNumber = `91${number}@c.us`; // Prepend country code and append '@c.us'

    try {
        const collection = db.collection('paid_users');
        
        // Check if the number already exists
        const existingNumber = await collection.findOne({ number: formattedNumber });
        if (existingNumber) {
            return res.status(400).send('This number is already in the paid users list.');
        }

        await collection.insertOne({ number: formattedNumber });
        res.status(200).send('Paid number added successfully.');
    } catch (error) {
        console.error('Error adding paid number:', error);
        res.status(500).send('Error adding paid number.');
    }
});

// Function to get allowed phone numbers
async function getAllowedNumbers() {
    const collection = db.collection('allowed_numbers');
    const numbers = await collection.find().toArray();
    return numbers.map(doc => doc.number); // Return only the number field
}

// Function to get paid users
async function getPaidNumbers() {
    const collection = db.collection('paid_users');
    const numbers = await collection.find().toArray();
    return numbers.map(doc => doc.number); // Return only the number field
}

// Export the functions to use in main.js
module.exports = {
    getAllowedNumbers,
    getPaidNumbers,
};

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
