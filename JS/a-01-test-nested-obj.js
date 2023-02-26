//Set up
var collection = {
  2548: {
    album: "Slippery when wet",
    artist: "Bon Jovi",
    tracks: ["Let it rock", "Yo give love a bad name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    artist: "Lol!",
  },
};
//Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    //If prop doesn't exist, create an array
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

console.log(updateRecords("5439", "artist", "ABBA"));
console.log(updateRecords("2468", "tracks", "test"));
