// Function to provide detailed personalized affirmations based on Zodiac Sign
const getDetailedAffirmationsByZodiac = (zodiacSign) => {
  const detailedAffirmations = {
      "aries": `
      🔴 *Personalized Affirmations for Aries (March 21 - April 19)* 🔴
      
      - *Affirmation for Self-Confidence*: "I am a fearless leader, and my boldness paves the way for success."
        
        - *Explanation*: As an Aries, ruled by Mars, you possess a natural drive and courage. This affirmation taps into your innate leadership abilities, encouraging you to take initiative confidently. Remember, your boldness not only inspires you but also those around you.

      - *Affirmation for Relationships*: "I honor others’ perspectives while staying true to my own vision."
        
        - *Explanation*: While your independence is a strength, this affirmation reminds you of the importance of empathy in your relationships. By acknowledging others' viewpoints, you can forge deeper connections while remaining authentic to your desires.

      - *Affirmation for Career*: "I pursue my ambitions with passion, and I trust that success follows my dedication."
        
        - *Explanation*: Your drive can lead you to achieve remarkable things in your career. This affirmation focuses your energy on dedication and passion, reminding you that success is a journey shaped by your commitment.

      - *Affirmation for Emotional Well-Being*: "I allow myself moments of stillness to restore my energy and regain clarity."
        
        - *Explanation*: In your fast-paced life, taking a moment for stillness is crucial. This affirmation encourages you to embrace quiet moments, helping you recharge and reflect on your path, thus avoiding burnout.

      - *Daily Practice*: Repeat these affirmations in front of a mirror each morning to reinforce your confidence and set a positive tone for your day.
      `,
      "taurus": `
      🟢 *Personalized Affirmations for Taurus (April 20 - May 20)*

      - *Affirmation for Self-Confidence*: "I trust in my ability to create security and stability in my life."
        
        - *Explanation*: Ruled by Venus, Taurus finds comfort in stability. This affirmation reinforces your natural ability to cultivate a safe and secure environment, empowering you to trust in your resourcefulness.

      - *Affirmation for Relationships*: "I am worthy of love, and I cultivate deep, meaningful connections."
        
        - *Explanation*: Taurus values loyalty in relationships. This affirmation affirms your worthiness and encourages you to nurture emotional bonds, fostering a sense of security and trust with your loved ones.

      - *Affirmation for Career*: "I build a strong foundation for my success, and I achieve my goals with persistence."
        
        - *Explanation*: Your steady nature is an asset in your career. This affirmation emphasizes your ability to set long-term goals and achieve them through dedication and hard work.

      - *Affirmation for Emotional Well-Being*: "I embrace change with grace, knowing that it leads to personal growth."
        
        - *Explanation*: As a fixed sign, you may resist change. This affirmation encourages you to see change as an opportunity for growth, reminding you that flexibility can lead to new possibilities.

      - *Daily Practice*: Consider writing your affirmations in a journal every night before bed, allowing you to reflect on your day and set intentions for tomorrow.
      `,
      "gemini": `
      🔵 *Personalized Affirmations for Gemini (May 21 - June 20)*

      - *Affirmation for Self-Confidence*: "I am a master of communication, and my words inspire and uplift those around me."
        
        - *Explanation*: As a Gemini ruled by Mercury, your communication skills are your superpower. This affirmation empowers you to use your voice effectively, knowing that your words can inspire and influence others positively.

      - *Affirmation for Relationships*: "I balance my need for freedom with deep connections, knowing that I can be both social and grounded."
        
        - *Explanation*: Your dual nature allows you to navigate social situations adeptly. This affirmation encourages you to honor your need for independence while fostering meaningful relationships, creating a harmonious balance.

      - *Affirmation for Career*: "I embrace my curiosity, and I allow my thirst for knowledge to guide my success."
        
        - *Explanation*: Your love for learning is an asset. This affirmation reinforces your adaptability and encourages you to explore diverse opportunities that align with your interests and passions.

      - *Affirmation for Emotional Well-Being*: "I quiet my mind through mindfulness, allowing clarity and peace to guide my decisions."
        
        - *Explanation*: With a busy mind, practicing mindfulness is essential. This affirmation encourages you to cultivate calmness and clarity, helping you make decisions that resonate with your true self.

      - *Daily Practice*: Try setting aside 5-10 minutes each day for meditation or mindfulness practice, allowing you to reinforce these affirmations and find inner peace.
      `,
      "cancer": `
      ⚪ *Personalized Affirmations for Cancer (June 21 - July 22)*

      - *Affirmation for Self-Confidence*: "I trust my intuition, and I allow my emotions to guide me toward positive outcomes."
        
        - *Explanation*: As a Cancer ruled by the Moon, your intuition is a powerful guide. This affirmation empowers you to embrace your emotional depth, reminding you that your feelings are valid and lead you to what you truly desire.

      - *Affirmation for Relationships*: "I create a safe and nurturing environment for myself and my loved ones."
        
        - *Explanation*: Your nurturing nature is a gift. This affirmation encourages you to prioritize self-care, ensuring that you have the emotional strength to support those you love.

      - *Affirmation for Career*: "I balance my work and personal life with ease, knowing that my emotional well-being fuels my success."
        
        - *Explanation*: Cancers often feel the pull between career and home life. This affirmation reinforces the importance of balance, reminding you that taking care of yourself enhances your ability to succeed professionally.

      - *Affirmation for Emotional Well-Being*: "I release emotional baggage and embrace healing, knowing that I deserve peace and joy."
        
        - *Explanation*: This affirmation encourages you to let go of past hurts, allowing space for healing and joy in your life. Embracing your emotional journey is essential for personal growth.

      - *Daily Practice*: Create a cozy space for yourself where you can sit quietly and reflect on these affirmations, allowing them to sink in deeply.
      `,
      "leo": `
      🟠 *Personalized Affirmations for Leo (July 23 - August 22)*

      - *Affirmation for Self-Confidence*: "I am a radiant being, and my confidence shines through everything I do."
        
        - *Explanation*: Ruled by the Sun, Leo exudes natural charisma. This affirmation reinforces your inner light, reminding you that your confidence not only empowers you but also inspires others.

      - *Affirmation for Relationships*: "I give and receive love generously, knowing that my warmth nurtures my relationships."
        
        - *Explanation*: Your generous heart is a source of strength. This affirmation encourages you to share love openly, reinforcing the idea that emotional connections thrive in a nurturing environment.

      - *Affirmation for Career*: "I am creative and bold in my career, and I lead with courage and integrity."
        
        - *Explanation*: Leos are natural leaders, and this affirmation taps into your creative vision and assertiveness. It encourages you to pursue your professional passions boldly and ethically.

      - *Affirmation for Emotional Well-Being*: "I honor my emotions, knowing that vulnerability is a source of strength."
        
        - *Explanation*: While confidence is essential, acknowledging your emotions is equally important. This affirmation encourages you to embrace vulnerability as a vital aspect of your power.

      - *Daily Practice*: Stand tall, shoulders back, and repeat these affirmations with conviction to reinforce your self-belief and confidence.
      `,
      "virgo": `
      🟢 *Personalized Affirmations for Virgo (August 23 - September 22)*

      - *Affirmation for Self-Confidence*: "I trust in my ability to create order and balance in my life, and I embrace my analytical mind as a strength."
        
        - *Explanation*: Ruled by Mercury, your analytical skills are an asset. This affirmation empowers you to see your meticulous nature as a valuable tool for success and growth.

      - *Affirmation for Relationships*: "I approach relationships with patience and care, knowing that compassion builds strong connections."
        
        - *Explanation*: Your practical approach can sometimes overshadow emotional expression. This affirmation encourages you to nurture emotional bonds while balancing your logical tendencies.

      - *Affirmation for Career*: "I use my skills of precision and attention to detail to achieve success in all that I do."
        
        - *Explanation*: Your attention to detail is a strength. This affirmation reinforces the importance of your skills in your professional life, encouraging you to take pride in your work.

      - *Affirmation for Emotional Well-Being*: "I release the need for perfection and allow myself to find joy in the present moment."
        
        - *Explanation*: Virgo can be overly critical. This affirmation encourages you to let go of perfectionism and embrace the beauty of imperfection in both yourself and your surroundings.

      - *Daily Practice*: Write down your affirmations in a dedicated journal, reflecting on each one to deepen your connection with your personal truths.
      `,
      "libra": `
      🟠 *Personalized Affirmations for Libra (September 23 - October 22)*

      - *Affirmation for Self-Confidence*: "I bring harmony and balance to every aspect of my life, knowing that my presence is valuable."
        
        - *Explanation*: Libra seeks beauty and balance. This affirmation empowers you to trust in your ability to create peace in your surroundings, reinforcing your self-worth.

      - *Affirmation for Relationships*: "I create loving and supportive relationships by honoring both my needs and the needs of others."
        
        - *Explanation*: Your diplomatic nature is a gift. This affirmation encourages you to maintain balance in relationships, ensuring that your needs are met alongside those of others.

      - *Affirmation for Career*: "I make fair and balanced decisions in my career, and I trust that success follows my integrity."
        
        - *Explanation*: Libra's sense of justice is a valuable asset. This affirmation encourages you to navigate your professional life with fairness and trust in your integrity.

      - *Affirmation for Emotional Well-Being*: "I embrace my inner peace and remain centered in the face of life’s challenges."
        
        - *Explanation*: In times of conflict, this affirmation helps you remain grounded, reminding you that your inner peace is a source of strength in challenging situations.

      - *Daily Practice*: Visualize yourself surrounded by harmony and balance as you repeat your affirmations, allowing this energy to infuse your day.
      `,
      "scorpio": `
      ⚫ *Personalized Affirmations for Scorpio (October 23 - November 21)*

      - *Affirmation for Self-Confidence*: "I am resilient, and I embrace transformation as a powerful force in my life."
        
        - *Explanation*: Scorpio’s ability to transform is its greatest strength. This affirmation empowers you to see change as an opportunity for growth, fueling your resilience.

      - *Affirmation for Relationships*: "I allow myself to trust others, knowing that vulnerability strengthens my connections."
        
        - *Explanation*: Your intensity can sometimes lead to guardedness. This affirmation encourages you to open your heart, recognizing that vulnerability can deepen your relationships.

      - *Affirmation for Career*: "I am resourceful and determined in my career, and I achieve success through my persistence."
        
        - *Explanation*: Scorpio’s determination is key to professional success. This affirmation reinforces your ability to navigate challenges, inspiring you to persevere.

      - *Affirmation for Emotional Well-Being*: "I release emotional blockages and embrace healing, knowing that my emotional depth is a gift."
        
        - *Explanation*: This affirmation encourages you to let go of past emotional wounds, allowing you to move forward with clarity and strength.

      - *Daily Practice*: Dedicate time each week for self-reflection, using these affirmations to guide your personal growth and healing journey.
      `,
      "sagittarius": `
      🔵 *Personalized Affirmations for Sagittarius (November 22 - December 21)*

      - *Affirmation for Self-Confidence*: "I explore the world with confidence and curiosity, trusting that my adventurous spirit leads me to success."
        
        - *Explanation*: Sagittarius thrives on exploration. This affirmation empowers you to embrace your adventurous nature, encouraging you to seek new experiences and growth.

      - *Affirmation for Relationships*: "I nurture my relationships with honesty and openness, while still allowing myself the freedom to explore."
        
        - *Explanation*: Balancing independence with connection is essential. This affirmation encourages you to foster meaningful relationships while honoring your need for freedom.

      - *Affirmation for Career*: "I achieve success by following my passions and staying open to new opportunities."
        
        - *Explanation*: Sagittarius excels in dynamic environments. This affirmation encourages you to trust your instincts and pursue opportunities that ignite your passion.

      - *Affirmation for Emotional Well-Being*: "I find peace in the present moment, knowing that adventure is always waiting for me."
        
        - *Explanation*: This affirmation encourages mindfulness, helping you stay grounded and find joy in the present while looking forward to future adventures.

      - *Daily Practice*: Engage in outdoor activities or explore new places, repeating your affirmations to enhance your connection with your adventurous spirit.
      `,
      "capricorn": `
      ⚫ *Personalized Affirmations for Capricorn (December 22 - January 19)*

      - *Affirmation for Self-Confidence*: "I am disciplined and ambitious, and I achieve my goals through perseverance and focus."
        
        - *Explanation*: Capricorn’s disciplined nature is its superpower. This affirmation reinforces your ability to succeed through hard work and determination.

      - *Affirmation for Relationships*: "I build lasting and meaningful relationships by being reliable, patient, and supportive."
        
        - *Explanation*: Your loyalty and dependability are key strengths. This affirmation encourages you to nurture your relationships through consistent support and patience.

      - *Affirmation for Career*: "I climb the ladder of success with determination, knowing that my hard work will pay off."
        
        - *Explanation*: This affirmation reinforces your focus on achieving your professional goals, inspiring you to keep pushing forward despite challenges.

      - *Affirmation for Emotional Well-Being*: "I allow myself time to rest and recharge, knowing that balance is the key to long-term success."
        
        - *Explanation*: Capricorns often overwork themselves. This affirmation reminds you that taking breaks is essential for maintaining energy and motivation.

      - *Daily Practice*: Set aside time each week for self-reflection and rest, allowing these affirmations to guide your actions and mindset.
      `,
      "aquarius": `
      🔵 *Personalized Affirmations for Aquarius (January 20 - February 18)*

      - *Affirmation for Self-Confidence*: "I am a visionary thinker, and my unique perspective brings positive change to the world."
        
        - *Explanation*: Aquarius thrives on innovation. This affirmation empowers you to trust in your original ideas, reminding you that your vision can inspire others.

      - *Affirmation for Relationships*: "I build connections through mutual respect and understanding, honoring both my individuality and the needs of others."
        
        - *Explanation*: While valuing independence, this affirmation encourages you to foster strong connections by balancing your individual needs with those of your loved ones.

      - *Affirmation for Career*: "I pursue innovative and impactful ideas in my career, knowing that my contributions make a difference."
        
        - *Explanation*: Your creativity is a valuable asset. This affirmation encourages you to pursue projects that align with your vision for positive change.

      - *Affirmation for Emotional Well-Being*: "I stay grounded and connected to my emotions, even as I embrace my visionary spirit."
        
        - *Explanation*: This affirmation helps you maintain emotional awareness while pursuing your dreams, reminding you to stay connected to your feelings.

      - *Daily Practice*: Engage in creative activities that inspire you, using your affirmations as a guide to reinforce your self-belief and innovative spirit.
      `,
      "pisces": `
      ⚪ *Personalized Affirmations for Pisces (February 19 - March 20)*

      - *Affirmation for Self-Confidence*: "I trust my intuition and creativity, knowing that I am deeply connected to the flow of the universe."
        
        - *Explanation*: Pisces is intuitive and creative. This affirmation encourages you to trust in your unique gifts, allowing you to flow with inspiration and wisdom.

      - *Affirmation for Relationships*: "I create loving and compassionate connections by being emotionally open and authentic."
        
        - *Explanation*: Your empathy is a strength. This affirmation encourages you to embrace vulnerability, fostering deeper connections with others.

      - *Affirmation for Career*: "I use my creativity and compassion to bring beauty and healing to the world through my work."
        
        - *Explanation*: This affirmation reinforces your ability to make a positive impact through your talents, encouraging you to trust in your capacity for healing and creativity.

      - *Affirmation for Emotional Well-Being*: "I protect my energy by setting healthy emotional boundaries while still remaining compassionate and empathetic."
        
        - *Explanation*: This affirmation helps you establish emotional boundaries, ensuring that you can care for others without sacrificing your own well-being.

      - *Daily Practice*: Dedicate time for creative expression, allowing your affirmations to guide your process and inspire your journey.
      `
  };

  return detailedAffirmations[zodiacSign] || "I couldn't find affirmations for your zodiac sign. Please make sure you entered a valid zodiac sign.";
};

// Main function to handle Detailed Personalized Affirmations based on Zodiac Sign
const handleDetailedAffirmations = async (zodiacSignInput) => {
  // Normalize the input by converting it to lowercase and trimming spaces
  const zodiacSign = zodiacSignInput.trim().toLowerCase();

  const detailedAffirmations = getDetailedAffirmationsByZodiac(zodiacSign);

  return `
  🌟 *Detailed Personalized Affirmations for ${zodiacSignInput}* 🌟

  ${detailedAffirmations}
  `;
};

module.exports = { handleDetailedAffirmations };
