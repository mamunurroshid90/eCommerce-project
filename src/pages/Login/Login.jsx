import React from "react";

const Login = () => {
  return (
    <>
      <div className=" bg-white">
        <div className=" container flex justify-center items-center h-svh px-container-padding">
          <div className=" lg:w-[450px] w-full mx-auto">
            <h3 className=" text-sub-heading">Account Login</h3>
            <form className=" flex flex-col gap-6 mt-4 ">
              <div className=" flex flex-col gap-1 w-full">
                <label htmlFor="">
                  Phone / Email <span className=" text-primaryColor">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Phone / E-mail"
                  className=" lg:py-3 py-2 px-2 rounded w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
                />
              </div>
              <div className=" flex flex-col gap-1 w-full">
                <label htmlFor="">
                  Password <span className=" text-primaryColor">*</span>
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
                <span className=" relative z-10">Login</span>
              </button>
            </form>

            <p className=" text-center my-7 font-bodyFont text-sm text-[#807e7e] border-b border-b-[#eee] h-[10px]">
              <span className=" bg-white px-2">Don't have an account?</span>
            </p>

            <button className=" w-full lg:py-3 py-2 rounded-md border border-blue-600 font-bodyFont text-blue-500 font-semibold relative overflow-hidden px-6 hover:text-white group">
              <span className=" absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
              <span className=" relative z-10">Create Your Account</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
