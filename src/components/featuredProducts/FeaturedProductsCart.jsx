import React from "react";

const FeaturedProductsCart = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
}) => {
  return (
    <>
      <div>
        <div className=" bg-white max-h-[381px] lg:p-5 p-3 rounded-md shadow ">
          <div className=" max-w-full h-auto aspect-square object-cover flex justify-center items-center overflow-hidden">
            <img src={img} width={180} height={100} alt="image" className=" " />
          </div>
          <div className=" flex flex-col gap-2 h-[20%]">
            <h2 className=" text-cart-title font-semibold font-bodyFont tracking-wide">
              {title}
            </h2>
            <div className=" flex items-center gap-4">
              <span className=" text-lg font-bold font-bodyFont text-primaryColor">
                {newPrice}
              </span>
              <span className=" text-sm text-[#666666] line-through">
                {prevPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductsCart;
