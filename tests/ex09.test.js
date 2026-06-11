const capitalizeWords = require('../src/ex09');

describe('capitalizing words', () => {
  test('capitalizes one word', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
  });

  test('capitalizes every word in a sentence', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('converts remaining letters to lowercase', () => {
    expect(capitalizeWords('jAVAsCRIPT iS FUN')).toBe('Javascript Is Fun');
  });

  test('keeps a single space between words', () => {
    expect(capitalizeWords('one two three')).toBe('One Two Three');
  });

  test('trims spaces before and after the string', () => {
    expect(capitalizeWords('  hello world  ')).toBe('Hello World');
  });

  test('replaces repeated spaces with one space', () => {
    expect(capitalizeWords('hello   world')).toBe('Hello World');
  });

  test('returns an empty string for an empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('works with a one-character word', () => {
    expect(capitalizeWords('a')).toBe('A');
  });

  test('missing argument throws an error message', () => {
    expect(() => capitalizeWords()).toThrow('String cannot be undefined');
  });

  test('non-string throws an error message', () => {
    expect(() => capitalizeWords(['hello'])).toThrow('Argument must be a string');
  });
});
