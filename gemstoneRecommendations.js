// Function to provide personalized gemstone recommendations based on Zodiac Sign
const getGemstoneRecommendations = (zodiacSign) => {
    const gemstoneRecommendations = {
        "Aries": `
        🔴 *Gemstone for Aries (March 21 - April 19):* *Red Jasper*
        
        - *Astrological Traits of Aries*: Aries is a fire sign ruled by Mars, the planet of action, energy, and courage. Aries individuals are known for their boldness, enthusiasm, and a desire to lead. They are natural go-getters with a strong will but can sometimes be impulsive and quick-tempered.
        
        - *Why Red Jasper?*: Red Jasper helps Aries harness their fiery energy in a more grounded, stable manner. It encourages persistence and determination, helping Aries avoid burnout from their intense drive. This stone also brings emotional stability, allowing Aries to channel their passion into productive actions without being overwhelmed by impatience.
        
        - *How It Benefits You*: Red Jasper amplifies your leadership qualities while calming any tendencies toward impulsiveness or recklessness. It helps you remain focused on your goals, providing you with both emotional balance and physical stamina to see projects through. Additionally, it is believed to enhance your creativity and spark new ideas, making it an excellent companion for personal and professional growth.
        `,
        
        "Taurus": `
        🟢 *Gemstone for Taurus (April 20 - May 20):* *Emerald*
        
        - *Astrological Traits of Taurus*: Taurus is an earth sign ruled by Venus, the planet of beauty, love, and material wealth. Taureans are known for their grounded nature, love for luxury, and strong work ethic. They value stability, security, and are known to be very reliable.
        
        - *Why Emerald?*: Emerald is the stone of abundance, love, and patience, which perfectly aligns with Taurus’ desire for beauty and stability. It strengthens relationships, encourages emotional openness, and attracts prosperity and wealth, all qualities that resonate deeply with Taureans.
        
        - *How It Benefits You*: Emerald enhances your natural ability to build wealth and create stable relationships. It also promotes patience and self-love, helping you find balance in the pursuit of material success without losing sight of emotional and spiritual fulfillment. The calming energies of Emerald can help alleviate stress and anxiety, allowing you to enjoy the finer things in life without feeling overwhelmed.
        `,
        
        "Gemini": `
        🔵 *Gemstone for Gemini (May 21 - June 20):* *Citrine*
        
        - *Astrological Traits of Gemini*: Gemini is an air sign ruled by Mercury, the planet of communication, intellect, and learning. Geminis are naturally curious, quick-witted, and adaptable. They enjoy learning, meeting new people, and exploring diverse ideas.
        
        - *Why Citrine?*: Citrine is a stone of creativity, clarity, and joy. It supports Gemini’s intellectual curiosity and enhances communication skills. It helps focus the mind and encourages positivity, ensuring that Geminis remain balanced and clear in their thoughts.
        
        - *How It Benefits You*: Citrine helps you express your ideas clearly and confidently. It also boosts your creative energy and mental clarity, allowing you to focus on your goals without becoming overwhelmed by too many possibilities or distractions. Known as the "Merchant's Stone," Citrine can also attract financial abundance and prosperity, making it an excellent choice for business-minded Geminis.
        `,
        
        "Cancer": `
        ⚪ *Gemstone for Cancer (June 21 - July 22):* *Moonstone*
        
        - *Astrological Traits of Cancer*: Cancer is a water sign ruled by the Moon, making them highly emotional, intuitive, and nurturing. They value home, family, and emotional security, often having a deep connection to their past and loved ones.
        
        - *Why Moonstone?*: Moonstone is deeply connected to Cancer’s ruling planet, the Moon. It enhances intuition, emotional balance, and self-care. This stone helps Cancer natives navigate their deep emotional world while providing the comfort and security they crave.
        
        - *How It Benefits You*: Moonstone soothes your emotions, enhances your intuition, and helps you feel safe and supported in your personal and familial relationships. It also encourages self-care, helping you avoid emotional overwhelm. Additionally, Moonstone is believed to inspire love and compassion, making it a perfect gemstone for nurturing and supporting others.
        `,
        
        "Leo": `
        🟠 *Gemstone for Leo (July 23 - August 22):* *Tiger's Eye*
        
        - *Astrological Traits of Leo*: Leo is a fire sign ruled by the Sun, symbolizing vitality, creativity, and self-expression. Leos are natural leaders with a magnetic presence. They thrive in the spotlight and seek recognition for their talents.
        
        - *Why Tiger's Eye?*: Tiger’s Eye promotes courage, confidence, and personal power, all qualities that resonate with Leo’s natural leadership abilities. It also provides grounding, helping Leos maintain balance while pursuing their bold ambitions.
        
        - *How It Benefits You*: Tiger’s Eye amplifies your self-confidence and charisma while helping you stay grounded and make wise decisions. It ensures that your energy is directed in a balanced way, preventing overconfidence or arrogance. This gemstone is also believed to protect against negative energies, allowing you to shine brightly without fear of external judgments or criticisms.
        `,
        
        "Virgo": `
        🟢 *Gemstone for Virgo (August 23 - September 22):* *Amazonite*
        
        - *Astrological Traits of Virgo*: Virgo is an earth sign ruled by Mercury, representing intellect, service, and practicality. Virgos are highly analytical, detail-oriented, and have a strong desire to help others. They can sometimes be overly critical or perfectionistic.
        
        - *Why Amazonite?*: Amazonite soothes Virgo’s analytical mind, encouraging emotional balance and harmony. It helps them communicate more effectively and express themselves with clarity without becoming overwhelmed by the desire for perfection.
        
        - *How It Benefits You*: Amazonite calms your mind and encourages clear, balanced communication. It helps you stay organized and focused without becoming too caught up in details or self-criticism. This stone is also associated with the heart chakra, promoting emotional healing and helping you develop compassion for yourself and others.
        `,
        
        "Libra": `
        🟠 *Gemstone for Libra (September 23 - October 22):* *Lapis Lazuli*
        
        - *Astrological Traits of Libra*: Libra is an air sign ruled by Venus, the planet of love, beauty, and balance. Librans are diplomatic, charming, and highly social. They strive for harmony in all areas of life, especially in relationships.
        
        - *Why Lapis Lazuli?*: Lapis Lazuli is a stone of communication, truth, and wisdom, perfectly aligned with Libra’s desire for fairness and balance. It encourages clear communication and helps Libra maintain harmonious relationships while staying true to their values.
        
        - *How It Benefits You*: Lapis Lazuli strengthens your ability to communicate honestly and fairly. It promotes wisdom and helps you create harmony in your personal and professional relationships. This gemstone also enhances self-awareness, allowing you to understand your own motivations and needs better, which is crucial for maintaining balance in your relationships.
        `,
        
        "Scorpio": `
        ⚫ *Gemstone for Scorpio (October 23 - November 21):* *Obsidian*
        
        - *Astrological Traits of Scorpio*: Scorpio is a water sign ruled by Pluto, the planet of transformation, and Mars, the planet of action. Scorpios are intense, passionate, and driven by deep emotions. They are often drawn to the mysteries of life and are known for their resilience.
        
        - *Why Obsidian?*: Obsidian is a powerful protection stone that helps Scorpio navigate their intense emotional landscape. It absorbs negative energy and supports emotional healing, allowing Scorpios to channel their emotions in a productive way.
        
        - *How It Benefits You*: Obsidian protects you from emotional overwhelm and negativity, helping you transform challenging emotions into strength and wisdom. It supports your journey of personal transformation, allowing you to face your fears and confront your inner truths with courage.
        `,
        
        "Sagittarius": `
        🔵 *Gemstone for Sagittarius (November 22 - December 21):* *Amethyst*
        
        - *Astrological Traits of Sagittarius*: Sagittarius is a fire sign ruled by Jupiter, the planet of expansion, knowledge, and adventure. Sagittarians are known for their optimism, love of freedom, and intellectual curiosity. They are natural explorers, both physically and mentally.
        
        - *Why Amethyst?*: Amethyst promotes spiritual growth, intellectual clarity, and calmness, all qualities that align with Sagittarius’ quest for higher knowledge and meaning. It encourages patience and helps Sagittarians stay focused on their long-term goals.
        
        - *How It Benefits You*: Amethyst helps you find deeper meaning in your life and brings emotional balance, allowing you to pursue your intellectual and spiritual goals without feeling scattered or overwhelmed. Additionally, it aids in overcoming negative thought patterns and enhances your ability to learn and grow through experience.
        `,
        
        "Capricorn": `
        ⚫ *Gemstone for Capricorn (December 22 - January 19):* *Onyx*
        
        - *Astrological Traits of Capricorn*: Capricorn is an earth sign ruled by Saturn, the planet of discipline, structure, and responsibility. Capricorns are ambitious, determined, and focused on long-term success. They value hard work and are often seen as the most disciplined of the zodiac.
        
        - *Why Onyx?*: Onyx strengthens Capricorn’s resolve and determination. It helps Capricorns remain focused on their goals, even in the face of challenges. Onyx also protects them from negative influences and boosts their self-discipline.
        
        - *How It Benefits You*: Onyx promotes self-discipline, perseverance, and protection, helping you stay grounded and focused on your long-term goals. It ensures that your hard work pays off by supporting your physical and emotional resilience. Onyx also encourages a sense of calm and helps you make wise decisions in difficult situations.
        `,
        
        "Aquarius": `
        🔵 *Gemstone for Aquarius (January 20 - February 18):* *Aquamarine*
        
        - *Astrological Traits of Aquarius*: Aquarius is an air sign ruled by Uranus, the planet of innovation, and Saturn, the planet of structure. Aquarians are known for their forward-thinking, humanitarian nature, and desire to create positive change. They are highly intellectual and love exploring new ideas.
        
        - *Why Aquamarine?*: Aquamarine enhances Aquarius’ natural creativity, intellectual curiosity, and emotional intelligence. It encourages clear communication and supports Aquarius in expressing their unique ideas with confidence.
        
        - *How It Benefits You*: Aquamarine helps you express your ideas clearly and effectively while maintaining emotional balance. It encourages innovative thinking and strengthens your intuition, helping you navigate challenges with clarity. This stone is also believed to protect against negative energies, allowing you to pursue your humanitarian goals with optimism.
        `,
        
        "Pisces": `
        ⚪ *Gemstone for Pisces (February 19 - March 20):* *Amethyst*
        
        - *Astrological Traits of Pisces*: Pisces is a water sign ruled by Neptune, the planet of dreams, intuition, and spirituality. Pisceans are compassionate, creative, and deeply intuitive. They are often drawn to the mystical and are known for their empathetic nature.
        
        - *Why Amethyst?*: Amethyst connects deeply with Pisces’ spiritual and intuitive nature. It promotes inner peace, emotional balance, and spiritual awareness, helping Pisces navigate their deep emotional waters with grace.
        
        - *How It Benefits You*: Amethyst calms your emotions and enhances your spiritual awareness, helping you stay connected to your intuition while navigating the complexities of life with ease. Additionally, it aids in overcoming stress and anxiety, allowing you to embrace your creative potential without feeling overwhelmed.
        `,
    };

    return gemstoneRecommendations[zodiacSign] || "I couldn't find a gemstone recommendation for your zodiac sign. Please make sure you entered a valid zodiac sign.";
};

