import React from "react";
import { GiWaterTank } from "react-icons/gi";

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
            <div className=" flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md">
              <div>
                <GiWaterTank className=" text-5xl" />
              </div>
              <div>
                <h5 className=" font-medium font-titleFont mt-2">
                  Geyser Water Heater
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
