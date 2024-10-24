const { Client, LocalAuth } = require('whatsapp-web.js'); 
const qrcode = require('qrcode-terminal');
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
const { getAllowedNumbers, getPaidNumbers } = require('./server');

// Load environment variables from .env file
dotenv.config();

// Import service handlers for redirection
const { getHoroscope } = require('./horoscope');
const { handleNumerology } = require('./numerology');
const { getBirthChart } = require('./birthChart');
const { handleNameCorrection } = require('./nameCorrection');
const { handleLuckyDatesAndTimes } = require('./luckyDatesAndTimes');
const { handleRelationshipCompatibility } = require('./relationshipCompatibility');
const { handleDetailedVastuConsultation } = require('./vastuConsultation');
const { handlePersonalizedRemediesByDOB } = require('./remedies');
const { handleAnnualAndMonthlyPredictions } = require('./predictions');
const { handleHealthAndWellnessPredictions } = require('./healthAndWellness');
const { handleCareerGuidance } = require('./careerGuidance');
const { handleMobileAndEmailAnalysis } = require('./mobileEmailAnalysis');
const { handleMoonPhaseAstrology } = require('./moonPhaseAstrology');
const { calculateLifePathNumber } = require('./numerologyUtils');
const { handleGemstoneRecommendations } = require('./gemstoneRecommendations');
const { handleSpiritualGuidance } = require('./spiritualGuidance');
const { handleParentingTips } = require('./parentingTips');
const { handleAstrologicalEventNotifications } = require('./astrologicalEvents');
const { handleDetailedAffirmations } = require('./detailedAffirmations');

