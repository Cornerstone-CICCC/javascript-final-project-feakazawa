const findLongestCommonPrefix = require('../src/ex15');

describe('finding the longest common prefix', () => {
  test('finds a prefix shared by every string', () => {
    expect(findLongestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('returns an empty string when no prefix is shared', () => {
    expect(findLongestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });

  test('checks strings between the first and last entries', () => {
    expect(findLongestCommonPrefix(['interview', 'interval', 'internet'])).toBe(
      'inter',
    );
  });

  test('checks every string when the last string is different', () => {
    expect(findLongestCommonPrefix(['testing', 'tester', 'team'])).toBe('te');
  });

  test('does not return a prefix shared by only the first two strings', () => {
    expect(findLongestCommonPrefix(['apple', 'application', 'banana'])).toBe(
      '',
    );
  });

  test('returns the entire string when all strings are identical', () => {
    expect(findLongestCommonPrefix(['test', 'test', 'test'])).toBe('test');
  });

  test('returns the shortest string when it is the shared prefix', () => {
    expect(findLongestCommonPrefix(['javascript', 'java', 'javafx'])).toBe(
      'java',
    );
  });

  test('returns an empty string when one entry is empty', () => {
    expect(findLongestCommonPrefix(['hello', 'help', ''])).toBe('');
  });

  test('returns the only string in a one-item array', () => {
    expect(findLongestCommonPrefix(['alone'])).toBe('alone');
  });

  test('returns an empty string for an empty array', () => {
    expect(findLongestCommonPrefix([])).toBe('');
  });

  test('is case-sensitive', () => {
    expect(findLongestCommonPrefix(['App', 'apple', 'application'])).toBe('');
  });

  test('does not change the original array', () => {
    const strings = ['flower', 'flow', 'flight'];
    findLongestCommonPrefix(strings);
    expect(strings).toEqual(['flower', 'flow', 'flight']);
  });

  test('missing argument throws an error message', () => {
    expect(() => findLongestCommonPrefix()).toThrow(
      'Array cannot be undefined',
    );
  });

  test('non-array throws an error message', () => {
    expect(() => findLongestCommonPrefix('flower')).toThrow(
      'Argument must be an array',
    );
  });

  test('array containing a non-string throws an error message', () => {
    expect(() => findLongestCommonPrefix(['flower', 5])).toThrow(
      'Array can only contain strings',
    );
  });
});
