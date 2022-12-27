var ourDog = {
  name: "Camper",
  legs: 4,
  friends: ["EveryThing"],
  "new property": " Dummy",
};

//Accessing object(using . notation)
var dogName = ourDog.name;
console.log("Dog's name :- " + dogName);
//If the property name has space between the words.You can use . notation.Use [] instead
console.log(
  "Accessing property with space in between :- " + ourDog["new property"]
); //Dummy

//Also [] can be used to access properties using variables
var propName = "legs";
console.log("Accessing property using variable :- " + ourDog[propName]);

//Modifying values
ourDog.name = "Happy camper";
console.log("New name := " + ourDog.name); //Happy camper

//Adding property
ourDog["bark"] = "woof!!";
console.log("Accesing newly added property :- " + ourDog.bark); //Woof

//Deleting property
delete ourDog.bark;
console.log(ourDog); //Returns entire object without "bark" property

//Objects can also be used as Key-Value pairs for lookup
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "frank",
  };
  result = lookup[val];
  return result;
}

console.log(phoneticLookup("charlie"));

//Check object has a property using : hasOwnProperty
function checkObj(property) {
  var ret 
   if(ourDog.hasOwnProperty(property){
    ret = "has property "
  }else{
    ret = "not fount"
  }
  return ret
}
