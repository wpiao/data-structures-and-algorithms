'use strict';

const firstRepeatedWord = passage => {
  // handle edge case
  if (typeof passage !== 'string') {
    return null;
  } else if (passage.length === 0) {
    return 'no repeated word';
  } else {
    // split a given passage by words
    const words = passage.match(/\b(\w+)\b/g);
    
    // iterate over words array and store each word in an empty object
    const storage = {};
    for (let i = 0; i < words.length - 1; i++) {
      const currentWord = words[i].toLowerCase();
      // if current word does not exist in the storage then store it
      if (!storage[currentWord]) {
        storage[currentWord] = 1;
      } else {
        // if current word already exist then return current word
        return currentWord
      }
    }
    // if does not find any repeated word then return 'no repeated word'
    return 'no repeated word';
  }
}

module.exports = firstRepeatedWord;
