const sumAll = function (sum1, sum2) {
    //if else if will subtract the lower sum from the greater sum and use that as an iterator count for the loop and use the lower sum as the start point
    let iteratedSum = 0;
    let start = 0;
    let counter = 0;

    if (Number.isInteger(sum1) == false || Number.isInteger(sum2) == false) {
        return "ERROR";
    } else if (sum2 > sum1) {
        counter = sum2 - sum1;
        start = sum1;
    } else if (sum1 > sum2) {
        counter = sum1 - sum2;
        start = sum2;
    }

    for (i = 0; i <= counter; i++) {
        iteratedSum += start;
        start++;
    }

    if (iteratedSum < 0) {
        return "ERROR";
    } else {
        return iteratedSum;
    }


};

// Do not edit below this line
module.exports = sumAll;