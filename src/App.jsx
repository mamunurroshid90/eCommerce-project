import { Route, Routes } from "react-router-dom";
import RouteLayout from "./pages/RouteLayout/RouteLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import PageNotFount from "./pages/pageNotFound/PageNotFound.jsx";
import CartPage from "./components/cartPage/CartPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RouteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFount />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
