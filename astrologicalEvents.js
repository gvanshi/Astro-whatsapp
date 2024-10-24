// Function to provide astrological event notifications
const getAstrologicalEventNotifications = () => {
    const astrologicalEvents = [
        {
            event: "Lunar Eclipse",
            date: "November 8, 2024",
            description: `
            🌕 *Lunar Eclipse* 🌕
            - *Date*: November 8, 2024
            
            - *Significance*: A lunar eclipse is a powerful celestial event representing emotional revelations and significant transformations. During this time, hidden emotions and past experiences may resurface, prompting us to release what no longer serves our growth. It's an ideal moment for introspection, healing, and making necessary changes in our lives. 

            - *Advice*: Use this time to journal your feelings and reflect on your emotional state. Engage in rituals to release negativity, such as writing down what you wish to let go of and safely burning the paper as a symbolic act of release.
            `,
        },
        {
            event: "Mercury Retrograde",
            date: "December 10, 2024 - January 3, 2025",
            description: `
            🔁 *Mercury Retrograde* 🔁
            - *Date*: December 10, 2024 - January 3, 2025
            
            - *Significance*: Mercury retrograde often brings challenges in communication, travel, and technology. This period is known for misunderstandings, delays, and potential technical issues. It's a time for reflection rather than action, urging us to review past decisions and avoid making major commitments.

            - *Advice*: Double-check all plans and communications during this time. Allow extra travel time and be patient with technological glitches. Use this period for introspection and to reassess your goals.
            `,
        },
        {
            event: "Winter Solstice",
            date: "December 21, 2024",
            description: `
            ❄️ *Winter Solstice* ❄️
            - *Date*: December 21, 2024
            
            - *Significance*: The winter solstice marks the shortest day of the year and symbolizes the return of light and renewal. It’s a time of introspection and setting intentions for the year ahead. The energy during this time is perfect for reflecting on what you wish to manifest in the coming months.

            - *Advice*: Create a vision board or list your goals for the next year. Engage in self-care rituals to honor the light returning to the world, such as lighting candles and meditating on your intentions for the future.
            `,
        },
        {
            event: "Jupiter in Taurus",
            date: "May 16, 2024 - May 25, 2025",
            description: `
            🟢 *Jupiter in Taurus* 🟢
            - *Date*: May 16, 2024 - May 25, 2025
            
            - *Significance*: Jupiter, the planet of expansion and growth, moving into the earthy sign of Taurus brings opportunities for financial growth, stability, and personal values. This transit encourages us to focus on building lasting wealth and stability, both materially and emotionally.

            - *Advice*: This is an excellent time to set long-term financial goals, invest in personal development, and nurture relationships that provide support and stability.
            `,
        },
    ];

    let notifications = `🔮 *Upcoming Astrological Events* 🔮\n\n`;
    
    astrologicalEvents.forEach(event => {
        notifications += `🔔 ${event.description}\n`;
    });

    return notifications;
};

