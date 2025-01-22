import React from "react";
import products from "../../db/data";
import { Link, useParams } from "react-router-dom";

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
                  className=" h-[200px]"
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
                  <Link className=" text-primaryDark border-b border-b-primaryDark inline w-fit capitalize text-base font-bodyFont">
                    view more info
                  </Link>
                  <div className=" mt-4">
                    <h3 className=" text-xl font-titleFont font-medium">
                      Payment Options
                    </h3>
                    <div className=" grid grid-cols-2 gap-5 mt-3">
                      <div className=" border py-2 px-3 flex items-center gap-4">
                        <input
                          type="radio"
                          name=""
                          id=""
                          className=" w-5 h-5"
                        />
                        <div className=" flex flex-col gap-1">
                          <div className=" flex gap-3 items-center">
                            <span className=" text-xl font-bold">
                              {product.newPrice}
                            </span>
                            <span className=" text-base font-bold line-through text-[#808080]">
                              {product.prevPrice}
                            </span>
                          </div>
                          <div className=" flex flex-col">
                            <span className=" text-sm capitalize">
                              cash discount price
                            </span>
                            <span className=" text-sm  capitalize text-[#838383]">
                              Online / cash payment
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" border py-2 px-3 flex items-center gap-4">
                        <input
                          type="radio"
                          name=""
                          id=""
                          className=" w-5 h-5"
                        />
                        <div className=" flex flex-col gap-1">
                          <div className=" flex gap-3 items-center">
                            <span className=" text-xl font-bold">
                              $3,358/<span className=" text-sm">month</span>
                            </span>
                          </div>
                          <div className=" flex flex-col">
                            <span className=" text-sm capitalize">
                              Regular Price: $40,300
                            </span>
                            <span className=" text-sm  capitalize text-[#838383]">
                              0% EMI for up to 12 Months***
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center gap-3">
                    <div>
                      <button> - </button>
                      <button> 1 </button>
                      <button> + </button>
                    </div>
                    <div>
                      <button>Buy Now</button>
                    </div>
                  </div>
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
