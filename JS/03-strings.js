var fName = "Rajeev";
var lName = "Rang";

//use of escape characters or start a string with a Single quotes
var myStr = 'I am a "double quoted" string';
console.log(myStr);
//You can also you back quotes, where you can use single & double  quotes inside a string
myStr = `'I am a single quote' & "I am double quote"`;
console.log(myStr);

/**
 *  CODE OUTPUT
 *  \'   single quotes
 *  \""  double quotes
 *  \\   backslash
 *  \n   newline
 */

//String concatanation
var outStr = "I come first. " + "I come second.";
console.log(outStr);
//You can also use +=

//Using variables  to concatanate
var age = 23;
var concatanation = outStr + "My Age is " + age;
console.log(concatanation);

//Finding length
console.log("Length of concatanation is := " + concatanation.length);
console.log(
  "Last letter in the string := " + concatanation[concatanation.length - 1]
);
//String indexing
console.log("Character @ index 3:= " + concatanation[3]);

//String immutability
concatanation[3] = "H";
console.log(concatanation); // Not changed
