// Function to calculate the current moon phase
const getMoonPhase = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;  // JavaScript months are 0-11
    const day = today.getDate();

    // Convert the current date to a Julian date
    const julianDate = toJulianDate(year, month, day);

    // Calculate moon phase
    const moonCycleDays = 29.53058867;  // Average length of the moon cycle
    const knownNewMoonJulian = 2451550.1;  // A known New Moon Julian date (January 6, 2000)
    
    const daysSinceNewMoon = (julianDate - knownNewMoonJulian) % moonCycleDays;
    const moonPhase = (daysSinceNewMoon / moonCycleDays) * 100;  // Convert to percentage

    return getMoonPhaseName(moonPhase);
};

// Function to convert a Gregorian date to a Julian date
const toJulianDate = (year, month, day) => {
    if (month <= 2) {
        year -= 1;
        month += 12;
    }

    const A = Math.floor(year / 100);
    const B = 2 - A + Math.floor(A / 4);

    const julianDay = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
    return julianDay;
};

// Function to return the name of the moon phase based on the percentage of the cycle
const getMoonPhaseName = (moonPhasePercentage) => {
    if (moonPhasePercentage < 1 || moonPhasePercentage > 99) {
        return "New Moon";
    } else if (moonPhasePercentage < 25) {
        return "Waxing Crescent";
    } else if (moonPhasePercentage < 50) {
        return "First Quarter";
    } else if (moonPhasePercentage < 75) {
        return "Waxing Gibbous";
    } else if (moonPhasePercentage < 99) {
        return "Full Moon";
    } else if (moonPhasePercentage < 125) {
        return "Waning Gibbous";
    } else if (moonPhasePercentage < 150) {
        return "Last Quarter";
    } else {
        return "Waning Crescent";
    }
};

module.exports = { getMoonPhase };
