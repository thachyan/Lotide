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

function spliceNoMutate(myArray,indexToRemove) {
  return myArray.slice(0,indexToRemove).concat(myArray.slice(indexToRemove+1));
}

const without = function (arr, remove) {
  let newArr = arr;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr [i] === remove [i]) {
      return spliceNoMutate(newArr, i);
    }
  } 
}






