const leapYears = function(year) {
    if (year < 400 &&
        year % 4 === 0 &&
        year % 100 !== 0) {
            return true
    }
    if (year>=400 &&
        year % 4 === 0 &&
        year % 400 === 0) {
            return true
        }
    if (year % 4 === 0 &&
        year % 100 !== 0) {
            return true
        }
    return false;
};

//leap years are divisible by 4
//years divisible by 100 are not leap years, unless they are also divisible by 400

// Do not edit below this line
module.exports = leapYears;
