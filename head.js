const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
};

const head = function (array) {
  return array[0];
};

console.log(assertEqual(head(['Hello']), "Hello"));

