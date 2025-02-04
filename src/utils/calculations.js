// Calculate subtotal for all items in the cart
export const calculateSubtotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.newPrice * item.count,
    0
  );
};

// Calculate total (including tax and shipping)
export const calculateTotal = (cartItems) => {
  const subtotal = calculateSubtotal(cartItems);
  const tax = subtotal * 0.1; // Example tax (10%)
  const shipping = 10; // Example shipping cost
  return subtotal + tax + shipping;
};

// Calculate total for a single item
export const calculateItemTotal = (item) => {
  return item.newPrice * item.count;
};
