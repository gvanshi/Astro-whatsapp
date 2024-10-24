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


// Function to suggest lucky dates based on Life Path Number
const suggestLuckyDates = (lifePathNumber) => {
    const luckyDaysMapping = {
        1: [1, 10, 19, 28],
        2: [2, 11, 20, 29],
        3: [3, 12, 21, 30],
        4: [4, 13, 22, 31],
        5: [5, 14, 23],
        6: [6, 15, 24],
        7: [7, 16, 25],
        8: [8, 17, 26],
        9: [9, 18, 27]
    };

    const explanations = {
        1: "These dates empower you to take initiative and lead projects effectively. Utilize these opportunities for starting new ventures or taking bold actions that can shape your future.",
        2: "These dates enhance your diplomatic skills and promote cooperation. They are ideal for resolving conflicts, forging partnerships, or engaging in activities that require collaboration and harmony.",
        3: "Creativity flourishes on these dates, making them perfect for artistic projects, performances, or social events where your charisma can shine. Embrace opportunities to express your ideas and connect with others.",
        4: "Practicality and structure are favored on these dates. Focus on organization and detailed planning to ensure success in your tasks, especially those that require meticulous attention.",
        5: "Adventure calls on these dates, encouraging exploration and embracing change. These days are perfect for travel, trying new activities, and stepping out of your comfort zone to discover new horizons.",
        6: "Family and community connections are highlighted on these dates. Spend time nurturing relationships and fostering harmony within your loved ones, reinforcing the bonds that matter most.",
        7: "Introspection and spiritual growth are best pursued on these dates. Engage in self-reflection, meditation, or any activity that deepens your understanding of yourself and your purpose.",
        8: "Material success and career advancements are within reach on these dates. Ideal for business meetings, financial decisions, and ambitious projects where your hard work can pay off.",
        9: "Compassionate actions and humanitarian efforts are strengthened on these dates. Perfect for volunteering or engaging in community service, allowing you to make a meaningful impact on the world."
    };

    return {
        dates: luckyDaysMapping[lifePathNumber] || [],
        explanation: explanations[lifePathNumber] || "No specific explanation for your lucky dates."
    };
};


// Function to suggest lucky times based on Life Path Number
const suggestLuckyTimes = (lifePathNumber) => {
    const luckyTimesMapping = {
        1: ['6 AM - 8 AM', '1 PM - 2 PM'],
        2: ['9 AM - 11 AM', '4 PM - 6 PM'],
        3: ['12 PM - 1 PM', '7 PM - 9 PM'],
        4: ['5 AM - 7 AM', '2 PM - 3 PM'],
        5: ['8 AM - 9 AM', '5 PM - 7 PM'],
        6: ['6 AM - 7 AM', '3 PM - 4 PM'],
        7: ['7 AM - 9 AM', '8 PM - 10 PM'],
        8: ['4 AM - 6 AM', '12 PM - 2 PM'],
        9: ['11 AM - 1 PM', '6 PM - 8 PM']
    };

    const explanations = {
        1: "Early morning hours boost motivation and clarity for leadership tasks, making it a prime time for setting intentions and planning. Afternoon slots are excellent for making impactful decisions, especially in group settings.",
        2: "These times promote emotional understanding and harmony, making them ideal for meetings and discussions. Use this period to connect with others, ensuring that your interactions are productive and collaborative.",
        3: "Creative energies peak during these hours, allowing you to brainstorm and develop innovative ideas. This is a perfect time for artistic expressions or social interactions where you can showcase your charm.",
        4: "Early hours are great for planning and reflection, while afternoon hours focus on executing structured tasks effectively. Use this time to establish a clear direction for your projects and goals.",
        5: "These hours encourage exploration and adaptability, making them perfect for spontaneous decisions or taking on new adventures. Embrace the opportunities that arise during this time to learn and grow.",
        6: "Nurturing and supportive actions are favored in the morning, making it ideal for engaging with loved ones. Afternoon hours can be dedicated to self-care and activities that rejuvenate your spirit.",
        7: "These times are excellent for introspection and spiritual practices, providing opportunities for meditation and self-discovery. Utilize this time to reflect on your journey and connect with your inner self.",
        8: "Morning hours encourage ambition and drive, making them suitable for business negotiations. Afternoon hours are ideal for financial decisions and strategic planning, ensuring you make the most of your efforts.",
        9: "Compassion and social consciousness peak during these hours, making them great for community involvement or volunteering efforts. Focus on activities that promote kindness and understanding in your interactions."
    };

    return {
        times: luckyTimesMapping[lifePathNumber] || ['Any time during the day'],
        explanation: explanations[lifePathNumber] || "No specific explanation for your lucky times."
    };
};


