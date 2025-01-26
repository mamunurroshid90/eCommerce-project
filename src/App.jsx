import { Route, Routes } from "react-router-dom";
import RouteLayout from "./pages/RouteLayout/RouteLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import ProductList from "./pages/ProductsLists/ProductList.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RouteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
