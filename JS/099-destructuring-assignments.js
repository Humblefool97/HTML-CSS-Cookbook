//Easier way of collecting variables from objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

//Old way
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//new way
const { x: a, y: b, z: c } = voxel;

//Ex:
const AVG_TEMP = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTomorrow(avgTemperatures) {
  // Get avgTemperature, get tomorrow & assign it to tempOfTomorrow
  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}
console.log(getTempOfTomorrow(AVG_TEMP));
//Using Nested objects
const LOCAL_FORECAST = {
  today: { max: 72, min: 60 },
  tomorrow: { max: 84.6, min: 73.3 },
};
function getMaxOfTomorrow(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}
