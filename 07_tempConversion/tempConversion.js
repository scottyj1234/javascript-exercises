const convertToCelsius = function(degreesFahrenheit) {

  if (!isFinite(degreesFahrenheit)) {
    return "ERROR";
  }

  const fullResult = (degreesFahrenheit - 32) * 5 / 9;

  // round to 1 decimal
  return Math.round(fullResult * 10) / 10;
};

const convertToFahrenheit = function(degreesCelsius) {

  if (!isFinite(degreesCelsius)) {
    return "ERROR";
  }

  const fullResult = degreesCelsius * 9 / 5 + 32;

  // round to 1 decimal
  return Math.round(fullResult * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
