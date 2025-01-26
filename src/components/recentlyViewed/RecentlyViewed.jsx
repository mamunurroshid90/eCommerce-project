import React from "react";
import { TbCopyPlusFilled } from "react-icons/tb";

const RecentlyViewed = ({ product }) => {
  return (
    <>
      <div className=" bg-white px-3 py-5 shadow mt-5 rounded">
        <h2 className="text-xl text-blueColor font-titleFont font-semibold text-center pb-3">
          Recently Viewed
        </h2>
        <div className=" grid grid-cols-8 gap-3 px-2 py-5 border-t">
          <div className=" col-span-2 pt-4">
            <img src={product.img} alt="product-img" className="" />
          </div>
          <div className=" col-span-6">
            <h2 className=" text-base font-medium font-titleFont hover:underline hover:text-primaryColor">
              {product.title}
            </h2>
            <div className=" mt-1 flex items-center gap-2">
              <span className=" text-primaryColor font-semibold text-lg">
                {product.newPrice}
              </span>
              <span className=" line-through text-sm">{product.prevPrice}</span>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-[#666666]">
              <TbCopyPlusFilled className=" text-xl" />
              <span className=" text-xs">Add to Compare</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyViewed;
