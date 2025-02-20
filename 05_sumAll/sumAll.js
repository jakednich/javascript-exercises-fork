const sumAll = function(arg1, arg2) {
    if (typeof(arg1) !== 'number' || 
        typeof(arg2) !== 'number' ||
        !Number.isInteger(arg1) ||
        !Number.isInteger(arg2) ||
        arg1 < 0 ||
        arg2 < 0) { 
        return 'ERROR';
    } 

    let sum = 0;
    let start = Math.min(arg1, arg2);
    let end = Math.max(arg1, arg2);

    for (let i = start; i <= end; i++) {
        sum += i;
    } return sum;
};


// TODO
// function that takes two integers as arguments
// takes every number between the arguments and sums them including args

// Do not edit below this line
module.exports = sumAll;
