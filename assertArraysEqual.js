const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log('These arrays are equal');
  } else if (eqArrays(arr1, arr2) === false) {
    console.log('These arrays are not equal');
  }
}





