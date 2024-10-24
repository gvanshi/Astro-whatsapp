// Function to provide spiritual guidance based on Zodiac Sign
const getSpiritualGuidanceByZodiac = (zodiacSign) => {
    const spiritualGuidance = {
        "aries": `
        🔴 *Personalized Spiritual Guidance for Aries (March 21 - April 19)* 🔴

        - *Element*: Fire 🔥

        - *Ruling Planet*: Mars (Planet of action, drive, and energy)

        - *Spiritual Strengths*: Aries, you are a trailblazer full of energy and courage. Your natural leadership and confidence make you fearless in pursuing your goals. You thrive on new challenges and are always ready to take action. Your passion and enthusiasm are contagious, inspiring others around you.

        - *Spiritual Challenge*: Your impulsive nature may lead to impatience and frustration. You can sometimes act without considering the consequences, which may cause setbacks or burnout. Remember that even the strongest leaders need to pause and reflect to ensure sustainable growth.

        - *Personal Growth Tip*: Cultivate mindfulness and patience. Engage in activities that help you slow down and reflect on your actions, such as meditation or journaling. Practicing gratitude can also help you appreciate the journey rather than just the destination.

        - *Recommended Chakra for Balance*: Root Chakra 🌱

        - *Meditation Technique*: Grounding Meditation

        - *Instructions*: Find a quiet place to sit comfortably. Visualize roots growing from the base of your spine deep into the earth. As you breathe deeply, feel your energy stabilize and connect with the earth, grounding your fiery nature. Imagine the earth’s energy flowing up through the roots, filling your body with strength and stability.

        - *Affirmation*: "I am grounded and at peace with my journey. I embrace patience and clarity in every step I take."
        `,

        "taurus": `
        🟢 *Personalized Spiritual Guidance for Taurus (April 20 - May 20)* 🟢

        - *Element*: Earth 🌍

        - *Ruling Planet*: Venus (Planet of love, beauty, and abundance)

        - *Spiritual Strengths*: Taurus, you are deeply connected to the earth and appreciate stability, beauty, and comfort. Your reliable nature makes you a pillar of strength for others, and your patience allows you to see things through. You have an innate ability to create harmony in your surroundings.

        - *Spiritual Challenge*: You may resist change, clinging to comfort and security. This can lead to stagnation and make it difficult for you to adapt to new situations. Embracing change can be a journey in itself, but it leads to personal growth and new opportunities.

        - *Personal Growth Tip*: Embrace change as a natural part of life. Practice heart-opening meditations to help you release control and trust the flow of the universe. Connecting with nature can also ground you and remind you of life’s natural cycles.

        - *Recommended Chakra for Balance*: Heart Chakra 💚

        - *Meditation Technique*: Heart-Opening Meditation

        - *Instructions*: Sit comfortably and visualize a soft green light in your heart center. With each breath, feel this light expand, releasing any tension or fear. Allow love and compassion to flow freely, filling your body and aura with healing energy.

        - *Affirmation*: "I trust in the flow of life and open my heart to love and abundance. I embrace change as a pathway to growth."
        `,

        "gemini": `
        🔵 *Personalized Spiritual Guidance for Gemini (May 21 - June 20)* 🔵

        - *Element*: Air 🌬️

        - *Ruling Planet*: Mercury (Planet of communication, intellect, and learning)

        - *Spiritual Strengths*: Gemini, your curiosity and intellectual agility make you a natural communicator. You excel at exploring different perspectives and ideas, and your adaptability allows you to connect with diverse groups of people. Your lively spirit brings joy to conversations and interactions.

        - *Spiritual Challenge*: Your mental energy can become scattered, leading to overstimulation and difficulty focusing. You may struggle to quiet your mind, making it harder to stay centered. Finding balance between your active thoughts and moments of peace is essential for your well-being.

        - *Personal Growth Tip*: Practice mindfulness and meditation to bring clarity and calmness to your thoughts. Journaling can also help organize your ideas and reduce mental clutter. Incorporate quiet moments into your daily routine to recharge.

        - *Recommended Chakra for Balance*: Throat Chakra 🔵

        - *Meditation Technique*: Breath-Focused Meditation

        - *Instructions*: Sit comfortably and focus on your breath. Inhale deeply, exhale slowly. With each breath, imagine your mind becoming clearer and more focused. Allow your thoughts to pass without attachment, creating space for new ideas and insights.

        - *Affirmation*: "I am clear, calm, and fully present in each moment. I express my thoughts and ideas with confidence."
        `,

        "cancer": `
        ⚪ *Personalized Spiritual Guidance for Cancer (June 21 - July 22)* ⚪

        - *Element*: Water 🌊

        - *Ruling Planet*: Moon (Planet of emotions, intuition, and nurturing)

        - *Spiritual Strengths*: Cancer, your deep emotional intelligence and nurturing nature make you a source of comfort for those around you. Your intuition guides you in caring for others, and you create a sense of security wherever you go. Your connection to family and home is strong, allowing you to foster meaningful relationships.

        - *Spiritual Challenge*: Your sensitivity can sometimes leave you vulnerable to emotional overwhelm. You may take on the burdens of others, which can drain your energy and cloud your intuition. Learning to set emotional boundaries is vital for your well-being.

        - *Personal Growth Tip*: Practice emotional boundaries and self-care. Engage in meditations that help you protect your energy and stay emotionally balanced. Journaling about your feelings can also provide clarity and release.

        - *Recommended Chakra for Balance*: Solar Plexus Chakra 🌟

        - *Meditation Technique*: Energy Shielding Meditation

        - *Instructions*: Visualize a bright yellow light in your Solar Plexus. As you breathe, imagine this light forming a protective shield around you, allowing only positive energy to flow in while deflecting negativity. Feel your personal power grow stronger with each breath.

        - *Affirmation*: "I am emotionally strong and protected, yet open to love and compassion. I honor my feelings and set healthy boundaries."
        `,

        "leo": `
        🟠 *Personalized Spiritual Guidance for Leo (July 23 - August 22)* 🟠

        - *Element*: Fire 🔥

        - *Ruling Planet*: Sun (Planet of self, vitality, and creativity)

        - *Spiritual Strengths*: Leo, your charisma and creativity light up the world around you. You have a strong sense of self and a natural ability to lead. Your generosity and warmth inspire others, and you thrive when you can express your creativity. You have an innate capacity for joy and love.

        - *Spiritual Challenge*: You may seek validation from others, which can lead to insecurity when you're not in the spotlight. Balancing your inner light with external recognition is key. Remember that your worth is inherent and not dependent on others' approval.

        - *Personal Growth Tip*: Practice self-love and inner confidence. Engage in heart-centered meditations that help you connect with your true essence, independent of external approval. Embrace your uniqueness and celebrate your talents.

        - *Recommended Chakra for Balance*: Heart Chakra 💚

        - *Meditation Technique*: Heart-Centered Meditation

        - *Instructions*: Place your hands over your heart and breathe deeply. Visualize a warm, golden light radiating from your heart, filling your entire being with love and joy. Allow this light to expand outward, touching those around you.

        - *Affirmation*: "I radiate love, confidence, and joy from within. I am enough just as I am."
        `,

        "virgo": `
        🟢 *Personalized Spiritual Guidance for Virgo (August 23 - September 22)* 🟢

        - *Element*: Earth 🌍

        - *Ruling Planet*: Mercury (Planet of intellect, communication, and organization)

        - *Spiritual Strengths*: Virgo, your analytical mind and attention to detail make you a natural problem-solver. You bring order to chaos and are deeply committed to helping others improve their lives. Your practicality allows you to approach challenges with a clear head.

        - *Spiritual Challenge*: Your perfectionism can lead to self-criticism and stress. You may struggle to accept imperfection, both in yourself and others. Recognizing that growth often comes from mistakes can help you find peace.

        - *Personal Growth Tip*: Embrace progress over perfection. Practice meditations that help you release control and accept the flow of life. Journaling about your achievements and challenges can also promote self-compassion.

        - *Recommended Chakra for Balance*: Sacral Chakra 🟠

        - *Meditation Technique*: Letting Go Meditation

        - *Instructions*: Close your eyes and focus on your breath. Visualize a river flowing through your body, washing away any tension or need for control. Allow yourself to flow freely with the current, accepting life as it comes.

        - *Affirmation*: "I release the need for perfection and trust in the flow of life. I am grateful for my journey."
        `,

        "libra": `
        🟠 *Personalized Spiritual Guidance for Libra (September 23 - October 22)* 🟠

        - *Element*: Air 🌬️

        - *Ruling Planet*: Venus (Planet of love, harmony, and balance)

        - *Spiritual Strengths*: Libra, your sense of balance, fairness, and beauty makes you a natural diplomat. You strive for harmony in all areas of life and bring peace to your relationships. Your charm and grace allow you to navigate social situations with ease.

        - *Spiritual Challenge*: Your desire to avoid conflict may lead to indecision or suppressing your true feelings. Balancing your need for harmony with self-expression is essential for your spiritual growth.

        - *Personal Growth Tip*: Practice speaking your truth while maintaining harmony. Engage in throat chakra meditations to empower your voice and express your needs authentically.

        - *Recommended Chakra for Balance*: Throat Chakra 🔵

        - *Meditation Technique*: Decision-Making Meditation

        - *Instructions*: Focus on your throat chakra and visualize a bright blue light expanding from your throat, empowering your voice. Affirm that you have the wisdom and courage to make decisions that honor your truth.

        - *Affirmation*: "I trust my voice and decisions to honor my highest good. I express my truth with love and confidence."
        `,

        "scorpio": `
        ⚫ *Personalized Spiritual Guidance for Scorpio (October 23 - November 21)* ⚫

        - *Element*: Water 🌊

        - *Ruling Planet*: Pluto (Planet of transformation, rebirth) and Mars (Planet of action, drive)

        - *Spiritual Strengths*: Scorpio, your emotional depth and transformative power make you highly intuitive and resilient. You embrace life's challenges and use them as catalysts for growth and evolution. Your passion drives you to explore the mysteries of life.

        - *Spiritual Challenge*: You may struggle with emotional intensity, holding onto grudges, or becoming emotionally isolated. Learning to navigate your intense feelings is crucial for your spiritual journey.

        - *Personal Growth Tip*: Practice emotional release and vulnerability. Engage in sacral chakra meditations to help you let go of emotional baggage and embrace your authentic self.

        - *Recommended Chakra for Balance*: Sacral Chakra 🟠

        - *Meditation Technique*: Emotional Release Meditation

        - *Instructions*: Visualize a warm orange light in your lower abdomen, radiating outward. As you exhale, imagine releasing any stored emotions or pain. Allow yourself to feel lighter and more at peace.

        - *Affirmation*: "I release all that no longer serves me and trust in transformation. I embrace my emotional depth with love and compassion."
        `,

        "sagittarius": `
        🔵 *Personalized Spiritual Guidance for Sagittarius (November 22 - December 21)* 🔵

        - *Element*: Fire 🔥

        - *Ruling Planet*: Jupiter (Planet of expansion, knowledge, and growth)

        - *Spiritual Strengths*: Sagittarius, your adventurous spirit and love of knowledge make you a seeker of truth. You are driven by curiosity and a desire to expand your horizons. Your optimistic outlook inspires those around you to pursue their dreams.

        - *Spiritual Challenge*: Your restless nature can make it difficult to stay grounded or focused on the present. You may constantly seek the next adventure, sometimes at the expense of deeper connections.

        - *Personal Growth Tip*: Practice grounding and present-moment awareness. Engage in root chakra meditations to connect with stability and appreciate the present.

        - *Recommended Chakra for Balance*: Root Chakra 🌱

        - *Meditation Technique*: Grounding Meditation

        - *Instructions*: Visualize roots growing from your feet, anchoring you into the earth. Breathe deeply and feel your energy stabilizing, grounding you in the present. Allow yourself to feel the support of the earth beneath you.

        - *Affirmation*: "I am grounded, present, and open to the adventures life offers me. I embrace the journey of discovery."
        `,

        "capricorn": `
        ⚫ *Personalized Spiritual Guidance for Capricorn (December 22 - January 19)* ⚫

        - *Element*: Earth 🌍

        - *Ruling Planet*: Saturn (Planet of discipline, responsibility, and structure)

        - *Spiritual Strengths*: Capricorn, your discipline, focus, and ambition allow you to achieve great success. You are deeply responsible and take pride in your ability to create structure and stability in your life.

        - *Spiritual Challenge*: You may struggle with work-life balance, feeling as if you always need to be achieving something. This can lead to burnout or emotional disconnection from your inner self and others.

        - *Personal Growth Tip*: Embrace rest and self-compassion. Engage in heart chakra meditations to reconnect with your emotional self and appreciate your achievements.

        - *Recommended Chakra for Balance*: Heart Chakra 💚

        - *Meditation Technique*: Heart-Centered Meditation

        - *Instructions*: Visualize a soft green light in your heart space, expanding with each breath. Allow yourself to feel love and compassion for yourself, releasing any need to constantly achieve. Embrace the beauty of simply being.

        - *Affirmation*: "I am enough as I am, and I open my heart to love and connection. I balance my ambition with self-care."
        `,

        "aquarius": `
        🔵 *Personalized Spiritual Guidance for Aquarius (January 20 - February 18)* 🔵

        - *Element*: Air 🌬️

        - *Ruling Planet*: Uranus (Planet of innovation, change, and freedom)

        - *Spiritual Strengths*: Aquarius, your visionary and humanitarian nature allows you to see beyond conventional limits. You are innovative and driven by the desire to improve the world. Your unique perspective brings fresh ideas and insights.

        - *Spiritual Challenge*: Your focus on the collective may sometimes disconnect you from your own emotional needs. You may struggle with grounding or emotional intimacy, leading to feelings of isolation.

        - *Personal Growth Tip*: Practice grounding and emotional connection. Engage in root chakra meditations to balance your visionary outlook with emotional stability. Connecting with nature can also help.

        - *Recommended Chakra for Balance*: Root Chakra 🌱

        - *Meditation Technique*: Emotional Grounding Meditation

        - *Instructions*: Visualize roots growing from your feet into the earth. Feel your energy grounding, allowing you to stay connected to your emotions while maintaining your visionary focus. Take deep breaths and feel the earth supporting you.

        - *Affirmation*: "I am emotionally grounded and open to feeling deeply. I balance my visionary ideas with emotional awareness."
        `,

        "pisces": `
        ⚪ *Personalized Spiritual Guidance for Pisces (February 19 - March 20)* ⚪

        - *Element*: Water 🌊

        - *Ruling Planet*: Neptune (Planet of dreams, intuition, and spirituality)

        - *Spiritual Strengths*: Pisces, your compassion, empathy, and spiritual awareness make you deeply connected to the unseen realms. You are naturally intuitive and spiritually attuned, able to sense the feelings of others easily.

        - *Spiritual Challenge*: Your sensitivity can sometimes leave you feeling overwhelmed or emotionally drained. You may struggle with setting boundaries, both energetically and emotionally, leading to confusion or fatigue.

        - *Personal Growth Tip*: Practice energetic boundaries and protection. Engage in crown chakra meditations to stay connected to spiritual awareness while grounded. Learning to say no is essential for your well-being.

        - *Recommended Chakra for Balance*: Crown Chakra 👑

        - *Meditation Technique*: Protective Visualization Meditation

        - *Instructions*: Visualize a soft violet light radiating from your crown, forming a protective bubble around you. Breathe deeply and feel this shield protecting your energy from negativity while allowing positive energy to flow in.

        - *Affirmation*: "I am spiritually connected and energetically protected. I honor my sensitivity and set healthy boundaries."
        `
    };

    return spiritualGuidance[zodiacSign] || "I couldn't find spiritual guidance for your zodiac sign. Please make sure you entered a valid zodiac sign.";
};

// Main function to handle Spiritual Guidance and Meditation based on Zodiac Sign
const handleSpiritualGuidance = async (zodiacSignInput) => {
    // Normalize the input by converting it to lowercase and trimming spaces
    const zodiacSign = zodiacSignInput.trim().toLowerCase();

    const spiritualGuidance = getSpiritualGuidanceByZodiac(zodiacSign);

    return `
    🌟 *Personalized Spiritual Guidance and Meditation for ${zodiacSignInput}* 🌟

    ${spiritualGuidance}
    `;
};

module.exports = { handleSpiritualGuidance };
