const findMax = require('../src/ex01');

describe('finding maximum number', () => {
  test('all positive numbers', () => {
    expect(findMax([2, 10, 4])).toBe(10);
  });

  test('maximum number is first', () => {
    expect(findMax([12, 7, 3])).toBe(12);
  });

  test('maximum number is last', () => {
    expect(findMax([1, 5, 9])).toBe(9);
  });

  test('all negative numbers', () => {
    expect(findMax([-8, -2, -15])).toBe(-2);
  });

  test('mix of negative, zero, and positive numbers', () => {
    expect(findMax([-4, 0, 6, -1])).toBe(6);
  });

  test('zero is the maximum number', () => {
    expect(findMax([-9, -3, 0, -7])).toBe(0);
  });

  test('array contains one number', () => {
    expect(findMax([42])).toBe(42);
  });

  test('decimal numbers', () => {
    expect(findMax([1.5, 3.14, 2.75])).toBe(3.14);
  });

  test('maximum number appears more than once', () => {
    expect(findMax([7, 2, 7, 4])).toBe(7);
  });

  test('all numbers are equal', () => {
    expect(findMax([5, 5, 5])).toBe(5);
  });

  test('empty array throws an error message', () => {
    expect(() => findMax([])).toThrow('Array cannot be empty');
  });

  test('array containing a non-number throws an error message', () => {
    expect(() => findMax([2, '10', 4])).toThrow(
      'Array can only contain numbers',
    );
    expect(() => findMax([2, null, 4])).toThrow(
      'Array can only contain numbers',
    );
  });

  test('missing argument throws an error message', () => {
    expect(() => findMax()).toThrow('Array cannot be undefined');
  });

  test('non-array will throw an error message', () => {
    expect(() => findMax(true)).toThrow('Argument must be an array');
  });
});
