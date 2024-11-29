const palindromes = function (str) {
  const strLower = str.toLowerCase();
  const strArray = strLower.split('');
  const strArrayOnlyCharacters = strArray.filter((char) => {
    return char >= "a" || char <= "z"
  });

  for (let i = 0; i <= strArrayOnlyCharacters.length; ++i) {
    const frontLetter = strArrayOnlyCharacters[i];
    const backLetter = strArrayOnlyCharacters[-1 * (i + 1)];
    if (frontLetter !== backLetter) {
      return false;
    }
    return true;
  }
};

// Do not edit below this line
module.exports = palindromes;
