/* Binary Search a sroted array
  Input: a sorted array and a target number
  Output: index of target number in the array
  Constraint: Time => log n
  Edge case: If cannot find the target number, return -1
*/

const binarySearch = (arr, target) => {
  // set three index min, mid, max
  let min  = 0;
  let max = arr.length - 1;

  // if min <= max then compare mid indexed number with target number
  while (min <= max) {
    // create mid index
    let mid = Math.ceil((min + max) / 2);

    // if target number is equal to mid index number in the array then return mid
    if (target === arr[mid]) {
      return mid;
      continue;
    }

    // if target number is smaller than mid index number in the array, then search on left side of the array
    if (target < arr[mid]) {
      max = mid - 1;
    }

    // if target number is larger than mid index number in the array, then search on right side of the array
    if (target > arr[mid]) {
      min = mid + 1;
    }
  }

  // if min > max then return -1 (means the array doesn't contain target number)
  return -1;
}

module.exports = binarySearch;