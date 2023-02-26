function greatestOfThree(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

console.log("Greatest of 10,14,2 is" + greatestOfThree(10, 14, 2));
