function returnBoolean() {
  return false;
}
var ret = returnBoolean();
console.log(typeof ret); //boolean

// === Strict equality operator(unlike strict equality operator).Considers type as well
console.log(3 == "3"); //TRUE
console.log(3 === "3"); //False
// !== Strict inequality operator can be used as well
