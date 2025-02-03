import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdShoppingBasket } from "react-icons/md";
import CartPage from "../cartPage/CartPage";

const CartButton = ({ toggleCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  // const toggleCart = () => {
  //   setIsCartOpen(!isCartOpen);
  // };

  return (
    <>
      <div
        onClick={toggleCart}
        className="fixed bottom-16 right-6 cursor-pointer"
      >
        <div className="bg-bgColor hidden lg:block border border-[#ddd] text-white px-4 py-2 rounded-lg hover:bg-blue-600 items-center">
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
      {/* {isCartOpen && <CartPage onClose={toggleCart} />} */}
    </>
  );
};

export default CartButton;
