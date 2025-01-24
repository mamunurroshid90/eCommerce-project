import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Banner.css";

import { Autoplay, Navigation } from "swiper/modules";

const Banner = ({ data }) => {
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto lg:mt-6 mt-20 px-3">
        <Swiper
          rewind={true}
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" max-w-full max-h-[400px] aspect-square flex justify-center items-center">
                <img src={item.img} alt="img" height={500} className="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
