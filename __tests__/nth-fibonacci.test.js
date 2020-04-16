'use strict';

const { nthFibonacci1, nthFibonacci2 } = require('../code-challenges/nthFibonacci/nth-fibonacci.js');
// nthFibonacci1 is implemented in iterative method.
// nthFibonacci2 is implemented in recursive method. Do not test with large number for recursive method.

describe('nth Fibonacci: ', () => {
  it('iterative method', () => {
    expect(nthFibonacci1(0)).toEqual(0);
    expect(nthFibonacci1(1)).toEqual(1);
    expect(nthFibonacci1(2)).toEqual(1);
    expect(nthFibonacci1(3)).toEqual(2);
    expect(nthFibonacci1(11)).toEqual(89);
  });

  it('recursive method', () => {
    expect(nthFibonacci2(0)).toEqual(0);
    expect(nthFibonacci2(1)).toEqual(1);
    expect(nthFibonacci2(2)).toEqual(1);
    expect(nthFibonacci2(3)).toEqual(2);
    expect(nthFibonacci2(11)).toEqual(89);
  })
});