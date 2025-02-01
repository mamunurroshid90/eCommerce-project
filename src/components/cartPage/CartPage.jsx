import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import { clearCart, removeFromCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeProductFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearProductCart = () => {
    dispatch(clearCart());
  };

  const closeCart = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      {/* Sidebar Cart */}
      <div className="w-[300px] bg-white h-full shadow-lg p-5 relative">
        {/* Close Button */}
        <button
          onClick={closeCart}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <RxCross2 className="text-xl" />
        </button>

        <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {/* Product List */}
            <ul className="flex flex-col gap-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <li className="text-gray-600">
                    {item.title} - ${item.newPrice}
                  </li>
                  <button
                    onClick={() => removeProductFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <RxCross2 />
                  </button>
                </div>
              ))}
            </ul>

            {/* Clear Cart Button */}
            <button
              onClick={clearProductCart}
              className="mt-4 p-2 w-full flex items-center justify-center gap-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <RxCrossCircled className="text-xl" />
              <span className="font-semibold">Clear Cart</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
