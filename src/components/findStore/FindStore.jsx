import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const FindStore = () => {
  return (
    <>
      <div className=" pb-10">
        <div className="container mx-auto rounded-md max-w-screen-xl bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700">
          <div className=" py-7 pl-7 pr-5">
            <div>
              <FaLocationDot />
              <div>
                <h2>20+ Physical Stores</h2>
                <p>Visit Our Store & Get Your Desired IT Products</p>
              </div>
            </div>
            <div>
              <input type="text" placeholder="Find Our Store" />
              <IoMdSearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindStore;
