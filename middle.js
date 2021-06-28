const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} != ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } return true;
}

const middle = function (arr) {
  newArr = [];
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  } 
  newArr.push(arr[(arr.length / 2) - 1]);
  newArr.push(arr[(arr.length / 2)]);
  return newArr;
}

