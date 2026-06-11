/**
 * Create a summary of shopping cart items.
 * @param {{name: string, price: number, quantity: number}[]} items
 * @returns {{itemCount: number, totalQuantity: number, totalPrice: number}}
 */
function createCartSummary(items) {
  return {
    itemCount: items.length,
    totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  };
}

module.exports = createCartSummary;
