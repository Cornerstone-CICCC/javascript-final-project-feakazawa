const checkAnagram = require('../src/ex13');

describe('checking whether two strings are anagrams', () => {
  test('returns true when both strings contain the same letters', () => {
    expect(checkAnagram('anagram', 'nagaram')).toBe(true);
  });

  test('returns false when the strings contain different letters', () => {
    expect(checkAnagram('rat', 'car')).toBe(false);
  });

  test('counts repeated letters', () => {
    expect(checkAnagram('aacc', 'ccac')).toBe(false);
  });

  test('recognizes anagrams with several unique letters', () => {
    expect(checkAnagram('binary', 'brainy')).toBe(true);
  });

  test('recognizes anagrams with repeated letters', () => {
    expect(checkAnagram('aabbcc', 'abcabc')).toBe(true);
  });

  test('recognizes reversed strings as anagrams', () => {
    expect(checkAnagram('stressed', 'desserts')).toBe(true);
  });

  test('returns false when the strings have different lengths', () => {
    expect(checkAnagram('ab', 'a')).toBe(false);
  });

  test('returns true for two empty strings', () => {
    expect(checkAnagram('', '')).toBe(true);
  });

  test('is case-sensitive', () => {
    expect(checkAnagram('Listen', 'silent')).toBe(false);
  });

  test('treats spaces as characters', () => {
    expect(checkAnagram('a b', 'ab ')).toBe(true);
    expect(checkAnagram('ab', 'a b')).toBe(false);
  });

  test('treats punctuation as characters', () => {
    expect(checkAnagram('a!b', 'b!a')).toBe(true);
    expect(checkAnagram('a!b', 'a?b')).toBe(false);
  });

  test('missing first string throws an error message', () => {
    expect(() => checkAnagram()).toThrow('First string cannot be undefined');
  });

  test('missing second string throws an error message', () => {
    expect(() => checkAnagram('abc')).toThrow(
      'Second string cannot be undefined',
    );
  });

  test('non-string arguments throw an error message', () => {
    expect(() => checkAnagram(['a'], 'a')).toThrow(
      'Arguments must be strings',
    );
    expect(() => checkAnagram('a', 1)).toThrow('Arguments must be strings');
  });
});
