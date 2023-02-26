//before ES6(2015), only var
//You can use var & let

//Some of the main differences
//1.You can decalre  var with same name again in the scope but not in case of let
//2.Scope of let is limited to block statement it is declared in

function checkScope() {
  var i = "function scope";
  if (true) {
    //replace var to let to see the difference
    var i = "block scope";
    console.log("Block scope i is : ", i);
  }
  console.log("Function scope i is : ", i);
  return i;
}

checkScope();
