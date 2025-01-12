import React from "react";
import { categories } from "./categoryLinks";

const Category = () => {
  return (
    <>
      <div className=" hidden lg:block">
        <div className=" w-full bg-white ">
          <div className=" container max-w-screen-xl flex justify-between items-center gap-2  py-4 shadow px-2">
            {categories.map((category, index) => (
              <h4
                key={index}
                className=" cursor-pointer font-titleFont font-medium text-black hover:text-primaryColor"
              >
                {category.name}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
