// numerologyUtils.js
const calculateLifePathNumber = (dob) => {
    const digits = dob.replace(/\D/g, '');
    let sum = 0;

    for (let digit of digits) {
        sum += parseInt(digit, 10);
    }

    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
};

module.exports = { calculateLifePathNumber };
