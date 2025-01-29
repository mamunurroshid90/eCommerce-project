import React from "react";

const Checkout = () => {
  return (
    <>
      <div className=" mb-10">
        <div className=" container max-w-screen-xl mx-auto font-titleFont">
          <h2 className=" text-2xl font-medium">Checkout</h2>
          <div className=" grid grid-cols-12 gap-5">
            <div className=" col-span-4 bg-white shadow px-3 py-5 rounded">
              <h3 className=" flex items-center gap-2 ">
                <span className=" w-6 h-6 rounded-full text-[#F44336] bg-[#fff1f0] flex justify-center items-center font-bold">
                  1
                </span>
                <span>Customer information</span>
              </h3>
            </div>
            <div className=" col-span-8 bg-slate-700">
              <div className=" grid grid-cols-12 gap-4">
                <div className=" bg-orange-400 col-span-6">
                  <h3>2 Payment Method</h3>
                </div>
                <div className=" bg-orange-400 col-span-6">
                  <h3>3 Delivery Method</h3>
                </div>
              </div>
              <div>Apply</div>
              <div>
                <h3>4 Order Overview</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
