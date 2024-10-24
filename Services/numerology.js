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
        1: [
            "🌟 *The Leader*: ",
            "● You are a born leader! You like to do things your way and are very determined to reach your goals.",
            "● People look up to you because you are confident and can guide others.",
            "● Always remember, it's great to lead, but also listen to your friends and teammates to make the best decisions together."
        ],
        2: [
            "🤝 *The Peacemaker*: ",
            "● You love peace and harmony. You are great at helping people get along and feel happy.",
            "● You have a special talent for calming situations and making everyone feel included.",
            "● People appreciate your kindness, and your goal in life is to create balance and joy in your friendships and family."
        ],
        3: [
            "🎨 *The Creative Communicator*: ",
            "● You are super artistic and love to express yourself!",
            "● Whether it’s through drawing, writing, or talking, you inspire people with your ideas.",
            "● You are very social and make friends easily. Your creativity can shine in many ways, so don’t be afraid to show your talents to the world!"
        ],
        4: [
            "🏗️ *The Builder*: ",
            "● You are hardworking and like to create things.",
            "● You pay attention to details, which helps you build strong foundations in life.",
            "● You like to have a plan and work step by step to reach your goals. People can count on you to be reliable and help them achieve their dreams, too!"
        ],
        5: [
            "🌍 *The Adventurer*: ",
            "● You love excitement and trying new things!",
            "● You are curious and enjoy exploring the world around you.",
            "● Change is fun for you, and you adapt quickly to new situations. Life is an adventure for you, so always keep your eyes open for new experiences and opportunities!"
        ],
        6: [
            "❤️ *The Caretaker*: ",
            "● You are caring and love to help others.",
            "● You take responsibility for your family and friends, making sure they are happy and safe.",
            "● Your warm heart and kindness make you a great friend and family member. Remember to take care of yourself, too, as you care for others!"
        ],
        7: [
            "🔍 *The Spiritual Seeker*: ",
            "● You are thoughtful and like to learn about deep things in life.",
            "● You often ask big questions about yourself and the world.",
            "● Your curious mind helps you find answers and understand things better. Trust your intuition—it guides you on your journey to discover the truth!"
        ],
        8: [
            "💪 *The Powerhouse*: ",
            "● You are strong and ambitious!",
            "● You want to achieve great things in life, especially when it comes to your career.",
            "● You work hard to reach your goals and inspire others to do the same. Your drive for success helps you build a bright future, so keep pushing forward!"
        ],
        9: [
            "🌈 *The Humanitarian*: ",
            "● You are kind-hearted and love helping others.",
            "● You care deeply about people and want to make the world a better place.",
            "● Your generosity and compassion make you a true friend. Use your talents to help others and create positive changes in your community!"
        ],
        11: [
            "✨ *The Master Intuitive*: ",
            "● You have a special gift for understanding deeper things in life.",
            "● You are very aware of your surroundings and can sense what others feel.",
            "● Your intuition is like a superpower that can guide you and help others, too. Embrace your abilities and use them to inspire those around you!"
        ],
        22: [
            "🏛️ *The Master Builder*: ",
            "● You have the ability to turn big dreams into reality!",
            "● You think of amazing ideas and have the skills to make them happen.",
            "● You are very practical and can build things that help others. Your efforts can create lasting change in the world, so always aim high and follow your dreams!"
        ]
    };

    return descriptions[lifePathNumber] || ["🔮 *An unknown Life Path Number*. Please check your date of birth for accuracy."];
};


