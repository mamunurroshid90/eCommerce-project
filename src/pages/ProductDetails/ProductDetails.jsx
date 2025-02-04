import React, { useState } from "react";
import products from "../../db/data";
import { useNavigate, useParams } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-scroll";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";
import RecentlyViewed from "../../components/recentlyViewed/RecentlyViewed";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetails = ({ isCartOpen, toggleCart }) => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((pItem) => pItem.id === parseInt(id));
  const [productCount, setProductCount] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, count: productCount })); // Pass product and count
    toggleCart();
  };

  const handleIncrease = () => {
    setProductCount(productCount + 1);
  };

  const handleDecrease = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div className=" bg-white shadow font-titleFont">
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
                <h3 className=" lg:text-xl text-lg font-titleFont font-medium text-blueColor">
                  {product.title}
                </h3>
                <div className=" mt-3 flex flex-col gap-y-2">
                  <h2 className=" lg:text-lg text-base font-medium font-titleFont">
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
                  <Link
                    to="#"
                    className=" text-primaryDark border-b border-b-primaryDark inline w-fit capitalize lg:text-base text-sm font-bodyFont"
                  >
                    view more info
                  </Link>
                  <div className=" mt-4">
                    <h3 className=" text-xl font-titleFont font-medium">
                      Payment Options
                    </h3>
                    <div className=" lg:grid lg:grid-cols-2 lg:gap-5 grid gap-3 mt-3">
                      <div
                        onClick={() => handleChange("option1")}
                        className={` border rounded cursor-pointer transition py-2 px-3 flex items-center gap-4 ${
                          selectedValue === "option1"
                            ? "border-blue-500"
                            : "border-gray-300"
                        }`}
                      >
                        <label htmlFor="">
                          <input
                            type="radio"
                            name="options"
                            id=""
                            value="option1"
                            checked={selectedValue === "option1"}
                            className=" w-5 h-5"
                            onChange={() => handleChange("option1")}
                          />
                        </label>
                        <div className=" flex flex-col gap-1">
                          <div className=" flex gap-3 items-center">
                            <span className=" text-xl font-bold">
                              {product.newPrice}
                            </span>
                            <span className=" text-base font-bold line-through text-grayColor">
                              {product.prevPrice}
                            </span>
                          </div>
                          <div className=" flex flex-col">
                            <span className=" text-sm capitalize">
                              cash discount price
                            </span>
                            <span className=" text-sm  capitalize text-grayColor">
                              Online / cash payment
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => handleChange("option2")}
                        className={` border rounded cursor-pointer transition py-2 px-3 flex items-center gap-4 ${
                          selectedValue === "option2"
                            ? "border-blue-500"
                            : "border-gray-300"
                        }`}
                      >
                        <label htmlFor="">
                          <input
                            type="radio"
                            name="options"
                            id=""
                            value="option2"
                            checked={selectedValue === "option2"}
                            className=" w-5 h-5"
                            onChange={() => handleChange("option2")}
                          />
                        </label>
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
                            <span className=" text-sm  capitalize text-grayColor">
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
                        className=" flex items-center border border-[#ECEDEF] w-[140px] "
                      >
                        <span
                          onClick={handleDecrease}
                          disabled={productCount === 1}
                          className={`text-base flex justify-center items-center cursor-pointer w-10 h-10 border-r border-[#ECEDEF] ${
                            productCount === 1
                              ? "cursor-not-allowed opacity-50"
                              : "hover:bg-[#EDF2F5]"
                          }`}
                        >
                          <FaMinus />
                        </span>
                        <span>
                          <input
                            type="text"
                            value={productCount}
                            size={4}
                            readOnly
                            className=" w-[60px] h-[40px] border-none text-center outline-none hover:bg-[#EDF2F5]"
                          />
                        </span>
                        <span
                          onClick={handleIncrease}
                          className=" text-base flex justify-center items-center cursor-pointer w-10 h-10 border-l border-[#ECEDEF] hover:bg-[#EDF2F5]"
                        >
                          <FiPlus />
                        </span>
                      </label>
                    </div>
                    <div>
                      <button
                        onClick={handleAddToCart}
                        className=" py-3 lg:min-w-[200px] min-w-[100px] rounded-md bg-blue-700 text-white font-semibold relative overflow-hidden px-6 group"
                      >
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
        <div className=" container mx-auto max-w-screen-xl lg:my-5 mt-5 lg:grid lg:grid-cols-12 lg:gap-5">
          <div className=" col-span-9">
            <div>
              <ul className=" flex flex-wrap gap-3 cursor-pointer">
                <Link
                  to="description"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  activeClass="active"
                  className=" inline-block py-2
                  hover:bg-primaryDark active:bg-primaryDark hover:text-white px-6 bg-white shadow
                  rounded"
                >
                  <span className=" font-medium">Description</span>
                </Link>

                <Link
                  to="questions"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className=" inline-block py-2 hover:bg-primaryDark active:bg-primaryDark  hover:text-white px-6 bg-white shadow rounded"
                >
                  <span className=" font-medium">Questions(0)</span>
                </Link>
                <Link
                  to="reviews"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className=" inline-block py-2 hover:bg-primaryDark active:bg-primaryDark  hover:text-white px-6 bg-white shadow rounded"
                >
                  <span className=" font-medium">Reviews(0)</span>
                </Link>
              </ul>
            </div>
            <div
              id="description"
              className=" container max-w-screen-xl bg-white px-5 py-7 rounded shadow mt-5"
            >
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

            <div
              id="questions"
              className=" container max-w-screen-xl bg-white px-5 py-7 rounded shadow mt-5"
            >
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
                  <button className=" lg:py-2 py-2 rounded-md border border-blueColor font-bodyFont text-blueColor font-semibold relative overflow-hidden px-6 hover:text-white group">
                    <span className=" absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                    <span className=" relative z-10">Ask Question</span>
                  </button>
                </div>
              </div>
              <div className=" w-full">
                <div className=" flex flex-col py-12 justify-center items-center">
                  <div className=" w-[88px] h-[88px] bg-[#3749BB0D] rounded-full flex justify-center items-center">
                    <RiMessage2Fill className=" text-blueColor text-4xl" />
                  </div>
                  <p className=" text-sm text-[#666666] mt-3 font-bodyFont">
                    This product has no reviews yet. Be the first one to write a
                    review.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="reviews"
              className=" container max-w-screen-xl bg-white px-5 py-7 rounded shadow mt-5"
            >
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
                  <button className="lg:py-2 py-2 rounded-md border border-blueColor font-bodyFont text-blueColor font-semibold relative overflow-hidden px-6 hover:text-white group">
                    <span className="absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                    <span className=" relative z-10">Write a Review</span>
                  </button>
                </div>
              </div>
              <div className=" w-full">
                <div className=" flex flex-col py-12 justify-center items-center">
                  <div className=" w-[88px] h-[88px] bg-[#3749BB0D] rounded-full flex justify-center items-center">
                    <MdAssignment className=" text-blueColor text-4xl" />
                  </div>
                  <p className=" text-sm text-[#666666] mt-3 font-bodyFont">
                    This product has no reviews yet. Be the first one to write a
                    review.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Related products items */}
          <div className=" col-span-3 mt-4 lg:mt-0">
            <RelatedProducts product={product} />
            {/* Recently Viewed */}
            <RecentlyViewed product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
