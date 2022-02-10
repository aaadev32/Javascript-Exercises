const ftoc = function (Fahrenheit) {
  let celsius = Math.round((Fahrenheit - 32) * 5 / 9 * 10) / 10;

  return celsius;
};

const ctof = function (Celsius) {
  let Fahrenheit = Math.round((Celsius * 9 / 5 + 32) * 10) / 10;

  return Fahrenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
