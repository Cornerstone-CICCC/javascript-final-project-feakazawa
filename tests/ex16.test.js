const checkBalancedBrackets = require('../src/ex16');

describe('checking whether brackets are balanced', () => {
  test('returns true for one matching pair', () => {
    expect(checkBalancedBrackets('()')).toBe(true);
  });

  test('returns true for all three bracket types', () => {
    expect(checkBalancedBrackets('()[]{}')).toBe(true);
  });

  test('returns true for nested brackets', () => {
    expect(checkBalancedBrackets('{[()]}')).toBe(true);
  });

  test('returns true for several nested groups', () => {
    expect(checkBalancedBrackets('({[]})[()]')).toBe(true);
  });

  test('returns false when bracket types do not match', () => {
    expect(checkBalancedBrackets('(]')).toBe(false);
  });

  test('returns false when nested brackets close in the wrong order', () => {
    expect(checkBalancedBrackets('([)]')).toBe(false);
  });

  test('returns false when an opening bracket is not closed', () => {
    expect(checkBalancedBrackets('(()')).toBe(false);
  });

  test('returns false when a closing bracket appears first', () => {
    expect(checkBalancedBrackets(')(')).toBe(false);
  });

  test('returns false for an extra square closing bracket', () => {
    expect(checkBalancedBrackets('[]]')).toBe(false);
  });

  test('returns false when square brackets appear in reverse order', () => {
    expect(checkBalancedBrackets('][')).toBe(false);
  });

  test('returns false when curly brackets appear in reverse order', () => {
    expect(checkBalancedBrackets('}{')).toBe(false);
  });

  test('returns false for mismatched non-parenthesis brackets', () => {
    expect(checkBalancedBrackets('{]')).toBe(false);
  });

  test('returns true for an empty string', () => {
    expect(checkBalancedBrackets('')).toBe(true);
  });

  test('missing argument throws an error message', () => {
    expect(() => checkBalancedBrackets()).toThrow(
      'String cannot be undefined',
    );
  });

  test('non-string throws an error message', () => {
    expect(() => checkBalancedBrackets(['(', ')'])).toThrow(
      'Argument must be a string',
    );
  });

  test('unsupported characters throw an error message', () => {
    expect(() => checkBalancedBrackets('(a)')).toThrow(
      'String can only contain brackets',
    );
  });
});
