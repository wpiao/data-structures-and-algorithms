'use strict';

/*
  Insert and shift an array in middle at index
  Input: an array and a value to be added 
  Output: an array
  Constraint: do not use build-in function
  Edge cases: when the array is an empty array
*/

const insertShiftArray = (arr, num) => {
  const result = [];
  // handle edge case
  if (arr.length === 0) {
    result[0] = num;
  } else {
    // if the arry is not empty, find the mid index for insert point for both odd and even length of array
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((min + max) / 2) + 1;
    let resultIndex = 0;

    // iterate over first half of array and add each element to result array
    for (let i = 0; i < mid; i++) {
      result[resultIndex] = arr[i];
      // increment resultIndex
      resultIndex++;
    }

    // add the value to be added to the result array
    result[resultIndex] = num;
    // increment resultIndex
    resultIndex++;

    // iterate over second half of array and add each element to result array
    for (let i = mid; i <= max; i++) {
      result[resultIndex] = arr[i];
      // increment resultIndex
      resultIndex++;
    }
  }
  return result;
}

module.exports = insertShiftArray;