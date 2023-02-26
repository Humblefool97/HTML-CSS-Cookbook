function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  //When we dont want any of the items to change.It would throw TypeError
  //Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);
