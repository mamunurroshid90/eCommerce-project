import React from "react";

const Registration = () => {
  return (
    <>
      <div className=" container flex justify-center items-center h-svh bg-white px-container-padding ">
        <div>
          <h3 className=" text-sub-heading">Register Account</h3>
          <form action="" className=" flex flex-col gap-6 max-w-[450px] mt-4">
            <div className=" flex items-center gap-4">
              <div className=" flex flex-col gap-1">
                <label htmlFor="" className=" text-sm">
                  first Name
                </label>
                <input
                  type="text"
                  placeholder=" First Name"
                  className=" lg:py-3 py-2 px-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label htmlFor="" className=" text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder=" Last Name"
                  className=" lg:py-3 py-2 px-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="E-mail"
                className=" lg:py-3 py-2 px-2 rounded w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="">Telephone</label>
              <input
                type="phone"
                placeholder=" Telephone"
                className=" lg:py-3 py-2 px-2 rounded w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
              />
            </div>
            <button className=" lg:py-3 py-2 rounded-md bg-blue-600 text-white font-semibold">
              Continue
            </button>
          </form>

          <p className=" text-center my-7 font-bodyFont text-sm text-[#807e7e] border-b border-b-[#eee] h-[10px]">
            <span className=" bg-white px-2">Already have an account?</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
