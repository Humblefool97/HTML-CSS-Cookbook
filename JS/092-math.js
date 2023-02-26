function generateRandom() {
  //Generates between 0 & 1
  return Math.random();
}

/**
 * Generates a Random whole number
 * Math.Random generates betweeb 0 & 1.So multiply it by any number & get the floor of it
 * @returns a Random whole number
 */
function generateWholeNumber() {
  return Math.floor(Math.random() * 20);
}

/**
 * Generates  a random number in a Range
 */
function generateRandomWithRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandom());
console.log(`Generating random whole num ${generateWholeNumber()} `);
console.log(`Generating random whole num ${generateRandomWithRange(1, 2)} `);

//ParseInt function that takes String & Returns Integer
let numInString = "1";
let numInInt = parseInt(numInString);
console.log(`type of numInInt ${typeof numInInt} value is ${numInInt}`);
//You can also specify Radix
function convertToInt(str, radix) {
  return parseInt(str, radix);
}
console.log(convertToInt("1011", 2));
console.log(parseInt("hello!!!")); // NaN : Not a number
