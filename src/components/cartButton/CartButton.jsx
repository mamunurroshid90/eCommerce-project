import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

const CartButton = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const showCart = () => {
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div onClick={showCart} className="fixed bottom-16 right-6 cursor-pointer">
      <div className="bg-bgColor border border-[#ddd] text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
        <div className="flex flex-col justify-center items-center">
          <MdShoppingBasket className="text-white text-2xl" />
          <span className="font-semibold">Cart</span>
        </div>
        {cartItems.length > 0 && (
          <span className="absolute -top-3 -right-3 bg-red-500 text-white px-2 py-1 rounded-full font-semibold text-xs">
            {cartItems.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartButton;
