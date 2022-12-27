function testElse(val) {
  var result = "";

  if (val > 5) result = "Bigger than 5";
  else result = "5 or smaller";

  return result;
}
//Similarly you can also use : else if as well

//Using Switch statements
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break; //Don't forget break;
    case 2:
      answer = "beta";
      break;
    //Not mandatory.Compiler doesn't complain.But good practise
    default:
      answer = "wrong option";
  }

  return answer;
}

console.log(caseInSwitch(2)); //beta
console.log(caseInSwitch(10));
