import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import { clearCart, removeFromCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cart items", cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.newPrice * item.count,
      0
    );
  };

  // Calculate Total (including tax and shipping)
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.1; // Example tax (10%)
    const shipping = 10; // Example shipping cost
    return subtotal + tax + shipping;
  };

  // Calculate total for a single item
  const calculateItemTotal = (item) => {
    return item.newPrice * item.count;
  };

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
      <div className="w-[400px] bg-white h-full shadow-lg p-5 relative">
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
                  <div className="text-gray-600">
                    <div className=" w-20 h-6">
                      <img
                        src={item.img}
                        alt="image"
                        className=" w-full h-full"
                      />
                    </div>
                    <div>
                      <h5>{item.title}</h5>
                      <div>
                        <span>${item.newPrice}</span>
                        <span> x </span>
                        <span>{item.count}</span>
                        <span> = </span>
                        <span>${calculateItemTotal(item).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeProductFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MdDeleteForever className=" text-2xl" />
                  </button>
                </div>
              ))}
            </ul>

            {/* Subtotal and Total */}
            <div className="mt-4 border-t pt-4">
              <p className="text-gray-600">
                Subtotal: ${calculateSubtotal().toFixed(2)}
              </p>
              <p className="text-gray-600">
                Tax (10%): ${(calculateSubtotal() * 0.1).toFixed(2)}
              </p>
              <p className="text-gray-600">Shipping: $10.00</p>
              <p className="text-lg font-bold mt-2">
                Total: ${calculateTotal().toFixed(2)}
              </p>
            </div>

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
