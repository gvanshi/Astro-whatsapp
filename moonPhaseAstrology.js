const { getMoonPhase } = require('./moonphase');  // Moon phase package to calculate moon phase

// Function to get the astrological significance of each moon phase
const getMoonPhaseAstrology = (phase) => {
    const moonPhaseAstrology = {
        "New Moon": `
        🌑 *New Moon* 🌑

        - *Astrological Significance*: The New Moon is a powerful and sacred time in astrology. It symbolizes the beginning of a new cycle, a blank slate where we can set our intentions and focus on what we want to create or manifest in the coming weeks. Think of it as the fertile soil where you plant the seeds of your desires.

        - *How It Affects You*: During the New Moon, you may feel quieter, more introspective, and reflective. It’s a time when your energy might be lower, but it’s the perfect opportunity to focus on what you want to grow in your life. This is the time for inner work, meditation, and envisioning your future. If you’ve been unsure about your next steps, this phase helps bring clarity.

        - *Actionable Tips*: 
          - Write down your goals or desires—whether they are related to your career, relationships, health, or personal growth. Be specific.
          - Meditate or reflect on what is no longer serving you, and release it to make room for new possibilities.
          - Keep a gratitude journal. By focusing on what you’re grateful for, you create space for more abundance.
          - Avoid taking major action just yet—this is the time for planning and setting intentions.
        `,
        
        "Waxing Crescent": `
        🌒 *Waxing Crescent* 🌒

        - *Astrological Significance*: As the moon starts to show more light, the Waxing Crescent phase is all about momentum. This is the time when the seeds you planted during the New Moon begin to sprout. The universe starts working with you to bring your intentions to life, but it requires action and belief on your part.

        - *How It Affects You*: You might notice an increase in energy, optimism, and motivation during this phase. The ideas you’ve been nurturing now feel more achievable, and you’re encouraged to take steps toward making them a reality. Challenges may arise, but they serve as opportunities to strengthen your resolve.

        - *Actionable Tips*:
          - Take small, actionable steps toward your goals. Even if it feels like you’re not moving fast, progress is happening.
          - Focus on maintaining a positive mindset. Self-doubt can creep in, but trust that you are on the right path.
          - It’s a good time to start new habits, whether it’s a fitness routine, learning something new, or cultivating a new mindset.
        `,

        "First Quarter": `
        🌓 *First Quarter* 🌓

        - *Astrological Significance*: The First Quarter Moon represents a moment of action and decision-making. It’s as if the universe is asking, “Are you serious about what you’re building?” This phase is about moving forward with determination and addressing any challenges that may arise. It’s a time of growth, but also of obstacles that test your commitment.

        - *How It Affects You*: You may feel an internal or external push to act decisively. Challenges may appear, whether it’s doubt from within or obstacles from the outside world. This phase requires persistence and a strong belief in your ability to achieve your goals.

        - *Actionable Tips*:
          - Confront any challenges head-on. Don’t be afraid to make decisions, even if they feel difficult.
          - Break down your goals into smaller steps. Sometimes challenges seem overwhelming because we look at the big picture. Taking it step by step helps ease anxiety.
          - Stay grounded. Engage in practices like yoga, journaling, or grounding meditations to stay balanced while navigating this intense energy.
        `,

        "Waxing Gibbous": `
        🌔 *Waxing Gibbous* 🌔

        - *Astrological Significance*: The Waxing Gibbous phase is a time for refining your plans and perfecting the steps you've taken so far. It’s a moment of preparation, where you fine-tune your actions before the Full Moon brings everything to light. This phase encourages you to pay attention to the details—whether in your work, relationships, or personal growth.

        - *How It Affects You*: You may feel the need to re-evaluate your goals and plans, looking for areas where you can make improvements. It’s a time to review what’s working and what’s not, and to adjust accordingly. Be patient with yourself, as the rewards of your hard work are just around the corner.

        - *Actionable Tips*:
          - Reflect on your progress and identify any adjustments you need to make. Are there habits, plans, or actions that need tweaking?
          - This is a time of patience—don’t rush the process. Trust that the Full Moon will reveal the results of your hard work.
          - Focus on self-care and balance. It’s easy to get caught up in the work, but remember that rest and reflection are essential to success.
        `,

        "Full Moon": `
        🌕 *Full Moon* 🌕

        - *Astrological Significance*: The Full Moon is one of the most powerful moments in the lunar cycle. It represents the peak of energy and illumination, where everything comes to the surface—both your successes and challenges. This is a time of culmination, celebration, and release. Whatever intentions you set during the New Moon are now manifesting, and you’re called to celebrate your wins while releasing what no longer serves you.

        - *How It Affects You*: Emotions tend to run high during the Full Moon. You may feel a sense of fulfillment and accomplishment, or you may feel the need to release something that’s been weighing you down. This is a time for heightened awareness—what was once hidden is now clear.

        - *Actionable Tips*:
          - Take time to celebrate your achievements. Even if they’re small, they’re steps toward your larger goals.
          - Release what no longer serves you—whether it’s an old habit, a toxic relationship, or self-doubt. Write it down and burn or shred the paper as a symbolic act of letting go.
          - Practice gratitude and focus on the positive changes in your life. Full Moons are ideal for gratitude rituals.
        `,

        "Waning Gibbous": `
        🌖 *Waning Gibbous* 🌖

        - *Astrological Significance*: After the intensity of the Full Moon, the Waning Gibbous phase invites reflection and sharing. It’s a time to give back, whether that’s through sharing your wisdom, helping others, or practicing gratitude. The energy is calming down, making it a perfect moment to focus on gratitude and service.

        - *How It Affects You*: You may feel a desire to slow down and reflect on the lessons of the past weeks. It’s a time for generosity and sharing, whether that’s offering your time, resources, or knowledge. You’re encouraged to think about how your journey can benefit others.

        - *Actionable Tips*:
          - Focus on what you’ve learned over the past cycle and consider how you can share those lessons with others.
          - Practice gratitude—whether through journaling, meditation, or acts of kindness.
          - Give back to your community or loved ones, whether through volunteer work, emotional support, or simply offering your time.
        `,

        "Last Quarter": `
        🌗 *Last Quarter* 🌗

        - *Astrological Significance*: The Last Quarter Moon is a time of release and letting go. It’s the phase where you reflect on what didn’t work, what you need to release, and how you can move forward. This is the moment to clear out old energy and make space for new growth in the next lunar cycle.

        - *How It Affects You*: You may feel an internal push to declutter—whether emotionally, mentally, or physically. This phase asks you to release anything that’s been holding you back, so you can start fresh when the New Moon arrives.

        - *Actionable Tips*:
          - Reflect on what no longer serves you, and release it. Whether it’s a mindset, a relationship, or an old habit, now is the time to let go.
          - Engage in decluttering, whether that’s cleaning out your physical space or releasing emotional baggage.
          - Focus on self-compassion as you release the old to make way for the new.
        `,

        "Waning Crescent": `
        🌘 *Waning Crescent* 🌘

        - *Astrological Significance*: The Waning Crescent Moon is the final phase of the lunar cycle, symbolizing rest, reflection, and preparation. It’s a quiet, introspective time where you focus on self-care and spiritual renewal. This is the time to recharge your energy before the New Moon brings a new cycle of creation.

        - *How It Affects You*: You may feel more tired or introspective during this phase, and that’s okay. This is a time for rest and healing, allowing you to prepare for the next chapter. Embrace this period of calm and reflection.

        - *Actionable Tips*:
          - Prioritize self-care and rest. Engage in gentle activities like meditation, reading, or spending time in nature.
          - Reflect on the lessons of the past month and prepare mentally for the new cycle.
          - Avoid starting anything new. Instead, focus on finishing old tasks and restoring your energy.
        `,
    };

    return moonPhaseAstrology[phase] || "The moon phase affects everyone differently. Pay attention to how you feel during each phase and align your actions with the natural rhythm of the moon.";
};

// Main function to handle Moon Phase and Astrology insights
const handleMoonPhaseAstrology = async () => {
    try {
        const moonPhase = getMoonPhase();  // Get the current moon phase

        const moonPhaseInsight = getMoonPhaseAstrology(moonPhase);
        return `
        🌙 *Current Moon Phase*: ${moonPhase} 🌙

        ${moonPhaseInsight}
        `;
    } catch (error) {
        console.error('Error fetching moon phase:', error);
        return "Sorry, I couldn't retrieve the moon phase information at the moment. Please try again later.";
    }
};

module.exports = { handleMoonPhaseAstrology };
