//Rest helps to take variable number of args
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(3, 2, 3, 2, 1));

//Spread operator : Spreads out the contents of the array
const arr1 = ["JAN1", "FEB", "MAR", "APR"];
let arr2;
(function () {
  arr2 = arr1; // Replace this with [... arr1], which spreads out the content of arr1 & makes a copy
  arr2[0] = "Potato";
})();
console.log(arr2);
