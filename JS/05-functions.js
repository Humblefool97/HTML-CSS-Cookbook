//Example function
function foo() {
  console.log("Hello JS!");
}

foo();

function fooWithArgs(a, b) {
  console.log(a + " " + b);
}

fooWithArgs(10, "String");

//Global scope: Variable defined outside of function
//Can be accessed anywhere
var myGlobal = 10;

function fun1() {
  //NOTE:Since no var is mentioned.It Automatically becomes var & hence can be accessed anywhere
  variableWithoutVar = 5;
  console.log(myGlobal);
  console.log(variableWithoutVar);
}

function fun2() {
  console.log(myGlobal);
  console.log(variableWithoutVar);
}

fun1();
fun2();

//Variables declared inside a function, have function scope
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
// console.log("Accessing myVar from aboved function:- " + myVar); //Error in Execution : "ReferenceError: myVar is not defined"

//Possible to have local & global vars with same name
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "Sweater";
  return outerWear;
}

console.log(myOutfit()); //Sweater
console.log("Global var :- " + outerWear); //T-Shirt

//Note: If you dont mention return statment.It is of type undefined
