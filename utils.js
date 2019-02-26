export const getRandomElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};

export const shufflePandas = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const createPandaArray = (numOfPairs, possiblePandas) => {
  newArray = [];
  for (i = 0; i < numOfPairs; i++) {
    let newPanda = getRandomElement(possiblePandas);
    newArray.push(newPanda);
  }
  duplicateArray = newArray.slice();
  finalArray = newArray.concat(duplicateArray);
  return shufflePandas(finalArray);
};
