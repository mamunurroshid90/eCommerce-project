import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="container max-w-screen-xl bg-white">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="text-gray-600">
                {item.title} - ${item.newPrice}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CartPage;