// MongoDB connection string
const uri = `mongodb+srv://vanshika2021cs017:${process.env.DB_PASSWORD}@cluster0.q9dtt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

// Initialize the MongoDB connection
async function connectDB() {
    try {
        await client.connect();
        db = client.db('whatsappBotDB'); // Your database name
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

// Call this function once at the start of your app
connectDB();

// Initialize the WhatsApp client
const clientWhatsApp = new Client({
    authStrategy: new LocalAuth(),
});

// User state management
let userState = {}; // Store user details including name, dob, zodiac sign, and query count
let freeUserQueries = {}; // Track the number of free queries each user has asked

// Function to capitalize the user's name in Sentence Case
const capitalizeName = (name) =>
    name.split(' ').map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(' ');

// Generate and display QR code
clientWhatsApp.on('qr', (qr) => {
    console.log('QR Code received:');
    qrcode.generate(qr, { small: true });
});

// Client ready event
clientWhatsApp.on('ready', () => {
    console.log('Client is ready!');
});

// Handling incoming messages
clientWhatsApp.on('message', async (message) => {
    const { body, from } = message;
    const text = body.trim().toLowerCase();

    console.log(`Received message: "${body.trim()}" from ${from}`);

    // Initialize user state if it doesn't exist
    if (!userState[from]) {
        userState[from] = { stage: 'initial', queryCount: 0 }; // Initialize with stage and query count
    }




    // Fetch allowed and paid numbers from the database
const allowedNumbers = await getAllowedNumbers(); // This should return an array of strings
const paidNumbers = await getPaidNumbers(); // This should also return an array of strings


// Normalize the numbers (since they are already formatted as strings)
const normalizedAllowedNumbers = allowedNumbers; // No need to map, since they are already strings
const normalizedPaidNumbers = paidNumbers; // No need to map, since they are already strings

// If the user is free and not a paid user, check if they have reached the query limit
if (!normalizedPaidNumbers.includes(from)) {
    if (!freeUserQueries[from]) freeUserQueries[from] = 0;

    // Check if user exceeded query limit
    if (freeUserQueries[from] >= 10) {
        await clientWhatsApp.sendMessage(
            from,
            `You have reached your free query limit. To ask more questions, please purchase our service for ₹399 for 3 months. 🛒 \nHere is a link to get access for 3 months: [Link to Purchase]`
        );
        return;
    }
}

// Increment free user query count
if (!normalizedPaidNumbers.includes(from)) {
    freeUserQueries[from]++;
}

// If it's a valid user, handle the input
if (normalizedAllowedNumbers.includes(from) || normalizedPaidNumbers.includes(from)) {
    await handleUserInput(text, from, message);
} 

});



// Handle user input and redirect to corresponding functions
const handleUserInput = async (text, from, message) => {
    const user = userState[from]; // Access the current user's state

    if (text === 'hi' || user.stage === 'initial') {
        if (!user.name) {
            user.stage = 'ask_name';
            await clientWhatsApp.sendMessage(from, 'Welcome! 😊 What is your name?');
        } else if (!user.dob) {
            user.stage = 'ask_dob';
            await clientWhatsApp.sendMessage(from, `Thanks, ${user.name}! Please provide your date of birth (DD/MM/YYYY).`);
        } else if (!user.zodiacSign) {
            user.stage = 'ask_zodiac';
            await clientWhatsApp.sendMessage(from, `Thanks, ${user.name}! Please provide your zodiac sign (e.g., Aries, Taurus, etc.).`);
        } else if (!user.mobile) {
            user.stage = 'ask_mobile';
            await clientWhatsApp.sendMessage(from, `Thanks for that! Now, please provide your mobile number.`);
        } else if (!user.email) {
            user.stage = 'ask_email';
            await clientWhatsApp.sendMessage(from, `Great! Lastly, please provide your email address.`);
        } else {
            user.stage = 'menu';
            await sendMenuMessage(from);
            await storeUserData(user);
        }
    } else if (user.stage === 'ask_name') {
        user.name = capitalizeName(text);
        user.stage = 'ask_dob';
        await clientWhatsApp.sendMessage(from, `Thanks, ${user.name}! 🎉 Please provide your date of birth (DD/MM/YYYY).`);
    } else if (user.stage === 'ask_dob') {
        user.dob = text;
        user.stage = 'ask_zodiac'; // Move to zodiac sign stage
        await clientWhatsApp.sendMessage(from, 'Please provide your zodiac sign (e.g., Aries, Taurus, etc.).');
    } else if (user.stage === 'ask_zodiac') {
        user.zodiacSign = text.trim().toLowerCase(); // Normalize the zodiac sign input
        user.stage = 'ask_mobile'; // Move to mobile number stage
        await clientWhatsApp.sendMessage(from, `Thanks for your zodiac sign! Please provide your mobile number.`);
    } else if (user.stage === 'ask_mobile') {
        user.mobile = text;
        user.stage = 'ask_email'; // Move to email stage
        await clientWhatsApp.sendMessage(from, `Thanks, ${user.name}! Now, please provide your email address.`);
    } else if (user.stage === 'ask_email') {
        user.email = text;
        user.stage = 'menu'; // Move to menu stage
        await sendMenuMessage(from);
        await storeUserData(user);
    } else {
        // Service selection and redirection
        if (text === '1' && user.stage === 'menu') {
            user.stage = 'horoscope';
            await clientWhatsApp.sendMessage(from, 'You selected Daily Horoscope. Please provide your zodiac sign (e.g., Aries, Taurus, etc.).');
        } else if (user.stage === 'horoscope') {
            const horoscopeResult = await getHoroscope(text);
            await clientWhatsApp.sendMessage(from, horoscopeResult);
        } else if (text === '2' && user.stage === 'menu') {
            const numerologyResult = await handleNumerology(user.name, user.dob);
            await clientWhatsApp.sendMessage(from, numerologyResult);
        } else if (text === '3' && user.stage === 'menu') {
            if (!user.birthDetails) {
                user.stage = 'birth_chart_details';
                await clientWhatsApp.sendMessage(from, 'You selected Birth Chart Creation. Please provide your birth details in this format: "DD/MM/YYYY, HH:MM, place (city/town)".');
            } else {
                const birthChartResult = await getBirthChart(user.birthDetails.dob, user.birthDetails.time, user.birthDetails.place);
                await clientWhatsApp.sendMessage(from, birthChartResult);
            }
        } else if (user.stage === 'birth_chart_details') {
            const [dob, time, place] = text.split(',').map((item) => item.trim());
            if (!dob || !time || !place) {
                await clientWhatsApp.sendMessage(from, 'Invalid format. Please provide your birth details in this format: "DD/MM/YYYY, HH:MM, place (city/town)".');
                return;
            }
            user.birthDetails = { dob, time, place };
            const birthChartResult = await getBirthChart(dob, time, place);
            await clientWhatsApp.sendMessage(from, birthChartResult);
        } else if (text === '4' && user.stage === 'menu') {
            const nameCorrectionResult = await handleNameCorrection(user.name, user.dob, user.mobile);
            await clientWhatsApp.sendMessage(from, nameCorrectionResult);
        } else if (text === '5' && user.stage === 'menu') {
            const luckyDatesAndTimesResult = await handleLuckyDatesAndTimes(user.dob);
            await clientWhatsApp.sendMessage(from, luckyDatesAndTimesResult);
        } else if (text === '6' && user.stage === 'menu') {
            user.stage = 'relationship_compatibility';
            await clientWhatsApp.sendMessage(from, 'You selected Relationship Compatibility. Please provide your partner\'s date of birth (DD/MM/YYYY).');
        } else if (user.stage === 'relationship_compatibility') {
            const relationshipCompatibilityResult = await handleRelationshipCompatibility(user.dob, text);
            await clientWhatsApp.sendMessage(from, relationshipCompatibilityResult);
        } else if (text === '7' && user.stage === 'menu') {
            user.stage = 'Choice';
            await clientWhatsApp.sendMessage(from, 'Do you need Vastu tips for Home or Office? Please reply with "Home" or "Office".');
        } else if (user.stage === 'Choice') {
            const vastuConsultationResult = await vastuConsultation(user, text, from);
            await clientWhatsApp.sendMessage(from, vastuConsultationResult); // Send Vastu consultation result to the user
        } else if (text === '8' && user.stage === 'menu') {
            const remediesResult = await handlePersonalizedRemediesByDOB(user.dob);
            await clientWhatsApp.sendMessage(from, remediesResult);
        } else if (text === '9' && user.stage === 'menu') {
            const predictionResult = await handleAnnualAndMonthlyPredictions(user.dob);
            await clientWhatsApp.sendMessage(from, predictionResult);
        } else if (text === '10' && user.stage === 'menu') {
            const healthWellnessResult = await handleHealthAndWellnessPredictions(user.dob);
            await clientWhatsApp.sendMessage(from, healthWellnessResult);
        } else if (text === '11' && user.stage === 'menu') {
            const careerGuidanceResult = await handleCareerGuidance(user.dob);
            await clientWhatsApp.sendMessage(from, careerGuidanceResult);
        } else if (text === '12' && user.stage === 'menu') {
            const mobileNumberAnalysisResult = await handleMobileAndEmailAnalysis(user.mobile, user.email);
            await clientWhatsApp.sendMessage(from, mobileNumberAnalysisResult);
        } else if (text === '13' && user.stage === 'menu') {
            const moonPhaseResult = await handleMoonPhaseAstrology();
            await clientWhatsApp.sendMessage(from, moonPhaseResult);
        } else if (text === '14' && user.stage === 'menu') {
            const lifePathNumber = calculateLifePathNumber(user.dob);
            const gemstoneRecommendationResult = await handleGemstoneRecommendations(user.name, lifePathNumber);
            await clientWhatsApp.sendMessage(from, gemstoneRecommendationResult);
        } else if (text === '15' && user.stage === 'menu') {
            const spiritualGuidanceResult = await handleSpiritualGuidance(user.zodiacSign); // Pass zodiac sign
            await clientWhatsApp.sendMessage(from, spiritualGuidanceResult);
        } else if (text === '16' && user.stage === 'menu') {
            const parentingTipsResult = await handleParentingTips(user.zodiacSign); // Pass zodiac sign
            await clientWhatsApp.sendMessage(from, parentingTipsResult);
        } else if (text === '17' && user.stage === 'menu') {
            const notificationsResult = await handleAstrologicalEventNotifications(user.zodiacSign);
            await clientWhatsApp.sendMessage(from, notificationsResult);
        } else if (text === '18' && user.stage === 'menu') {
            const detailedAffirmationsResult = await handleDetailedAffirmations(user.zodiacSign); // Pass zodiac sign
            await clientWhatsApp.sendMessage(from, detailedAffirmationsResult);
        } else if (text === '19' && user.stage === 'menu') {
            await clientWhatsApp.sendMessage(from, 'You selected Tarot Card Reading. Please make a payment of ₹499 using this link: [Payment Link].');
        } else if (text === '20' && user.stage === 'menu') {
            await clientWhatsApp.sendMessage(from, `Choose what’s best for your loved ones:
                
