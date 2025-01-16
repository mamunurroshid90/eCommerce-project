import React from "react";
import FeaturedProductsCart from "./FeaturedProductsCart";

const FeaturedProducts = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto lg:pt-7">
        <h1 className=" text-center text-section-heading font-bold font-titleFont">
          Featured Products
        </h1>
        <h5 className=" text-center text-[] font-medium font-titleFont mt-3">
          Check & Get Your Desired Product!
        </h5>
        <div className=" px-container-padding grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pb-10 pt-7">
          {data.map(
            ({
              img,
              title,
              star,
              reviews,
              prevPrice,
              newPrice,
              company,
              color,
              category,
            }) => (
              <FeaturedProductsCart
                key={Math.random}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice}
                company={company}
                color={color}
                category={category}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
