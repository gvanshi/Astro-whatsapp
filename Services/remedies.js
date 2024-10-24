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
    return "Capricorn";  // Default to Capricorn if no match
};


// Function to determine the day of the week from DOB
const getDayOfWeek = (dob) => {
    const [day, month, year] = dob.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
};


// Function to provide Life Path Number Remedies
const getLifePathNumberRemedies = (lifePathNumber) => {
    const remedies = {
        1: `
        🌟 *Life Path Number 1 (Leadership & Ambition)* 🌟

        • Wear *ruby* to enhance your leadership qualities and ambition.
        • Chant the *Gayatri Mantra* every morning to gain confidence and remove obstacles.
        • Perform Surya Namaskar (Sun Salutation) at sunrise to attract positivity.
        • Engage in activities that build confidence, like public speaking or leadership roles.
        • Focus on setting clear goals and visualizing your path to success.
        `,
        2: `
        🌟 *Life Path Number 2 (Balance & Partnership)* 🌟

        • Wear *pearl* to strengthen your intuition and emotional balance.
        • Chant the *Om Shanti Mantra* to bring peace and harmony in relationships.
        • Practice meditation to balance emotions and enhance creativity.
        • Engage in teamwork and cooperative activities to foster connections.
        • Focus on listening to others and developing empathy to enhance personal relationships.
        `,
        3: `
        🌟 *Life Path Number 3 (Creativity & Expression)* 🌟

        • Wear *yellow sapphire* to boost creativity and communication.
        • Chant the *Maha Mrityunjaya Mantra* to remove health obstacles.
        • Engage in creative activities like music, writing, or painting to express your energy positively.
        • Surround yourself with supportive friends who inspire your creative side.
        • Focus on self-expression and sharing your ideas with the world.
        `,
        4: `
        🌟 *Life Path Number 4 (Hard Work & Stability)* 🌟

        • Wear *emerald* to enhance your mental clarity and work ethic.
        • Chant the *Shani Mantra* to reduce delays and increase discipline.
        • Donate to charity on Saturdays to appease Saturn and remove obstacles from your path.
        • Create structured plans to achieve your goals and stick to them diligently.
        • Focus on building a solid foundation for your future through persistence and hard work.
        `,
        5: `
        🌟 *Life Path Number 5 (Adventure & Freedom)* 🌟

        • Wear *diamond* to attract opportunities and remove restrictions.
        • Chant the *Om Namah Shivaya Mantra* to bring mental clarity and focus.
        • Travel or engage in outdoor activities to channel your restless energy positively.
        • Explore new hobbies and interests to satisfy your adventurous spirit.
        • Focus on maintaining flexibility in your plans to allow for spontaneity and change.
        `,
        6: `
        🌟 *Life Path Number 6 (Responsibility & Family)* 🌟

        • Wear *blue sapphire* to enhance love, family harmony, and responsibility.
        • Chant the *Om Shukraya Namah Mantra* to strengthen Venus and bring harmony in relationships.
        • Practice gratitude and regularly offer food to the needy.
        • Focus on nurturing your relationships with loved ones through acts of kindness and support.
        • Engage in community service to express your caring nature and strengthen bonds.
        `,
        7: `
        🌟 *Life Path Number 7 (Spirituality & Introspection)* 🌟

        • Wear *amethyst* to enhance your spiritual intuition and calm your mind.
        • Chant the *Om Namah Shivaya Mantra* for mental peace and to connect with higher energies.
        • Practice yoga and meditation daily to align your mind, body, and spirit.
        • Focus on deepening your spiritual practices and understanding your inner self.
        • Engage in solitary reflection to cultivate insights and wisdom.
        `,
        8: `
        🌟 *Life Path Number 8 (Power & Discipline)* 🌟

        • Wear *blue sapphire* to boost your ambition and ability to achieve goals.
        • Chant the *Shani Mantra* on Saturdays to reduce obstacles and bring success.
        • Donate black items to the poor on Saturdays to balance Saturn's energy.
        • Focus on strategic planning and disciplined execution to reach your ambitions.
        • Engage in leadership roles that allow you to influence and inspire others.
        `,
        9: `
        🌟 *Life Path Number 9 (Compassion & Humanitarianism)* 🌟

        • Wear *red coral* to boost your courage and energy to serve humanity.
        • Chant the *Hanuman Chalisa* to enhance your inner strength and reduce fears.
        • Engage in charity work to channel your compassion and leadership.
        • Focus on developing your emotional intelligence to better serve and support others.
        • Engage in activities that promote social change and community well-being.
        `,
        11: `
        🌟 *Life Path Number 11 (Master Number – Intuition & Enlightenment)* 🌟

        • Wear *moonstone* to enhance your spiritual insights and intuition.
        • Chant the *Gayatri Mantra* to connect with higher energies and improve focus.
        • Practice meditation to channel your spiritual energy positively.
        • Focus on enhancing your psychic abilities and intuition through practice.
        • Engage in spiritual community activities that align with your enlightenment path.
        `,
        22: `
        🌟 *Life Path Number 22 (Master Number – Building & Vision)* 🌟

        • Wear *emerald* to enhance your visionary skills and mental clarity.
        • Chant the *Om Namah Shivaya Mantra* for peace and focus.
        • Take leadership roles and use your vision to create long-lasting results.
        • Focus on strategic thinking and planning to manifest your grand ideas into reality.
        • Engage in projects that require collaboration to achieve monumental goals.
        `,
    };

    return remedies[lifePathNumber] || "Your life path number is unique; practice meditation and mindfulness to unlock your full potential.";
};


