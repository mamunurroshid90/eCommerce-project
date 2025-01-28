import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComp = () => {
  return (
    <>
      <div className=" container max-w-screen-xl mx-auto mt-6 px-3 font-titleFont">
        <div className=" bg-white p-3 rounded-3xl shadow-md">
          <Marquee>
            <h1 className=" font-bodyFont">
              6th January Monday, all outlets are open. Additionally, our online
              activities are open and operational.
            </h1>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default MarqueeComp;
