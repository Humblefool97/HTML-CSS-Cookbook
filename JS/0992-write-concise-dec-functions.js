//Writing function inside an object
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

console.log(`Current gear ${bicycle.gear}`);
bicycle.setGear(3);
console.log(`Current gear ${bicycle.gear}`);
