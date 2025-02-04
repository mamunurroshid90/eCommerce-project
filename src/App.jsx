import { Route, Routes } from "react-router-dom";
import RouteLayout from "./pages/RouteLayout/RouteLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import PageNotFount from "./pages/pageNotFound/PageNotFound.jsx";
import CartPage from "./components/cartPage/CartPage.jsx";
import { useState } from "react";
import ScrollTop from "./components/scrollTop/ScrollTop.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      {/* Scroll to the top on route change */}
      <ScrollTop />
      <Routes>
        <Route element={<RouteLayout toggleCart={toggleCart} />}>
          <Route
            path="/products/:id"
            element={
              <ProductDetails isCartOpen={isCartOpen} toggleCart={toggleCart} />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFount />} />
        </Route>
      </Routes>
      {isCartOpen && <CartPage onClose={toggleCart} />}
    </>
  );
}

export default App;
