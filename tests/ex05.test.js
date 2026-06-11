const filterEvenNumbers = require('../src/ex05');

describe('filtering even numbers', () => {
  test('returns only even numbers', () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test('includes zero', () => {
    expect(filterEvenNumbers([-1, 0, 1])).toContain(0);
  });

  test('works with negative even numbers', () => {
    expect(filterEvenNumbers([-4, -3, -2, -1])).toEqual([-4, -2]);
  });

  test('returns an empty array when there are no even numbers', () => {
    expect(filterEvenNumbers([1, 3, 5])).toHaveLength(0);
  });

  test('returns an empty array for an empty array', () => {
    expect(filterEvenNumbers([])).toEqual([]);
  });

  test('does not change the original array', () => {
    const numbers = [1, 2, 3, 4];
    filterEvenNumbers(numbers);
    expect(numbers).toEqual([1, 2, 3, 4]);
  });

  test('array containing a string throws an error message', () => {
    expect(() => filterEvenNumbers([1, '2', 3])).toThrow(
      'Array can only contain numbers',
    );
  });

  test('missing argument throws an error message', () => {
    expect(() => filterEvenNumbers()).toThrow('Array cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => filterEvenNumbers('1234')).toThrow(
      'Argument must be an array',
    );
  });
});
