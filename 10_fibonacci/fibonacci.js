const fibonacci = function(fib) {
    let arr = [1,1];
    let sum = 0;
    let j = 1;
    let i = 0;

    if(fib < 0){
        return "OOPS";
    }

    while(i < fib){

        sum = arr[i] + arr[j];
        arr.push(sum);
        i++
        j++
        //console.log(arr)
    }
    return arr[fib - 1];

};

// Do not edit below this line
module.exports = fibonacci;
