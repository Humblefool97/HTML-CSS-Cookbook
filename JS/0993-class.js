class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("Carrot!");
console.log(carrot.name);

//Getters & Setters
function makeThermoStatClass() {
  class ThermoStat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return ThermoStat;
}

const ThermoStat = makeThermoStatClass();
const thermos = new ThermoStat(76);
//Using getter
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
