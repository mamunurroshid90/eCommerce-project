import React from "react";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import { bannerData } from "../../db/bannerData";
import data from "../../db/data";
import FindStore from "../../components/findStore/FindStore";
import FeaturedCategory from "../../components/featuredCategory/FeaturedCategory";
import Services from "../../components/services/Services";
import MarqueeComp from "../../components/marquee/MarqueeComp";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto lg:pt-7">
        <Banner bannerData={bannerData} />
        <Services />
        <MarqueeComp />
        <FeaturedCategory />
        <FindStore />
        <FeaturedProducts data={data} />
      </div>
    </>
  );
};

export default Home;
