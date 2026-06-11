const findTwoSum = require('../src/ex17');

describe('finding two numbers that add up to a target', () => {
  test('finds a pair at the beginning of the array', () => {
    expect(findTwoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('finds a pair later in the array', () => {
    expect(findTwoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('uses two different indices for duplicate numbers', () => {
    expect(findTwoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('works with negative numbers', () => {
    expect(findTwoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  test('works with decimal numbers', () => {
    expect(findTwoSum([1.5, 2.5, 4], 4)).toEqual([0, 1]);
  });

  test('finds a pair containing zero', () => {
    expect(findTwoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  test('finds a pair near the end of a longer array', () => {
    expect(findTwoSum([10, 20, 30, 4, 6], 10)).toEqual([3, 4]);
  });

  test('returns the first matching pair', () => {
    expect(findTwoSum([1, 2, 3, 4], 5)).toEqual([0, 3]);
  });

  test('returns an empty array when no pair exists', () => {
    expect(findTwoSum([1, 2, 3], 10)).toEqual([]);
  });

  test('returns an empty array for fewer than two numbers', () => {
    expect(findTwoSum([], 5)).toEqual([]);
    expect(findTwoSum([5], 5)).toEqual([]);
  });

  test('does not change the original array', () => {
    const numbers = [2, 7, 11, 15];
    findTwoSum(numbers, 9);
    expect(numbers).toEqual([2, 7, 11, 15]);
  });

  test('missing array throws an error message', () => {
    expect(() => findTwoSum()).toThrow('Array cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => findTwoSum('2,7', 9)).toThrow('Argument must be an array');
  });

  test('array containing a non-number throws an error message', () => {
    expect(() => findTwoSum([2, '7'], 9)).toThrow(
      'Array can only contain numbers',
    );
  });

});
