// Function to calculate Numerology Number from Mobile Number
const calculateMobileNumberNumerology = (mobileNumber) => {
    const digits = mobileNumber.replace(/\D/g, ''); // Remove non-digit characters
    let sum = 0;

    // Sum all digits in the mobile number
    for (let digit of digits) {
        sum += parseInt(digit, 10);
    }

    // Reduce the sum to a single digit (unless it's 11 or 22, which are Master Numbers)
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
};

// Function to calculate Numerology Number from Email Address (Pythagorean System)
const calculateEmailAddressNumerology = (email) => {
    const pythagoreanTable = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
        J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
        S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
    };

    // Remove non-letter characters from the email
    const letters = email.replace(/[^a-zA-Z]/g, '').toUpperCase();
    let sum = 0;

    // Sum the numerical values of each letter
    for (let char of letters) {
        if (pythagoreanTable[char]) {
            sum += pythagoreanTable[char];
        }
    }

    // Reduce the sum to a single digit (unless it's 11 or 22, which are Master Numbers)
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
};

// Function to get detailed insights based on Numerology Number with recommendations
const getNumerologyInsights = (number, type) => {
    const insights = {
        1: `
        🟡 *Numerology Number 1* 🟡
        
        - *Energy*: Leadership, independence, and new beginnings. This number embodies ambition and drive, making you a natural leader.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} encourages you to take initiative and pursue your goals with confidence. This energy supports entrepreneurial ventures and leadership roles.
        
        - *Potential Challenges*: You may struggle with teamwork or collaboration, often preferring to work independently. This can lead to isolation or burnout if not managed properly.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - To balance your assertiveness, consider incorporating numbers/letters that reduce to 2 (partnership) or 6 (nurturing) to soften your leadership approach and enhance collaboration.
        `,
        2: `
        🟢 *Numerology Number 2* 🟢
        
        - *Energy*: Cooperation, balance, and partnerships. This number thrives on relationships and diplomacy, making you an excellent collaborator.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} promotes harmony and teamwork, encouraging you to seek supportive relationships and collaborations.
        
        - *Potential Challenges*: A tendency to avoid conflict can hinder your ability to assert yourself. This may cause you to miss out on opportunities for personal growth.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - Enhance your personal strength by adding numbers/letters that reduce to 1 (leadership) or 8 (success). This can help you cultivate a sense of independence while maintaining harmonious relationships.
        `,
        3: `
        🔵 *Numerology Number 3* 🔵
        
        - *Energy*: Creativity, expression, and joy. This number embodies artistic talent and a zest for life, encouraging self-expression and communication.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} encourages creativity and social interaction, making you popular and charming.
        
        - *Potential Challenges*: A scattered focus can lead to indecisiveness and a lack of follow-through on projects. Balancing creativity with discipline is crucial.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - Incorporate numbers/letters that reduce to 4 (stability) or 7 (introspection) to ground your creativity and provide structure to your endeavors.
        `,
        4: `
        🟤 *Numerology Number 4* 🟤
        
        - *Energy*: Stability, structure, and discipline. This number emphasizes hard work and practicality, supporting long-term goals.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} brings a sense of order and dependability, making you reliable in professional settings.
        
        - *Potential Challenges*: A rigid approach can lead to stress and reluctance to adapt to change. Embracing flexibility is important for growth.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - To invite more flexibility and creativity, consider adding numbers/letters that reduce to 5 (freedom) for a balanced approach to structure.
        `,
        5: `
        🟣 *Numerology Number 5* 🟣
        
        - *Energy*: Freedom, adventure, and dynamic change. This number embodies a love for exploration and spontaneity, encouraging you to embrace new experiences.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} fosters adaptability and encourages you to take risks, making it great for careers that require innovation.
        
        - *Potential Challenges*: Restlessness and impatience can lead to dissatisfaction in routine jobs. A need for constant change can sometimes hinder progress.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - Consider incorporating numbers/letters that reduce to 4 (stability) or 6 (responsibility) to ground your adventurous spirit and provide direction.
        `,
        6: `
        🔴 *Numerology Number 6* 🔴
        
        - *Energy*: Love, care, and responsibility. This number emphasizes nurturing and support, making you a natural caregiver.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} nurtures relationships and fosters community, encouraging you to take care of others.
        
        - *Potential Challenges*: A tendency to prioritize others' needs can lead to neglecting your own well-being. This can result in emotional exhaustion.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - To maintain balance, add numbers/letters that reduce to 1 (independence) or 5 (freedom) to ensure you don’t lose yourself in caregiving.
        `,
        7: `
        ⚫ *Numerology Number 7* ⚫
        
        - *Energy*: Spirituality, introspection, and wisdom. This number encourages deep thinking and philosophical exploration, making you a seeker of truth.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} supports your spiritual journey but may lead to feelings of isolation.
        
        - *Potential Challenges*: A tendency to withdraw can hinder social connections and collaborative efforts. It's important to balance introspection with social engagement.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - Consider adding numbers/letters that reduce to 2 (relationships) or 8 (material success) to create connections while pursuing your spiritual interests.
        `,
        8: `
        🔵 *Numerology Number 8* 🔵
        
        - *Energy*: Power, success, and material wealth. This number embodies ambition and financial acumen, encouraging you to pursue your goals with determination.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} encourages you to strive for success, but may also bring stress due to high expectations.
        
        - *Potential Challenges*: An intense focus on success can lead to workaholism and a lack of work-life balance. This may result in burnout.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - Add numbers/letters that introduce harmony (2) or spiritual insight (7) to balance ambition with peace.
        `,
        9: `
        🔶 *Numerology Number 9* 🔶
        
        - *Energy*: Compassion, humanitarianism, and completion. This number emphasizes a deep understanding of others and a desire to make the world a better place.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} encourages service and compassion but may leave you feeling drained.
        
        - *Potential Challenges*: A strong desire to help others can sometimes lead to neglecting your own needs and emotional well-being.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - To ensure you take care of yourself, add numbers/letters that support independence (1) or stability (4).
        `,
        11: `
        🔷 *Master Number 11* 🔷
        
        - *Energy*: Intuition, enlightenment, and inspiration. This number embodies a deep connection to spiritual insights and higher consciousness.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} holds high spiritual energy but may lead to emotional overwhelm.
        
        - *Potential Challenges*: Sensitivity and the pressure to achieve can sometimes result in anxiety. It’s important to stay grounded amidst the spiritual insights.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - Ground your energy by adding numbers/letters that reduce to 4 (for stability) or 6 (for emotional support).
        `,
        22: `
        🟠 *Master Number 22* 🟠
        
        - *Energy*: Master builder, vision, and manifestation. This number embodies the potential to create significant change and lasting impact in the world.
        
        - *${type === 'mobile' ? 'Mobile Number' : 'Email Address'}*: Your ${type === 'mobile' ? 'mobile number' : 'email address'} supports manifesting large-scale visions, but can feel burdensome.
        
        - *Potential Challenges*: The weight of responsibility can sometimes lead to stress. It’s important to practice self-care and not become overwhelmed by your ambitions.
        
        - *Recommendation for ${type === 'mobile' ? 'Mobile' : 'Email'}*: 
            - Add elements that encourage creativity (3) or balance (6) to ease the intensity of your vision and maintain well-being.
        `,
    };

    return insights[number] || "Your number holds unique energy. Focus on aligning your intentions with the vibrational frequency of your mobile number or email to unlock its full potential.";
};

// Main function to handle Mobile Number and Email Address Analysis
const handleMobileAndEmailAnalysis = async (mobileInput, emailInput) => {
    let analysisResult = '';

    // Analyzing Mobile Number
    const mobileNumber = mobileInput;
    const mobileNumerologyNumber = calculateMobileNumberNumerology(mobileNumber);
    analysisResult += `
    📱 *Mobile Number Analysis* 📱
    
    - *Your Mobile Number*: ${mobileNumber}
    
    - *Numerology Number*: ${mobileNumerologyNumber}
    
    ${getNumerologyInsights(mobileNumerologyNumber, 'mobile')}
    `;

    // Analyzing Email Address
    const email = emailInput;
    const emailNumerologyNumber = calculateEmailAddressNumerology(email);
    analysisResult += `
    ✉️ *Email Address Analysis* ✉️
    
    - *Your Email Address*: ${email}
    
    - *Numerology Number*: ${emailNumerologyNumber}
    
    ${getNumerologyInsights(emailNumerologyNumber, 'email')}
    `;

    return analysisResult;
};

// Exporting the function
module.exports = { handleMobileAndEmailAnalysis };
