const reverseString = function (string) {
    let reversal = [];
    let result = "";
    let length = string.length - 1;
    //loops through string input starting from the string length effectively creating a reversed string when iterated from 0 to string length
    for (i = length; i >= 0; i--) {
        reversal[i] = string[i];
        result += reversal[i];
    }
  return result;
}

// Do not edit below this line
module.exports = reverseString;
