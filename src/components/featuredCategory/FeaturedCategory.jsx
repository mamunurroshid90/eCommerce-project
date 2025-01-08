import React from "react";
import { CategoryData } from "../../db/categoryData.js";

const FeaturedCategory = () => {
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto mt-16 pb-20 px-3">
        <div>
          <h2 className=" text-2xl text-center font-bold font-titleFont">
            Featured Category
          </h2>
          <p className=" font-bodyFont font-medium text-center mt-2">
            Get Your Desired Product from Featured Category!
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
            {CategoryData.map((item) => (
              <div
                key={item.id}
                className=" flex flex-col items-center justify-center bg-white px-1 py-4 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-200"
              >
                <div>
                  <img src={item.image} alt={item.title} className=" h-14" />
                </div>
                <div>
                  <h5 className=" font-medium font-titleFont mt-2">
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCategory;
