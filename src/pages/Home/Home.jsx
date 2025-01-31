import React from "react";
import { bannerData } from "../../db/bannerData";
import ProductData from "../../db/data";
import FindStore from "../../components/findStore/FindStore";
import FeaturedCategory from "../../components/featuredCategory/FeaturedCategory";
import Services from "../../components/services/Services";
import MarqueeComp from "../../components/marquee/MarqueeComp";
import Banner from "../../components/banner/Banner";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Checkout from "../checkout/Checkout";
import ProductList from "../ProductsLists/ProductList";

const Home = () => {
  // console.log(ProductData);
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto lg:pt-7">
        <Banner bannerData={bannerData} />
        <Services />
        <MarqueeComp />
        <FeaturedCategory />
        <FindStore />

        <ProductList productData={ProductData} />
        {/* <ShoppingCart /> */}
        {/* <Checkout /> */}
      </div>
    </>
  );
};

export default Home;
