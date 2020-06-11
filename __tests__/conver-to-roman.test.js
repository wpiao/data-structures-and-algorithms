"use strict";

const convertToRoman = require("../code-challenges/convertToRoman/convert-to-roman.js");

describe("Convert a year to Roman Numerals", () => {
  it("should convert to appropriate roman numerals for a given year", () => {
    expect(convertToRoman(8)).toEqual("VIII");
    expect(convertToRoman(87)).toEqual("LXXXVII");
    expect(convertToRoman(937)).toEqual("CMXXXVII");
    expect(convertToRoman(3000)).toEqual("MMM");
    expect(convertToRoman(4999)).toEqual("MMMMCMXCIX");
  });
});
