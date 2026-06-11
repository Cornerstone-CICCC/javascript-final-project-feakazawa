const createCartSummary = require('../src/ex10');

describe('creating a shopping cart summary', () => {
  test('returns all summary properties', () => {
    const result = createCartSummary([
      { name: 'Notebook', price: 5, quantity: 2 },
    ]);

    expect(result).toHaveProperty('itemCount');
    expect(result).toHaveProperty('totalQuantity');
    expect(result).toHaveProperty('totalPrice');
  });

  test('summarizes multiple cart items', () => {
    const result = createCartSummary([
      { name: 'Notebook', price: 5, quantity: 2 },
      { name: 'Pen', price: 2, quantity: 3 },
    ]);

    expect(result).toEqual({
      itemCount: 2,
      totalQuantity: 5,
      totalPrice: 16,
    });
  });

  test('calculates decimal prices', () => {
    const result = createCartSummary([
      { name: 'Apple', price: 1.25, quantity: 2 },
      { name: 'Bread', price: 3.5, quantity: 1 },
    ]);

    expect(result.totalPrice).toBeCloseTo(6);
  });

  test('returns zero totals for an empty cart', () => {
    expect(createCartSummary([])).toMatchObject({
      itemCount: 0,
      totalQuantity: 0,
      totalPrice: 0,
    });
  });

  test('counts product types separately from quantities', () => {
    const result = createCartSummary([
      { name: 'Notebook', price: 5, quantity: 4 },
      { name: 'Pen', price: 2, quantity: 6 },
    ]);

    expect(result.itemCount).toBe(2);
    expect(result.totalQuantity).toBe(10);
  });

  test('does not change the original cart', () => {
    const items = [{ name: 'Notebook', price: 5, quantity: 2 }];
    const original = items.map((item) => ({ ...item }));
    createCartSummary(items);
    expect(items).toEqual(original);
  });

  test('item missing a required property throws an error message', () => {
    expect(() => createCartSummary([{ name: 'Pen', price: 2 }])).toThrow(
      'Each item must have a name, price, and quantity',
    );
  });

  test('non-numeric price or quantity throws an error message', () => {
    expect(() =>
      createCartSummary([{ name: 'Pen', price: '2', quantity: 1 }]),
    ).toThrow('Price and quantity must be numbers');

    expect(() =>
      createCartSummary([{ name: 'Pen', price: 2, quantity: '1' }]),
    ).toThrow('Price and quantity must be numbers');
  });

  test('negative price throws an error message', () => {
    expect(() =>
      createCartSummary([{ name: 'Pen', price: -2, quantity: 1 }]),
    ).toThrow('Price and quantity cannot be negative');
  });

  test('negative quantity throws an error message', () => {
    expect(() =>
      createCartSummary([{ name: 'Pen', price: 2, quantity: -1 }]),
    ).toThrow('Price and quantity cannot be negative');
  });

  test('missing argument throws an error message', () => {
    expect(() => createCartSummary()).toThrow('Cart cannot be undefined');
  });

  test('non-array throws an error message', () => {
    expect(() => createCartSummary('cart')).toThrow('Cart must be an array');
  });
});
