const calculateFactorial = require('../src/ex03');

describe('calculating a factorial', () => {
  test('calculates the factorial of a positive integer', () => {
    expect(calculateFactorial(5)).toBe(120);
  });

  test('calculates another positive integer', () => {
    expect(calculateFactorial(4)).toBe(24);
  });

  test('the factorial of zero is one', () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  test('the factorial of one is one', () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  test('calculates a larger factorial', () => {
    expect(calculateFactorial(8)).toBe(40320);
  });

  test('a negative number throws an error message', () => {
    expect(() => calculateFactorial(-3)).toThrow(
      'Number cannot be negative',
    );
  });

  test('a decimal number throws an error message', () => {
    expect(() => calculateFactorial(2.5)).toThrow(
      'Number must be an integer',
    );
  });

  test('missing argument throws an error message', () => {
    expect(() => calculateFactorial()).toThrow('Number cannot be undefined');
  });

  test('non-number throws an error message', () => {
    expect(() => calculateFactorial('5')).toThrow(
      'Argument must be a number',
    );
  });
});
