'use strict';

const isAnagram = require('../code-challenges/isAnagram/is-anagram.js');

describe('identify anagrams', () => {
  it('should return true if two input strings are anagram', () => {
    const str1 = 'Eleven plus two';
    const str2 = 'Twelve plus one';
    const str3 = 'Clint Eastwood';
    const str4 = 'Old West Action';
    const str5 = 'Astronomers';
    const str6 = 'Moon starers';

    expect(isAnagram(str1, str2)).toEqual(true);
    expect(isAnagram(str3, str4)).toEqual(true);
    expect(isAnagram(str5, str6)).toEqual(true);
  });

  it('should return false if two input strings are not anagram', () => {
    const str1 = 'Software';
    const str2 = 'Swear often';
    expect(isAnagram(str1, str2)).toEqual(false);
  });
});