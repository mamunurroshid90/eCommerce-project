import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { MdCardGiftcard } from "react-icons/md";
import { MdFlashOn } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { MdShoppingBasket } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { categories } from "../category/categoryLinks";
import { HiOutlineMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [heading, setHeading] = useState("");
  // const [subHeading, setSubHeading] = useState("");

  return (
    <>
      <div className=" bg-bgColor">
        <nav className="  max-w-screen-xl mx-auto lg:flex lg:justify-between md:items-center">
          {/* responsive side */}
          <div className=" z-50 py-4 sm:px-3 flex items-center justify-between font-bodyFont p-5 md:w-auto w-full ">
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className=" block lg:hidden text-white cursor-pointer "
            >
              {openMenu ? (
                <RxCross2 className=" text-white text-2xl hover:bg-slate-700 rounded-full w-7 h-7 transition-all duration-500" />
              ) : (
                <FaBars className=" text-white text-2xl transition-all duration-500" />
              )}
            </div>
            <div className=" w-[120px] h-[40px] lg:w-[150px] lg:h-[50px] flex justify-center items-center">
              <img src={Logo} alt="logo.png" className=" w-full h-full" />
            </div>
            <div className=" flex items-center gap-5 text-white lg:hidden">
              <div onClick={() => setShowSearch(!showSearch)}>
                <IoSearch className=" text-2xl text-white" />
              </div>
              <div>
                <MdShoppingBasket className=" text-2xl text-white" />
              </div>
            </div>
          </div>

          {/* no responsive side */}
          <div className=" hidden lg:block relative">
            <input
              type="text"
              placeholder="Search"
              className=" py-2 px-5 rounded w-[350px] border-none outline-none "
            />
            <IoSearch className=" absolute top-[50%] -translate-y-[50%] right-2 z-40" />
          </div>
          <div className=" hidden lg:block">
            <div className=" flex items-center gap-3 ">
              <MdCardGiftcard className=" text-2xl text-primaryColor" />
              <div>
                <p className=" leading-none text-white">Offers</p>
                <small className=" text-xs leading-none text-grayColor ">
                  Latest Offers
                </small>
              </div>
            </div>
          </div>
          <div className=" hidden lg:block">
            <div className=" flex items-center gap-3 ">
              <MdFlashOn className=" text-2xl text-primaryColor" />
              <div>
                <p className=" leading-none text-white">Happy Hour</p>
                <small className=" text-xs leading-none  text-grayColor">
                  Special Deals
                </small>
              </div>
            </div>
          </div>
          <div className=" hidden lg:block">
            <div className=" flex items-center gap-3 ">
              <MdAccountBox className=" text-2xl text-primaryColor" />
              <div>
                <p className=" leading-none text-white">Account</p>
                <small className=" text-xs leading-none text-grayColor ">
                  {" "}
                  <span>register</span> or <span>login</span>
                </small>
              </div>
            </div>
          </div>
          <div className=" hidden lg:block">
            <button className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 bg-[length:200%_200%] animate-gradient text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300">
              PC Builder
            </button>
          </div>
          {/* responsive search bar */}
          {showSearch && (
            <div className=" absolute top-16 left-0 right-0 z-30 border border-gray-300 rounded lg:hidden">
              <div className=" relative">
                <input
                  type="text"
                  placeholder="Search"
                  className=" py-2 px-5 rounded w-full border-none outline-none bg-gray-200 "
                />
                <IoSearch className=" absolute top-[50%] -translate-y-[50%] right-2 z-40" />
              </div>
            </div>
          )}
          {/* responsive menu */}
          <ul
            className={` overflow-y-scroll flex flex-col gap-4 md:hidden bg-white absolute w-[70%] h-full bottom-0 py-4 pl-4 duration-500 top-[72px] z-30  ${
              openMenu ? "left-0" : "left-[-100%]"
            }`}
          >
            {categories.map((category, index) => (
              <div className=" ">
                <li
                  onClick={() =>
                    heading !== category.name
                      ? setHeading(category.name)
                      : setHeading("")
                  }
                  key={index}
                  className=" cursor-pointer font-titleFont font-medium text-black hover:text-primaryColor flex justify-between items-center pr-5 py-2 border-b border-[#ebdede]"
                >
                  {category.name}
                  <span>
                    {heading === category.name ? (
                      <HiOutlineMinus />
                    ) : (
                      <AiOutlinePlus />
                    )}
                  </span>
                </li>
                <div
                  className={` ${
                    heading !== category.name ? "hidden" : "md:hidden"
                  }`}
                >
                  {/* subLinks */}
                  {category.subLinks.map((subLink) => (
                    <div>
                      <div>
                        <h3
                          onClick={() =>
                            heading === subLink.Head
                              ? setHeading(subLink.Head)
                              : setHeading("")
                          }
                        >
                          {subLink.Head}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SearchBar;
