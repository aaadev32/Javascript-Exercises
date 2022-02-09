const leapYears = function (year) {

    let x = "";

    if (year % 400 == 0) { // 1900 % 4 = 0 but year % 100 needs to return false
        x = 0;
    } else if (year % 4 != 0 || year % 100 == 0) {
        x = 1;
    }

    if (x == 0) {
        return true;
    } else if (x == 1) {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
