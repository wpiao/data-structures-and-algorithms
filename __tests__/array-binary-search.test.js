'use strict';

const binarySearch = require('../code-challenges/arrayBinarySearch/array-binary-search.js');

describe('Binary Search', () => {
  it('binary search test', () => {
    expect(binarySearch([1, 2, 3, 4, 5], -1)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toEqual(0);
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  });
});