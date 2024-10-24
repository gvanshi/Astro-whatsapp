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


// Function to explain Life Path Number
const explainLifePathNumber = (lifePathNumber) => {
    const descriptions = {
        1: "You are a born leader! You like to do things your way and are very determined to reach your goals.",
        2: "You love peace and harmony. You excel at helping people get along and feel happy.",
        3: "You are highly creative and love to express yourself through art and communication.",
        4: "You are hardworking and practical, focused on building a solid foundation in life.",
        5: "You thrive on excitement and change, constantly seeking new adventures.",
        6: "You are nurturing and responsible, often taking care of those around you.",
        7: "You are introspective and seek deeper truths about life and the universe.",
        8: "You are ambitious and focused on achieving great success in your career.",
        9: "You are compassionate and dedicated to making a positive impact in the world.",
        11: "You are spiritually aware and often guide others with your insights.",
        22: "You are a master builder, capable of turning big dreams into reality."
    };

    return descriptions[lifePathNumber] || "An unknown Life Path Number. Please check your date of birth.";
};


// Function to calculate Name Numerology (Chaldean System)
const calculateNameNumerology = (name) => {
    const chaldeanTable = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1, J: 1,
        K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2, S: 3, T: 4,
        U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7
    };
    let sum = 0;

    // Convert each letter to a corresponding number and sum them
    for (let char of name.toUpperCase()) {
        if (chaldeanTable[char]) {
            sum += chaldeanTable[char];
        }
    }

    // Reduce the sum to a single digit unless it's a Master Number (11 or 22)
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
};


// Function to explain Name Numerology Number
const explainNameNumerology = (nameNumerology) => {
    const descriptions = {
        1: "You are a born leader! Your independent spirit drives you to forge your own path.",
        2: "You are the peacemaker! You shine in team settings, bringing harmony to those around you.",
        3: "You are a creative communicator! Your artistic talents and expressive nature set you apart.",
        4: "You are practical and reliable! Your strong sense of responsibility helps you build a solid foundation.",
        5: "You are the adventurer! Your love for freedom and change fuels your curiosity about the world.",
        6: "You are the caregiver! Your nurturing and compassionate nature makes you a great friend.",
        7: "You are the spiritual seeker! Your inquisitive mind drives you to explore deep truths.",
        8: "You are the powerhouse! Your ambition and determination set you on a path to success.",
        9: "You are the humanitarian! Your generous spirit and compassion drive you to make a positive impact.",
        11: "You are the master intuitive! Your heightened sensitivity and spiritual awareness set you apart.",
        22: "You are the master builder! Your ability to turn dreams into reality is unparalleled."
    };

    return descriptions[nameNumerology] || "An unknown Name Number. Please check your name input for accuracy.";
};


// Function to suggest corrected names based on desired numerology
const suggestNameCorrections = (name, targetNumber) => {
    const vowelCorrections = ['a', 'e', 'i', 'o', 'u'];
    const suggestedNames = [];

    // Modify the name slightly by adding vowels at the end
    for (let vowel of vowelCorrections) {
        const newName = name + vowel;
        const newNumerology = calculateNameNumerology(newName);

        if (newNumerology === targetNumber) {
            suggestedNames.push(newName);
        }
    }

    // If no corrections found with vowels, try adjusting the letters
    if (suggestedNames.length === 0) {
        for (let vowel of vowelCorrections) {
            const newName = vowel + name;
            const newNumerology = calculateNameNumerology(newName);

            if (newNumerology === targetNumber) {
                suggestedNames.push(newName);
            }
        }
    }

    // Return up to 3-4 suggestions
    return suggestedNames.slice(0, 4);
};


// Function to handle Name Correction Suggestions
const handleNameCorrection = async (name, dob, mobile) => {
    const lifePathNumber = calculateLifePathNumber(dob);
    const currentNameNumerology = calculateNameNumerology(name);

    // Check if the current name numerology aligns with the life path number
    if (currentNameNumerology === lifePathNumber) {
        return generateReport(name, dob, mobile, currentNameNumerology, lifePathNumber, null);
    }

    const suggestedNames = suggestNameCorrections(name, lifePathNumber);
    return generateReport(name, dob, mobile, currentNameNumerology, lifePathNumber, suggestedNames);
};


// Function to generate a detailed report
const generateReport = (name, dob, mobile, currentNameNumerology, lifePathNumber, suggestedNames) => {
    let report = `
    🌟 *Name Correction Report for ${name}* 🌟
    
    - *Date of Birth*: ${dob}
    - *Mobile Number*: ${mobile}

    📈 *Analysis*:  
    Your name's current numerology number is ${currentNameNumerology}, which ${currentNameNumerology === lifePathNumber ? "aligns perfectly" : "doesn't align"} with your Life Path Number (${lifePathNumber}).

    📜 *Explanation of Your Life Path Number (${lifePathNumber}):*  
    ${explainLifePathNumber(lifePathNumber)}

    🔠 Name Numerology Number: ${currentNameNumerology}
    - ${explainNameNumerology(currentNameNumerology)}
    `;

    if (suggestedNames && suggestedNames.length > 0) {
        report += `\n✨ *Suggested Name Corrections* (to align with your Life Path Number ${lifePathNumber}):\n`;
        suggestedNames.forEach(suggestedName => {
            report += `• ${suggestedName}\n`;
        });
    } else {
        report += `\n*It seems that your name is already quite strong, and no major changes are necessary.* You might already be on the right path with your current name!\n`;
    }

    // Additional personalized content can be added here
    const personalizedContent = generatePersonalizedContent(lifePathNumber);
    report += personalizedContent;

    return report;
};