// Function to provide gemstone recommendations based on Life Path Number
const getNumerologyGemstoneRecommendations = (lifePathNumber) => {
    const gemstoneRecommendations = {
        1: `
        🔴 *Life Path Number 1 Gemstone:* *Ruby*
        
        - *Properties*: Ruby enhances leadership, confidence, and determination. It supports bold decision-making and drives the user toward success. Known for its energizing properties, Ruby also stimulates motivation and promotes passion.
        `,
        
        2: `
        🟢 *Life Path Number 2 Gemstone:* *Moonstone*
        
        - *Properties*: Moonstone promotes emotional balance and harmony, supporting your natural diplomatic and caring nature. It enhances intuition and encourages empathy, helping you connect with others on a deeper level.
        `,
        
        3: `
        🔵 *Life Path Number 3 Gemstone:* *Citrine*
        
        - *Properties*: Citrine stimulates creativity and joy. It encourages you to express yourself freely and helps you remain optimistic. This stone is also known for attracting wealth and abundance, making it ideal for those pursuing their dreams.
        `,
        
        4: `
        ⚫ *Life Path Number 4 Gemstone:* *Onyx*
        
        - *Properties*: Onyx brings strength, discipline, and focus. It helps you stay grounded and committed to your long-term goals, providing the support you need to overcome obstacles and achieve success.
        `,
        
        5: `
        🟣 *Life Path Number 5 Gemstone:* *Aquamarine*
        
        - *Properties*: Aquamarine promotes freedom and adventure, encouraging personal growth and helping you embrace change with confidence. It enhances clarity and communication, making it easier to navigate new experiences.
        `,
        
        6: `
        🟢 *Life Path Number 6 Gemstone:* *Emerald*
        
        - *Properties*: Emerald encourages harmony in relationships and enhances your nurturing qualities, helping you balance your personal and professional life. It promotes emotional stability and prosperity, attracting positive energies.
        `,
        
        7: `
        ⚪ *Life Path Number 7 Gemstone:* *Amethyst*
        
        - *Properties*: Amethyst promotes spiritual growth and wisdom. It encourages introspection and helps you connect with your higher self, providing clarity and insight into your life's path.
        `,
        
        8: `
        🟤 *Life Path Number 8 Gemstone:* *Tiger’s Eye*
        
        - *Properties*: Tiger’s Eye supports ambition and financial success. It helps you stay focused on your goals while remaining balanced and grounded, making it a powerful ally in achieving material wealth.
        `,
        
        9: `
        🟠 *Life Path Number 9 Gemstone:* *Turquoise*
        
        - *Properties*: Turquoise enhances compassion and humanitarian efforts. It helps you stay connected to your purpose of serving others and promotes healing and communication.
        `,
        
        11: `
        🔷 *Life Path Master Number 11 Gemstone:* *Clear Quartz*
        
        - *Properties*: Clear Quartz amplifies spiritual awareness and intuition, helping you connect with your inner wisdom and higher purpose. It enhances clarity and amplifies energy, making it a powerful tool for manifestation.
        `,
        
        22: `
        🟠 *Life Path Master Number 22 Gemstone:* *Labradorite*
        
        - *Properties*: Labradorite promotes manifestation and creativity, helping you turn your grand visions into reality. It protects against negative energies and encourages perseverance and resilience.
        `,
    };

    return gemstoneRecommendations[lifePathNumber] || "I couldn't find a gemstone recommendation for your life path number. Please provide a valid life path number.";
};

// Main function to handle Gemstone and Crystal Recommendations
const handleGemstoneRecommendations = async (zodiacSign, lifePathNumber) => {
    const zodiacRecommendation = getGemstoneRecommendations(zodiacSign);
    const numerologyRecommendation = getNumerologyGemstoneRecommendations(lifePathNumber);

    return `
    🌟 *Gemstone and Crystal Recommendations* 🌟

    ${zodiacRecommendation}

    🔮 *Based on Your Life Path Number (${lifePathNumber})* 🔮
    ${numerologyRecommendation}
    `;
};

// Exporting the function
module.exports = { handleGemstoneRecommendations };
