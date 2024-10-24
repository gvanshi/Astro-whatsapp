// Function to provide parenting tips based on a child's Zodiac Sign
const getParentingTipsByZodiac = (zodiacSign) => {
    const parentingTips = {
        "aries": `
        🔴 *Parenting Tips for an Aries Child (March 21 - April 19)* 🔴

        - *Personality*: Aries children are full of energy, enthusiasm, and are natural leaders. They thrive on challenges and adventure, often displaying a strong desire to explore their surroundings. Their bold nature means they are often the first to try new things, making them trailblazers among their peers.

        - *Strengths*: Aries kids are brave, determined, and confident. They possess a zest for life and a unique ability to inspire those around them. Their willingness to take risks can lead to significant accomplishments and they often excel in competitive environments.

        - *Challenges*: They can be impatient and easily frustrated when things don’t go their way. Their impulsiveness may lead to rash decisions or accidents, and they may struggle to adhere to rules or routines.

        - *Parenting Tip*: Encourage their sense of independence by giving them age-appropriate responsibilities. Create structured activities that allow them to channel their energy positively, like sports or outdoor exploration. Help them learn the importance of patience through activities that require waiting or taking turns. Setting clear expectations can also guide their impulsive behavior.

        - *Affirmation for Your Child*: "I am a confident and capable leader, and I can take my time to make smart choices. I learn and grow from every experience."
        `,
        
        "taurus": `
        🟢 *Parenting Tips for a Taurus Child (April 20 - May 20)* 🟢

        - *Personality*: Taurus children are grounded, reliable, and enjoy comfort and stability. They are often drawn to nature, music, and the arts, valuing tangible experiences. Their love for routine can make them very particular about their environment and daily activities.

        - *Strengths*: Persistent and patient, Taurus kids have a strong sense of loyalty. They are nurturing and often demonstrate care and affection toward family members and friends. Their practical approach allows them to navigate challenges effectively.

        - *Challenges*: They can be stubborn and resistant to change, which can lead to difficulties when adjustments are necessary. They may also experience anxiety when their routines are disrupted.

        - *Parenting Tip*: Provide a stable and secure environment for them to thrive. Introduce change gradually, explaining the reasons behind it. Engage them in discussions that help them understand the value of adaptability. Offering choices within routines can empower them and help ease transitions.

        - *Affirmation for Your Child*: "I feel safe and secure in trying new things. I embrace changes as opportunities for growth."
        `,
        
        "gemini": `
        🔵 *Parenting Tips for a Gemini Child (May 21 - June 20)* 🔵

        - *Personality*: Gemini children are curious, talkative, and love to learn. They have an innate ability to adapt to new situations and are often seen as social butterflies. Their active minds crave variety and stimulation, which keeps them engaged.

        - *Strengths*: Quick learners with a great sense of humor, Gemini kids are skilled communicators. They enjoy exploring new ideas and often excel in environments that encourage creativity and expression.

        - *Challenges*: They can become easily bored and may struggle with focusing on one task for an extended period. Their curiosity can lead to distractions, making it difficult for them to complete projects.

        - *Parenting Tip*: Keep them engaged with a variety of stimulating activities. Encourage their curiosity through books, educational games, and interactive experiences. Help them focus on one task by breaking larger projects into smaller, manageable steps and using timers to keep them on track. Engaging in regular family discussions can also help refine their communication skills.

        - *Affirmation for Your Child*: "I love learning new things, and I can focus on one idea at a time. I express my thoughts clearly and enjoy sharing."
        `,

        "cancer": `
        ⚪ *Parenting Tips for a Cancer Child (June 21 - July 22)* ⚪

        - *Personality*: Cancer children are sensitive, nurturing, and highly intuitive. They form deep emotional bonds with family members and value a stable, loving home environment. They are often drawn to imaginative play and storytelling.

        - *Strengths*: Compassionate and protective, Cancer kids have a strong sense of empathy. They often show a natural inclination to care for others and create a supportive atmosphere around them.

        - *Challenges*: They can be shy, overly sensitive, and sometimes moody. Their emotional depth can make them vulnerable, causing them to retreat when feeling overwhelmed.

        - *Parenting Tip*: Provide a nurturing environment where they feel safe to express their emotions. Teach them to articulate their feelings and encourage open dialogue about emotions. Engage them in creative activities that allow them to process their feelings, such as drawing or writing stories. Helping them establish emotional boundaries can foster resilience.

        - *Affirmation for Your Child*: "It’s okay to feel my emotions, and I can always talk about how I feel. I am loved and supported in expressing myself."
        `,

        "leo": `
        🟠 *Parenting Tips for a Leo Child (July 23 - August 22)* 🟠

        - *Personality*: Leo children are confident, creative, and love being the center of attention. They thrive in environments that allow them to express their individuality and often take pride in their accomplishments.

        - *Strengths*: Outgoing and playful, Leo kids radiate warmth and enthusiasm. They inspire others with their natural leadership abilities and passion for life. They often engage in creative arts and enjoy performing.

        - *Challenges*: They can be demanding of attention and may feel hurt when they don’t receive the recognition they crave. Their strong personalities can sometimes lead to stubbornness and a desire to dominate situations.

        - *Parenting Tip*: Encourage their creativity and leadership by providing opportunities for self-expression, such as arts, theater, or sports. Teach them the importance of humility and sharing the spotlight with others. Help them understand that everyone has unique talents and that collaboration can be rewarding.

        - *Affirmation for Your Child*: "I am special and unique, and I celebrate the strengths of others too. I radiate love and confidence from within."
        `,

        "virgo": `
        🟢 *Parenting Tips for a Virgo Child (August 23 - September 22)* 🟢

        - *Personality*: Virgo children are thoughtful, practical, and detail-oriented. They thrive on structure and order, often displaying a strong desire to help out with tasks around the home. Their analytical nature helps them in problem-solving situations.

        - *Strengths*: Reliable and organized, Virgo kids take pride in their work and often seek to improve themselves and their surroundings. They are committed and loyal friends.

        - *Challenges*: They may be overly critical of themselves and others, particularly when things don’t go as planned. Their quest for perfection can lead to anxiety and dissatisfaction.

        - *Parenting Tip*: Help them manage their perfectionism by teaching them that mistakes are a natural part of learning. Encourage them to take breaks and celebrate their efforts rather than just the outcome. Provide praise for their hard work and creativity, reinforcing the idea that it’s okay to be imperfect.

        - *Affirmation for Your Child*: "I am doing my best, and it’s okay to make mistakes along the way. I embrace my uniqueness and learn from each experience."
        `,

        "libra": `
        🟠 *Parenting Tips for a Libra Child (September 23 - October 22)* 🟠

        - *Personality*: Libra children are social, charming, and highly focused on fairness. They enjoy being around others and often have a natural sense of diplomacy, which makes them excellent mediators.

        - *Strengths*: Peaceful and cooperative, Libra kids appreciate beauty and balance in their surroundings. They often excel in artistic activities and enjoy making others feel included.

        - *Challenges*: They may struggle with decision-making and can become anxious about trying to please everyone. They might avoid confrontation, even when it’s necessary, leading to frustration.

        - *Parenting Tip*: Help them build confidence in their decision-making abilities. Teach them that it’s okay to say no and to stand up for themselves, even when it may create discomfort. Encourage them to express their opinions and desires openly. Role-playing can be effective for practicing how to communicate their needs.

        - *Affirmation for Your Child*: "It’s okay to make my own choices, even if others don’t always agree. I have the power to decide and voice my feelings."
        `,

        "scorpio": `
        ⚫ *Parenting Tips for a Scorpio Child (October 23 - November 21)* ⚫

        - *Personality*: Scorpio children are intense, passionate, and deeply emotional. They have a strong will and a natural curiosity about the deeper aspects of life. Their intuitive abilities often allow them to sense the emotions of others.

        - *Strengths*: Brave and determined, Scorpio kids can connect with others on a profound level. They are naturally inquisitive and often seek out deep, meaningful experiences.

        - *Challenges*: They can be secretive and struggle with trust, especially when they feel vulnerable. Their strong emotions may lead to mood swings or stubbornness, making communication challenging.

        - *Parenting Tip*: Foster open communication and build trust with them by respecting their privacy while encouraging them to share their thoughts and feelings. Teach them the value of vulnerability and how it can strengthen relationships. Encourage them to engage in expressive activities like journaling or art to help articulate their feelings.

        - *Affirmation for Your Child*: "I am safe to express my emotions, and I trust the people who love me. I embrace my strength and sensitivity."
        `,

        "sagittarius": `
        🔵 *Parenting Tips for a Sagittarius Child (November 22 - December 21)* 🔵

        - *Personality*: Sagittarius children are adventurous, optimistic, and always curious about the world. They thrive on learning, exploring new ideas, and seeking out new experiences. Their love for freedom and independence drives their desire to explore.

        - *Strengths*: Open-minded, enthusiastic, and possessing a strong sense of justice, Sagittarius kids are natural explorers. They enjoy engaging with diverse cultures, philosophies, and places, often inspiring others with their vision.

        - *Challenges*: They can become easily bored with routine and may struggle with commitments or responsibilities. Their desire for freedom can lead to restlessness or impatience.

        - *Parenting Tip*: Provide opportunities for exploration and learning, while teaching them the importance of responsibility and commitment. Help them strike a balance between their adventurous spirit and the need for structure by incorporating flexibility into routines. Discussing and planning activities together can make them feel involved and responsible.

        - *Affirmation for Your Child*: "I love to explore, and I can also follow through on my commitments. I am responsible and adventurous."
        `,

        "capricorn": `
        ⚫ *Parenting Tips for a Capricorn Child (December 22 - January 19)* ⚫

        - *Personality*: Capricorn children are disciplined, responsible, and often take on more responsibilities than their peers. They value hard work and achievement, often demonstrating a serious nature. Their practical approach to life helps them succeed in structured environments.

        - *Strengths*: Ambitious, determined, and able to set goals effectively, Capricorn children often exhibit maturity beyond their years. They thrive when they can work toward their aspirations and demonstrate a strong work ethic.

        - *Challenges*: They may feel pressure to be perfect or successful, leading to stress or emotional withdrawal. They might struggle with expressing their emotions, often focusing on tasks rather than feelings.

        - *Parenting Tip*: Encourage them to take breaks and enjoy life’s simple pleasures. Teach them that it’s okay to relax and express their emotions without feeling like they always need to be achieving something. Provide opportunities for fun and creativity, allowing them to unwind from their responsibilities.

        - *Affirmation for Your Child*: "It’s okay to take breaks and enjoy the moment while I work toward my goals. I embrace relaxation and joy in my life."
        `,

        "aquarius": `
        🔵 *Parenting Tips for an Aquarius Child (January 20 - February 18)* 🔵

        - *Personality*: Aquarius children are independent, innovative, and deeply connected to their sense of individuality. They are natural humanitarians and often think about how to make the world a better place, showcasing a unique perspective on life.

        - *Strengths*: Creative and forward-thinking, Aquarius kids enjoy finding unique solutions to problems. Their ability to view situations from a different perspective often leads to exciting and original ideas.

        - *Challenges*: They may resist authority or conventional methods, preferring to do things their own way. Their emotional detachment can make it difficult for them to form deep connections, leading to feelings of isolation.

        - *Parenting Tip*: Encourage their creativity and innovation while helping them understand the importance of emotional connection. Teach them the value of collaboration and working within boundaries when necessary. Encourage open conversations about their ideas and feelings to foster connection and understanding.

        - *Affirmation for Your Child*: "I can be my unique self while also connecting with others and following the rules when needed. I value my individuality and my friendships."
        `,

        "pisces": `
        ⚪ *Parenting Tips for a Pisces Child (February 19 - March 20)* ⚪

        - *Personality*: Pisces children are imaginative, empathetic, and highly intuitive. They often have a rich inner world filled with creativity and emotional depth, making them deeply connected to the feelings of others.

        - *Strengths*: Compassionate and artistic, Pisces children often show great kindness to those around them. Their intuitive nature allows them to connect with others on a profound level, and they often find joy in creative expression.

        - *Challenges*: They can become easily overwhelmed by the emotions of others and may struggle with distinguishing their own feelings from those of the people around them. Their sensitivity can lead to escapism or withdrawal when faced with harsh realities.

        - *Parenting Tip*: Help them establish healthy emotional boundaries. Encourage their creativity while teaching them practical ways to cope with emotional overwhelm. Provide a safe space for them to retreat when they need it, and engage in discussions about feelings and coping strategies to foster resilience.

        - *Affirmation for Your Child*: "It’s okay to take care of my own feelings and create boundaries that protect my energy. I honor my sensitivity and creativity."
        `
    };

    return parentingTips[zodiacSign] || "I couldn't find parenting tips for your child's zodiac sign. Please make sure you entered a valid zodiac sign.";
};

// Main function to handle Parenting Tips based on Zodiac Sign
const handleParentingTips = async (zodiacSignInput) => {
    // Normalize the input by converting it to lowercase and trimming spaces
    const zodiacSign = zodiacSignInput.trim().toLowerCase();

    const parentingTips = getParentingTipsByZodiac(zodiacSign);

    return `
    👶 *Personalized Parenting Tips for Your ${zodiacSignInput} Child* 👶

    ${parentingTips}
    `;
};

module.exports = { handleParentingTips };