// Function to provide personalized impact of astrological events based on Zodiac Sign
const getPersonalImpactByZodiac = (zodiacSign) => {
    const impactByZodiac = {
        "aries": `
        🔴 *Aries (March 21 - April 19)*:
        - *Lunar Eclipse*: Expect emotional revelations in relationships. This is a powerful time to address past conflicts and strengthen connections with loved ones. Be prepared for shifts in your feelings and how you express them.
        
        - *Mercury Retrograde*: Watch out for delays in communication or travel plans. Use this time to review your goals and ensure your intentions are clear before taking action.
        
        - *Winter Solstice*: Reflect on your personal growth over the past year. This is a time to set intentions for your next big adventure, focusing on what you truly desire to achieve.
        
        - *Jupiter in Taurus*: This transit brings financial growth opportunities. Focus on patience and steady progress. Consider exploring new income avenues or investment options.
        `,
        "taurus": `
        🟢 *Taurus (April 20 - May 20)*:
        - *Lunar Eclipse*: Expect deep emotional experiences related to home and family. This is a crucial time to strengthen bonds with loved ones and create a nurturing environment.
        
        - *Mercury Retrograde*: Be mindful of misunderstandings in communication. Clarity is key; ensure that you express yourself clearly and avoid signing any contracts during this period.
        
        - *Winter Solstice*: Reflect on your values and long-term goals. This is an excellent time for financial planning and manifesting abundance, focusing on what you want to achieve in the new year.
        
        - *Jupiter in Taurus*: Incredible opportunities for growth in finances and career. This is a time to focus on your long-term goals and be patient as you work toward them.
        `,
        "gemini": `
        🔵 *Gemini (May 21 - June 20)*:
        - *Lunar Eclipse*: Expect shifts in your communication style and friendships. This is a chance to reflect on how you express yourself and how it affects your relationships.
        
        - *Mercury Retrograde*: Stay cautious of misunderstandings and technological issues. Double-check your messages and travel plans to avoid complications.
        
        - *Winter Solstice*: A time to reevaluate your communication style and interpersonal connections. Focus on honest expression and deep listening during discussions.
        
        - *Jupiter in Taurus*: A period for spiritual growth and inner reflection. Use this time to rest and rejuvenate while contemplating your deeper life goals.
        `,
        "cancer": `
        ⚪ *Cancer (June 21 - July 22)*:
        - *Lunar Eclipse*: Expect emotional transformations related to self-image and identity. This is an important time to release past insecurities and embrace your true self.
        
        - *Mercury Retrograde*: Miscommunications may arise in family relationships. Take time to express your feelings clearly to avoid misunderstandings.
        
        - *Winter Solstice*: Reflect on your emotional well-being. Set goals for self-care and nurturing to ensure you remain balanced as the year progresses.
        
        - *Jupiter in Taurus*: This period signals social expansion and growth in friendships. It’s a great time for building supportive networks and deepening connections.
        `,
        "leo": `
        🦁 *Leo (July 23 - August 22)*:
        - *Lunar Eclipse*: Expect changes in your career and public image. Use this time to refocus on your professional goals and make necessary adjustments.
        
        - *Mercury Retrograde*: Be prepared for delays or miscommunications in work-related matters. Take your time when making decisions, as rushing may lead to mistakes.
        
        - *Winter Solstice*: Reflect on your career path and professional achievements over the past year. Set new goals for the upcoming year that align with your passions.
        
        - *Jupiter in Taurus*: Significant opportunities for career growth and public recognition are on the horizon. Be ready to seize these chances for long-term success.
        `,
        "virgo": `
        🟢 *Virgo (August 23 - September 22)*:
        - *Lunar Eclipse*: Anticipate shifts in your beliefs and long-term goals. Use this time for introspection to evaluate your personal philosophies and how they shape your future.
        
        - *Mercury Retrograde*: Expect potential delays in travel plans or educational pursuits. Use this time to refine your ideas and approach rather than rushing forward.
        
        - *Winter Solstice*: Reflect on your intellectual growth and set goals for the upcoming year. Consider what knowledge or skills you wish to pursue next.
        
        - *Jupiter in Taurus*: This is a great time for expanding your knowledge through travel or education. Focus on long-term personal growth and pursue opportunities that resonate with your values.
        `,
        "libra": `
        🟠 *Libra (September 23 - October 22)*:
        - *Lunar Eclipse*: Expect transformations in shared resources or finances. It’s time to review investments and financial partnerships, ensuring they align with your values.
        
        - *Mercury Retrograde*: Caution is advised in financial dealings or joint ventures. Avoid making significant financial decisions during this retrograde.
        
        - *Winter Solstice*: Reflect on your relationship with money and resources. Set goals for financial security and growth that align with your overall life vision.
        
        - *Jupiter in Taurus*: Opportunities for financial abundance through investments and joint ventures arise. Focus on cultivating sustainable financial practices.
        `,
        "scorpio": `
        ⚫ *Scorpio (October 23 - November 21)*:
        - *Lunar Eclipse*: Anticipate intense changes in your relationships and partnerships. This is an ideal time to focus on resolving conflicts and deepening emotional connections.
        
        - *Mercury Retrograde*: Miscommunications may arise in partnerships. Exercise patience and take time to clarify misunderstandings during this period.
        
        - *Winter Solstice*: Reflect on your partnerships and set goals for creating balanced and harmonious relationships. Focus on nurturing connections that bring joy and fulfillment.
        
        - *Jupiter in Taurus*: Expect growth in your relationships and partnerships. This is a wonderful time to focus on building lasting, stable connections.
        `,
        "sagittarius": `
        🔵 *Sagittarius (November 22 - December 21)*:
        - *Lunar Eclipse*: Expect shifts in your daily routines and health habits. Use this time to focus on self-care and well-being, making necessary adjustments for a healthier lifestyle.
        
        - *Mercury Retrograde*: Delays or misunderstandings in your daily schedule may arise. Be flexible and patient during this time, as it might require adjustments.
        
        - *Winter Solstice*: Reflect on your health and daily routines. Set intentions for a balanced and healthy lifestyle, focusing on what you need to thrive.
        
        - *Jupiter in Taurus*: Opportunities for growth in health and well-being present themselves. Focus on creating sustainable wellness routines that support your lifestyle.
        `,
        "capricorn": `
        ⚫ *Capricorn (December 22 - January 19)*:
        - *Lunar Eclipse*: Anticipate changes in your creative pursuits and hobbies. This is a chance to rediscover your passions and embrace your creativity fully.
        
        - *Mercury Retrograde*: Be aware of miscommunications in romantic relationships. Clarifying your intentions is crucial during this period.
        
        - *Winter Solstice*: Reflect on your creative goals and passions. Set new intentions for self-expression that align with your values and aspirations.
        
        - *Jupiter in Taurus*: Growth in your creative projects and personal endeavors is possible. Focus on building lasting creative success that resonates with your inner self.
        `,
        "aquarius": `
        🔵 *Aquarius (January 20 - February 18)*:
        - *Lunar Eclipse*: Expect emotional revelations related to your home and family life. Create a balance between your personal and professional life to maintain harmony.
        
        - *Mercury Retrograde*: Delays or misunderstandings in family matters may arise. Take time to resolve any miscommunications and reconnect with loved ones.
        
        - *Winter Solstice*: Reflect on your home environment and family dynamics. Set goals for creating a peaceful, harmonious home that nurtures your well-being.
        
        - *Jupiter in Taurus*: Opportunities for growth in your home and personal life emerge. Focus on building a stable and nurturing foundation for your aspirations.
        `,
        "pisces": `
        ⚪ *Pisces (February 19 - March 20)*:
        - *Lunar Eclipse*: Spiritual transformations and emotional healing occur. This is a powerful time for releasing emotional baggage and embracing new beginnings.
        
        - *Mercury Retrograde*: Caution is advised with communication in personal or spiritual matters. Take time for introspection and deep reflection.
        
        - *Winter Solstice*: Reflect on your spiritual path and emotional well-being. Set intentions for personal growth and healing as the new year approaches.
        
        - *Jupiter in Taurus*: Opportunities for growth in communication and learning arise. Focus on expanding your knowledge and sharing your wisdom with others.
        `
    };

    return impactByZodiac[zodiacSign] || "I couldn't find specific impacts for your zodiac sign. Please make sure you entered a valid zodiac sign.";
};

// Main function to handle Astrological Event Notifications and Personalized Impacts
const handleAstrologicalEventNotifications = async (zodiacSignInput) => {
    // Normalize the input by converting it to lowercase and trimming spaces
    const zodiacSign = zodiacSignInput.trim().toLowerCase();

    // Get general astrological event notifications
    const eventNotifications = getAstrologicalEventNotifications();

    // Get personalized impact based on zodiac sign
    const personalImpact = getPersonalImpactByZodiac(zodiacSign);

    return `
    🔮 *Astrological Event Notifications for ${zodiacSignInput}* 🔮

    ${eventNotifications}

    🌟 *Personalized Impact for ${zodiacSignInput}* 🌟
    
    ${personalImpact}
    `;
};

module.exports = { handleAstrologicalEventNotifications };
