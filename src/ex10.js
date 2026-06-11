/**
 * Create a summary of shopping cart items.
 * @param {{name: string, price: number, quantity: number}[]} items
 * @returns {{itemCount: number, totalQuantity: number, totalPrice: number}}
 */
function createCartSummary(items) {
  if (!items) throw new Error("Cart cannot be undefined");

  if (!Array.isArray(items)) throw new Error("Cart must be an array");

  const checkProperty = items.find(
    (obj) =>
      obj.name === undefined ||
      obj.price === undefined ||
      obj.quantity === undefined,
  );

  const checkValues = items.find(
    (obj) => typeof obj.price !== "number" || typeof obj.quantity !== "number",
  );

  const checkPriceAndQty = items.find(
    (obj) => obj.price < 0 || obj.quantity < 0,
  );

  if (checkProperty)
    throw new Error("Each item must have a name, price, and quantity");

  if (checkValues) throw new Error("Price and quantity must be numbers");

  if (checkPriceAndQty)
    throw new Error("Price and quantity cannot be negative");

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
