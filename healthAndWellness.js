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

// Function to provide personalized health insights based on Zodiac Sign
const getZodiacSignHealthPredictions = (zodiacSign) => {
  const healthPredictions = {
      Aries: `
      🔴 *Health & Wellness for Aries* 🔴
      - *Physical Health*: You’re full of energy, Aries, but this can make you prone to accidents or injuries, particularly in the head and face. It's essential to balance your fiery energy with a consistent exercise routine that includes rest. Headaches and migraines may affect you if you don’t manage your stress levels.

      - *Mental Well-being*: Your impulsive and action-oriented nature means you might rush through tasks, which can lead to mental fatigue. Meditation or mindfulness practices will help you slow down and reset your mind.

      - *Actionable Tips*: 
        - Regular cardio exercise like running or cycling to release pent-up energy.
        - Practice daily breathing exercises or meditation to prevent stress buildup.
        - Wear red or fiery tones to boost confidence but be mindful of calming activities to prevent over-exertion.
      `,
      Taurus: `
      🟢 *Health & Wellness for Taurus* 🟢
      - *Physical Health*: Taurus rules the throat and neck, making you vulnerable to respiratory issues, sore throats, and neck strain. Since you value comfort, weight gain can become an issue if your love for good food isn't balanced with physical activity.

      - *Mental Well-being*: You thrive in stable environments, but sudden disruptions can trigger anxiety or stress. Focus on maintaining a consistent, grounded lifestyle to promote mental peace.

      - *Actionable Tips*:
        - Include neck and shoulder stretches in your daily routine to relieve tension.
        - Opt for a balanced diet with whole grains and vegetables to manage your weight.
        - Practice slow, mindful exercises like Tai Chi or yoga to ground yourself.
      `,
      Gemini: `
      🟡 *Health & Wellness for Gemini* 🟡
      - *Physical Health*: As a Gemini, you’re ruled by Mercury, which governs the lungs and nervous system. Respiratory issues and anxiety can affect you, especially when you feel mentally overstimulated.

      - *Mental Well-being*: Your quick-thinking, social nature can make it hard to relax. Too much social interaction or screen time may lead to burnout or anxiety. Incorporate more downtime into your routine to balance your active mind.

      - *Actionable Tips*:
        - Engage in aerobic exercises like swimming or brisk walking to boost lung capacity.
        - Practice deep breathing exercises, especially during moments of stress.
        - Take regular breaks from social media and digital devices to clear your mind.
      `,
      Cancer: `
      🌙 *Health & Wellness for Cancer* 🌙
      - *Physical Health*: Cancer rules the stomach and digestive system, making you prone to digestive issues when stressed or emotionally overwhelmed. Emotional eating is something to watch out for, especially during periods of high stress.

      - *Mental Well-being*: You are deeply empathetic and nurturing, but this can sometimes cause you to absorb others' emotions. Ensure you take time for self-care and emotional release to avoid emotional burnout.

      - *Actionable Tips*:
        - Focus on a diet rich in fiber and probiotics to support digestion.
        - Engage in creative, emotionally fulfilling activities like journaling or painting to release pent-up feelings.
        - Practice gentle yoga or stretching to soothe both your body and mind.
      `,
      Leo: `
      🦁 *Health & Wellness for Leo* 🦁
      - *Physical Health*: As a Leo, you rule the heart, back, and spine, making cardiovascular health and posture vital. High energy levels might lead you to overexert yourself, so ensure your exercise routine is balanced with rest.

      - *Mental Well-being*: Leos thrive in the spotlight, but this can lead to burnout if you don’t find time to recharge. Learn to delegate responsibilities to others instead of taking everything on yourself.

      - *Actionable Tips*:
        - Incorporate heart-healthy activities like jogging or dancing into your routine.
        - Practice yoga or Pilates to strengthen your back and improve posture.
        - Set aside time for relaxation and self-care to prevent burnout.
      `,
      Virgo: `
      🌿 *Health & Wellness for Virgo* 🌿
      - *Physical Health*: Virgos are associated with the digestive system, making you susceptible to digestive disorders and food sensitivities. You’re a perfectionist, so stress can manifest physically, especially in your stomach and intestines.

      - *Mental Well-being*: Your analytical mind tends to overthink, leading to mental fatigue and anxiety. Make sure to balance your mental pursuits with activities that relax and recharge you.

      - *Actionable Tips*:
        - Maintain a diet rich in whole foods, especially fiber, to support your digestive health.
        - Engage in mindfulness practices to calm your mind and reduce overthinking.
        - Journaling can help you process your thoughts and alleviate mental stress.
      `,
      Libra: `
      ⚖️ *Health & Wellness for Libra* ⚖️
      - *Physical Health*: Libra governs the kidneys and lower back, so hydration is key to your health. You may also suffer from lower back pain due to poor posture or stress. Balancing your body’s fluids and maintaining physical symmetry is crucial.

      - *Mental Well-being*: You seek harmony and balance in your life, but indecisiveness or conflict can cause stress. When out of balance, you may experience anxiety or tension in your relationships.

      - *Actionable Tips*:
        - Stay hydrated and avoid overindulgence in alcohol or caffeine.
        - Engage in activities like yoga or Pilates that promote alignment and balance.
        - Practice deep breathing or meditation to center yourself during periods of stress.
      `,
      Scorpio: `
      🦂 *Health & Wellness for Scorpio* 🦂
      - *Physical Health*: Scorpio rules the reproductive system and is prone to issues related to sexual health and the elimination process. You may also be prone to lower abdominal problems or stress-related ailments.

      - *Mental Well-being*: Scorpios experience intense emotions and are known for their passion. When you bottle up your feelings, it can result in physical ailments. It’s crucial to express and release emotions constructively.

      - *Actionable Tips*:
        - Incorporate water-based activities like swimming to help cleanse and renew your energy.
        - Practice emotional release techniques such as journaling, talking to a trusted friend, or engaging in therapy.
        - Balance intense exercise like martial arts with calming practices like yoga or Tai Chi.
      `,
      Sagittarius: `
      🏹 *Health & Wellness for Sagittarius* 🏹
      - *Physical Health*: Sagittarius governs the hips, thighs, and liver, making it essential to focus on maintaining flexibility and a balanced diet. You are at risk for overindulgence, so moderation is key.

      - *Mental Well-being*: You are an adventurous spirit, and when confined or restricted, you may experience stress or restlessness. It's important to find outlets for your wanderlust and desire for freedom.

      - *Actionable Tips*:
        - Stretch regularly and incorporate activities that maintain flexibility like yoga or pilates.
        - Avoid overindulgence in food or alcohol, and focus on liver-friendly foods like leafy greens.
        - Plan trips or learning experiences that satisfy your need for adventure and mental stimulation.
      `,
      Capricorn: `
      🏔 *Health & Wellness for Capricorn* 🏔
      - *Physical Health*: Capricorn rules the bones, joints, and skin, making joint health a priority. You may experience stiffness, especially in the knees, so regular exercise and stretching are important.

      - *Mental Well-being*: You are disciplined and responsible, but too much pressure can cause stress. Make sure to balance work with relaxation and set realistic goals to avoid burnout.

      - *Actionable Tips*:
        - Engage in weight-bearing exercises to strengthen your bones.
        - Practice stretching exercises and yoga to maintain flexibility and prevent stiffness.
        - Take regular breaks from work to avoid over-exerting yourself.
      `,
      Aquarius: `
      🌬 *Health & Wellness for Aquarius* 🌬
      - *Physical Health*: Aquarius rules the circulatory system and lower legs, making cardiovascular health a priority. You may be prone to circulation issues, so regular physical activity is essential.

      - *Mental Well-being*: Aquarians thrive on intellectual stimulation but can feel isolated if they don’t connect with others. Mental wellness practices should include both social interaction and time for self-reflection.

      - *Actionable Tips*:
        - Incorporate regular aerobic exercises to support circulation and cardiovascular health.
        - Engage in creative activities like art, writing, or social projects to balance your mental and emotional health.
        - Practice grounding exercises like walking barefoot in nature to stay connected to the earth.
      `,
      Pisces: `
      🌊 *Health & Wellness for Pisces* 🌊
      - *Physical Health*: Pisces governs the feet and immune system, making grounding activities and immune support vital. You are sensitive to your surroundings, so ensure you practice regular self-care and avoid toxins.

      - *Mental Well-being*: You are highly intuitive and emotional, which can lead to emotional exhaustion. You must set healthy boundaries to protect your energy.

      - *Actionable Tips*:
        - Incorporate foot care and grounding exercises into your routine, such as walking barefoot in nature.
        - Strengthen your immune system with a diet rich in vitamins and antioxidants.
        - Practice regular emotional release through journaling, meditation, or talking to a trusted friend.
      `,
  };

  return healthPredictions[zodiacSign] || "Each zodiac sign brings unique strengths and challenges. Focus on finding balance in your physical and mental well-being to achieve holistic health.";
};