// Function to calculate Name Numerology (Pythagorean System)
const calculateNameNumerology = (name) => {
    const pythagoreanTable = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
        J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
        S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
    };
    let sum = 0;

    // Convert each letter to a corresponding number and sum them
    for (let char of name.toUpperCase()) {
        if (pythagoreanTable[char]) {
            sum += pythagoreanTable[char];
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
        1: [
            "🌟 *Name Number 1*:",
            "● You are a born leader!",
            "● Your independent spirit drives you to forge your own path.",
            "● People look up to you for your confidence and originality.",
            "● You thrive on challenges and are not afraid to take risks.",
            "● Your strong will and determination often lead you to success, making you a role model for others.",
            "● Embrace your leadership qualities, and don't hesitate to share your ideas with the world!"
        ],
        2: [
            "🤝 *Name Number 2*: You are the peacemaker!",
            "● Your ability to cooperate and empathize with others is a true gift.",
            "● You shine in team settings, as you know how to bring harmony and balance.",
            "● People trust you because you listen and understand their feelings.",
            "● Your diplomatic nature helps resolve conflicts, making you a vital part of any group.",
            "● Remember, your sensitivity is a strength—embrace it and continue building strong, supportive relationships!"
        ],
        3: [
            "🎨 *Name Number 3*: You are a creative communicator!",
            "● Your artistic talents and expressive nature set you apart.",
            "● You love sharing your thoughts and feelings through various forms of communication, whether it be writing, speaking, or art.",
            "● Your charm and charisma make you a joy to be around, and you have the ability to inspire others with your ideas.",
            "● Don't hold back—let your creativity flow and watch how it transforms the lives of those around you!"
        ],
        4: [
            "🏗️ *Name Number 4*: You are practical and reliable!",
            "● Your strong sense of responsibility and dedication to structure helps you build a solid foundation in life.",
            "● You value order and organization, which makes you someone others can depend on.",
            "● Your attention to detail ensures that you approach tasks methodically, leading to great success in your endeavors.",
            "● Remember, while it’s great to have plans, allow yourself the flexibility to adapt when necessary!"
        ],
        5: [
            "🌍 *Name Number 5*: You are the adventurer!",
            "● Your love for freedom and change fuels your curiosity about the world.",
            "● You thrive on new experiences and enjoy exploring different perspectives.",
            "● Your adaptability allows you to embrace challenges and transform them into exciting opportunities.",
            "● Keep seeking out new adventures, as they will bring joy and growth to your life.",
            "● Your zest for life inspires those around you to step outside their comfort zones!"
        ],
        6: [
            "❤️ *Name Number 6*: You are the caregiver!",
            "● Your nurturing and compassionate nature makes you a great friend and family member.",
            "● You find joy in providing support and love to those around you.",
            "● Your sense of responsibility extends to your loved ones, often putting their needs before your own.",
            "● Remember to take care of yourself, too!",
            "● Your ability to create a loving and harmonious environment brings comfort to everyone, and your kindness makes the world a better place."
        ],
        7: [
            "🔍 *Name Number 7*: You are the spiritual seeker!",
            "● Your inquisitive mind drives you to explore deep truths about life and the universe.",
            "● You enjoy intellectual pursuits and often seek knowledge that helps you understand the mysteries of existence.",
            "● Your introspective nature leads you to reflect on your thoughts and emotions, allowing for personal growth.",
            "● Trust your intuition, as it will guide you on your spiritual journey.",
            "● Embrace your quest for wisdom, and share your insights with others!"
        ],
        8: [
            "💪 *Name Number 8*: You are the powerhouse!",
            "● Your ambition and determination set you on a path to success.",
            "● You are focused on achieving your goals and often excel in business and financial matters.",
            "● Your strong leadership qualities and ability to make decisions quickly make you a natural in positions of authority.",
            "● While you strive for material success, remember to maintain balance in your life.",
            "● Your power can also be a source of inspiration for others, so use it wisely!"
        ],
        9: [
            "🌈 *Name Number 9*: You are the humanitarian!",
            "● Your generous spirit and compassion drive you to make a positive impact on the world.",
            "● You care deeply for others and strive to help those in need.",
            "● Your selflessness and desire to create change inspire those around you.",
            "● You are a natural giver, often putting the welfare of others before your own.",
            "● Continue to spread kindness and understanding, as your efforts can lead to meaningful transformations in the lives of many!"
        ],
        11: [
            "✨ *Master Name Number 11*: You are the master intuitive!",
            "● Your heightened sensitivity and spiritual awareness set you apart.",
            "● You possess a deep understanding of the world and are often drawn to the mystical and metaphysical.",
            "● Your insights can inspire and guide others, making you a beacon of light in challenging times.",
            "● Embrace your intuitive gifts and share your wisdom with those seeking guidance.",
            "● Your connection to the spiritual realm allows you to see beyond the surface of things!"
        ],
        22: [
            "🏛️ *Master Name Number 22*: You are the master builder!",
            "● Your ability to turn dreams into reality is unparalleled.",
            "● You possess strong practical skills that allow you to create lasting change in the world.",
            "● Your visionary ideas and determination can lead to great achievements, both for yourself and for humanity as a whole.",
            "● Keep dreaming big and working hard—your potential for greatness is limitless!"
        ]
    };

    return descriptions[nameNumerology] || ["🔮 *An unknown Name Number*. Please check your name input for accuracy."];
};

