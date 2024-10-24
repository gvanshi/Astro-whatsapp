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

// Function to provide Career Guidance based on Zodiac Sign
const getZodiacSignCareerGuidance = (zodiacSign) => {
  const careerGuidance = {
      Aries: `
      *Career Guidance for Aries* 🐂  
      - *Strengths*: Aries are natural-born leaders with an innate ability to inspire and motivate those around them. Your confidence, assertiveness, and enthusiasm make you perfect for roles that require initiative and quick decision-making. You thrive in high-energy, competitive environments and are not afraid to take calculated risks.  

      - *Ideal Careers*: Entrepreneur, Military, Sports Coach, Emergency Services, Sales Executive, CEO  

      - *Challenges*: Your impatience can lead to rash decisions, while your competitive nature may result in conflicts with colleagues. Additionally, the drive to constantly pursue new challenges can lead to burnout if not managed properly.  

      - *Actionable Tips*:  
          - Seek leadership roles or entrepreneurial ventures where you can take charge and make impactful decisions.  
          - Practice mindfulness and patience to temper impulsive behavior.  
          - Schedule regular downtime and hobbies outside of work to recharge and maintain work-life balance.  
      `,

      Taurus: `
      *Career Guidance for Taurus* 🐂  
      - *Strengths*: Taurus is known for being patient, reliable, and hardworking. You value stability and are motivated by tangible results, making you well-suited for careers that offer long-term security and rewards.  

      - *Ideal Careers*: Finance, Real Estate, Architecture, Agriculture, Music, Art  

      - *Challenges*: Your resistance to change can prevent you from pursuing new opportunities, while a chaotic work environment may heighten your stress levels.  

      - *Actionable Tips*:  
          - Seek stable roles where your reliability and diligence are valued, such as in finance or project management.  
          - Be open to gradual change; consider exploring new roles or projects that challenge your comfort zone.  
          - Incorporate stress management techniques like yoga, meditation, or time in nature to maintain calm under pressure.  
      `,

      Gemini: `
      *Career Guidance for Gemini* 🌬  
      - *Strengths*: Geminis are adaptable, communicative, and possess a thirst for knowledge. You excel in dynamic environments that require quick thinking and effective communication, making you great in roles that require constant interaction with others.  

      - *Ideal Careers*: Journalism, Writing, Public Relations, Marketing, Teaching, Travel Industry  

      - *Challenges*: Your tendency to get bored quickly may lead to job-hopping or a lack of focus, which can hinder your long-term career growth.  

      - *Actionable Tips*:  
          - Look for jobs that offer variety and opportunities for learning and development.  
          - Work on honing your focus; consider techniques such as the Pomodoro Technique to manage your attention.  
          - Consider communication-centric roles in tech or media, where your adaptability shines.  
      `,

      Cancer: `
      *Career Guidance for Cancer* 🌊  
      - *Strengths*: Cancers are nurturing, empathetic, and protective. You excel in roles that involve caring for others and creating a supportive environment, especially in family-oriented or community-based careers.  

      - *Ideal Careers*: Healthcare, Social Work, Childcare, Education, Hospitality, Psychology  

      - *Challenges*: Your emotional sensitivity can lead to taking workplace issues personally, which may affect your professional relationships.  

      - *Actionable Tips*:  
          - Pursue careers that allow you to nurture and support others, such as in healthcare or counseling.  
          - Set clear emotional boundaries to protect yourself from burnout, especially in caregiving roles.  
          - Look for flexible job options that offer work-life balance and allow you to recharge emotionally.  
      `,

      Leo: `
      *Career Guidance for Leo* 🦁  
      - *Strengths*: Leos are confident, charismatic, and creative individuals. You thrive in roles that allow you to lead, perform, and express your creative flair. Your ability to inspire others can make you a natural fit for leadership and creative positions.  

      - *Ideal Careers*: Entertainment, Acting, Public Speaking, Politics, Fashion, Creative Arts  

      - *Challenges*: Your strong desire for recognition may lead to pride, and it’s essential to remain humble and collaborative to build effective relationships.  

      - *Actionable Tips*:  
          - Seek leadership roles where your confidence can shine, such as in management or project leadership.  
          - Utilize your creativity in fields like entertainment, marketing, or design to express yourself.  
          - Practice humility and teamwork to maintain positive relationships and avoid conflicts.  
      `,

      Virgo: `
      *Career Guidance for Virgo* 🌾  
      - *Strengths*: Virgos are detail-oriented, analytical, and practical, excelling in roles that require organization and problem-solving. Your meticulous nature allows you to produce high-quality work in a structured environment.  

      - *Ideal Careers*: Healthcare, Research, Accounting, Editing, Data Analysis, Engineering  

      - *Challenges*: Your perfectionist tendencies may lead to overworking, burnout, or difficulty accepting that not everything can be perfect.  

      - *Actionable Tips*:  
          - Seek careers that utilize your analytical skills and attention to detail, like in research or data analysis.  
          - Learn to delegate tasks and understand that “good enough” can be acceptable in many scenarios.  
          - Incorporate breaks and stress-relief practices into your routine to maintain mental clarity.  
      `,

      Libra: `
      *Career Guidance for Libra* ⚖️  
      - *Strengths*: Libras are diplomatic, fair, and value harmony. You thrive in careers that involve building relationships, resolving conflicts, and working in aesthetically pleasing environments.  

      - *Ideal Careers*: Law, Mediation, Diplomacy, Design, Fashion, Art  

      - *Challenges*: Your indecisiveness can slow down your progress, while a strong desire to please others may lead to unnecessary stress.  

      - *Actionable Tips*:  
          - Pursue roles that leverage your negotiation skills and love for harmony, such as in law or mediation.  
          - Practice decisive actions and trust your instincts to avoid procrastination and missed opportunities.  
          - Explore creative fields that allow you to express your aesthetic sensibilities while contributing to society.  
      `,

      Scorpio: `
      *Career Guidance for Scorpio* 🦂  
      - *Strengths*: Scorpios are intense, determined, and resourceful. You excel in careers that require research, investigation, and a deep emotional involvement. Your ability to understand complex issues makes you a valuable team member.  

      - *Ideal Careers*: Psychology, Research, Investigation, Law, Medicine, Forensics  

      - *Challenges*: Your intensity can sometimes lead to power struggles at work, making it crucial to practice trust and cooperation.  

      - *Actionable Tips*:  
          - Choose careers that allow for deep dives into complex subjects, such as research or forensic science.  
          - Work on collaboration and avoid engaging in office politics or power struggles.  
          - Utilize your emotional intelligence in roles like psychology or counseling to connect with others on a deeper level.  
      `,

      Sagittarius: `
      *Career Guidance for Sagittarius* 🏹  
      - *Strengths*: Sagittarius individuals are adventurous, optimistic, and have a love for learning. You thrive in careers that involve travel, education, and constant growth. Your enthusiasm can inspire those around you.  

      - *Ideal Careers*: Travel, Education, Publishing, Adventure Sports, Entrepreneurship  

      - *Challenges*: Your restless nature can lead to impatience and boredom, especially in routine jobs. Seek variety in your work to maintain interest.  

      - *Actionable Tips*:  
          - Pursue careers that allow for exploration and learning, such as travel or education.  
          - Avoid rigid job structures; look for roles that provide freedom and creativity.  
          - Stay committed to long-term goals, especially in entrepreneurship, where the rewards are often delayed but significant.  
      `,

      Capricorn: `
      *Career Guidance for Capricorn* 🏔  
      - *Strengths*: Capricorns are disciplined, ambitious, and hardworking. You excel in structured environments that offer the opportunity for steady advancement and long-term success. Your ability to set and achieve goals is commendable.  

      - *Ideal Careers*: Finance, Business, Management, Engineering, Government, Law  

      - *Challenges*: An intense focus on success can lead to workaholism, making it crucial to maintain a work-life balance to avoid burnout.  

      - *Actionable Tips*:  
          - Seek careers that allow for steady advancement and the opportunity to reach long-term goals.  
          - Establish work-life balance by setting boundaries between work and personal time.  
          - Use your strategic thinking in management roles to maximize efficiency and productivity.  
      `,

      Aquarius: `
      *Career Guidance for Aquarius* 🌬  
      - *Strengths*: Aquarians are innovative, independent thinkers who thrive in environments that allow for creativity and unique ideas. You excel in fields that embrace change and technology.  

      - *Ideal Careers*: Technology, Science, Innovation, Social Work, Activism, Engineering  

      - *Challenges*: Your independent streak may make it challenging to work in highly structured environments. It’s essential to find a balance between collaboration and autonomy.  

      - *Actionable Tips*:  
          - Pursue careers in innovative fields such as technology or social activism where your ideas can flourish.  
          - Embrace opportunities that allow for independent work while also seeking collaboration on larger projects.  
          - Stay open to team dynamics to enhance your creative contributions.  
      `,

      Pisces: `
      *Career Guidance for Pisces* 🌊  
      - *Strengths*: Pisces individuals are imaginative, compassionate, and intuitive. You thrive in careers that allow for creative expression or involve helping others. Your empathetic nature makes you a great team player.  

      - *Ideal Careers*: Art, Music, Counseling, Healing, Writing, Spiritual Guidance  

      - *Challenges*: Your sensitivity can lead to emotional exhaustion if you take on too much. It’s essential to practice self-care and set boundaries.  

      - *Actionable Tips*:  
          - Pursue careers that tap into your creativity or allow you to support others emotionally.  
          - Engage in self-care routines to maintain emotional health, especially in caregiving roles.  
          - Set boundaries to protect your energy and avoid taking on too much responsibility.  
      `,
  };

  return careerGuidance[zodiacSign] || "Your zodiac sign brings unique strengths to the workplace. Focus on aligning your career path with your natural talents and abilities for the greatest success.";
};


