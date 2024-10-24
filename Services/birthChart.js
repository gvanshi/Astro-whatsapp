// birthChart.js

// Zodiac Sign Calculation (based on birthdate)
const getZodiacSign = (dob) => {
    const [day, month] = dob.split('/').map(Number);

    const zodiacSigns = [
        { sign: "Capricorn", startDate: [12, 22], endDate: [1, 19] },
        { sign: "Aquarius", startDate: [1, 20], endDate: [2, 18] },
        { sign: "Pisces", startDate: [2, 19], endDate: [3, 20] },
        { sign: "Aries", startDate: [3, 21], endDate: [4, 19] },
        { sign: "Taurus", startDate: [4, 20], endDate: [5, 20] },
        { sign: "Gemini", startDate: [5, 21], endDate: [6, 20] },
        { sign: "Cancer", startDate: [6, 21], endDate: [7, 22] },
        { sign: "Leo", startDate: [7, 23], endDate: [8, 22] },
        { sign: "Virgo", startDate: [8, 23], endDate: [9, 22] },
        { sign: "Libra", startDate: [9, 23], endDate: [10, 22] },
        { sign: "Scorpio", startDate: [10, 23], endDate: [11, 21] },
        { sign: "Sagittarius", startDate: [11, 22], endDate: [12, 21] },
    ];

    for (const { sign, startDate, endDate } of zodiacSigns) {
        if (
            (month === startDate[0] && day >= startDate[1]) ||
            (month === endDate[0] && day <= endDate[1])
        ) {
            return sign;
        }
    }

    return "Capricorn"; // Default to Capricorn if no match
};

// Function to calculate Life Path Number
const calculateLifePathNumber = (dob) => {
    const digits = dob.replace(/\D/g, ''); // Remove non-digit characters
    let sum = 0;

    // Sum all digits of the date of birth
    for (const digit of digits) {
        sum += parseInt(digit, 10);
    }

    // Reduce to a single digit (unless it's 11 or 22, which are master numbers)
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
};

