'use strict';

/* 
function reverseArray takes an array as an argument and it outputs an array with all the elements 
in original array in reversed order.
*/

const reverseArray = (arr) => {
  // make result array variable and initiate with empty array
  const result = [];

  // iterate over arr from its last element to first element and push each element to result array
  for (let i = arr.length - 1; i >= 0; i--) {
    const currentElement = arr[i];
    // push currentElement to result array
    result.push(currentElement);
  }

  // return result array
  return result;
}