// Function to provide Zodiac Sign Remedies
const getZodiacSignRemedies = (zodiacSign) => {
    const remedies = {
        Aries: `
        🔴 *Zodiac Sign: Aries* 🔴

        • Wear *red coral* to enhance your natural leadership abilities and courage.
        • Chant the *Hanuman Chalisa* for strength and protection.
        • Avoid spicy foods to reduce impulsiveness and enhance calmness.
        • Focus on developing patience in decision-making.
        • Engage in team sports to channel your competitive nature positively.
        `,
        Taurus: `
        🟢 *Zodiac Sign: Taurus* 🟢

        • Wear *diamond* or *opal* to enhance Venus’s energy, promoting love and wealth.
        • Chant the *Om Shukraya Namah Mantra* to strengthen Venus and bring harmony.
        • Practice grounding activities like gardening or yoga to enhance your sense of stability.
        • Focus on nurturing your relationships to attract love and prosperity.
        • Engage in artistic endeavors to channel your creative energy positively.
        `,
        Gemini: `
        🟡 *Zodiac Sign: Gemini* 🟡

        • Wear *emerald* to strengthen Mercury’s influence, improving communication and intelligence.
        • Chant the *Gayatri Mantra* to enhance focus and mental clarity.
        • Engage in social activities to channel your energy positively.
        • Focus on maintaining balance between your social life and personal space.
        • Engage in writing or public speaking to express your ideas effectively.
        `,
        Cancer: `
        🌙 *Zodiac Sign: Cancer* 🌙

        • Wear *pearl* to enhance emotional stability and balance.
        • Chant the *Om Namah Shivaya Mantra* to calm the mind and bring inner peace.
        • Avoid overeating or overindulging in emotional habits to maintain balance.
        • Focus on developing your intuition and nurturing your creative side.
        • Engage in family activities to strengthen your emotional bonds.
        `,
        Leo: `
        🦁 *Zodiac Sign: Leo* 🦁

        • Wear *ruby* to enhance your natural confidence and leadership qualities.
        • Chant the *Surya Mantra* to strengthen the Sun’s positive influence in your life.
        • Engage in creative activities to express your energy positively.
        • Focus on surrounding yourself with positive and supportive people.
        • Participate in community activities to showcase your leadership skills.
        `,
        Virgo: `
        🌿 *Zodiac Sign: Virgo* 🌿

        • Wear *emerald* to enhance Mercury’s influence, improving analytical skills and mental clarity.
        • Chant the *Gayatri Mantra* to enhance focus and reduce stress.
        • Practice meditation or yoga to maintain mental and physical balance.
        • Focus on improving your organizational skills to achieve your goals.
        • Engage in self-care activities to nurture your well-being.
        `,
        Libra: `
        ⚖️ *Zodiac Sign: Libra* ⚖️

        • Wear *diamond* or *white sapphire* to enhance Venus’s energy, promoting love and harmony.
        • Chant the *Om Shukraya Namah Mantra* to strengthen relationships and bring balance.
        • Focus on creating beauty in your surroundings to uplift your spirits.
        • Engage in diplomatic activities to resolve conflicts positively.
        • Participate in social gatherings to enhance your networking opportunities.
        `,
        Scorpio: `
        🦂 *Zodiac Sign: Scorpio* 🦂

        • Wear *red coral* to boost Mars’s influence, increasing your courage and focus.
        • Chant the *Hanuman Chalisa* to remove obstacles and reduce fear.
        • Avoid overindulgence in intense emotions to maintain balance.
        • Focus on exploring your depths to uncover hidden truths and talents.
        • Engage in transformative activities that empower your spirit.
        `,
        Sagittarius: `
        🏹 *Zodiac Sign: Sagittarius* 🏹

        • Wear *yellow sapphire* to enhance Jupiter’s influence, boosting wisdom and success.
        • Chant the *Om Guruve Namah Mantra* to strengthen Jupiter and attract knowledge.
        • Engage in learning or travel to expand your mind and soul.
        • Focus on setting clear goals for your explorations and adventures.
        • Participate in community service to channel your generous spirit positively.
        `,
        Capricorn: `
        🏔 *Zodiac Sign: Capricorn* 🏔

        • Wear *blue sapphire* to strengthen Saturn’s influence and remove obstacles.
        • Chant the *Shani Mantra* on Saturdays to bring discipline and success.
        • Engage in structured activities like business or planning to express your energy positively.
        • Focus on developing your leadership qualities to reach your goals.
        • Participate in networking activities to build professional connections.
        `,
        Aquarius: `
        🌬 *Zodiac Sign: Aquarius* 🌬

        • Wear *blue sapphire* to enhance Saturn’s influence, bringing stability and focus.
        • Chant the *Gayatri Mantra* to enhance mental clarity and focus.
        • Focus on humanitarian or social work to channel your energy positively.
        • Engage in innovative projects that resonate with your visionary nature.
        • Participate in community discussions to share your unique ideas.
        `,
        Pisces: `
        🌊 *Zodiac Sign: Pisces* 🌊

        • Wear *yellow sapphire* to strengthen Jupiter’s influence, promoting spiritual growth.
        • Chant the *Om Guruve Namah Mantra* to enhance your connection to higher energies.
        • Practice meditation and engage in creative work to express your inner world.
        • Focus on developing your intuition and empathetic abilities to help others.
        • Engage in artistic endeavors to channel your creativity positively.
        `,
    };

    return remedies[zodiacSign] || "Your zodiac sign is powerful; stay connected with your inner self and practice daily gratitude.";
};