// Sun, Moon, Ascendant Sign Approximation
const getSunMoonAscendant = (dob, time) => {
    const [day, month] = dob.split('/').map(Number);
    const [hour] = time.split(':').map(Number);

    const sunSign = getZodiacSign(dob);

    // Approximate Moon sign based on the birth time
    const moonSigns = ["Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "Aries"];
    const moonSign = moonSigns[(day + hour) % 12];

    // Ascendant approximation based on the hour of birth
    const ascendantSigns = ["Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini"];
    const ascendant = ascendantSigns[hour % 12];

    return { sunSign, moonSign, ascendant };
};

// Personalization Objects for Zodiac Signs
const zodiacMessages = {
    Capricorn: {
        description: "As a Capricorn, you are disciplined and responsible. Your dedication to your goals and your ability to overcome challenges with patience make you an admirable individual.",
        traits: ["Ambitious", "Practical", "Cautious"]
    },
    Aquarius: {
        description: "As an Aquarius, you are innovative and unique. You embrace progressive ideas and inspire others with your visionary perspective.",
        traits: ["Independent", "Inventive", "Humanitarian"]
    },
    Pisces: {
        description: "As a Pisces, you are empathetic and sensitive. Your imagination allows you to explore different realities and connect with others on a deep emotional level.",
        traits: ["Compassionate", "Artistic", "Intuitive"]
    },
    Aries: {
        description: "As an Aries, you are energetic and assertive. You have a pioneering spirit that drives you to take action and embrace new challenges.",
        traits: ["Bold", "Confident", "Passionate"]
    },
    Taurus: {
        description: "As a Taurus, you are grounded and reliable. Your practical approach to life allows you to appreciate the finer things and build stability.",
        traits: ["Patient", "Dependable", "Loyal"]
    },
    Gemini: {
        description: "As a Gemini, you are curious and adaptable. Your love for communication makes you a social butterfly, thriving in dynamic environments.",
        traits: ["Versatile", "Witty", "Outgoing"]
    },
    Cancer: {
        description: "As a Cancer, you are nurturing and protective. Your emotional depth allows you to form strong bonds with those around you.",
        traits: ["Caring", "Sensitive", "Intuitive"]
    },
    Leo: {
        description: "As a Leo, you are confident and charismatic. Your natural leadership qualities inspire others, and you shine in the spotlight.",
        traits: ["Generous", "Dramatic", "Passionate"]
    },
    Virgo: {
        description: "As a Virgo, you are analytical and detail-oriented. Your practicality helps you approach challenges methodically.",
        traits: ["Meticulous", "Helpful", "Reliable"]
    },
    Libra: {
        description: "As a Libra, you are diplomatic and social. Your sense of justice drives you to seek balance and harmony in relationships.",
        traits: ["Charming", "Fair-minded", "Cooperative"]
    },
    Scorpio: {
        description: "As a Scorpio, you are intense and passionate. Your depth of emotion allows you to connect deeply with others.",
        traits: ["Resourceful", "Determined", "Loyal"]
    },
    Sagittarius: {
        description: "As a Sagittarius, you are adventurous and philosophical. Your love for exploration drives you to seek truth and new experiences.",
        traits: ["Optimistic", "Independent", "Fun-loving"]
    },
};

// Personalization Objects for Moon Signs
const moonMessages = {
    Taurus: {
        description: "With your moon in Taurus, your emotions are grounded and stable. You find comfort in familiar environments and appreciate the simple pleasures of life.",
        traits: ["Patient", "Dependable", "Loyal"]
    },
    Gemini: {
        description: "With your moon in Gemini, you have a curious emotional nature. Communication is vital to your emotional well-being, and you thrive on mental stimulation.",
        traits: ["Adaptable", "Inquisitive", "Sociable"]
    },
    Cancer: {
        description: "With your moon in Cancer, your emotional world is rich and deep. You are sensitive and intuitive, often absorbing the feelings of those around you.",
        traits: ["Empathetic", "Nurturing", "Protective"]
    },
    Leo: {
        description: "With your moon in Leo, you express your emotions in a bold and dramatic way. You crave recognition and love to be appreciated.",
        traits: ["Passionate", "Generous", "Confident"]
    },
    Virgo: {
        description: "With your moon in Virgo, you are analytical in your emotional responses. You tend to worry and seek perfection in your feelings and those of others.",
        traits: ["Practical", "Detail-oriented", "Helpful"]
    },
    Libra: {
        description: "With your moon in Libra, you seek balance in your emotions and relationships. Your charm and diplomacy help you navigate social situations.",
        traits: ["Charming", "Peace-loving", "Fair-minded"]
    },
    Scorpio: {
        description: "With your moon in Scorpio, you feel intensely and are passionate about your connections. Your emotional depth can lead to transformative experiences.",
        traits: ["Intense", "Mysterious", "Determined"]
    },
    Sagittarius: {
        description: "With your moon in Sagittarius, you are optimistic and adventurous in your emotions. You seek freedom and dislike feeling restricted.",
        traits: ["Adventurous", "Philosophical", "Fun-loving"]
    },
    Capricorn: {
        description: "With your moon in Capricorn, you are pragmatic in your emotional approach. You value stability and often prioritize your responsibilities.",
        traits: ["Disciplined", "Cautious", "Reliable"]
    },
    Aquarius: {
        description: "With your moon in Aquarius, you are emotionally independent and value your freedom. You are innovative and often think outside the box.",
        traits: ["Original", "Independent", "Eccentric"]
    },
    Pisces: {
        description: "With your moon in Pisces, you are empathetic and sensitive. You have a rich inner life and often feel deeply connected to the world around you.",
        traits: ["Compassionate", "Intuitive", "Artistic"]
    },
};

// Personalization Objects for Ascendant Signs
const ascendantMessages = {
    Cancer: {
        description: "With Cancer as your rising sign, you come across as nurturing and sensitive. You have a natural ability to care for others.",
        traits: ["Compassionate", "Emotional", "Intuitive"]
    },
    Leo: {
        description: "With Leo as your rising sign, you radiate warmth and confidence. You have a magnetic presence that attracts others.",
        traits: ["Charismatic", "Dramatic", "Generous"]
    },
    Virgo: {
        description: "With Virgo as your rising sign, you appear practical and analytical. You have a keen eye for detail and a strong work ethic.",
        traits: ["Meticulous", "Helpful", "Reliable"]
    },
    Libra: {
        description: "With Libra as your rising sign, you come across as charming and diplomatic. You seek harmony in your interactions with others.",
        traits: ["Charming", "Fair-minded", "Sociable"]
    },
    Scorpio: {
        description: "With Scorpio as your rising sign, you exude intensity and passion. You are mysterious and can draw people in with your energy.",
        traits: ["Intense", "Resourceful", "Determined"]
    },
    Sagittarius: {
        description: "With Sagittarius as your rising sign, you are adventurous and optimistic. You approach life with enthusiasm and a love for exploration.",
        traits: ["Adventurous", "Free-spirited", "Philosophical"]
    },
    Capricorn: {
        description: "With Capricorn as your rising sign, you present yourself as responsible and ambitious. You often set high standards for yourself.",
        traits: ["Disciplined", "Pragmatic", "Determined"]
    },
    Aquarius: {
        description: "With Aquarius as your rising sign, you come across as innovative and original. You are seen as a visionary by others.",
        traits: ["Unique", "Independent", "Forward-thinking"]
    },
    Pisces: {
        description: "With Pisces as your rising sign, you are perceived as gentle and sensitive. You have an artistic flair and deep emotional insight.",
        traits: ["Empathetic", "Intuitive", "Dreamy"]
    },
    Aries: {
        description: "With Aries as your rising sign, you appear bold and energetic. You take the lead in new situations with enthusiasm.",
        traits: ["Courageous", "Dynamic", "Confident"]
    },
    Taurus: {
        description: "With Taurus as your rising sign, you come across as calm and reliable. You have a grounded presence that puts others at ease.",
        traits: ["Stable", "Patient", "Loyal"]
    },
    Gemini: {
        description: "With Gemini as your rising sign, you are seen as communicative and versatile. You adapt quickly to social situations and connect easily with others.",
        traits: ["Sociable", "Curious", "Charming"]
    },
};

// Personalization Objects for Life Path Numbers
const lifePathMessages = {
    1: {
        description: "Your Life Path Number reflects leadership and independence. You thrive when you take the initiative and pursue your goals with determination.",
        traits: ["Ambitious", "Confident", "Strong-willed"],
        advice: ["Embrace your leadership qualities", "Take initiative in projects", "Inspire others with your vision"]
    },
    2: {
        description: "Your Life Path Number reflects cooperation and harmony. You thrive in relationships and value partnerships.",
        traits: ["Diplomatic", "Sensitive", "Supportive"],
        advice: ["Foster strong relationships", "Be a good listener", "Practice empathy in all situations"]
    },
    3: {
        description: "Your Life Path Number highlights creativity and self-expression. You inspire others with your artistic talents.",
        traits: ["Creative", "Expressive", "Charismatic"],
        advice: ["Explore your artistic side", "Share your creativity with the world", "Inspire others through your words"]
    },
    4: {
        description: "Your Life Path Number emphasizes stability and organization. You build solid foundations and are reliable.",
        traits: ["Practical", "Reliable", "Hardworking"],
        advice: ["Establish clear goals", "Work diligently towards your dreams", "Create structure in your life"]
    },
    5: {
        description: "Your Life Path Number signifies adaptability and freedom. You are adventurous and thrive on change.",
        traits: ["Adaptable", "Curious", "Energetic"],
        advice: ["Embrace new experiences", "Stay open-minded", "Challenge yourself regularly"]
    },
    6: {
        description: "Your Life Path Number highlights responsibility and nurturing. You are a caregiver who finds joy in helping others.",
        traits: ["Nurturing", "Compassionate", "Supportive"],
        advice: ["Take time for self-care", "Nurture your relationships", "Create a harmonious environment"]
    },
    7: {
        description: "Your Life Path Number indicates a quest for knowledge and understanding. You are introspective and seek deeper truths.",
        traits: ["Introspective", "Analytical", "Spiritual"],
        advice: ["Trust your intuition", "Engage in self-reflection", "Explore philosophical topics"]
    },
    8: {
        description: "Your Life Path Number reflects ambition and power. You are driven to achieve material success and leadership.",
        traits: ["Ambitious", "Determined", "Practical"],
        advice: ["Set clear goals", "Work hard towards your ambitions", "Lead by example"]
    },
    9: {
        description: "Your Life Path Number emphasizes humanitarianism and compassion. You seek to make the world a better place.",
        traits: ["Compassionate", "Generous", "Altruistic"],
        advice: ["Engage in community service", "Support charitable causes", "Spread kindness and positivity"]
    },
    11: {
        description: "Your Life Path Number signifies intuition and spiritual insight. You are sensitive to the needs of others and possess strong empathic abilities.",
        traits: ["Intuitive", "Insightful", "Visionary"],
        advice: ["Trust your gut feelings", "Engage in spiritual practices", "Help others find their path"]
    },
    22: {
        description: "Your Life Path Number indicates mastery and achievement. You have the ability to turn your dreams into reality on a grand scale.",
        traits: ["Visionary", "Practical", "Influential"],
        advice: ["Set ambitious goals", "Inspire others to follow their dreams", "Work towards long-term success"]
    },
};

// Basic Planetary Positions Approximation (Sun, Moon, Mercury, Venus, Mars)
const getPlanetaryPositions = () => {
    const planets = {
        Sun: "Aries",
        Moon: "Taurus",
        Mercury: "Gemini",
        Venus: "Leo",
        Mars: "Scorpio"
    };

    // In a real astrological application, the planetary positions would be calculated based on actual astrological data.
    return planets;
};

// Function to generate a detailed birth chart report
const getBirthChart = (dob, time, place) => {
    // Zodiac sign based on birthdate
    const zodiacSign = getZodiacSign(dob);
    
    // Life Path Number based on birthdate
    const lifePathNumber = calculateLifePathNumber(dob);
    
    // Sun, Moon, and Ascendant sign approximations
    const { sunSign, moonSign, ascendant } = getSunMoonAscendant(dob, time);
    
    // Basic planetary positions (simulated)
    const planetaryPositions = getPlanetaryPositions();

    // Create a detailed and user-friendly birth chart report
    return `
    📜 *Your Personalized Birth Chart Report* 📜

    *Date of Birth*: ${dob}

    *Time of Birth*: ${time}

    *Place of Birth*: ${place}

    🌟 *Zodiac Sign (Sun Sign)*: ${zodiacSign}  
    *Description*: 
    - ${zodiacMessages[zodiacSign].description}
    
    - *Key Traits*: 
        ● ${zodiacMessages[zodiacSign].traits.join("\n        ● ")}

    🌙 *Moon Sign*: ${moonSign}  
    *Description*: 
    - ${moonMessages[moonSign].description}
    
    - *Key Traits*: 
        ● ${moonMessages[moonSign].traits.join("\n        ● ")}

    ⬆️ *Ascendant (Rising Sign)*: ${ascendant}  
    *Description*: 
    - ${ascendantMessages[ascendant].description}
    
    - *Key Traits*: 
        ● ${ascendantMessages[ascendant].traits.join("\n        ● ")}

    🔢 *Life Path Number*: ${lifePathNumber}  
    *Description*: 
    - ${lifePathMessages[lifePathNumber].description}
    
    - *Key Traits*: 
        ● ${lifePathMessages[lifePathNumber].traits.join("\n        ● ")}

    - *Advice*: 
        ● ${lifePathMessages[lifePathNumber].advice.join("\n        ● ")}

    🪐 *Planetary Positions*:  
    *Description*: 
    - The positions of the planets at your birth influence different aspects of your personality, desires, and challenges:
    
    ● *Sun*: ${planetaryPositions.Sun} (Core Self)
    
    ● *Moon*: ${planetaryPositions.Moon} (Emotions)

    ● *Mercury*: ${planetaryPositions.Mercury} (Communication and Thinking)

    ● *Venus*: ${planetaryPositions.Venus} (Love and Relationships)

    ● *Mars*: ${planetaryPositions.Mars} (Passion and Drive)

    ✨ *What This Means for You*:  
    - Your zodiac sign shows that you exhibit qualities of ${zodiacSign}, reflecting the strengths and challenges associated with it.
    
    - With a moon in ${moonSign}, your emotional responses are likely shaped by its characteristics, highlighting your instinctual nature.
    
    - Your rising sign, ${ascendant}, indicates how you project yourself to others, influencing your first impressions.

    - The energies of your planetary positions highlight unique aspects of your personality and challenges you may face. Embrace these influences to enhance your personal growth!
    `;
};

module.exports = { getBirthChart };
