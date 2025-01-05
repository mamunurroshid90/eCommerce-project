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
      <div className=" container max-w-screen-xl mx-auto mt-6 px-3">
        <Swiper
          rewind={true}
          //   navigation={true}
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" w-full h-[300px] xl:h-[600px] object-cover bg-center bg-no-repeat bg-cover overflow-hidden">
                <img
                  src={item.img}
                  alt="img"
                  className=" w-full h-full object-cover bg-cover bg-center"
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
