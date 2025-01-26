import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Banner.css";

import { Autoplay, Navigation } from "swiper/modules";

const Banner = ({ bannerData }) => {
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto lg:mt-2 mt-20 px-3">
        <Swiper
          rewind={true}
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {bannerData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" w-full h-auto flex justify-center items-center p-3">
                <img
                  src={item.img}
                  alt="img"
                  className=" w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
