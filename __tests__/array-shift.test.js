'use strict';

const insertShiftArray = require('../code-challenges/arrayShift/array-shift.js');

describe('Insert a value in the middle of the array', () => {
  it('Test insertShiftArray function', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
    expect(insertShiftArray([], 5)).toEqual([5]);
  });
});