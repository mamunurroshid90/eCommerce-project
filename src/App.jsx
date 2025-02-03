import { Route, Routes } from "react-router-dom";
import RouteLayout from "./pages/RouteLayout/RouteLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import PageNotFount from "./pages/pageNotFound/PageNotFound.jsx";
import CartPage from "./components/cartPage/CartPage.jsx";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <Routes>
        <Route element={<RouteLayout />}>
          <Route
            path="/products/:id"
            element={
              <ProductDetails isCartOpen={isCartOpen} toggleCart={toggleCart} />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFount />} />
        </Route>
      </Routes>
      {isCartOpen && <CartPage onClose={toggleCart} />}
    </>
  );
}

export default App;
