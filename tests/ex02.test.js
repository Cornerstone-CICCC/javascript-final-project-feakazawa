const sumArray = require('../src/ex02');

describe('adding all numbers in an array', () => {
  test('adds positive numbers', () => {
    expect(sumArray([2, 4, 6])).toBe(12);
  });

  test('adds negative numbers', () => {
    expect(sumArray([-2, -4, -6])).toBe(-12);
  });

  test('adds positive and negative numbers', () => {
    expect(sumArray([-5, 10, -2])).toBe(3);
  });

  test('adds decimal numbers', () => {
    expect(sumArray([1.5, 2.25, 0.25])).toBe(4);
  });

  test('returns the number from a one-item array', () => {
    expect(sumArray([7])).toBe(7);
  });

  test('returns zero for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  test('array containing a string throws an error message', () => {
    expect(() => sumArray([1, '2', 3])).toThrow('Array can only contain numbers');
  });

  test('missing argument throws an error message', () => {
    expect(() => sumArray()).toThrow('Array cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => sumArray('123')).toThrow('Argument must be an array');
  });
});
