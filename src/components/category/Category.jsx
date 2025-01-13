import React from "react";
import { categories } from "./categoryLinks";
import { MdOutlineArrowRight } from "react-icons/md";

const Category = () => {
  return (
    <>
      <div className=" hidden lg:block">
        <div className=" w-full bg-white ">
          <div className=" container max-w-screen-xl flex justify-between items-center gap-2  py-4 shadow px-2 relative">
            {categories.map((category, index) => (
              <div className=" group">
                <h4
                  key={index}
                  className=" cursor-pointer font-titleFont font-medium text-black hover:text-primaryColor"
                >
                  {category.name}
                </h4>
                {category.submenu && (
                  <div>
                    <div className=" absolute w-[200px] bg-white top-9 hidden group-hover:md:block hover:md:block z-20">
                      <div className=" py-2">
                        <div className=" absolute  mt-1 w-full h-1 bg-primaryColor"></div>
                      </div>
                      <div className=" flex flex-col gap-2 ">
                        {category.subLinks.map((subLink) => (
                          <h5 className=" px-4 py-1 hover:bg-primaryColor hover:text-white flex justify-between items-center">
                            {subLink.Head}
                            <span>
                              <MdOutlineArrowRight className=" text-lg" />
                            </span>
                          </h5>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
