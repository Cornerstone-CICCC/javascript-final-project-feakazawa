const countVowels = require('../src/ex06');

describe('counting vowels', () => {
  test('counts vowels in a word', () => {
    expect(countVowels('education')).toBe(5);
  });

  test('counts uppercase vowels', () => {
    expect(countVowels('AEIOU')).toBe(5);
  });

  test('counts mixed uppercase and lowercase vowels', () => {
    expect(countVowels('ApplE')).toBe(2);
  });

  test('returns zero when there are no vowels', () => {
    expect(countVowels('rhythm')).toBe(0);
  });

  test('counts vowels in a sentence', () => {
    expect(countVowels('Hello world')).toBe(3);
  });

  test('ignores numbers and punctuation', () => {
    expect(countVowels('a1!e2?')).toBe(2);
  });

  test('returns zero for an empty string', () => {
    expect(countVowels('')).toBe(0);
  });

  test('missing argument throws an error message', () => {
    expect(() => countVowels()).toThrow('String cannot be undefined');
  });

  test('non-string throws an error message', () => {
    expect(() => countVowels(['a', 'e'])).toThrow('Argument must be a string');
  });
});
