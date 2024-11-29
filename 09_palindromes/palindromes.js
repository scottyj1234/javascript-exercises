const palindromes = function (str) {
  const strLower = str.toLowerCase();
  const strArray = strLower.split('');
  const strArrayOnlyCharacters = strArray.filter((char) => {
    return (char.localeCompare("a") >= 0 && char.localeCompare("z") <= 0) || (char.localeCompare("0") >= 0 && char.localeCompare("9") <= 0)
  });

  for (let i = 0; i <= strArrayOnlyCharacters.length / 2; ++i) {
    const frontLetter = strArrayOnlyCharacters.at(i);
    const backLetter = strArrayOnlyCharacters.at(-1 * (i + 1));
    console.log(`${frontLetter}; ${backLetter}`);
    if (frontLetter !== backLetter) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
