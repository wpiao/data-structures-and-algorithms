'use strict';

const { Node, BinaryTree } = require('../Data-Structures/tree/tree.js');
const fizzBuzzTree = require('../code-challenges/fizzBuzzTree/fizz-buzz-tree.js');

describe('fizzBuzzTree Module', () => {
  test('should return null if input is empty binary tree', () => {
    const tree = new BinaryTree();
    const result = fizzBuzzTree(tree);

    expect(result).toBeNull();
  });

  let one = new Node(30);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(21);
  let five = new Node(5);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;

  const tree = new BinaryTree(one);
  const result = fizzBuzzTree(tree);

  test('node with a value that is divisible by 3, should have value "Fizz" after function is called', () => {
    expect(three.value).toBe('Fizz');
    expect(result.root.right.value).toBe('Fizz');
    expect(four.value).toBe('Fizz');
    expect(result.root.right.left.value).toBe('Fizz');
    
  });

  test('node with a value that is divisible by 5, should have value "Buzz" after function is called', () => {
    expect(five.value).toBe('Buzz');
    expect(result.root.right.right.value).toBe('Buzz');
  });

  test('node with a value that is divisible by 3 and 5, should have value "FizzBuzz" after function is called', () => {
    expect(one.value).toBe('FizzBuzz');
    expect(result.root.value).toBe('FizzBuzz');
  });

  test('node with a value that is not divisible by 3 or 5, should turn the value into a string after function is called', () => {
    expect(two.value).toBe('2');
    expect(result.root.left.value).toBe('2');
  });
});