import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ productData }) => {
  return (
    <>
      <div>
        <Link to={`/products/${productData.id}`}>
          <div className=" bg-white max-h-[381px] lg:p-5 p-3 rounded-md shadow hover:shadow-lg hover:bg-slate-50 ">
            <div className=" max-w-full h-auto aspect-square object-cover flex justify-center items-center overflow-hidden">
              <img
                src={productData.img}
                width={180}
                height={100}
                alt="image"
                className=" "
              />
            </div>
            <div className=" flex flex-col gap-4 h-[20%]">
              <h2 className=" text-cart-title font-semibold font-bodyFont tracking-wide hover:underline hover:text-primaryColor">
                {productData.title}
              </h2>
              <div className=" flex items-center gap-5">
                <span className=" text-lg font-bold font-bodyFont text-primaryColor">
                  {productData.newPrice}
                </span>
                <span className=" text-sm text-[#666666] line-through">
                  {productData.prevPrice}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCart;
