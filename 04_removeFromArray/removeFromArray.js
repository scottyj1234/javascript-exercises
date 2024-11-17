const removeFromArray = function(fullArray, ...elementsToRemove) {
  let resultArray = fullArray;
  for(let i = 0; i < elementsToRemove.length; i++) {
    const elementToRemove = elementsToRemove[i];
    let indexOfElement = resultArray.indexOf(elementToRemove);
    while (indexOfElement != -1) {
      resultArray.splice(indexOfElement, 1);
      indexOfElement = resultArray.indexOf(elementToRemove);
    }
  }

  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
