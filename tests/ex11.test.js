const rotateArray = require('../src/ex11');

describe('rotating an array', () => {
  test('rotates an array one position to the right', () => {
    expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
  });

  test('rotates an array multiple positions to the right', () => {
    expect(rotateArray(['a', 'b', 'c', 'd'], 2)).toEqual([
      'c',
      'd',
      'a',
      'b',
    ]);
  });

  test('negative positions rotate the array to the left', () => {
    expect(rotateArray([1, 2, 3, 4], -1)).toEqual([2, 3, 4, 1]);
  });

  test('positions larger than the array length wrap around', () => {
    expect(rotateArray([1, 2, 3, 4], 5)).toEqual([4, 1, 2, 3]);
  });

  test('negative positions larger than the array length wrap around', () => {
    expect(rotateArray([1, 2, 3, 4], -5)).toEqual([2, 3, 4, 1]);
  });

  test('zero positions returns the values in the same order', () => {
    expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('returns an empty array when given an empty array', () => {
    expect(rotateArray([], 3)).toHaveLength(0);
  });

  test('returns a new array', () => {
    const original = [1, 2, 3];
    expect(rotateArray(original, 0)).not.toBe(original);
  });

  test('does not change the original array', () => {
    const original = [1, 2, 3];
    rotateArray(original, 1);
    expect(original).toEqual([1, 2, 3]);
  });

  test('missing array throws an error message', () => {
    expect(() => rotateArray()).toThrow('Array cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => rotateArray('123', 1)).toThrow('Argument must be an array');
  });

  test('missing positions throws an error message', () => {
    expect(() => rotateArray([1, 2, 3])).toThrow(
      'Positions cannot be undefined',
    );
  });

  test('non-number positions throws an error message', () => {
    expect(() => rotateArray([1, 2, 3], '1')).toThrow(
      'Positions must be a number',
    );
  });

  test('decimal positions throws an error message', () => {
    expect(() => rotateArray([1, 2, 3], 1.5)).toThrow(
      'Positions must be an integer',
    );
  });
});
