import React from "react";
import { GiWaterTank } from "react-icons/gi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { ImTv } from "react-icons/im";
import { FaCamera } from "react-icons/fa";
import { LuPrinterCheck } from "react-icons/lu";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsEarbuds } from "react-icons/bs";
import { SlEarphonesAlt } from "react-icons/sl";
import { PiPlugChargingBold } from "react-icons/pi";
import { BsDeviceSsd } from "react-icons/bs";
import { IoGameControllerSharp } from "react-icons/io5";
import { IoWatch } from "react-icons/io5";
import { FaVrCardboard } from "react-icons/fa6";
import { BsFillSpeakerFill } from "react-icons/bs";
import { PiDesktopTowerFill } from "react-icons/pi";
import { BsFillLaptopFill } from "react-icons/bs";

const FeaturedCategory = () => {
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto mt-16 pb-20">
        <div>
          <h2 className=" text-2xl text-center font-bold font-titleFont">
            Featured Category
          </h2>
          <p className=" font-bodyFont font-medium text-center mt-2">
            Get Your Desired Product from Featured Category!
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <GiWaterTank className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Geyser Water Heater
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <FaCamera className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Action Camera
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <FaMobileScreenButton className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Mobile Phone
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <ImTv className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">Smart TV</h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <LuPrinterCheck className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Printer Paper
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <GiDeliveryDrone className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">Drone</h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <BsDeviceSsd className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  SSD Hard Drive
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <BsEarbuds className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">Earbuds</h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <SlEarphonesAlt className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">Earphone</h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <PiPlugChargingBold className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Charger Accessories
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <IoGameControllerSharp className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Gaming Accessories
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <IoWatch className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Smart Watch
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <FaVrCardboard className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  VR( Virtual Reality) Headset
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200">
              <div>
                <BsFillSpeakerFill className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Bluetooth Speaker
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200 ">
              <div>
                <PiDesktopTowerFill className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Desktop Computer
                </h5>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200 ">
              <div>
                <BsFillLaptopFill className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Laptop Computer
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCategory;