📖 *Name Analysis Report + 5 Year Prediction*: Gain insights into your name's vibrational energy and how it influences your life, along with predictions for the next five years. https://rzp.io/l/namereport
                
📱 *Mobile Number Report*: Discover the significance of your mobile number and how it affects your personal and professional life, including guidance on optimizing its energy. https://rzp.io/l/numberreport
                
📚 *Life Path and Career Guidance E-Book*: Uncover your life's purpose and the best career paths for your strengths and talents through this comprehensive guide. https://rzp.io/l/lifepathebook
                
🔮 *Personalized Janam Kundali*: Receive a detailed birth chart that reveals the positions of celestial bodies at your birth, providing insights into your personality, strengths, and challenges. https://rzp.io/l/janam
                
🎁 *Combo (Name Analysis + Number Report + E-Book + Kundali)*: Get all four powerful reports in one package for comprehensive insights into your life's journey and future potential. https://rzp.io/rzp/combo-special
                
✍️ *Name Correction Report*: Enhance your name's vibrational energy for success and harmony by making slight adjustments based on numerological principles. https://letsdfy.in/name-correction
                
🔄 *Golden Destiny Combo (Name + Mobile Correction)*: This special package combines both name correction and mobile number optimization for a holistic approach to improving your life’s energies. https://letsdfy.in/golden-destiny-combo
                
