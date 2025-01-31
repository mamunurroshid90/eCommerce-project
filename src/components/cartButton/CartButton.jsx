import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartButton = () => {
  const cartItems = useSelector((state) => state.cart.items);

  console.log("Cart Items in CartButton:", cartItems);
  return (
    <>
      <div className="fixed top-20 right-4">
        <Link
          to="/cart"
          className=" bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
        >
          <span>Cart</span>
          {cartItems.length > 0 && (
            <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </>
  );
};

export default CartButton;
