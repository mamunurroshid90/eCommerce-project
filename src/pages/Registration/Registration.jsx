import React from "react";

const Registration = () => {
  return (
    <>
      <div className=" bg-white font-titleFont">
        <div className=" container flex justify-center items-center h-svh px-container-padding ">
          <div>
            <h3 className=" text-sub-heading">Register Account</h3>
            <form action="" className=" flex flex-col gap-6 max-w-[450px] mt-4">
              <div className=" flex items-center gap-4">
                <div className=" flex flex-col gap-1 w-[50%]">
                  <label htmlFor="" className=" text-sm">
                    first Name <span className=" text-primaryColor">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder=" First Name"
                    className=" lg:py-3 py-2 px-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
                  />
                </div>
                <div className=" flex flex-col gap-1 w-[50%]">
                  <label htmlFor="" className=" text-sm">
                    Last Name <span className=" text-primaryColor">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder=" Last Name"
                    className=" lg:py-3 py-2 px-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-1">
                <label htmlFor="">
                  Email <span className=" text-primaryColor">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="E-mail"
                  className=" lg:py-3 py-2 px-2 rounded w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label htmlFor="">
                  Telephone <span className=" text-primaryColor">*</span>
                </label>
                <input
                  type="phone"
                  required
                  placeholder=" Telephone"
                  className=" lg:py-3 py-2 px-2 rounded w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
                />
              </div>
              <button className=" lg:py-3 py-2 rounded-md bg-blue-600 text-white font-semibold relative overflow-hidden px-6 group">
                <span className=" absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                <span className=" relative z-10">Continue</span>
              </button>
            </form>

            <p className=" text-center my-7 font-bodyFont text-sm text-[#807e7e] border-b border-b-[#eee] h-[10px]">
              <span className=" bg-white px-2">Already have an account?</span>
            </p>
            <p className=" text-sm font-bodyFont">
              If you already have an account with us, please login at the
              <span className=" text-primaryColor"> login page</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