// Function to suggest lucky color based on Life Path Number
const suggestLuckyColor = (lifePathNumber) => {
    const luckyColorMapping = {
        1: 'Red',
        2: 'Blue',
        3: 'Yellow',
        4: 'Green',
        5: 'Orange',
        6: 'Pink',
        7: 'Violet',
        8: 'Black',
        9: 'White'
    };

    const explanations = {
        1: "Red symbolizes passion, energy, and determination—perfect for those leading the way. Wearing or surrounding yourself with this color can amplify your leadership qualities and drive.",
        2: "Blue represents calmness and harmony, ideal for those nurturing relationships and promoting peace. This color can help foster a soothing environment and enhance your ability to connect with others.",
        3: "Yellow embodies creativity and joy, great for artistic individuals. This bright color can uplift your spirits and inspire new ideas, enhancing your communication skills.",
        4: "Green signifies stability and growth, suitable for those focused on building a solid foundation in life. Embracing this color can encourage balance and a sense of security.",
        5: "Orange represents enthusiasm and excitement, perfect for the adventurous spirit. This vibrant color can energize your interactions and encourage spontaneity.",
        6: "Pink symbolizes love and care, ideal for caregivers who value emotional connections. Surrounding yourself with this color can enhance your nurturing nature and promote compassion.",
        7: "Violet represents spirituality and introspection, great for seekers of truth. This color can deepen your connection to your spiritual journey and enhance your intuitive abilities.",
        8: "Black signifies power and ambition, suitable for those pursuing success. Wearing black can instill confidence and help you project strength in your endeavors.",
        9: "White embodies purity and peace, perfect for compassionate souls. This color can help you maintain clarity and a sense of calmness in your interactions."
    };

    return {
        color: luckyColorMapping[lifePathNumber] || 'Neutral',
        explanation: explanations[lifePathNumber] || "No specific explanation for your lucky color."
    };
};


// Function to handle Lucky Dates, Times, Colors, and Numbers suggestion
const handleLuckyDatesAndTimes = async (dob) => {
    const lifePathNumber = calculateLifePathNumber(dob);
    const { dates: luckyDates, explanation: dateExplanation } = suggestLuckyDates(lifePathNumber);
    const { times: luckyTimes, explanation: timeExplanation } = suggestLuckyTimes(lifePathNumber);
    const { color: luckyColor, explanation: colorExplanation } = suggestLuckyColor(lifePathNumber);
    const luckyNumber = lifePathNumber; // Lucky number is the Life Path Number

    let report = `
    *Lucky Attributes Report*
    
    - Your Life Path Number (based on DOB: ${dob}): ${lifePathNumber}

    • Lucky Dates: ${luckyDates.join(', ')} 
      - Explanation: ${dateExplanation}

    • Lucky Times: ${luckyTimes.join(' | ')} 
      - Explanation: ${timeExplanation}

    • Lucky Color: ${luckyColor} 
      - Explanation: ${colorExplanation}

    • Lucky Number: ${luckyNumber}

    ✨ Aligning important tasks or decisions with these attributes may enhance your chances of success and harmony in life.
    `;

    return report;
};

module.exports = { handleLuckyDatesAndTimes };
