/*
Generate the nth Fibonacci number in 2 different ways
I: a non-negative integer
O: Integer
C: N/A
E: N/A
*/

// Method1: nthFibonacci1 is implemented in iterative method.
// Method2: nthFibonacci2 is implemented in recursive method. Do not test with large number for recursive method.

const nthFibonacci1 = (n) => {
  // intialize result array with [0,1]
  const result = [0, 1];

  // iterate over index from 2 to given input n
  for (let i = 2; i <= n; i++) {
    // for each iteration, result[i] = result[i - 1] + result[i - 2]
    result[i] = result[i - 1] + result[i - 2];
  }
  // after iteration return result[n]
  return result[n];
}

const nthFibonacci2 = (n) => {
  // if n is 0, return 0
  if (n === 0) {
    return 0;
  }

  // if n is 1, return 1
  if (n === 1) {
    return 1;
  }

  // if n > 1, return nthFibonacci2(n - 1) + nthFibonacci2(n - 2)
  if (n > 1) {
    return nthFibonacci2(n - 1) + nthFibonacci2(n - 2);
  }
}

module.exports = { nthFibonacci1, nthFibonacci2 }