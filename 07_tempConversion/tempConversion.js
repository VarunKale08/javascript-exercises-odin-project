const convertToCelsius = function(inFahrenheit) {

  let getCelsius = (inFahrenheit - 32) * 5/9;

  // return getCelsius;
  return Math.round(getCelsius * 10) / 10
};

const convertToFahrenheit = function(inCelsius) {
  let getFahrenheit = (inCelsius * 9/5) + 32;

  // return getFahrenheit;
  return Math.round(getFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