// Function to provide Health and Wellness Predictions based on Life Path Number
const getLifePathNumberHealthPredictions = (lifePathNumber) => {
  const healthPredictions = {
      1: `
      🌟 *Health & Wellness for Life Path Number 1* 🌟
      - *Physical Health*: Your high energy levels can lead to exhaustion if not managed well. While you enjoy being active and taking charge, it’s important to pace yourself and avoid overexertion.

      - *Mental Well-being*: You may feel pressured to succeed or lead, which can cause stress. Incorporate mindfulness techniques into your daily routine to maintain balance and focus.

      - *Actionable Tips*:
        - Engage in high-intensity exercises, but ensure you have proper rest periods to recharge.
        - Practice meditation or journaling to manage mental stress and clear your thoughts.
        - Wear red or shades of orange to boost your natural leadership qualities, but ensure you also engage in calming practices.
      `,
      2: `
      🌟 *Health & Wellness for Life Path Number 2* 🌟
      - *Physical Health*: Your focus on partnership can lead to neglecting your own health. It’s important to prioritize self-care while supporting others.

      - *Mental Well-being*: Sensitivity and empathy can lead to emotional exhaustion. Make time for activities that recharge you.

      - *Actionable Tips*:
        - Practice yoga or meditation to maintain inner peace.
        - Ensure you get enough rest and manage stress effectively.
        - Surround yourself with supportive people who uplift your spirits.
      `,
      3: `
      🌟 *Health & Wellness for Life Path Number 3* 🌟
      - *Physical Health*: Creativity and self-expression are essential for your well-being. Engage in physical activities that allow you to express yourself, such as dance or art.

      - *Mental Well-being*: You may struggle with self-doubt. Surround yourself with positive influences and express your feelings openly.

      - *Actionable Tips*:
        - Participate in group activities that encourage creativity and connection.
        - Maintain a balanced diet to support your energy levels.
        - Keep a journal to express your thoughts and emotions.
      `,
      4: `
      🌟 *Health & Wellness for Life Path Number 4* 🌟
      - *Physical Health*: Structure and routine are key for you. A disciplined exercise regimen will help maintain your health.

      - *Mental Well-being*: Overthinking and self-criticism can lead to stress. Focus on self-compassion and positivity.

      - *Actionable Tips*:
        - Engage in regular workouts that emphasize stability and strength.
        - Practice mindfulness to quiet your analytical mind.
        - Set realistic goals for your health and well-being.
      `,
      5: `
      🌟 *Health & Wellness for Life Path Number 5* 🌟
      - *Physical Health*: You thrive on movement and adventure. Find activities that challenge you and keep you engaged.

      - *Mental Well-being*: Routine can feel stifling, so allow for spontaneity in your life. Embrace new experiences to avoid feeling restless.

      - *Actionable Tips*:
        - Incorporate outdoor activities or travel into your routine.
        - Stay active with diverse workouts that keep you excited.
        - Avoid overindulgence to maintain your vitality.
      `,
      6: `
      🌟 *Health & Wellness for Life Path Number 6* 🌟
      - *Physical Health*: Nurturing others is in your nature, but don’t forget to care for yourself. Balance your responsibilities with self-care.

      - *Mental Well-being*: Emotional stress can arise from caretaking. Engage in activities that bring you joy and relaxation.

      - *Actionable Tips*:
        - Schedule time for hobbies that rejuvenate your spirit.
        - Practice gratitude to maintain a positive mindset.
        - Engage in family or community activities that fulfill your nurturing side.
      `,
      7: `
      🌟 *Health & Wellness for Life Path Number 7* 🌟
      - *Physical Health*: Solitude is important for your health. Engage in activities that allow for introspection and peace.

      - *Mental Well-being*: You may struggle with isolation. Build a supportive network to share your thoughts and feelings.

      - *Actionable Tips*:
        - Practice meditation and reflection regularly.
        - Take nature walks to connect with your surroundings.
        - Engage in hobbies that stimulate your intellect.
      `,
      8: `
      🌟 *Health & Wellness for Life Path Number 8* 🌟
      - *Physical Health*: Ambition drives you, but it’s important to balance work and relaxation. Avoid burnout by managing your workload.

      - *Mental Well-being*: Stress from responsibilities can take a toll. Make time for leisure and hobbies.

      - *Actionable Tips*:
        - Schedule regular breaks and downtime to recharge.
        - Engage in strength training or team sports to balance your competitive spirit.
        - Practice stress-relief techniques like yoga or tai chi.
      `,
      9: `
      🌟 *Health & Wellness for Life Path Number 9* 🌟
      - *Physical Health*: A year of service and giving back. You’ll find fulfillment in helping others, but don’t neglect your personal goals. Stay focused on your own growth while supporting others.

      - *Mental Well-being*: Emotional health is important. Engage in spiritual practices to maintain balance.

      - *Actionable Tips*:
        - Engage in volunteer work to fulfill your humanitarian side while taking care of yourself.
        - Practice meditation to ground yourself emotionally.
        - Create healthy boundaries to protect your energy.
      `,
      11: `
      🌟 *Health & Wellness for Life Path Number 11* 🌟
      - *Physical Health*: You have a heightened sensitivity to your environment. Create a calming space for yourself to thrive.

      - *Mental Well-being*: Intuition is your strength, but don’t neglect your emotional health. Engage in creative outlets to express your feelings.

      - *Actionable Tips*:
        - Engage in creative activities that allow for self-expression.
        - Spend time in nature to restore your energy.
        - Practice mindfulness to manage emotional intensity.
      `,
      22: `
      🌟 *Health & Wellness for Life Path Number 22* 🌟
      - *Physical Health*: Your visionary abilities can lead to stress when faced with overwhelming responsibilities. Focus on your physical health to support your ambitions.

      - *Mental Well-being*: Balance your ambitious nature with relaxation techniques. Avoid getting lost in your goals.

      - *Actionable Tips*:
        - Engage in team sports or group activities to foster collaboration.
        - Set achievable goals to avoid feelings of being overwhelmed.
        - Incorporate relaxation practices like deep breathing or yoga into your routine.
      `,
  };

  return healthPredictions[lifePathNumber] || "Your Life Path Number offers unique insights into your physical and emotional health. Practice balance in all areas to maintain holistic well-being.";
};

// Main function to handle Health and Wellness Predictions
const handleHealthAndWellnessPredictions = async (dob) => {
  const lifePathNumber = calculateLifePathNumber(dob);
  const zodiacSign = getZodiacSign(dob);

  // Get health predictions based on life path number and zodiac sign
  const zodiacHealthPrediction = getZodiacSignHealthPredictions(zodiacSign);
  const lifePathHealthPrediction = getLifePathNumberHealthPredictions(lifePathNumber);

  return `
  🌿 *Personalized Health & Wellness Predictions for ${zodiacSign} (Life Path ${lifePathNumber})* 🌿

  1. *Zodiac Sign Health Insights*: 
  ${zodiacHealthPrediction}

  2. *Life Path Number Health Insights*: 
  ${lifePathHealthPrediction}
  `;
};

module.exports = { handleHealthAndWellnessPredictions };
