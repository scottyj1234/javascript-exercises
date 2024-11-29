const fibonacci = function(fibIndex) {
  if (fibIndex <= 0) {
    return 0;
  }

  if (fibIndex === 1) {
    return 1;
  }

  let num1 = 0;
  let num2 = 1;
  for (i = 0; i < (fibIndex - 1); ++i) {
    const nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }

  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
