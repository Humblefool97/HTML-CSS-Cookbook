//Arrow functions are simplified form of Anonymous functions
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//They work well with higher order functions (functions taking other functions as arguments)
//Ex: Find the squares of positive integers in the array
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  return arr
    .filter((num) => num > 0 && Number.isInteger(num))
    .map((num) => num * num);
};
console.log(squareList(realNumberArray));
