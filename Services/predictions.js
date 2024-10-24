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

// Function to determine Zodiac Sign based on Date of Birth
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

// Function to get Annual Prediction by Zodiac Sign
const getAnnualPredictionByZodiac = (zodiacSign) => {
    const predictions = {
        Aries: `🔮 *Annual Prediction for Aries* 🔮\n
        *Career*: This is a year of growth for you, Aries. Bold moves and quick decisions will pave the way for success. However, avoid being impulsive in the middle of the year when challenges might arise. Patience and persistence will help you overcome obstacles.\n
        *Health*: This year is about finding balance between your work and health. While your energy will be high, don't let stress take over. Incorporate mindfulness practices and regular exercise to stay grounded.\n
        *Relationships*: Your personal relationships will thrive this year if you focus on communication. Avoid making hasty decisions when conflicts arise. By mid-year, you'll experience deeper connections with loved ones.`,
        Taurus: `🔮 *Annual Prediction for Taurus* 🔮\n
        *Career*: Patience will be your key to success this year, Taurus. You might feel that your progress is slow, but consistency will bring long-term rewards. A steady, pragmatic approach will help you rise in your career.\n
        *Health*: Pay close attention to your physical health, especially your diet and daily routine. Regular exercise and a balanced diet will help you avoid any health setbacks.\n
        *Relationships*: Relationships will have their highs and lows, especially in the first half of the year. Stay calm, compromise, and avoid unnecessary conflicts. By the end of the year, relationships will be more stable.`,
        Gemini: `🔮 *Annual Prediction for Gemini* 🔮\n
        *Career*: Fast changes are coming your way, Gemini! This year will bring multiple opportunities, but you'll need to be adaptable and quick to make decisions. Keep your eyes open for new business ventures, especially in the second quarter of the year.\n
        *Health*: Watch for signs of stress and mental fatigue. It's important to take breaks and engage in activities that bring relaxation. Regular physical exercise will help you stay grounded.\n
        *Relationships*: Social connections will thrive this year, and you may find new friendships blossoming. Stay flexible in your personal relationships and avoid being overly critical of loved ones.`,
        Cancer: `🔮 *Annual Prediction for Cancer* 🔮\n
        *Career*: This year is about consolidation and security in your career. The first half of the year will see steady progress, but you may encounter a few obstacles in the latter part. Focus on creating strong foundations in your work.\n
        *Health*: Emotional well-being is crucial this year. Regular relaxation and stress management techniques like yoga and meditation will help you maintain inner peace.\n
        *Relationships*: Strong bonds with family and loved ones will provide comfort throughout the year. Emotional connections will deepen, especially in the second half of the year.`,
        Leo: `🔮 *Annual Prediction for Leo* 🔮\n
        *Career*: It's time for you to shine, Leo. Career advancement is on the horizon, especially if you're in a leadership role. You may face a few challenges around mid-year, but your determination will help you achieve success.\n
        *Health*: Pay attention to your physical health, especially in the latter part of the year. A consistent fitness routine and balanced diet will help you avoid health issues.\n
        *Relationships*: Your relationships will be passionate and intense this year. Open communication will help resolve any conflicts, and by the end of the year, you'll feel more connected to loved ones.`,
        Virgo: `🔮 *Annual Prediction for Virgo* 🔮\n
        *Career*: This is a year of discipline and focus. If you can stay organized, you'll make great progress in your career. There may be periods where you feel overwhelmed, but your attention to detail will help you succeed.\n
        *Health*: Stress management is important for you this year. Incorporate mindfulness, yoga, or meditation into your daily routine to maintain mental clarity.\n
        *Relationships*: Relationships will require effort this year. Focus on communication and avoid over-analyzing minor issues. By the end of the year, you'll feel a stronger emotional connection with loved ones.`,
        Libra: `🔮 *Annual Prediction for Libra* 🔮\n
        *Career*: Teamwork and collaboration will be your strengths this year. Expect new partnerships or collaborations that could lead to career growth. Stay balanced and avoid being indecisive in important career decisions.\n
        *Health*: Balance is the theme for your health as well. Focus on maintaining harmony between work and rest. Avoid pushing yourself too hard.\n
        *Relationships*: Your relationships will benefit from open communication and compromise. This is a good year for resolving past conflicts and deepening connections with loved ones.`,
        Scorpio: `🔮 *Annual Prediction for Scorpio* 🔮\n
        *Career*: Transformation is the theme for your career this year, Scorpio. You may experience changes in your job or work environment. Embrace the challenges, and you will come out stronger and more successful by the end of the year.\n
        *Health*: Focus on both your mental and physical health. Yoga and meditation will help you stay balanced and reduce stress.\n
        *Relationships*: Relationships will be intense and passionate. Be careful not to let emotions take control, especially during the middle of the year. Stay calm and open in your communication.`,
        Sagittarius: `🔮 *Annual Prediction for Sagittarius* 🔮\n
        *Career*: This is a year of expansion and new opportunities. Travel or relocation may bring unexpected career growth. Stay open to learning and exploring new fields.\n
        *Health*: You may feel more energetic this year, but don’t overdo it. Balance your activities with proper rest to avoid burnout.\n
        *Relationships*: Your relationships will feel adventurous and exciting. If you're single, you may meet someone new during travel or social events. Existing relationships will benefit from more spontaneous activities.`,
        Capricorn: `🔮 *Annual Prediction for Capricorn* 🔮\n
        *Career*: Hard work and discipline will be rewarded this year. Focus on long-term projects and you’ll see steady progress. There may be challenges in the middle of the year, but patience will help you overcome them.\n
        *Health*: Pay attention to your health this year, especially your bones and joints. Regular exercise and a balanced diet will help you maintain your physical health.\n
        *Relationships*: Relationships may feel like hard work at times, but by the end of the year, you'll see the value in the effort. Keep communication open and avoid being too rigid with loved ones.`,
        Aquarius: `🔮 *Annual Prediction for Aquarius* 🔮\n
        *Career*: Innovation is the key to success for you this year, Aquarius. You’ll feel inspired to bring new ideas to the table, and this will lead to career growth. Don’t be afraid to break away from the norm.\n
        *Health*: Focus on your mental health and well-being. Regular physical activity will help you stay balanced.\n
        *Relationships*: Relationships will thrive if you stay flexible and open-minded. Avoid being detached, and work on building emotional connections.`,
        Pisces: `🔮 *Annual Prediction for Pisces* 🔮\n
        *Career*: This is a year for introspection and planning. You may feel the need for change in your career, but make sure to plan carefully before making any major moves.\n
        *Health*: Focus on your emotional and mental health. Meditation and spiritual practices will be helpful for maintaining balance.\n
        *Relationships*: Your romantic life may take unexpected turns this year. Stay open-minded and compassionate, and you'll find growth in your relationships.`,
    };

    return predictions[zodiacSign] || "The year ahead brings opportunities and challenges; stay open to personal growth.";
};

