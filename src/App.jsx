import { Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import FeaturedCategory from "./components/featuredCategory/FeaturedCategory.jsx";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts.jsx";
import FindStore from "./components/findStore/FindStore.jsx";
import Footer from "./components/footer/Footer.jsx";
import MarqueeComp from "./components/marquee/MarqueeComp.jsx";
import SearchBar from "./components/searchBar/SearchBar";
import Services from "./components/services/Services.jsx";
import WeAreBest from "./components/weAreBest/WeAreBest.jsx";
import Data from "./db/data.js";
import RouteLayout from "./pages/RouteLayout/RouteLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import ProductList from "./pages/ProductsLists/ProductList.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <>
      {/* <div>
        <SearchBar />
        <Category />
        <Banner data={Data} />
        <Services />
        <MarqueeComp />
        <FeaturedCategory />
        <FindStore />
        <FeaturedProducts data={Data} />
        <WeAreBest />
        <Footer />
      </div> */}
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
