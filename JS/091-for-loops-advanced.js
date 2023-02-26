var array = [];
//Simple example
for (var i = 0; i < 5; i++) {
  array.push(i);
}
console.log(array);

var multiDimensional = [[1, 2, 3, 4], [4, 5], [6]];

let product = 1;
for (var row = 0; row < multiDimensional.length; row++) {
  for (var col = 0; col < multiDimensional[row].length; col++) {
    product *= multiDimensional[row][col];
  }
}
console.log("Product is:= " + product);

//Similarly there's do-while
