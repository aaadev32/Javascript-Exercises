const palindromes = function (str) {

    let string = str.toLowerCase().replace(/[/\s+'!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g, "");
    let len = string.length;
    let x = true;

    for (let i = 0; i < len; i++) {
        if (string[i] != string[len -1 - i]) {
            x = false;
        }
    }
    return x;
}
// Do not edit below this line
module.exports = palindromes;
