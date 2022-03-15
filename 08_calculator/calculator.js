const add = function (num1, num2) {
  let result = num1 + num2;

  return result;

};

const subtract = function (num1, num2) {
  let result = num1 - num2;

  return result;

};

const sum = function (arr) {

  let sum = 0;

  if(arr.length <= 0){

      return sum;

  }else{

    for (i = 0; i < arr.length; i++) {

      sum += arr[i];

    }

    return sum;

  }
}


const multiply = function (arr) {

  let product = arr[0];

  if(arr.length <= 0){

      return product;

  }else{

    for (i = 1; i < arr.length; i++) {

      product *= arr[i];

    }

    return product;

  }
};

const power = function (int1, int2) {

  let pow = Math.pow(int1, int2);

  return pow;console.log(temp);
};

const factorial = function (int) {

  let result = 1;
  let temp = [];

  if(int == 0){

    return 1;

  }

  for(let i = 1; i <= int; i++){

    result = result *= i;

  }

  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
