import React from "react";
import { bannerData } from "../../db/bannerData";
import data from "../../db/data";
import FindStore from "../../components/findStore/FindStore";
import FeaturedCategory from "../../components/featuredCategory/FeaturedCategory";
import Services from "../../components/services/Services";
import MarqueeComp from "../../components/marquee/MarqueeComp";
import Banner from "../../components/banner/Banner";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Checkout from "../checkout/Checkout";
import AddToCart from "../../components/addToCart/AddToCart";
import ProductList from "../ProductsLists/ProductList";

const Home = () => {
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto lg:pt-7">
        <Banner bannerData={bannerData} />
        <Services />
        <MarqueeComp />
        <FeaturedCategory />
        <FindStore />

        <ProductList data={data} />
        {/* <ShoppingCart /> */}
        {/* <Checkout /> */}
        <AddToCart />
      </div>
    </>
  );
};

export default Home;
