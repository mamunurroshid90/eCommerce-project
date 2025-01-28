import React from "react";
import { FaLaptop } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { LuMessageSquareWarning } from "react-icons/lu";

const Services = () => {
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto mt-6 xl:mt-12 px-3 font-titleFont">
        <div className=" grid grid-cols-2 gap-3 xl:gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className=" flex items-center gap-3 xl:gap-5 p-3 xl:p-5 rounded-md bg-white shadow-md flex-1">
            <div className=" bg-primaryColor p-3 rounded-full text-white">
              <FaLaptop className=" text-sm xl:text-2xl" />
            </div>
            <div>
              <h4 className=" text-sm xl:text-xl font-bold font-titleFont">
                Laptop Finder
              </h4>
              <p className=" hidden xl:block">Find your Laptop easily</p>
            </div>
          </div>
          <div className=" flex items-center gap-3 xl:gap-5 p-3 xl:p-5 rounded-md bg-white shadow-md flex-1">
            <div className=" bg-primaryColor p-3 rounded-full text-white">
              <LuMessageSquareWarning className=" text-sm xl:text-2xl" />
            </div>
            <div>
              <h4 className="text-sm xl:text-xl font-bold font-titleFont">
                Rise a Complain
              </h4>
              <p className=" hidden xl:block">Share your experience</p>
            </div>
          </div>
          <div className=" flex items-center gap-3 xl:gap-5 p-3 xl:p-5 rounded-md bg-white shadow-md flex-1">
            <div className=" bg-primaryColor p-3 rounded-full text-white">
              <MdOutlineContactSupport className=" text-sm xl:text-2xl" />
            </div>
            <div>
              <h4 className="text-sm xl:text-xl font-bold font-titleFont">
                Online Support
              </h4>
              <p className=" hidden xl:block">Get your online support</p>
            </div>
          </div>
          <div className=" flex items-center gap-3 xl:gap-5 p-3 xl:p-5 rounded-md bg-white shadow-md flex-1">
            <div className=" bg-primaryColor p-3 rounded-full text-white">
              <IoSettingsSharp className=" text-sm xl:text-2xl" />
            </div>
            <div>
              <h4 className="text-sm xl:text-xl font-bold font-titleFont">
                Servicing Center
              </h4>
              <p className=" hidden xl:block">Repair your device</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
