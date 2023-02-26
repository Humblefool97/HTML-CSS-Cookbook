let profiles = [
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "23423423",
    likes: ["hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "13123123",
    likes: ["Intriguing cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "Unknown",
    likes: ["JS", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < profiles.length; i++) {
    if (profiles[i].firstName === name) {
      return profiles[i][prop] || "No such property";
    }
  }
  return "No such contacts";
}

var data = lookUpProfile("Sherlock", "likes");
console.log(data);
