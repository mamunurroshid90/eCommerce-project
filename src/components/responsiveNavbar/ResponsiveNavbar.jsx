import React, { useState } from "react";
import { categories } from "../category/categoryLinks";
import { HiOutlineMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const ResponsiveNavbar = ({ openMenu }) => {
  const [heading, setHeading] = useState("");
  return (
    <div>
      <ul
        className={` overflow-y-scroll flex flex-col gap-4 md:hidden bg-white absolute w-[70%] h-screen bottom-0 py-4 pl-4 duration-500 top-[72px] z-50  ${
          openMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        {categories.map((category, index) => (
          <div>
            <li
              onClick={() =>
                heading !== category.name
                  ? setHeading(category.name)
                  : setHeading("")
              }
              key={index}
              className=" cursor-pointer font-titleFont font-medium text-black hover:text-primaryColor flex justify-between items-center pr-5 py-2 border-b border-[#ebdede]"
            >
              {category.name}
              <span>
                {heading === category.name ? (
                  <HiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </span>
            </li>
            <div
              className={` ${
                heading !== category.name ? "hidden" : "md:hidden"
              }`}
            >
              {/* subLinks */}
              {category.subLinks.map((subLink) => (
                <div>
                  <div>
                    <h3
                      onClick={() =>
                        heading === subLink.Head
                          ? setHeading(subLink.Head)
                          : setHeading("")
                      }
                    >
                      {subLink.Head}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveNavbar;
