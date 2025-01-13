import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsApple } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" bg-bgColor">
          <div className=" container max-w-screen-xl mx-auto py-10 px-3 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
              <div className=" flex flex-col gap-5">
                <h3 className=" text-base text-start text-white tracking-[0.2em] uppercase font-medium font-titleFont">
                  Support
                </h3>
                <div className=" mt-5">
                  <a
                    href="#"
                    className=" border border-[#2f2f2f] py-3 px-5 rounded-full w-[300px] flex items-center gap-5"
                  >
                    <div className=" border-r-[1px] border-[#2f2f2f] pr-4">
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
                    className=" border border-[#2f2f2f] py-3 px-5 rounded-full w-[300px] flex items-center gap-5"
                  >
                    <div className=" border-r-[1px] border-[#2f2f2f] pr-4">
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
              </div>
              <div className=" lg:col-span-2">
                <h3 className=" text-base text-start text-white tracking-[0.2em] uppercase font-medium font-titleFont">
                  About Us
                </h3>
                <ul className=" text-[#838383] font-bodyFont text-center mt-5 text-sm md:grid md:grid-cols-3 justify-items-start lg:gap-5">
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Affiliate Program</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">EMI Terms</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Star Point Policy</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Career</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Brands</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Blog</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Refund and Return Policy</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">Online Delivery</a>
                  </li>
                  <li className=" hover:underline hover:text-primaryColor font-bodyFont">
                    <a href="#">About Us</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className=" text-base text-start text-white tracking-[0.2em] uppercase font-medium font-titleFont">
                  Stay Connected
                </h3>
                <div className=" flex flex-col items-start gap-3 mt-5 font-bodyFont">
                  <h5 className=" text-white">Star Tech Ltd</h5>
                  <p className=" text-[#838383] text-start text-sm">
                    Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square,
                    Dhaka 1000
                  </p>
                  <p className=" text-[#838383]">Email:</p>
                  <p className=" text-primaryColor text-sm">
                    webteam@startech.com
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center gap-3 mt-10 md:flex-row md:justify-between md:items-center border-y-[1px] border-[#3c3c3c] py-5">
              <div className=" flex items-center gap-4">
                <div className=" flex flex-col items-center gap-3 md:flex-row">
                  <p className=" text-xs text-[#838383] font-bodyFont">
                    Experience Star Tech App on your mobile:
                  </p>
                  <div className=" flex items-center gap-3">
                    <div className=" border border-[#838383] py-1 px-3 rounded-md flex items-center gap-2">
                      <BiLogoPlayStore className=" text-white text-3xl" />
                      <div>
                        <small className=" text-[#838383] font-bodyFont">
                          Download on
                        </small>
                        <p className=" text-white font-semibold font-titleFont">
                          Google Play
                        </p>
                      </div>
                    </div>
                    <div className=" border border-[#838383] py-1 px-3 rounded-md flex items-center gap-2">
                      <BsApple className=" text-white text-3xl" />
                      <div>
                        <small className=" text-[#838383] font-bodyFont">
                          Download on
                        </small>
                        <p className=" text-white font-semibold font-titleFont">
                          App Store
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-3 xm:mt-5">
                <div className=" w-10 h-10 rounded-full bg-[#FFFFFF1A] flex justify-center items-center hover:bg-[#3749bb]">
                  <a href="#">
                    <IoLogoWhatsapp className=" text-2xl text-white" />
                  </a>
                </div>
                <div className=" w-10 h-10 rounded-full bg-[#FFFFFF1A] flex justify-center items-center hover:bg-[#3749bb]">
                  <a href="#">
                    <FaFacebook className=" text-2xl text-white" />
                  </a>
                </div>
                <div className=" w-10 h-10 rounded-full bg-[#FFFFFF1A] flex justify-center items-center hover:bg-[#3749bb]">
                  <a href="#">
                    <BsYoutube className=" text-2xl text-white" />
                  </a>
                </div>
                <div className=" w-10 h-10 rounded-full bg-[#FFFFFF1A] flex justify-center items-center hover:bg-[#3749bb]">
                  <a href="#">
                    <FaInstagramSquare className=" text-2xl text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-black">
          <div className=" container max-w-screen-xl flex flex-col items-center gap-2 py-5 font-bodyFont md:flex-row md:justify-between px-3">
            <p className=" text-xs text-[#838383]">
              © 2024 Star Tech Ltd | All rights reserved
            </p>
            <p className=" text-xs text-[#838383]">Powered By: Star Tech</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
