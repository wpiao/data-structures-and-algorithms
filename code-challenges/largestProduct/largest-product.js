"use strict";

const largestProduct = (arr) => {
  arr.sort((a, b) => a - b);
  const length = arr.length;
  const product1 = arr[length - 1] * arr[length - 2] * arr[length - 3];
  const product2 = arr[length - 1] * arr[0] * arr[1];
  return product1 >= product2 ? product1 : product2;
};

module.exports = largestProduct;
