import React from "react";
import products from "../../db/data";
import { Link, useParams } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((pItem) => pItem.id === parseInt(id));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <div className=" bg-white shadow">
        <div className=" container max-w-screen-xl mx-auto lg:pt-7 pt-16 h-fit px-3 ">
          <div>
            {/* key features */}
            <div className=" lg:grid lg:grid-cols-5 lg:gap-5 py-7 ">
              <div className=" flex justify-center items-center col-span-2 pb-5">
                <img
                  src={product.img}
                  alt="product img"
                  className=" lg:h-[200px] h-[150px]"
                />
              </div>
              <div className=" col-span-3">
                <h3 className=" lg:text-xl text-lg font-titleFont font-medium text-blue-800">
                  {product.title}
                </h3>
                <div className=" mt-6 flex flex-col gap-y-2">
                  <h2 className=" lg:text-lg text-base font-medium font-titleFont mb-3">
                    Key Features
                  </h2>
                  <p className=" lg:text-base text-sm font-medium font-bodyFont">
                    Model: {product.model}
                  </p>
                  <p className=" lg:text-base text-sm font-medium font-bodyFont">
                    Capacity: {product.capacity}
                  </p>
                  <p className=" lg:text-base text-sm font-medium font-bodyFont">
                    TurnTable: {product.turntable}
                  </p>
                  <p className=" lg:text-base text-sm font-medium font-bodyFont">
                    Convention Power: {product.conventionPower}
                  </p>
                  <p className=" lg:text-base text-sm font-medium font-bodyFont">
                    Features: {product.features}
                  </p>
                  <Link className=" text-primaryDark border-b border-b-primaryDark inline w-fit capitalize lg:text-base text-sm font-bodyFont">
                    view more info
                  </Link>
                  <div className=" mt-4">
                    <h3 className=" text-xl font-titleFont font-medium">
                      Payment Options
                    </h3>
                    <div className=" lg:grid lg:grid-cols-2 lg:gap-5 grid gap-3 mt-3">
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
                  <div className=" flex items-center gap-3 mt-3">
                    <div className="">
                      <label
                        htmlFor=""
                        className=" flex items-center border border-[#EDF2F5] w-[140px] "
                      >
                        <span className=" text-base flex justify-center items-center w-10 h-10 border-r border-[#dcddde] hover:bg-[#EDF2F5]">
                          <FaMinus />
                        </span>
                        <span>
                          <input
                            type="text"
                            value={1}
                            size={4}
                            className=" w-[60px] h-[40px] border-none text-center outline-none hover:bg-[#EDF2F5]"
                          />
                        </span>
                        <span className=" text-base flex justify-center items-center w-10 h-10 border-l border-[#dcddde] hover:bg-[#EDF2F5]">
                          <FiPlus />
                        </span>
                      </label>
                    </div>
                    <div>
                      <button className=" py-3 lg:min-w-[200px] min-w-[100px] rounded-md bg-blue-700 text-white font-semibold relative overflow-hidden px-6 group">
                        <span className=" absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                        <span className=" relative z-10 text-sm font-semibold">
                          Buy Now
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* description details */}
      <div className=" pb-10 px-3">
        <div>
          <div className=" container mx-auto max-w-screen-xl my-5">
            <ul className=" flex flex-wrap gap-3">
              <Link className=" inline-block py-2 hover:bg-primaryDark  hover:text-white px-6 bg-white shadow rounded">
                <span className=" font-medium">Description</span>
              </Link>
              <Link className=" inline-block py-2 hover:bg-primaryDark  hover:text-white px-6 bg-white shadow rounded">
                <span className=" font-medium">Questions(0)</span>
              </Link>
              <Link className=" inline-block py-2 hover:bg-primaryDark  hover:text-white px-6 bg-white shadow rounded">
                <span className=" font-medium">Reviews(0)</span>
              </Link>
            </ul>
          </div>
          <div className=" container max-w-screen-xl bg-white px-5 py-7 rounded shadow">
            <h3 className=" font-titleFont font-semibold text-xl">
              Description
            </h3>
            <div className=" pt-7">
              <h2 className=" lg:text-xl text-base font-semibold font-titleFont leading-tight">
                {product.description.title_1}
              </h2>
              <p className=" lg:text-base text-sm font-bodyFont font-medium lg:mt-5 mt-2">
                {product.description.desc_1}
              </p>
            </div>
            <div className=" pt-4">
              <h2 className=" lg:text-xl text-base font-semibold font-titleFont leading-tight">
                {product.description.title_2}
              </h2>
              <p className=" lg:text-base text-sm font-bodyFont font-medium lg:mt-5 mt-2">
                {product.description.desc_2}
              </p>
            </div>
          </div>
          <div className=" container max-w-screen-xl bg-white px-5 py-7 rounded shadow mt-5">
            <h2 className=" lg:text-xl text-base font-semibold font-titleFont leading-tight">
              {product.description.title_3}
            </h2>
            <p className=" lg:text-base text-sm font-bodyFont font-medium lg:mt-5 mt-2 ">
              {product.description.desc_3}
            </p>
          </div>

          <div className=" container max-w-screen-xl bg-white px-5 py-7 rounded shadow mt-5">
            <div className=" flex flex-wrap gap-2 justify-between items-center border-b pb-7">
              <div className=" ">
                <h3 className=" text-xl font-titleFont font-semibold">
                  Questions(0)
                </h3>
                <p className=" text-sm text-[#666666] mt-3">
                  Have question about this product? Get specific details about
                  this product from expert.
                </p>
              </div>
              <div className="">
                <button className=" lg:py-2 py-2 rounded-md border border-[#3749bb] font-bodyFont text-[#3749bb] font-semibold relative overflow-hidden px-6 hover:text-white group">
                  <span className=" absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                  <span className=" relative z-10">Ask Question</span>
                </button>
              </div>
            </div>
            <div className=" w-full">
              <div className=" flex flex-col py-12 justify-center items-center">
                <div className=" w-[88px] h-[88px] bg-[#3749BB0D] rounded-full flex justify-center items-center">
                  <RiMessage2Fill className=" text-[#3749bb] text-4xl" />
                </div>
                <p className=" text-sm text-[#666666] mt-3 font-bodyFont">
                  This product has no reviews yet. Be the first one to write a
                  review.
                </p>
              </div>
            </div>
          </div>

          <div className=" container max-w-screen-xl bg-white px-5 py-7 rounded shadow mt-5">
            <div className=" flex flex-wrap gap-2 justify-between items-center border-b pb-7">
              <div className=" ">
                <h3 className=" text-xl font-titleFont font-semibold">
                  Reviews (0)
                </h3>
                <p className=" text-sm text-[#666666] mt-3">
                  There are no questions asked yet. Be the first one to ask a
                  question.
                </p>
              </div>
              <div className="">
                <button className="lg:py-2 py-2 rounded-md border border-[#3749bb] font-bodyFont text-[#3749bb] font-semibold relative overflow-hidden px-6 hover:text-white group">
                  <span className="absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                  <span className=" relative z-10">Write a Review</span>
                </button>
              </div>
            </div>
            <div className=" w-full">
              <div className=" flex flex-col py-12 justify-center items-center">
                <div className=" w-[88px] h-[88px] bg-[#3749BB0D] rounded-full flex justify-center items-center">
                  <MdAssignment className=" text-[#3749bb] text-4xl" />
                </div>
                <p className=" text-sm text-[#666666] mt-3 font-bodyFont">
                  This product has no reviews yet. Be the first one to write a
                  review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
