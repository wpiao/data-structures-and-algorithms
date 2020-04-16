# data-structures-and-algorithms

1. ## Reverse an Array - 4/13/2020
function reverseArray takes an array as an argument and it outputs an array with all the elements in original array in reversed order.

### Solution
![reverse array](assets/array-reverse.png "reverseArray")

2. ##  - 4/14/2020

3. ## Array Binary Search - 4/15/2020
Binary search a sorted array.

### Challenge Description
Implement binary search to achieve log n time complexity.

### Approach & Efficiency
Compare target number with mid index element in the input array. If they are equal then return the current mid index. If target number is smaller than mid index number, then binary search only left portion of the array. If target number is larger than mid index number, then binary search only right portion of the array. If didn't find the target number, then return -1.</br>
The time complexity of this approach is log n.</br>
Test: from root folder, run command 'jest __tests__/array-binary-search.test.js '

### Solution
![binary search](assets/array-binary-search.png "binarySearch")
