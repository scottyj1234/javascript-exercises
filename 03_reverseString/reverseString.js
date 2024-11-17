const reverseString = function(forwardString) {
  const stringLength = forwardString.length;
  let result = "";
  for (let i = stringLength - 1; i >= 0; i--) {
    result += forwardString[i];
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;
