// Function to calculate Life Path Number from DOB (DD/MM/YYYY)
const calculateLifePathNumber = (dob) => {
    const digits = dob.replace(/\D/g, ''); // Remove non-digit characters
    let sum = 0;

    // Sum all digits
    for (let digit of digits) {
        sum += parseInt(digit, 10);
    }

    // Reduce the sum to a single digit (unless it's 11 or 22, which are Master Numbers)
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
};


// Function to determine Zodiac Sign based on DOB (MM/DD)
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
    return "Capricorn";  // Default to Capricorn if no match
};


// Function to compare compatibility between two Zodiac Signs
const getZodiacCompatibility = (sign1, sign2) => {
    const compatiblePairs = [
        ['Aries', 'Leo'], ['Taurus', 'Virgo'], ['Gemini', 'Libra'],
        ['Cancer', 'Scorpio'], ['Leo', 'Sagittarius'], ['Virgo', 'Capricorn'],
        ['Libra', 'Aquarius'], ['Scorpio', 'Pisces'], ['Sagittarius', 'Aries'],
        ['Capricorn', 'Taurus'], ['Aquarius', 'Gemini'], ['Pisces', 'Cancer']
    ];

    for (const pair of compatiblePairs) {
        if ((pair.includes(sign1) && pair.includes(sign2)) || sign1 === sign2) {
            return {
                message: `Your Zodiac signs, ${sign1} and ${sign2}, are highly compatible. This combination typically fosters passion, understanding, and a deep emotional connection, allowing both partners to thrive together. You are likely to enjoy shared adventures and a lively partnership!`,
                tips: [
                    "Communicate openly about your needs and desires.",
                    "Engage in activities that both partners enjoy to strengthen your bond.",
                    "Respect each other’s individuality while celebrating shared experiences."
                ]
            };
        }
    }
    return {
        message: `Your Zodiac signs, ${sign1} and ${sign2}, may face some challenges. While your differences can lead to misunderstandings, with effort and patience, you can create a balanced and fulfilling relationship. Focus on understanding each other’s perspectives for a harmonious connection.`,
        tips: [
            "Practice active listening to better understand your partner's viewpoint.",
            "Set aside time for meaningful conversations to resolve any tensions.",
            "Be willing to compromise and find common ground."
        ]
    };
};


// Function to compare compatibility between two Life Path Numbers
const getLifePathCompatibility = (lp1, lp2) => {
    const compatibleNumbers = [
        [1, 5], [2, 6], [3, 9], [4, 8], [5, 1], [6, 2],
        [7, 7], [8, 4], [9, 3], [11, 22], [22, 11]
    ];

    for (const pair of compatibleNumbers) {
        if ((pair.includes(lp1) && pair.includes(lp2)) || lp1 === lp2) {
            return {
                message: `Your Life Path Numbers, ${lp1} and ${lp2}, are highly compatible. This dynamic pairing often leads to strong mutual support, creativity, and a shared vision for the future. Together, you can inspire each other and achieve great things!`,
                tips: [
                    "Encourage each other’s personal growth and aspirations.",
                    "Collaborate on projects or goals that resonate with both partners.",
                    "Celebrate each other's successes and milestones to foster a supportive environment."
                ]
            };
        }
    }
    return {
        message: `Your Life Path Numbers, ${lp1} and ${lp2}, may have different energies. While this could present some obstacles, embracing your unique qualities and communicating openly can help you create a balanced and fulfilling partnership. Each partner can learn from the other, enriching the relationship.`,
        tips: [
            "Focus on understanding your differences as strengths rather than weaknesses.",
            "Engage in discussions to align your life goals and aspirations.",
            "Find activities that nurture both of your energies to build a stronger bond."
        ]
    };
};


// Function to handle Relationship Compatibility based on Astrology and Numerology
const handleRelationshipCompatibility = async (dob1, dob2) => {
    // Step 1: Calculate both Life Path Numbers
    const lifePath1 = calculateLifePathNumber(dob1);
    const lifePath2 = calculateLifePathNumber(dob2);

    // Step 2: Get both Zodiac Signs
    const zodiac1 = getZodiacSign(dob1);
    const zodiac2 = getZodiacSign(dob2);

    // Step 3: Get Zodiac compatibility
    const zodiacCompatibility = getZodiacCompatibility(zodiac1, zodiac2);

    // Step 4: Get Life Path compatibility
    const lifePathCompatibility = getLifePathCompatibility(lifePath1, lifePath2);

    // Step 5: Generate and return the compatibility report
    let report = `
    💕 *Relationship Compatibility Report* 💕

    - *Your Zodiac Sign*: ${zodiac1}
    - *Partner's Zodiac Sign*: ${zodiac2}

    🔮 *Zodiac Compatibility*:
    ${zodiacCompatibility.message}

    📋 *Tips for a Harmonious Relationship*:
    - ${zodiacCompatibility.tips.join('\n- ')}

    🧮 *Your Life Path Number*: ${lifePath1}
    🧮 *Partner's Life Path Number*: ${lifePath2}

    📊 *Life Path Compatibility*:
    ${lifePathCompatibility.message}

    📋 *Tips for a Harmonious Relationship*:
    - ${lifePathCompatibility.tips.join('\n- ')}

    🌌 *Personalized Messages*:
    - For ${zodiac1} and ${zodiac2}: Embrace your shared love for adventure. Your combined energies create a vibrant and dynamic relationship that thrives on new experiences and spontaneous moments together. 
    - For Life Path ${lifePath1} and ${lifePath2}: Your synergy fosters a powerful connection. Focus on supporting each other's dreams and aspirations, leading to a partnership built on trust, respect, and mutual growth.
    `;

    return report;
};

// Exporting the handleRelationshipCompatibility function
module.exports = { handleRelationshipCompatibility };
