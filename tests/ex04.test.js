const calculateAverage = require('../src/ex04');

describe('calculating the average', () => {
  test('calculates an integer average', () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });

  test('calculates a decimal average', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  test('calculates an average containing negative numbers', () => {
    expect(calculateAverage([-5, 5, 10])).toBeCloseTo(10 / 3);
  });

  test('calculates an all-negative average', () => {
    expect(calculateAverage([-2, -4, -6])).toBe(-4);
  });

  test('works with one number', () => {
    expect(calculateAverage([9])).toBe(9);
  });

  test('empty array throws an error message', () => {
    expect(() => calculateAverage([])).toThrow('Array cannot be empty');
  });

  test('array containing a string throws an error message', () => {
    expect(() => calculateAverage([1, '2', 3])).toThrow('Array can only contain numbers');
  });

  test('missing argument throws an error message', () => {
    expect(() => calculateAverage()).toThrow('Array cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => calculateAverage(10)).toThrow('Argument must be an array');
  });
});