// Function to get Monthly Prediction by Zodiac Sign
const getMonthlyPredictionByZodiac = (zodiacSign) => {
    const predictions = {
        Aries: `🔮 *Monthly Prediction for Aries* 🔮\n
        *Career*: This month is all about collaboration. You'll find success when working with others. Be mindful of impulsive decisions at work.\n
        *Health*: Focus on building a consistent fitness routine. Physical activity will help you maintain high energy.\n
        *Relationships*: Relationships may feel strained at times, but with patience and open communication, you'll strengthen your bonds.`,
        Taurus: `🔮 *Monthly Prediction for Taurus* 🔮\n
        *Career*: Steady progress is on the horizon, but it may feel slow. Be patient and trust in your long-term plans.\n
        *Health*: Take care of your physical health, especially your throat and neck. Regular exercise and stress management are key.\n
        *Relationships*: Your personal relationships will benefit from deeper communication. Be open to sharing your feelings.`,
        Gemini: `🔮 *Monthly Prediction for Gemini* 🔮\n
        *Career*: Change is coming, and you must be ready to adapt. Stay open to new opportunities, even if they seem unexpected.\n
        *Health*: Watch for signs of stress. Incorporating relaxation techniques will help you maintain balance.\n
        *Relationships*: Your social circle will expand this month, but remember to nurture existing relationships.`,
        Cancer: `🔮 *Monthly Prediction for Cancer* 🔮\n
        *Career*: Focus on consolidation and security in your career. Steady progress will be made, but expect challenges towards the end of the month.\n
        *Health*: Emotional balance is crucial. Spend time on activities that help you relax and recharge.\n
        *Relationships*: Family and loved ones will provide comfort. Strengthen emotional bonds through open communication.`,
        Leo: `🔮 *Monthly Prediction for Leo* 🔮\n
        *Career*: You'll have opportunities for leadership roles this month. Your confidence will shine through in your work, leading to career growth.\n
        *Health*: Focus on maintaining your physical fitness. Consistent exercise and a healthy diet will keep you energized.\n
        *Relationships*: Your relationships will be intense, but rewarding. Stay patient in resolving any conflicts.`,
        Virgo: `🔮 *Monthly Prediction for Virgo* 🔮\n
        *Career*: Organization and discipline are key to your success this month. Stay focused, and you’ll make significant progress in your career.\n
        *Health*: Avoid overworking yourself. Regular breaks and mindfulness will help you stay balanced.\n
        *Relationships*: Communication is important in your personal relationships. Avoid over-analyzing minor issues and focus on the bigger picture.`,
        Libra: `🔮 *Monthly Prediction for Libra* 🔮\n
        *Career*: Teamwork and collaboration are highlighted this month. Expect to work closely with others on important projects.\n
        *Health*: Balance is important. Focus on maintaining harmony between work and rest to avoid burnout.\n
        *Relationships*: Open communication will strengthen your relationships. Use this time to resolve any past conflicts.`,
        Scorpio: `🔮 *Monthly Prediction for Scorpio* 🔮\n
        *Career*: Changes in your career are likely this month. Embrace transformation and trust that it will lead to long-term success.\n
        *Health*: Mental and physical well-being are key. Make time for relaxation and stress relief.\n
        *Relationships*: Relationships will be intense this month. Avoid letting your emotions take control, and focus on open communication.`,
        Sagittarius: `🔮 *Monthly Prediction for Sagittarius* 🔮\n
        *Career*: Expansion is on the horizon. Stay open to new opportunities, particularly involving travel or new ventures.\n
        *Health*: You’ll have high energy, but balance is key. Avoid over-exerting yourself.\n
        *Relationships*: Your personal relationships will benefit from spontaneity and adventure. Make time for fun and exploration with loved ones.`,
        Capricorn: `🔮 *Monthly Prediction for Capricorn* 🔮\n
        *Career*: Hard work and dedication will pay off this month. Stay focused on long-term goals, even if progress seems slow.\n
        *Health*: Pay attention to your physical health, especially your joints and bones. Regular exercise will help.\n
        *Relationships*: Relationships may feel challenging, but with patience and effort, you'll see positive changes by the end of the month.`,
        Aquarius: `🔮 *Monthly Prediction for Aquarius* 🔮\n
        *Career*: Innovation and creativity are your keys to success this month. Think outside the box and explore new ideas.\n
        *Health*: Focus on maintaining your mental and emotional well-being. Regular exercise will help balance your energy.\n
        *Relationships*: Your relationships will flourish if you stay flexible and open to new ideas. Avoid being emotionally detached.`,
        Pisces: `🔮 *Monthly Prediction for Pisces* 🔮\n
        *Career*: Take time to reflect on your career path. It may not be the best month for major changes, but planning is key.\n
        *Health*: Focus on your mental health. Meditation or creative activities like painting or writing will bring balance.\n
        *Relationships*: Romantic relationships may take unexpected turns. Stay open-minded and compassionate to navigate changes.`,
    };

    return predictions[zodiacSign] || "The month ahead brings opportunities and challenges; stay open to growth and new possibilities.";
};

