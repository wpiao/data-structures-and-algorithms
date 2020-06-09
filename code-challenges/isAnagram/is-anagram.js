'use strict';

const isAnagram = (str1, str2) => {
  // create a helper function that store a string's every letter in an empty object
  const helper = str => {
    // make input str to lowercase
    const lower = str.toLowerCase();
    const store = {};
    // iterate over lower, store each letter in the store object
    for (let i = 0; i < lower.length; i++) {
      let currentLetter = lower[i];
      if (currentLetter !== ' ') {
        if (!store[currentLetter]) {
          store[currentLetter] = 1;
        } else {
          store[currentLetter]++;
        }
      } else {
        continue;
      }
    }
    return store;
  }

  // pass str1 and str2 to helper function respectively
  const store1 = helper(str1);
  const store2 = helper(str2);

  // compare store1 and store2
  // compare the number of properties first
  if (Object.keys(store1).length !== Object.keys(store2).length) {
    return false;
  } else {
    // if both objects have same number of properties then campare every properties one by one
    for (let key in store1) {
      if (!store2[key]) {
        return false;
      } else if (store1[key] !== store2[key]) {
        return false;
      } else {
        continue;
      }
    }
    return true;
  }
}

module.exports = isAnagram;