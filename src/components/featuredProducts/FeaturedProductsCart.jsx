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
        <div className=" bg-white lg:h-[300px] h-[250px] lg:p-5 p-3 rounded-md shadow ">
          <div className=" lg:h-[180px] h-[100px]">
            <img src={img} alt="image" className=" w-full lg:h-[70%] h-[55%]" />
          </div>
          <div className=" relative">
            <h2 className=" text-md font-semibold font-bodyFont tracking-wide">
              {title}
            </h2>
            <div className=" absolute -bottom-14 flex items-center gap-4">
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