// Function to provide remedies based on the Day of the Week they were born
const getDayOfWeekRemedies = (dayOfWeek) => {
    const remedies = {
        Sunday: `
        ☀️ *Born on Sunday* ☀️

        • Chant the *Surya Mantra*: Om Hraam Hreem Hraum Sah Suryaya Namah 108 times to strengthen the Sun’s influence in your life.
        • Wear *ruby* to enhance your confidence and leadership.
        • Perform Surya Namaskar at sunrise to invite the Sun’s energy into your life.
        • Focus on engaging in activities that uplift your spirit and promote positivity.
        • Spend time outdoors to soak up the sun's energy and enhance vitality.
        `,
        Monday: `
        🌙 *Born on Monday* 🌙

        • Chant the *Om Namah Shivaya Mantra* to calm the mind and balance your emotions.
        • Wear *pearl* to strengthen the Moon’s influence and bring emotional balance.
        • Drink water from a silver vessel to cool your mind and reduce stress.
        • Focus on nurturing your relationships with kindness and compassion.
        • Engage in creative activities that allow you to express your emotions positively.
        `,
        Tuesday: `
        🔴 *Born on Tuesday* 🔴

        • Chant the *Mangal Mantra*: Om Angarakaya Namah 108 times to reduce Mars’s aggression and boost strength.
        • Wear *red coral* to enhance your confidence and reduce anger.
        • Avoid spicy food on Tuesdays to reduce Mars’s influence.
        • Focus on channeling your energy into productive and positive activities.
        • Engage in physical activities that promote strength and endurance.
        `,
        Wednesday: `
        🟢 *Born on Wednesday* 🟢

        • Chant the *Om Budhaya Namah Mantra* to strengthen Mercury’s influence, improving intelligence and communication.
        • Wear *emerald* to boost Mercury’s energy and bring mental clarity.
        • Practice mental exercises like puzzles or reading to channel Mercury’s energy.
        • Focus on developing your communication skills to enhance personal and professional relationships.
        • Engage in writing or public speaking to express your ideas effectively.
        `,
        Thursday: `
        🟡 *Born on Thursday* 🟡

        • Chant the *Om Guruve Namah Mantra* to strengthen Jupiter’s influence, attracting wisdom and success.
        • Wear *yellow sapphire* to enhance Jupiter’s energy and bring prosperity.
        • Engage in teaching or learning to express your Jupiter energy positively.
        • Focus on setting clear goals for your personal and spiritual growth.
        • Participate in community service to express your generous nature.
        `,
        Friday: `
        ⚪ *Born on Friday* ⚪

        • Chant the *Om Shukraya Namah Mantra* to strengthen Venus’s influence, bringing love and harmony.
        • Wear *diamond* or *white sapphire* to enhance Venus’s energy and attract wealth.
        • Focus on nurturing your relationships and creating beauty in your surroundings.
        • Engage in activities that promote harmony and creativity.
        • Spend time with loved ones to express your affectionate nature.
        `,
        Saturday: `
        ⚫ *Born on Saturday* ⚫

        • Chant the *Shani Mantra*: Om Sham Shanishcharaya Namah 108 times to reduce Saturn’s delays and challenges.
        • Wear *blue sapphire* to strengthen Saturn’s positive effects.
        • Donate to the poor on Saturdays to appease Saturn and remove obstacles.
        • Focus on embracing discipline and structure in your life for personal growth.
        • Engage in reflective activities that allow you to reassess your goals and aspirations.
        `,
    };

    return remedies[dayOfWeek] || "Every day is a blessing; practice mindfulness and gratitude for success.";
};


// Main function to handle personalized remedies based on DOB
const handlePersonalizedRemediesByDOB = async (dob) => {
    const lifePathNumber = calculateLifePathNumber(dob);
    const zodiacSign = getZodiacSign(dob);
    const dayOfWeek = getDayOfWeek(dob);

    // Get remedies based on life path number, zodiac sign, and day of the week
    const lifePathRemedies = getLifePathNumberRemedies(lifePathNumber);
    const zodiacSignRemedies = getZodiacSignRemedies(zodiacSign);
    const dayOfWeekRemedies = getDayOfWeekRemedies(dayOfWeek);

    return `
    📅 *Personalized Remedies Based on Your Date of Birth (${dob})* 📅

    1. *Life Path Number Remedies*: 
    ${lifePathRemedies}

    2. *Zodiac Sign Remedies*: 
    ${zodiacSignRemedies}

    3. *Day of Birth Remedies (Born on ${dayOfWeek})*: 
    ${dayOfWeekRemedies}
    `;
};

// Exporting the handlePersonalizedRemediesByDOB function
module.exports = { handlePersonalizedRemediesByDOB };
