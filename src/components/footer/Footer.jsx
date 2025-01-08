import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className=" bg-bgColor">
        <div className=" container max-w-screen-xl mx-auto py-10 px-3">
          <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
              <div className=" flex flex-col gap-5">
                <h3 className=" text-base text-center text-white tracking-[0.2em] uppercase font-bold font-titleFont">
                  Support
                </h3>
                <a
                  href="#"
                  className=" border border-[#838383] py-3 px-5 rounded-full w-[300px] flex items-center gap-5"
                >
                  <div className=" border-r-[1px] border-[#838383] pr-4">
                    <FaPhone className=" text-2xl text-white" />
                  </div>
                  <div>
                    <p className=" text-xs text-[#838383] font-bodyFont">
                      9AM - 8PM
                    </p>
                    <h5 className=" text-xl text-primaryColor font-bold">
                      16793
                    </h5>
                  </div>
                </a>
                <a
                  href="#"
                  className=" border border-[#838383] py-3 px-5 rounded-full w-[300px] flex items-center gap-5"
                >
                  <div className=" border-r-[1px] border-[#838383] pr-4">
                    <FaLocationDot className=" text-2xl text-white" />
                  </div>
                  <div>
                    <p className=" text-xs text-[#838383] font-bodyFont">
                      Store Locator
                    </p>
                    <h5 className=" text-xl text-primaryColor font-bold">
                      Find Our Store
                    </h5>
                  </div>
                </a>
              </div>
              <div>
                <h3>About us</h3>
              </div>
              <div>
                <h3>Stay Connected</h3>
              </div>
            </div>
            <div>
              <h3>Social media</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
