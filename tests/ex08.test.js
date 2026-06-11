const search = require('../src/ex08');

describe('searching an array of strings', () => {
  test('returns strings containing the keyword', () => {
    expect(search(['apple', 'banana', 'apricot'], 'ap')).toEqual([
      'apple',
      'apricot',
    ]);
  });

  test('matches a complete string', () => {
    expect(search(['cat', 'dog', 'bird'], 'dog')).toContain('dog');
  });

  test('matches a keyword in the middle of a string', () => {
    expect(search(['JavaScript', 'Java', 'Python'], 'Script')).toEqual([
      'JavaScript',
    ]);
  });

  test('search is case-insensitive', () => {
    expect(search(['Apple', 'APRICOT', 'banana'], 'ap')).toEqual([
      'Apple',
      'APRICOT',
    ]);
  });

  test('keeps the original order', () => {
    expect(search(['blueberry', 'blue', 'red', 'lightblue'], 'blue')).toEqual([
      'blueberry',
      'blue',
      'lightblue',
    ]);
  });

  test('returns an empty array when there are no matches', () => {
    expect(search(['cat', 'dog'], 'fish')).toHaveLength(0);
  });

  test('returns an empty array when the array is empty', () => {
    expect(search([], 'test')).toEqual([]);
  });

  test('empty keyword returns all strings', () => {
    expect(search(['cat', 'dog'], '')).toEqual(['cat', 'dog']);
  });

  test('does not change the original array', () => {
    const words = ['apple', 'banana'];
    search(words, 'app');
    expect(words).toEqual(['apple', 'banana']);
  });

  test('array containing a non-string throws an error message', () => {
    expect(() => search(['apple', 10], 'app')).toThrow(
      'Array can only contain strings',
    );
  });

  test('missing array throws an error message', () => {
    expect(() => search()).toThrow('Array cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => search('apple', 'app')).toThrow('Argument must be an array');
  });

  test('missing keyword throws an error message', () => {
    expect(() => search(['apple'])).toThrow('Keyword cannot be undefined');
  });

  test('non-string keyword throws an error message', () => {
    expect(() => search(['apple'], 10)).toThrow('Keyword must be a string');
  });
});