// Function to generate personalized content
const generatePersonalizedContent = (lifePathNumber) => {
    const personalizedAdvice = {
        1: `
        🌈 *Personalized Advice*:
        - Embrace your leadership qualities while also learning to listen to others.
        - Channel your creativity into projects that inspire and motivate those around you.
        - Balance your ambition with empathy to foster strong relationships.

        💡 *Affirmation for Success*:
        "I confidently lead my path towards success."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your leadership skills make you a strong candidate for roles that require initiative and decision-making. Seek opportunities where you can lead projects or teams to further develop your influence.

        - *Relationships*: Foster connections with those who appreciate your vision. Ensure open communication to prevent misunderstandings, as your strong will can sometimes overshadow others’ perspectives.

        - *Personal Growth*: Embrace challenges as learning opportunities. Your journey to self-improvement can inspire those around you, so don’t hesitate to share your experiences and insights.
        `,
        
        2: `
        🌈 *Personalized Advice*:
        - Continue nurturing your relationships and strive to maintain harmony.
        - Don’t be afraid to assert yourself when necessary to ensure your needs are met.
        - Seek collaborative opportunities that allow you to shine and support others.

        💡 *Affirmation for Success*:
        "I bring peace and balance into my life and others."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your ability to mediate and create harmony makes you an asset in team environments. Look for roles that value collaboration and communication, where you can facilitate understanding among colleagues.

        - *Relationships*: Your caring nature fosters deep connections. Make sure to set healthy boundaries to avoid being overwhelmed by others' needs, ensuring your well-being is prioritized.

        - *Personal Growth*: Engage in activities that enhance your self-confidence. Exploring new interests can help you express your needs better, strengthening your personal and professional relationships.
        `,
        
        3: `
        🌈 *Personalized Advice*:
        - Use your creativity to explore new forms of expression and communication.
        - Surround yourself with people who inspire you and encourage your artistic endeavors.
        - Share your ideas freely and watch how they can uplift and influence others.

        💡 *Affirmation for Success*:
        "I communicate my ideas with clarity and confidence."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your creative talents can lead you to roles in the arts, marketing, or any field that values innovation. Seek opportunities that allow you to express your ideas freely and connect with others.

        - *Relationships*: Your charm attracts people to you, but be mindful of superficial connections. Foster deeper relationships by being open about your thoughts and feelings to create lasting bonds.

        - *Personal Growth*: Embrace your artistic side by engaging in new creative pursuits. This exploration will enhance your self-expression and provide a fulfilling outlet for your emotions.
        `,
        
        4: `
        🌈 *Personalized Advice*:
        - Maintain your practicality while being open to new opportunities.
        - Create structured plans to help you achieve your goals without losing sight of the big picture.
        - Remember that it’s okay to step outside your comfort zone occasionally.

        💡 *Affirmation for Success*:
        "I build a solid foundation for my dreams and goals."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your reliability and strong work ethic make you a prime candidate for managerial roles. Look for positions that allow you to implement systems and structures for success.

        - *Relationships*: Your dependability fosters trust, but ensure you express your feelings. Opening up can strengthen your connections and encourage others to share with you.

        - *Personal Growth*: Engage in new experiences that challenge your practical mindset. This can help broaden your horizons and lead to personal development beyond your current comfort zone.
        `,
        
        5: `
        🌈 *Personalized Advice*:
        - Seek new adventures and embrace the opportunities that come your way.
        - Keep an open mind to adapt to changes and find excitement in the unknown.
        - Share your adventures with others to inspire them to step outside their comfort zones!

        💡 *Affirmation for Success*:
        "I am open to new experiences and embrace change."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your adaptability makes you well-suited for roles in dynamic environments. Look for opportunities that involve travel or require innovative thinking to keep your work engaging.

        - *Relationships*: Your adventurous spirit attracts diverse friendships. Cultivate deeper connections by sharing your experiences and being open to new perspectives from others.

        - *Personal Growth*: Embrace spontaneity and allow yourself to explore unfamiliar territories. These experiences will enhance your growth and provide valuable lessons that shape your character.
        `,
        
        6: `
        🌈 *Personalized Advice*:
        - While caring for others, ensure you dedicate time to yourself as well.
        - Find ways to recharge your energy and maintain balance in your life.
        - Your nurturing spirit is a gift—don't forget to nurture yourself!

        💡 *Affirmation for Success*:
        "I nurture myself as I nurture those I love."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your caring nature makes you ideal for roles in healthcare, education, or any field that involves nurturing others. Seek positions that allow you to support and uplift those around you.

        - *Relationships*: Your commitment to your loved ones creates strong bonds, but be mindful of taking on too much responsibility. Setting boundaries can help maintain harmony in your connections.

        - *Personal Growth*: Engage in self-care activities that recharge your spirit. Prioritizing your well-being enhances your ability to care for others, creating a positive cycle of support.
        `,
        
        7: `
        🌈 *Personalized Advice*:
        - Trust your intuition and allow it to guide you on your journey of self-discovery.
        - Take time for reflection and introspection to deepen your understanding of yourself.
        - Share your insights and wisdom with those who seek guidance.

        💡 *Affirmation for Success*:
        "I trust my intuition to lead me to the truth."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your analytical and introspective nature suits roles in research, writing, or any field requiring deep thought. Seek environments that value independent thinking and offer room for reflection.

        - *Relationships*: While you value solitude, nurture connections with those who respect your need for space. Encourage open dialogue about your feelings to strengthen bonds.

        - *Personal Growth*: Engage in spiritual or reflective practices that enhance your understanding of yourself. This journey will help you unlock your potential and share your insights with others.
        `,
        
        8: `
        🌈 *Personalized Advice*:
        - Set clear goals and take actionable steps to achieve them.
        - Use your ambition to drive yourself forward, but also remain grounded.
        - Balance your material pursuits with a sense of responsibility to others.

        💡 *Affirmation for Success*:
        "I harness my power to achieve my dreams."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your ambition makes you a strong candidate for leadership and business roles. Look for opportunities that allow you to leverage your skills for material success.

        - *Relationships*: Your drive can be intense, so ensure to make time for loved ones. Balance ambition with personal connections to maintain healthy relationships.

        - *Personal Growth*: Focus on creating a legacy that reflects your values. Engage in self-improvement activities that foster both personal and professional growth.
        `,
        
        9: `
        🌈 *Personalized Advice*:
        - Continue to offer your support and kindness to those in need.
        - Look for opportunities to make a positive impact in your community.
        - Your compassion is a strength—use it to inspire change and understanding.

        💡 *Affirmation for Success*:
        "I create positive change in my community."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your empathetic nature suits roles in social work, healthcare, or humanitarian efforts. Seek positions that allow you to make a meaningful difference in the lives of others.

        - *Relationships*: Your nurturing spirit fosters strong connections, but ensure you also prioritize your needs. Mutual support enhances the quality of your relationships.

        - *Personal Growth*: Engage in activities that align with your values and passions. This will not only foster your personal growth but also enhance your ability to help others.
        `,
        
        11: `
        🌈 *Personalized Advice*:
        - Embrace your unique gifts and trust in your spiritual journey.
        - Share your insights and knowledge with others, guiding them on their paths.
        - Seek out experiences that align with your spiritual growth.

        💡 *Affirmation for Success*:
        "I trust in my intuition to guide others."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your spiritual awareness positions you well for roles in counseling, coaching, or any field that requires empathy and insight. Seek environments that nurture your gifts.

        - *Relationships*: Foster connections with like-minded individuals who appreciate your depth. Your unique perspective can inspire and uplift others in your circle.

        - *Personal Growth*: Engage in practices that deepen your understanding of your spiritual gifts. This journey will not only enhance your life but also empower you to help others on their paths.
        `,
        
        22: `
        🌈 *Personalized Advice*:
        - Keep your grand visions alive and pursue them with determination.
        - Collaborate with others to turn your dreams into reality—you're not alone on this journey!
        - Maintain a strong sense of purpose to ensure your efforts lead to meaningful outcomes.

        💡 *Affirmation for Success*:
        "I turn my dreams into reality with determination."

        📝 *Impact on Your Key Life Aspects*:
        - *Career*: Your ability to manifest and create lasting change makes you a powerful force in leadership or entrepreneurial roles. Seek partnerships that align with your vision for maximum impact.

        - *Relationships*: Your vision can inspire those around you, but ensure you also listen to their needs. Creating a balance between your aspirations and their support will strengthen your connections.

        - *Personal Growth*: Engage in activities that align with your long-term goals. This focus will not only empower your growth but also contribute positively to the world around you.
        `
    };

    return personalizedAdvice[lifePathNumber] || `
    🌈 *Personalized Advice*:
    - Consider how the suggested names resonate with your personal values and aspirations.
    - Use your Life Path Number to guide your decisions and ensure they align with your true self.
    - Remember, the essence of your name holds power; choose one that reflects your journey and goals!

    💡 *Affirmation for Success*:
    "I align my name with my life purpose, attracting success, harmony, and fulfillment."

    📝 *Impact on Your Key Life Aspects*:
    - *Career*: A name aligned with your Life Path Number enhances your professional journey. A strong name will support your ambition and open doors to opportunities.
    - *Relationships*: An optimized name fosters stronger, healthier relationships, ensuring peace and understanding in your interactions.
    - *Personal Growth*: Aligning your name with your numerology fosters personal development, enabling you to fully harness your strengths and overcome challenges.
    `;
};


// Exporting the handleNameCorrection function
module.exports = { handleNameCorrection };
