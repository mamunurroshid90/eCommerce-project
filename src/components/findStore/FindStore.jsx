import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const FindStore = () => {
  return (
    <>
      <div className=" pb-10 px-container-padding font-titleFont">
        <div className="container rounded-md max-w-screen-xl bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900">
          <div className=" py-8 pl-7 pr-5 flex flex-col gap-5 items-center md:flex md:justify-between md:items-center md:flex-row">
            <div className=" md:flex-row md:items-center md:gap-5 flex flex-col items-center gap-2 text-white">
              <FaLocationDot className=" text-4xl" />
              <div>
                <h2 className=" text-2xl text-center md:text-3xl font-bold font-titleFont">
                  20+ Physical Stores
                </h2>
                <p className=" text-xs md:text-base font-medium font-bodyFont">
                  Visit Our Store & Get Your Desired IT Products
                </p>
              </div>
            </div>
            <div className=" w-[180px] md:w-[220px] bg-[#f3a127] py-2 px-5 md:py-4 md:px-10 rounded-full hover:bg-[#a06d20] transition-all duration-200 delay-100 font-medium font-bodyFont">
              <a href="#" className=" flex items-center gap-2">
                Find Our Store
                <IoMdSearch className=" text-xl " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindStore;
