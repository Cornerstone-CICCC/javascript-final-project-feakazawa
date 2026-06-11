const traverseSpiral = require('../src/ex18');

describe('traversing a matrix in spiral order', () => {
  test('traverses a 3x3 matrix', () => {
    expect(
      traverseSpiral([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  test('traverses a rectangular matrix with more columns', () => {
    expect(
      traverseSpiral([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ]),
    ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  test('traverses a rectangular matrix with more rows', () => {
    expect(
      traverseSpiral([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
      ]),
    ).toEqual([1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]);
  });

  test('traverses multiple inner layers', () => {
    expect(
      traverseSpiral([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ]),
    ).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  test('returns one row in its original order', () => {
    expect(traverseSpiral([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4]);
  });

  test('traverses a matrix containing one column', () => {
    expect(traverseSpiral([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4]);
  });

  test('returns the value from a 1x1 matrix', () => {
    expect(traverseSpiral([[42]])).toEqual([42]);
  });

  test('returns an empty array for an empty matrix', () => {
    expect(traverseSpiral([])).toEqual([]);
  });

  test('works with values other than numbers', () => {
    expect(
      traverseSpiral([
        ['a', 'b'],
        ['c', 'd'],
      ]),
    ).toEqual(['a', 'b', 'd', 'c']);
  });

  test('does not change the original matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const original = matrix.map((row) => [...row]);
    traverseSpiral(matrix);
    expect(matrix).toEqual(original);
  });

  test('missing argument throws an error message', () => {
    expect(() => traverseSpiral()).toThrow('Matrix cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => traverseSpiral('matrix')).toThrow(
      'Matrix must be an array',
    );
  });

  test('rows with different lengths throw an error message', () => {
    expect(() => traverseSpiral([[1, 2], [3]])).toThrow(
      'Matrix rows must have equal lengths',
    );
  });
});