// Function to generate personalized summary and advice
const generatePersonalizedContent = (lifePathNumber, nameNumerology) => {
    const summaries = {
        1: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number indicates that you are a natural leader, brimming with confidence.",
            "- You thrive in challenging situations and inspire those around you with your determination.",
            "- Your Name Numerology reveals that you are creative and innovative.",
            "- This combination makes you a dynamic force in your personal and professional life."
        ],
        2: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number indicates that you are a nurturing soul, focused on building harmonious relationships.",
            "- You excel in creating peace and understanding among those around you.",
            "- Your Name Numerology shows that you value teamwork and collaboration.",
            "- This blend allows you to create supportive environments wherever you go."
        ],
        3: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number suggests that you are highly creative and love to express yourself.",
            "- You have a natural charm that draws people to you, making you a great communicator.",
            "- Your Name Numerology highlights your artistic talents and social skills.",
            "- Together, these traits enable you to inspire and uplift those around you."
        ],
        4: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number indicates that you are reliable and grounded, focusing on building a solid foundation.",
            "- You are detail-oriented and systematic in your approach to life.",
            "- Your Name Numerology shows that you have a strong sense of duty and responsibility.",
            "- This combination makes you a trustworthy person that others can count on."
        ],
        5: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number indicates that you are adventurous and thrive on change.",
            "- You embrace new experiences and are always seeking to learn and grow.",
            "- Your Name Numerology highlights your curiosity and willingness to explore.",
            "- This dynamic nature makes life exciting and full of opportunities."
        ],
        6: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number indicates that you are a compassionate caretaker.",
            "- You naturally gravitate towards helping others and creating a harmonious environment.",
            "- Your Name Numerology reflects your nurturing qualities and reliability.",
            "- This combination makes you a vital support system for your loved ones."
        ],
        7: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number suggests that you are a deep thinker and a seeker of knowledge.",
            "- You often ponder life's mysteries and enjoy exploring spiritual concepts.",
            "- Your Name Numerology emphasizes your introspective and intuitive nature.",
            "- Together, these qualities make you wise beyond your years."
        ],
        8: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number indicates that you are ambitious and goal-oriented.",
            "- You possess a strong drive to achieve success and make your mark in the world.",
            "- Your Name Numerology shows that you have leadership abilities and a focus on material success.",
            "- This powerful combination helps you rise to the top in your endeavors."
        ],
        9: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number indicates that you are compassionate and humanitarian.",
            "- You are driven by a desire to help others and create positive change.",
            "- Your Name Numerology reflects your generous spirit and understanding nature.",
            "- This combination allows you to touch the lives of many in a meaningful way."
        ],
        11: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number suggests that you are an intuitive and spiritually aware individual.",
            "- You have a deep understanding of the world and are often sought after for your insights.",
            "- Your Name Numerology highlights your unique gifts and abilities.",
            "- This combination makes you a guiding light for others on their journey."
        ],
        22: [
            "🌟 *Personalized Summary*:",
            "- Your Life Path Number indicates that you are a master builder with grand visions.",
            "- You possess the ability to turn your dreams into reality through hard work and dedication.",
            "- Your Name Numerology shows that you are practical and focused on tangible results.",
            "- This powerful combination positions you to create a lasting impact on the world."
        ]
    };

    const advice = {
        1: [
            "🌈 *Advice*:",
            "- Embrace your leadership qualities, but remember to listen to others' perspectives.",
            "- Channel your creativity into projects that inspire and motivate those around you.",
            "- Balance your ambition with empathy to foster strong relationships."
        ],
        2: [
            "🌈 *Advice*:",
            "- Continue nurturing your relationships and strive to maintain harmony.",
            "- Don’t be afraid to assert yourself when necessary to ensure your needs are met.",
            "- Seek collaborative opportunities that allow you to shine and support others."
        ],
        3: [
            "🌈 *Advice*:",
            "- Use your creativity to explore new forms of expression and communication.",
            "- Surround yourself with people who inspire you and encourage your artistic endeavors.",
            "- Share your ideas freely and watch how they can uplift and influence others."
        ],
        4: [
            "🌈 *Advice*:",
            "- Keep your practical nature, but allow for flexibility and adaptability.",
            "- Create structured plans to help you achieve your goals without losing sight of the big picture.",
            "- Remember that it’s okay to step outside your comfort zone occasionally."
        ],
        5: [
            "🌈 *Advice*:",
            "- Embrace your adventurous spirit and seek new experiences that challenge you.",
            "- Keep an open mind to adapt to changes and find excitement in the unknown.",
            "- Share your adventures with others to inspire them to step outside their comfort zones!"
        ],
        6: [
            "🌈 *Advice*:",
            "- While caring for others, ensure you dedicate time to yourself as well.",
            "- Find ways to recharge your energy and maintain balance in your life.",
            "- Your nurturing spirit is a gift—don't forget to nurture yourself!"
        ],
        7: [
            "🌈 *Advice*:",
            "- Trust your intuition and allow it to guide you on your journey of self-discovery.",
            "- Take time for reflection and introspection to deepen your understanding of yourself.",
            "- Share your insights and wisdom with those who seek guidance."
        ],
        8: [
            "🌈 *Advice*:",
            "- Set clear goals and take actionable steps to achieve them.",
            "- Use your ambition to drive yourself forward, but also remain grounded.",
            "- Balance your material pursuits with a sense of responsibility to others."
        ],
        9: [
            "🌈 *Advice*:",
            "- Continue to offer your support and kindness to those in need.",
            "- Look for opportunities to make a positive impact in your community.",
            "- Your compassion is a strength—use it to inspire change and understanding."
        ],
        11: [
            "🌈 *Advice*:",
            "- Embrace your unique gifts and trust in your spiritual journey.",
            "- Share your insights and knowledge with others, guiding them on their paths.",
            "- Seek out experiences that align with your spiritual growth."
        ],
        22: [
            "🌈 *Advice*:",
            "- Keep your grand visions alive and pursue them with determination.",
            "- Collaborate with others to turn your dreams into reality—you're not alone on this journey!",
            "- Maintain a strong sense of purpose to ensure your efforts lead to meaningful outcomes."
        ]
    };

    return {
    summary: summaries[lifePathNumber] || ["🔮 *An unknown Life Path Number*. Please check your date of birth for accuracy."],
    advice: advice[lifePathNumber] || ["🔮 *An unknown Life Path Number*. Please check your date of birth for accuracy."]
    };
};

// Function to handle Numerology Report with detailed explanations
const handleNumerology = async (name, dob) => {
    const lifePathNumber = calculateLifePathNumber(dob);
    const nameNumerology = calculateNameNumerology(name);

    const lifePathExplanation = explainLifePathNumber(lifePathNumber);
    const nameNumerologyExplanation = explainNameNumerology(nameNumerology);
    const personalizedContent = generatePersonalizedContent(lifePathNumber, nameNumerology);

    return `
✨ Numerology Report for ${name} ✨
    
🔢 Life Path Number (Based on DOB: ${dob}): ${lifePathNumber}

    - ${lifePathExplanation.join('\n\n')}

🔠 Name Numerology Number: ${nameNumerology}

    - ${nameNumerologyExplanation.join('\n\n')}

    ${personalizedContent.summary.join('\n\n')}
    
    ${personalizedContent.advice.join('\n\n')}
    `;
};

module.exports = { handleNumerology };
