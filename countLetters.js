const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} != ${expected}`);
  }
}; 


const countLetters = function (str) {
  const results = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str [i];
    if (!results [letter]) {
      results [letter] = 1;
    } else {
      results [letter] ++;
    } 
  } return results;
}

console.log(countLetters('LHL'))