// Function to get Annual Predictions by Life Path Number
const getAnnualPredictionByLifePath = (lifePathNumber) => {
    const predictions = {
        1: `🔮 *Annual Prediction for Life Path Number 1* 🔮\n
        *Career*: Leadership and bold decisions will define your career this year. Take charge of new projects and let your creativity shine. Expect recognition for your hard work, but avoid becoming overbearing in team dynamics.\n
        *Health*: Your energy will be high, but you must balance work with rest. Regular exercise and mindfulness practices will help you avoid burnout.\n
        *Relationships*: Be a leader in your relationships, but don’t dominate. Let others express themselves, and you’ll create stronger bonds.`,
        2: `🔮 *Annual Prediction for Life Path Number 2* 🔮\n
        *Career*: Focus on building partnerships and collaborative efforts. This year is about working with others to achieve mutual goals. Avoid rushing into decisions—take your time to evaluate all options.\n
        *Health*: Emotional well-being will be important. Practice self-care and mindfulness to reduce stress and anxiety.\n
        *Relationships*: Balance is key in your relationships. Be open to compromise and avoid conflict. Communication is crucial for maintaining harmony.`,
        3: `🔮 *Annual Prediction for Life Path Number 3* 🔮\n
        *Career*: Creativity will be at the forefront of your career this year. You’ll feel inspired to take on new challenges that allow for self-expression. Stay focused, and you’ll make significant strides.\n
        *Health*: Take care of your mental health. Engaging in creative hobbies like painting, music, or writing will help you maintain emotional balance.\n
        *Relationships*: Your relationships will thrive with open communication and emotional expression. Be sure to show your appreciation for loved ones.`,
        4: `🔮 *Annual Prediction for Life Path Number 4* 🔮\n
        *Career*: Hard work and discipline will define your career this year. You’ll be focused on long-term goals, and your efforts will lead to success, though progress may feel slow at times. Stay patient.\n
        *Health*: Stress management will be important. Regular physical activity and relaxation techniques will help you stay balanced.\n
        *Relationships*: Relationships may require extra effort, but with open communication and patience, they will strengthen by the end of the year.`,
        5: `🔮 *Annual Prediction for Life Path Number 5* 🔮\n
        *Career*: This year is about embracing change and freedom. You’ll find new opportunities for growth, especially in creative or unconventional fields. Stay adaptable and take calculated risks.\n
        *Health*: Your energy levels will be high, but avoid overindulgence. Stay active and maintain a balanced diet.\n
        *Relationships*: Relationships will be exciting and dynamic. Be open to new experiences and avoid feeling confined in your personal life.`,
        6: `🔮 *Annual Prediction for Life Path Number 6* 🔮\n
        *Career*: This is a year of responsibility and care. You’ll feel drawn to roles that allow you to help others, whether in a professional or personal capacity. Stay grounded in your values.\n
        *Health*: Focus on your emotional and physical well-being. Take time for self-care and relaxation to avoid feeling overwhelmed.\n
        *Relationships*: Relationships will be nurturing and supportive. You’ll find fulfillment in caring for others, but remember to take care of yourself too.`,
        7: `🔮 *Annual Prediction for Life Path Number 7* 🔮\n
        *Career*: This year is about introspection and reflection. You’ll find success in roles that allow you to think deeply and analyze situations. Avoid making hasty decisions—take time to plan and strategize.\n
        *Health*: Mental well-being will be important. Engage in spiritual practices like meditation or yoga to maintain balance.\n
        *Relationships*: Relationships will deepen if you take the time to connect on an intellectual and emotional level. Avoid withdrawing from loved ones.`,
        8: `🔮 *Annual Prediction for Life Path Number 8* 🔮\n
        *Career*: This is a year of power and ambition. You’ll feel motivated to take on leadership roles and pursue big goals. Success is within reach, but stay mindful of maintaining balance.\n
        *Health*: Pay attention to your physical health, especially if you feel overworked. Regular exercise and a balanced diet will keep you energized.\n
        *Relationships*: Relationships may feel challenging at times, but with patience and effort, you’ll find stability by the end of the year.`,
        9: `🔮 *Annual Prediction for Life Path Number 9* 🔮\n
        *Career*: A year of service and giving back. You’ll find fulfillment in helping others, but don’t neglect your personal goals. Stay focused on your own growth while supporting others.\n
        *Health*: Emotional health is important. Engage in spiritual practices to maintain balance.\n
        *Relationships*: You’ll feel a strong connection with others, and relationships will be based on mutual respect and compassion.`,
        11: `🔮 *Annual Prediction for Life Path Number 11* 🔮\n
        *Career*: Your intuition will guide you to success this year. Trust your instincts, and don’t be afraid to pursue unconventional paths. This is a year of spiritual and personal growth.\n
        *Health*: Emotional well-being will be crucial. Stay connected to your inner self through meditation and mindfulness.\n
        *Relationships*: Your relationships will be deep and meaningful. Focus on building strong emotional connections.`,
        22: `🔮 *Annual Prediction for Life Path Number 22* 🔮\n
        *Career*: This is a year of building and vision. You’ll feel driven to create something lasting, whether it’s a business, project, or relationship. Stay focused on your long-term goals.\n
        *Health*: Balance is key. Don’t neglect your health while pursuing your ambitions. Regular physical activity will help you stay grounded.\n
        *Relationships*: Relationships will feel stable and supportive. Take time to nurture your connections with loved ones.`,
    };

    return predictions[lifePathNumber] || "The year ahead holds many opportunities for personal and professional growth. Stay open to change and personal evolution.";
};

// Main function to handle personalized Annual and Monthly predictions
const handleAnnualAndMonthlyPredictions = async (dob) => {
    const lifePathNumber = calculateLifePathNumber(dob);
    const zodiacSign = getZodiacSign(dob);

    // Fetching Annual Predictions
    const zodiacPredictionAnnual = getAnnualPredictionByZodiac(zodiacSign);
    const lifePathPrediction = getAnnualPredictionByLifePath(lifePathNumber);
    
    const annualPrediction = `🌟 *Annual Predictions for ${zodiacSign} (Life Path ${lifePathNumber})* 🌟\n
    ${zodiacPredictionAnnual}\n
    ${lifePathPrediction}\n`;

    // Fetching Monthly Predictions
    const zodiacPredictionMonthly = getMonthlyPredictionByZodiac(zodiacSign);
    
    const monthlyPrediction = `🌟 *Monthly Predictions for ${zodiacSign}* 🌟\n
    ${zodiacPredictionMonthly}\n`;

    // Combine both predictions
    return annualPrediction + monthlyPrediction;
};

// Exporting the handleAnnualAndMonthlyPredictions function
module.exports = { handleAnnualAndMonthlyPredictions };