// Function to provide Career Guidance based on Life Path Number
const getLifePathNumberCareerGuidance = (lifePathNumber) => {
  const careerGuidance = {
      1: `
      🌟 *Career Guidance for Life Path Number 1* 🌟  
      - *Strengths*: You are a natural-born leader, driven, ambitious, and self-motivated. Your assertiveness and confidence make you well-suited for roles that require taking charge and making tough decisions. Your ability to innovate can lead to groundbreaking ideas in your field.  

      - *Ideal Careers*: Entrepreneur, CEO, Management Consultant, Military Officer, Politician  

      - *Challenges*: Your strong desire for independence can make it hard to accept authority or collaborate effectively. This can lead to conflicts in team environments.  

      - *Actionable Tips*:  
          - Pursue leadership roles or start your own business where your ambition and vision can shine.  
          - Focus on developing teamwork and delegation skills to enhance collaboration.  
          - Practice patience and avoid impulsive decision-making to ensure thoughtful choices in your career.  
      `,

      2: `
      🌟 *Career Guidance for Life Path Number 2* 🌟  
      - *Strengths*: You are a natural mediator with a gift for diplomacy. Your sensitivity and intuition make you skilled at understanding others' needs, fostering cooperation, and resolving conflicts. You thrive in environments where teamwork and collaboration are valued.  

      - *Ideal Careers*: Counseling, Mediation, Human Resources, Social Work, Diplomacy  

      - *Challenges*: Your desire to avoid conflict may cause you to shy away from leadership roles or assertive situations. You might struggle with decision-making due to a fear of upsetting others.  

      - *Actionable Tips*:  
          - Seek out careers that allow you to mediate or negotiate, utilizing your interpersonal skills.  
          - Work on asserting your opinions and decisions to enhance your leadership potential.  
          - Focus on setting personal boundaries to avoid burnout from the emotional labor of helping others.  
      `,

      3: `
      🌟 *Career Guidance for Life Path Number 3* 🌟  
      - *Strengths*: You are creative, expressive, and sociable. Your charisma and communication skills enable you to excel in roles that allow for artistic expression and creativity. You thrive in environments that encourage collaboration and teamwork.  

      - *Ideal Careers*: Writing, Art, Entertainment, Teaching, Public Relations  

      - *Challenges*: Your creative nature can sometimes lead to indecisiveness and a lack of focus on long-term goals. You might struggle with commitment, leading to a tendency to jump from one project to another.  

      - *Actionable Tips*:  
          - Pursue careers that provide a platform for creative expression and allow for teamwork.  
          - Establish clear goals and deadlines to maintain focus and drive towards completion.  
          - Engage in social activities and creative endeavors that foster both creativity and interpersonal connections.  
      `,

      4: `
      🌟 *Career Guidance for Life Path Number 4* 🌟  
      - *Strengths*: You are practical, organized, and diligent. Your attention to detail and strong work ethic enable you to excel in structured environments. You approach tasks with a methodical mindset, ensuring high-quality results.  

      - *Ideal Careers*: Engineering, Architecture, Project Management, Accounting, Operations Management  

      - *Challenges*: Your need for structure may lead to rigidity and resistance to change. You might struggle with flexibility in dynamic environments.  

      - *Actionable Tips*:  
          - Choose careers that leverage your organizational skills and focus on long-term projects with clear outcomes.  
          - Practice adaptability and openness to new ideas to enhance your problem-solving abilities.  
          - Balance your work with relaxation techniques such as mindfulness or hobbies to prevent burnout.  
      `,

      5: `
      🌟 *Career Guidance for Life Path Number 5* 🌟  
      - *Strengths*: You are adventurous, adaptable, and love variety. Your desire for new experiences and knowledge allows you to thrive in dynamic environments that require flexibility. You excel in roles that involve change, exploration, and interaction with diverse groups of people.  

      - *Ideal Careers*: Travel Writer, Sales, Marketing, Journalism, Adventure Sports, Event Management  

      - *Challenges*: Your restless nature may lead to impatience or a lack of focus, making it challenging to commit to long-term goals. You may find routine jobs unfulfilling.  

      - *Actionable Tips*:  
          - Pursue careers that involve exploration and continuous learning, such as in travel or sales.  
          - Avoid rigid job structures and repetitive tasks; seek out roles that offer variety and freedom.  
          - Stay committed to your long-term goals, even when immediate results aren’t visible, by breaking them down into achievable steps.  
      `,

      6: `
      🌟 *Career Guidance for Life Path Number 6* 🌟  
      - *Strengths*: You are nurturing, responsible, and compassionate. Your ability to care for others allows you to excel in supportive roles. You thrive in environments that prioritize helping and nurturing those around you.  

      - *Ideal Careers*: Healthcare, Education, Social Work, Counseling, Humanitarian Work  

      - *Challenges*: Your desire to care for others may lead you to neglect your own needs, risking burnout. You might struggle with self-assertion in demanding environments.  

      - *Actionable Tips*:  
          - Choose careers that allow you to support and guide others, ensuring that your empathy is valued.  
          - Prioritize self-care practices to maintain emotional and physical well-being.  
          - Set clear boundaries to ensure your own needs are met while helping others, and learn to say no when necessary.  
      `,

      7: `
      🌟 *Career Guidance for Life Path Number 7* 🌟  
      - *Strengths*: You are analytical, introspective, and intuitive. Your ability to think deeply allows you to excel in roles that require research, analysis, and critical thinking. You thrive in environments that encourage intellectual exploration.  

      - *Ideal Careers*: Research, Science, Psychology, Spiritual Guidance, Writing  

      - *Challenges*: Your introspective nature may lead to feelings of isolation or disconnection from others. You might struggle with sharing your insights or collaborating effectively.  

      - *Actionable Tips*:  
          - Pursue careers that allow for in-depth exploration and analytical thinking, such as in research or psychology.  
          - Engage in social activities to maintain a healthy balance with others and prevent isolation.  
          - Share your insights and knowledge to foster connections and help others grow.  
      `,

      8: `
      🌟 *Career Guidance for Life Path Number 8* 🌟  
      - *Strengths*: You are ambitious, powerful, and resourceful. Your drive for success enables you to excel in leadership roles where strategic planning is key. You thrive in competitive environments where your skills can shine.  

      - *Ideal Careers*: Business Executive, Management Consultant, Finance, Law, Real Estate  

      - *Challenges*: Your strong ambition may lead to workaholism or neglect of personal relationships. It’s crucial to maintain balance and not let your career consume your life.  

      - *Actionable Tips*:  
          - Choose careers that leverage your leadership skills and strategic thinking, allowing you to climb the corporate ladder.  
          - Practice work-life balance by setting boundaries and allocating time for personal life and relaxation.  
          - Focus on long-term goals and avoid getting caught up in immediate results; remember to celebrate small victories along the way.  
      `,

      9: `
      🌟 *Career Guidance for Life Path Number 9* 🌟  
      - *Strengths*: You are compassionate, idealistic, and humanitarian. Your ability to empathize with others enables you to excel in roles that make a difference in people's lives. You thrive in environments that align with your values and allow you to contribute positively to society.  

      - *Ideal Careers*: Social Work, Charity, Teaching, Counseling, Activism  

      - *Challenges*: Your desire to help others may lead to neglecting your own needs, risking burnout. You might struggle with taking on too much responsibility.  

      - *Actionable Tips*:  
          - Choose careers that align with your humanitarian values and allow you to make a positive impact.  
          - Prioritize self-care to maintain balance and avoid emotional exhaustion.  
          - Set clear boundaries to ensure your own needs are met while helping others, and avoid taking on more than you can handle.  
      `,

      11: `
      🌟 *Career Guidance for Life Path Number 11* 🌟  
      - *Strengths*: You are intuitive, visionary, and inspirational. Your ability to connect with others on a deep level allows you to excel in creative and spiritual careers. You thrive in environments that encourage self-expression and personal growth.  

      - *Ideal Careers*: Counseling, Coaching, Art, Healing, Spiritual Guidance  

      - *Challenges*: Your heightened sensitivity may lead to overwhelm in stressful environments. It’s important to practice grounding techniques to stay centered.  

      - *Actionable Tips*:  
          - Pursue careers that align with your intuition and allow for creative expression, such as art or healing professions.  
          - Incorporate grounding practices like meditation or spending time in nature to maintain emotional stability.  
          - Share your insights and knowledge to inspire and uplift others in your professional and personal life.  
      `,

      22: `
      🌟 *Career Guidance for Life Path Number 22* 🌟  
      - *Strengths*: You are practical, powerful, and possess a strong vision. Your ability to think big allows you to excel in roles that involve large-scale projects and leadership. You thrive in structured environments where your organizational skills can shine.  

      - *Ideal Careers*: Architecture, Engineering, Project Management, Entrepreneurship, Urban Planning  

      - *Challenges*: Your high expectations may lead to stress and burnout. It’s crucial to practice self-care and manage your ambitions realistically.  

      - *Actionable Tips*:  
          - Choose careers that utilize your strategic thinking and leadership abilities to make a significant impact.  
          - Practice self-care to maintain balance and prevent overwhelm from your ambitions.  
          - Focus on long-term goals and avoid getting caught up in immediate results; break your larger goals into manageable steps.  
      `,
  };

  return careerGuidance[lifePathNumber] || "Your Life Path Number offers unique insights into your career. Focus on aligning your career path with your strengths and natural talents for success.";
};

// Main function to handle Career Guidance
const handleCareerGuidance = async (dob) => {
  const lifePathNumber = calculateLifePathNumber(dob);
  const zodiacSign = getZodiacSign(dob);

  // Get career guidance based on life path number and zodiac sign
  const zodiacCareerGuidance = getZodiacSignCareerGuidance(zodiacSign);
  const lifePathCareerGuidance = getLifePathNumberCareerGuidance(lifePathNumber);

  return `
  🌟 *Personalized Career Guidance for ${zodiacSign} (Life Path ${lifePathNumber})* 🌟

  1. *Zodiac Sign Career Insights*: 
  ${zodiacCareerGuidance}

  2. *Life Path Number Career Insights*: 
  ${lifePathCareerGuidance}
  `;
};

module.exports = { handleCareerGuidance };
