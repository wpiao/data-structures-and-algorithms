"use strict";

const convertToRoman = (number) => {
  const dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const rom = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";
  for (let i = 0; i < dec.length; i++) {
    let currentNumber = dec[i];
    if (currentNumber === number) {
      result += rom[i];
      return result;
    } else if (currentNumber < number) {
      result += rom[i];
      number -= currentNumber;
      if (currentNumber <= number) {
        i--;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
};

module.exports = convertToRoman;
