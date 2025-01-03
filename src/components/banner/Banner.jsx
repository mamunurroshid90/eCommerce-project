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
      <div className=" container max-w-screen-xl mx-auto mt-6">
        <Swiper
          rewind={true}
          //   navigation={true}
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" w-full h-[600px] flex items-center justify-center">
                <img
                  src={item.img}
                  alt="img"
                  width={100}
                  height={500}
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
