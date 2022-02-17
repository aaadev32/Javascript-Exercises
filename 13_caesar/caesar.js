const caesar = function (str, cipher) {
    let unicode = [];
    let encipheredUnicode = [];
    let result = '';
    let plaintext = str;

    //creates unicode array
    for (i = 0; i < plaintext.length; i++) {

        unicode[i] = plaintext.charCodeAt(i);

    }
    //console.log(unicode);

    //creates an enciphered unicode array if the unicode is a lower or uppercase char else the unicode value is unchanged
    for (i = 0; i < unicode.length; i++) {
        
        //this if statement will select lowercase letters for enciphering
        if (unicode[i] >= 97 && unicode[i] <= 122) {

           encipheredUnicode[i] = unicode[i] + cipher;

            //these nested if else statements loop lowercase letters when the cipher pushes them beyond their upper or lower unicode bounds which would otherwise make them non alphabetic characters.
            if (unicode[i] + cipher > 122) {
                encipheredUnicode[i] -= 26;
            } else if (unicode[i] + cipher < 97) {
                encipheredUnicode[i] += 26;
            }

        //this else if statement selects uppercase letters for enciphering
        } else if (unicode[i] >= 65 && unicode[i] <= 90) {

            encipheredUnicode[i] = unicode[i] + cipher;

            //these nested if else statements loop uppercase letters when the cipher pushes them beyond their upper or lower unicde bounds which would otherwise make them non alphabetic characters.
            if (unicode[i] + cipher < 65) {
                encipheredUnicode[i] += 26
            } else if (unicode[i] + cipher > 90) {
                encipheredUnicode[i] -= 26;
            }

        } else {
            //makes the cipher leave whitespace and punctuation unchanged
            encipheredUnicode[i] = unicode[i];
            //console.log(encipheredUnicode[i]);
        }
    }
    //console.log(encipheredUnicode);

    for (i = 0; i < encipheredUnicode.length; i++) {
        let tempChar = '';
        let tempConcat = '';
        tempChar = String.fromCharCode(encipheredUnicode[i]);
        //console.log(tempChar);
        result += tempConcat.concat(tempChar);
        //console.log(result);
    }

    return result;
};

// Do not edit below this line
module.exports = caesar;

