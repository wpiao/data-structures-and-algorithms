'use strict';

const largestProduct = require('../code-challenges/largestProduct/largest-product.js');

describe('find largest product possible of 3 integers from within a list', () => {
  it('should return largest product when all numbers are positive', () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [7, 4, 8, 9, 10, 5];
    const arr3 = [18, 3, 42, 17, 9, 27];
    expect(largestProduct(arr1)).toEqual(120);
    expect(largestProduct(arr2)).toEqual(720);
    expect(largestProduct(arr3)).toEqual(20412);
  });

  it('should return largest product when list contains 0', () => {
    const arr1 = [-3, -5, 0, -7, 1, 20];
    const arr2 = [-5, -7, -1, -2, -10, 0, -11];
    const arr3 = [3, 6, 7, 2, 10, 0, 3];
    expect(largestProduct(arr1)).toEqual(700);
    expect(largestProduct(arr2)).toEqual(0);
    expect(largestProduct(arr3)).toEqual(420);
  });

  it('should return largest product when list contains both positive and negative number', () => {
    const arr1 = [4, 0, -5, 3, -1, -6, 2];
    const arr2 = [5, 6, -10, -7, 3, 8, 1];
    const arr3 = [-4, -5, -10, 2, 5, 6, 7, 10];
    expect(largestProduct(arr1)).toEqual(120);
    expect(largestProduct(arr2)).toEqual(560);
    expect(largestProduct(arr3)).toEqual(500);
  });

  it('should return largest product when list contains only negative number', () => {
    const arr1 = [-6, -8, -2, -5, -10];
    const arr2 = [-2, -3, -5, -6, -7, -4, -10];
    const arr3 = [-1, -2, -3, -4, -5, -6, -7];
    expect(largestProduct(arr1)).toEqual(-60);
    expect(largestProduct(arr2)).toEqual(-24);
    expect(largestProduct(arr3)).toEqual(-6);
  });
});
