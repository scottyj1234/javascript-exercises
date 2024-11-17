const sumAll = function(firstInt, secondInt) {
  const lowerInt = Math.min(firstInt, secondInt);
  const upperInt = Math.max(firstInt, secondInt);
  let result = 0;
  for (let i = lowerInt; i <= upperInt; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
