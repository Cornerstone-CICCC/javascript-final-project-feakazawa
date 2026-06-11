const analyzeText = require('../src/ex12');

describe('analyzing text', () => {
  test('returns all required properties', () => {
    const result = analyzeText('Hello world.');

    expect(result).toHaveProperty('characters');
    expect(result).toHaveProperty('words');
    expect(result).toHaveProperty('sentences');
  });

  test('counts characters, words, and sentences', () => {
    expect(analyzeText('Hello world.')).toEqual({
      characters: 12,
      words: 2,
      sentences: 1,
    });
  });

  test('includes spaces and punctuation in the character count', () => {
    expect(analyzeText('Hi there!')).toHaveProperty('characters', 9);
  });

  test('counts sentences ending with different punctuation', () => {
    expect(analyzeText('Hello! How are you? I am fine.')).toMatchObject({
      words: 7,
      sentences: 3,
    });
  });

  test('ignores repeated spaces when counting words', () => {
    expect(analyzeText('Hello   world.').words).toBe(2);
  });

  test('ignores spaces before and after the text when counting words', () => {
    expect(analyzeText('  Hello world.  ').words).toBe(2);
  });

  test('does not require punctuation for one sentence', () => {
    expect(analyzeText('Hello world').sentences).toBe(1);
  });

  test('returns zero values for an empty string', () => {
    expect(analyzeText('')).toEqual({
      characters: 0,
      words: 0,
      sentences: 0,
    });
  });

  test('returns zero values for a string containing only spaces', () => {
    expect(analyzeText('   ')).toEqual({
      characters: 3,
      words: 0,
      sentences: 0,
    });
  });

  test('counts a one-word sentence', () => {
    expect(analyzeText('Welcome!')).toMatchObject({
      words: 1,
      sentences: 1,
    });
  });

  test('missing argument throws an error message', () => {
    expect(() => analyzeText()).toThrow('String cannot be undefined');
  });

  test('non-string throws an error message', () => {
    expect(() => analyzeText(['Hello'])).toThrow('Argument must be a string');
  });
});
