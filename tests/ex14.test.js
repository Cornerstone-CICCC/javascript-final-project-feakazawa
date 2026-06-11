const moveZeroes = require('../src/ex14');

describe('moving zeroes to the end of an array', () => {
  test('moves zeroes while preserving the other values', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });

  test('moves a zero from the beginning', () => {
    expect(moveZeroes([0, 1, 2, 3])).toEqual([1, 2, 3, 0]);
  });

  test('keeps a zero at the end', () => {
    expect(moveZeroes([1, 2, 3, 0])).toEqual([1, 2, 3, 0]);
  });

  test('preserves the order of non-zero values', () => {
    expect(moveZeroes([4, 0, 2, 0, 5, 1])).toEqual([4, 2, 5, 1, 0, 0]);
  });

  test('works with negative and decimal values', () => {
    expect(moveZeroes([0, -2, 1.5, 0, -1])).toEqual([-2, 1.5, -1, 0, 0]);
  });

  test('keeps duplicate non-zero values in order', () => {
    expect(moveZeroes([2, 0, 1, 2, 0, 1])).toEqual([2, 1, 2, 1, 0, 0]);
  });

  test('returns all zeroes when every value is zero', () => {
    expect(moveZeroes([0, 0, 0])).toEqual([0, 0, 0]);
  });

  test('keeps an array without zeroes unchanged', () => {
    expect(moveZeroes([3, 1, 2])).toEqual([3, 1, 2]);
  });

  test('returns an empty array for an empty array', () => {
    expect(moveZeroes([])).toEqual([]);
  });

  test('returns a new array', () => {
    const numbers = [0, 1, 2];
    expect(moveZeroes(numbers)).not.toBe(numbers);
  });

  test('does not change the original array', () => {
    const numbers = [0, 1, 0, 3, 12];
    moveZeroes(numbers);
    expect(numbers).toEqual([0, 1, 0, 3, 12]);
  });

  test('missing argument throws an error message', () => {
    expect(() => moveZeroes()).toThrow('Array cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => moveZeroes('0,1,2')).toThrow('Argument must be an array');
  });

  test('array containing a non-number throws an error message', () => {
    expect(() => moveZeroes([0, '1', 2])).toThrow(
      'Array can only contain numbers',
    );
  });
});
