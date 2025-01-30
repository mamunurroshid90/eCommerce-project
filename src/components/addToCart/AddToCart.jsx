import React, { useState } from "react";

const AddToCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addProductToCart = () => {
    setCartItems([...cartItems, "Product"]); // Add a product to the cart
    setIsCartOpen(true); // Open the cart
  };

  // Function to close the cart
  const closeCart = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      <div>
        <div className="bg-gray-100 p-8 min-h-screen">
          {/* Product Button */}
          <button
            onClick={addProductToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Product to Cart
          </button>

          {/* Cart Overlay */}
          {isCartOpen && (
            <div
              onClick={closeCart}
              className="fixed inset-0 bg-black bg-opacity-50"
            ></div>
          )}

          {/* Cart Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Your Cart</h2>
            </div>
            <div className="p-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index} className="text-gray-600">
                      {item} {index + 1}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
