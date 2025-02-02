import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import { clearCart, removeFromCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const CartPage = ({ onClose }) => {
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

  // Reference to the cart sidebar
  const cartRef = useRef(null);

  // Close the cart when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0  flex justify-end">
      {/* Sidebar Cart */}
      <div
        ref={cartRef}
        className="w-[400px] bg-white h-full shadow-lg p-5 relative"
      >
        {/* Clear Cart Button */}
        <button
          title="clear cart"
          onClick={clearProductCart}
          className=" absolute left-2 top-2 p-2 flex items-center justify-center gap-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          <RxCrossCircled className="text-xl" />
        </button>

        {/* Close Button */}
        <button
          title="close cart"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 hover:bg-slate-400 rounded-full"
        >
          <RxCross2 className="text-xl" />
        </button>

        <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {/* Product List */}
            <ul className="flex flex-col justify-between gap-3 min-h-96">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="text-gray-600 flex items-center gap-4">
                    <div className=" w-16">
                      <img
                        src={item.img}
                        alt="image"
                        className=" w-full h-full"
                      />
                    </div>
                    <div className=" flex flex-col gap-1">
                      <h5 className=" text-sm font-bold">{item.title}</h5>
                      <div className=" text-base font-bold">
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
              <div className=" flex items-center justify-between border-b py-2">
                <div className="text-xl text-[#4e4e4e] text-end w-1/2">
                  Subtotal
                </div>
                <div className=" w-1/2 text-end text-xl font-bold">
                  ${calculateSubtotal().toFixed(2)}
                </div>
              </div>
              <div className=" flex items-center justify-between border-b py-2">
                <div className="text-xl text-[#4e4e4e] text-end w-1/2">
                  Tax (10%){" "}
                </div>
                <div className=" w-1/2 text-end text-xl font-bold">
                  ${(calculateSubtotal() * 0.1).toFixed(2)}
                </div>
              </div>
              <div className=" flex items-center justify-between border-b py-2">
                <div className="text-xl text-[#4e4e4e] text-end w-1/2">
                  Shipping
                </div>
                <div className=" w-1/2 text-end text-xl font-bold">$10.00</div>
              </div>
              <div className=" flex items-center justify-between border-b py-2">
                <div className="text-xl text-[#4e4e4e] text-end w-1/2">
                  Total
                </div>
                <div className=" w-1/2 text-end text-xl font-bold">
                  ${calculateTotal().toFixed(2)}
                </div>
              </div>
            </div>
          </>
        )}
        <div className=" w-full bg-primaryColor py-2 flex justify-center rounded">
          <button className=" text-base font-semibold text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
