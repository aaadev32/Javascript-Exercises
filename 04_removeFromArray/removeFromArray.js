const removeFromArray = function (Arr, ...Remove) {
    //"..." aka the spread operator is used to create an array of an unknown amount of parameters
    let length = Arr.length;
    let Rlength = Remove.length;
    //main and nested loop that iterates through the target array indexes and checks for matches to Remove.
    for (let i = 0; i < Rlength; i++) {
        for (let j = 0; j < length; j++) {
            //the Arr indexes get checked for matches and deleted with the splice function
            if (Arr[j] === Remove[i]) {
                Arr.splice(j, 1);
            }
        }
    }
    return Arr;
};

// Do not edit below this line
module.exports = removeFromArray;
