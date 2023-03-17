export function calculateTotal(cartItems) {
  let total = 0;
  cartItems.forEach((element) => {
    total += element.price * element.cart_val;
  });
  return total;
}
