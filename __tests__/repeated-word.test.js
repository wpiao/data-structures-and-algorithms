'use strict';

const firstRepeatedWord = require('../code-challenges/repeatedWord/repeated-word.js');

describe('Find the first repeated word in a book', () => {
  it('should return proper response if the input is empty sting', () => {
    expect(firstRepeatedWord('')).toEqual('no repeated word');
  });

  it('should return null if the input is not string', () => {
    expect(firstRepeatedWord(5)).toBeNull();
    expect(firstRepeatedWord([1, 2, 3])).toBeNull();
    expect(firstRepeatedWord({'lastName': 'Lee'})).toBeNull();
    expect(firstRepeatedWord(false)).toBeNull();
  });

  it('should return first repeated word in the passage', () => {
    expect(firstRepeatedWord('Once upon a time, there was a brave princess who...')).toEqual('a');
    expect(firstRepeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...')).toEqual('it');
    expect(firstRepeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...')).toEqual('summer');
  });

  it('should return proper response if there is no repeated word in the passage', () => {
    expect(firstRepeatedWord('hello, world!')).toEqual('no repeated word');
    expect(firstRepeatedWord('What is your name?')).toEqual('no repeated word');
    expect(firstRepeatedWord('How old are you?')).toEqual('no repeated word');
  });
});