📝 *For any other specific report you need, please fill out this Google Form to get it.* 

*Google Form Link:* 

All other reports cost ₹199 only. Here are some examples of reports available:

- *Kundali (Birth Chart)*: A detailed analysis based on your birth details, offering insights into your personal and professional life.
- *Compatibility Report*: Explore the dynamics of your relationships with loved ones, understanding strengths and areas for growth.
- *Business Analysis Report*: Evaluate your business's strengths, weaknesses, opportunities, and threats through astrological insights.
- *Astrological Forecast Report*: A personalized forecast based on current planetary transits affecting your life.
- *Dream Analysis Report*: Decode the messages from your dreams using astrological and psychological perspectives.
- *Life Transition Guidance Report*: Insights and recommendations for navigating major life changes, helping you align with cosmic energies.
                
Make sure to use your loved ones’ details for whom you’re ordering while making the payment. ✅

If you wish to reset your information and start over, simply reply with "0". 
                `);
        } else if (text === '0') {
            // Reset user information and prompt to start over
            userState[from] = { stage: 'initial', queryCount: 0 };
            await clientWhatsApp.sendMessage(from, 'Your information has been reset. Please type "hi" to start over.');
        } else {
            await clientWhatsApp.sendMessage(from, 'Sorry, I didn’t understand that. Please type "hi" to start.');
            user.stage = 'menu';
        }

        // Store user data in MongoDB
        await db.collection('users').updateOne(
            { phone: from },
            { $set: user },
            { upsert: true } // Create a new document if no match is found
        );
    }
};

// Helper function to send the menu message
const sendMenuMessage = async (from) => {
    await clientWhatsApp.sendMessage(from, `
🌟 Unlock the Secrets of Your Future! 🌟

Thank you for being a part of our community! We’re excited to offer you a range of transformative services tailored just for you. Choose one (or more!) of the following insightful options by their number to enhance your life and guide your journey:

