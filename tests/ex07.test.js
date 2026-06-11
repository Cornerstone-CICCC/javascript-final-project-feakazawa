const classifyNumbers = require('../src/ex07');

describe('classifying numbers', () => {
  test('returns the three required properties', () => {
    const result = classifyNumbers([2, -3, 0]);

    expect(result).toHaveProperty('positive');
    expect(result).toHaveProperty('negative');
    expect(result).toHaveProperty('zero');
  });

  test('classifies positive, negative, and zero values', () => {
    expect(classifyNumbers([-2, 0, 4, -1, 3])).toEqual({
      positive: [4, 3],
      negative: [-2, -1],
      zero: [0],
    });
  });

  test('classifies decimal numbers', () => {
    expect(classifyNumbers([-1.5, 2.5, 0])).toMatchObject({
      positive: [2.5],
      negative: [-1.5],
    });
  });

  test('keeps duplicate values', () => {
    expect(classifyNumbers([2, 2, -1, -1]).positive).toHaveLength(2);
    expect(classifyNumbers([2, 2, -1, -1]).negative).toHaveLength(2);
  });

  test('returns three empty arrays for an empty array', () => {
    expect(classifyNumbers([])).toEqual({
      positive: [],
      negative: [],
      zero: [],
    });
  });

  test('does not change the original array', () => {
    const numbers = [-1, 0, 1];
    classifyNumbers(numbers);
    expect(numbers).toEqual([-1, 0, 1]);
  });

  test('array containing a non-number throws an error message', () => {
    expect(() => classifyNumbers([1, null, -1])).toThrow(
      'Array can only contain numbers',
    );
  });

  test('missing argument throws an error message', () => {
    expect(() => classifyNumbers()).toThrow('Array cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => classifyNumbers(123)).toThrow('Argument must be an array');
  });
});
