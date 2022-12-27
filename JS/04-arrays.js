var ourArray = ["John", 23];
console.log(typeof ourArray); //Object
console.log(typeof ourArray[1]); //number

//Multidimensional array
var multiDimensional = [
  ["the universe", 42],
  [34, 56.5],
];
console.log(multiDimensional[0]); //[ 'the universe', 42 ]

//Changing array
ourArray[1] = 45;
console.log(ourArray); //[ 'John', 45 ]

//Append data with push()
var appendArray = ["Stimpson", "J", 43];
console.log("Array before append := " + appendArray);
appendArray.push(45.5);
console.log("Array after append := " + appendArray);
appendArray.push(["Key", 35]);
console.log("Array after second push := " + appendArray);

//Remove data using pop
console.log("Data from 1st pop := " + appendArray.pop()); //Key,35
console.log("Data from 2nd pop := " + appendArray.pop()); //45.5

var emptyArray = [];
console.log(emptyArray.pop()); //Undefined

//Shift array : Removes the first element
console.log("Removed first element := " + ourArray.shift()); //John

//Unshift : Adds elements to top
ourArray.unshift(["John", "Doe"]);
console.log("Add element to top := " + ourArray);