1. *Daily Horoscope* 🌞 - Discover what the stars have in store for you today! Get insights into your day based on your zodiac sign.

2. *Numerology Report* 🔢 - Unlock the hidden meanings behind your numbers. Understand how your name and birth date influence your life.

3. *Birth Chart (Kundali) Creation* 🗺️ - Dive deep into your astrological blueprint. Receive a detailed chart of the positions of celestial bodies at your birth.

4. *Name Correction Suggestions* ✍️ - Enhance your name’s vibrational energy for success. Learn how slight adjustments to your name can affect your life path.

5. *Lucky Dates and Times* 🍀 - Plan your activities with the cosmos on your side. Identify favorable dates for important events based on astrological insights.

6. *Astrology-Based Relationship Compatibility* ❤️ - Find harmony in your connections. Discover how your zodiac signs align and what challenges you may face.

7. *Vastu Consultation* 🏡 - Harmonize your living space for positive energy. Get recommendations for creating a balanced and supportive environment in your home.

8. *Personalized Remedies (Upay)* 🌱 - Tailored solutions to enhance your life. Receive specific actions or changes to improve your circumstances based on your unique chart.

9. *Annual or Monthly Predictions* 📅 - Get a glimpse into what’s ahead for you. Understand the themes and events to expect in the coming year or month.

10. *Health and Wellness Predictions* 🏥 - Insights for a healthier, happier you. Explore potential health challenges and preventive measures based on your astrological profile.

11. *Astrology-Based Career Guidance* 💼 - Navigate your career path with cosmic wisdom. Discover suitable career options and advice tailored to your strengths.

12. *Mobile Number and Email Analysis* 📲 - Optimize your digital presence for success. Analyze how your contact numbers impact your personal and professional life.

13. *Moon Phase and Astrology* 🌙 - Understand how lunar cycles influence your life. Learn about the significance of moon phases in relation to your personal energy.

14. *Gemstone and Crystal Recommendations* 💎 - Discover stones that resonate with your energy. Get advice on which gemstones can enhance your strengths and protect against negativity.

15. *Spiritual Guidance and Meditation* 🧘‍♀️ - Elevate your spirit and find inner peace. Receive techniques and practices for spiritual growth and mindfulness.

16. *Parenting Tips Based on Astrology* 👶 - Nurture your children with astrological insights. Get tailored advice on parenting strategies that align with your child's astrological profile.

17. *Astrological Event Notifications* 🔔 - Stay informed about significant celestial happenings. Receive alerts about upcoming astrological events that may impact your life.

18. *Personalized Affirmations* 📝 - Empower your day with custom affirmations. Get positive statements tailored to your goals and aspirations to enhance your mindset.

19. *Tarot Card Reading* 🔮 - Get insights from Tarot cards for ₹499.

20. *Detailed Reports* 📄 - Request specific reports. Choose from the following options: Name Correction, Mobile Number Correction, Kundali, Compatibility Report, Business Analysis Report, Name Numerology, Mobile Numerology & Many more.

✨ Choose your path to enlightenment and empowerment today by replying with the corresponding number! 

If you want to reset any information, simply type *0*. ✨
    `);
};

// Function for Vastu Consultation
const vastuConsultation = async (user, text, from) => {
    if (text === 'home' || text === 'office') {
        const locationType = text.toLowerCase(); // Normalize input to lowercase
        const vastuReport = await handleDetailedVastuConsultation(locationType);
        user.stage = 'menu'; // Reset stage after consultation
        return vastuReport; // Return the Vastu consultation result
    } else {
        return 'Please reply with "Home" or "Office" for your Vastu consultation.'; // Prompt for valid input
    }
};

// Store user data in MongoDB
const storeUserData = async (user) => {
    const collection = db.collection('users'); // Ensure this matches your collection name
    const result = await collection.updateOne(
        { phone: user.phone },
        { $set: user },
        { upsert: true } // Create a new document if no match is found
    );
    console.log(`User data stored with id: ${result.upsertedId}`);
};

// Initialize the client
clientWhatsApp.initialize();
