import React from "react";
import products from "../../db/data";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((pItem) => pItem.id === parseInt(id));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <div className=" bg-white">
        <div className=" container max-w-screen-xl mx-auto lg:pt-7 h-fit">
          <div>
            <div className=" grid grid-cols-2 gap-5 py-7">
              <div className=" flex justify-center items-center">
                <img
                  src={product.img}
                  alt="product img"
                  className=" h-[150px]"
                />
              </div>
              <div>
                <h3 className=" text-xl font-titleFont font-medium text-blue-800">
                  {product.title}
                </h3>
                <div className=" mt-6 flex flex-col gap-y-2">
                  <h2 className=" text-lg font-medium font-titleFont mb-3">
                    Key Features
                  </h2>
                  <p className=" text-base font-medium font-bodyFont">
                    Model: {product.model}
                  </p>
                  <p className=" text-base font-medium font-bodyFont">
                    Capacity: {product.capacity}
                  </p>
                  <p className=" text-base font-medium font-bodyFont">
                    TurnTable: {product.turntable}
                  </p>
                  <p className=" text-base font-medium font-bodyFont">
                    Convention Power: {product.conventionPower}
                  </p>
                  <p className=" text-base font-medium font-bodyFont">
                    Features: {product.features}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
