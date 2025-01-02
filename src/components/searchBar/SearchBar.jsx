import React from "react";
import Logo from "../../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { MdCardGiftcard } from "react-icons/md";
import { MdFlashOn } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";

const SearchBar = () => {
  return (
    <>
      <div className=" bg-bgColor">
        <nav className="  max-w-screen-xl mx-auto py-4 sm:px-3 flex items-center justify-between">
          <div className=" w-[150px] h-[50px] flex justify-center items-center">
            <img src={Logo} alt="logo.png" className=" w-full h-full" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className=" py-2 px-5 rounded w-[350px] border-none outline-none "
            />
            <IoSearch className=" absolute top-[50%] -translate-y-[50%] right-2 z-40" />
          </div>
          <div className=" flex items-center gap-3">
            <MdCardGiftcard className=" text-2xl text-primaryColor" />
            <div>
              <p className=" leading-none text-white">Offers</p>
              <small className=" text-xs leading-none text-grayColor ">
                Latest Offers
              </small>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <MdFlashOn className=" text-2xl text-primaryColor" />
            <div>
              <p className=" leading-none text-white">Happy Hour</p>
              <small className=" text-xs leading-none  text-grayColor">
                Special Deals
              </small>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <MdAccountBox className=" text-2xl text-primaryColor" />
            <div>
              <p className=" leading-none text-white">Account</p>
              <small className=" text-xs leading-none text-grayColor ">
                {" "}
                <span>register</span> or <span>login</span>
              </small>
            </div>
          </div>
          <div>
            <button class="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 bg-[length:200%_200%] animate-gradient text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg">
              PC Builder
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SearchBar;
