import React from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineCached } from "react-icons/md";

const ShoppingCart = () => {
  return (
    <>
      <div className=" container max-w-screen-xl bg-white px-3 pt-5 pb-10 rounded-md mb-10 shadow font-titleFont">
        <div>
          <h2 className=" text-2xl font-titleFont font-medium">
            Shopping Cart
          </h2>
          <div className=" mt-5">
            <div className=" w-full overflow-x-auto">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm md:table">
                  <thead className="bg-[#f5f7f9]">
                    <tr className="flex flex-col md:table-row">
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666] capitalize tracking-wider md:table-cell">
                        Image
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666] capitalize tracking-wider md:table-cell">
                        Product Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666] capitalize tracking-wider md:table-cell">
                        Model
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666] capitalize tracking-wider md:table-cell">
                        Quantity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666] capitalize tracking-wider md:table-cell">
                        Unit Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#666] capitalize tracking-wider md:table-cell">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="flex flex-col md:table-row">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 md:table-cell">
                        <div className=" max-w-20 h-auto">
                          <img
                            src=""
                            alt="product-img"
                            className=" w-full h-full bg-slate-500"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm md:table-cell">
                        AMD Ryzen 5 8500G Desktop PC
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm md:table-cell">
                        Ryzen 5 8500G Desktop PC
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm md:table-cell">
                        <div className=" flex items-center gap-2">
                          <input
                            type="text"
                            value={1}
                            className=" max-w-14 py-1 px-3 outline-none border border-[#ddd] cursor-pointer"
                          />
                          <span>
                            <MdOutlineCached className=" text-lg cursor-pointer" />
                          </span>
                          <span>
                            <RxCross2 className=" text-lg cursor-pointer" />
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm md:table-cell">
                        38,499৳
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm md:table-cell">
                        38,499৳
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className=" flex lg:justify-end justify-start my-5">
                <div className=" max-w-80">
                  <table className=" table-auto">
                    <tbody className="">
                      <tr className=" py-1 px-2 border-b border-[#ddd]">
                        <td className=" text-base font-bold pr-10 py-2">
                          Sub-Total
                        </td>
                        <td className=" py-2 text-base font-bold text-primaryColor">
                          215,000৳
                        </td>
                      </tr>
                      <tr className=" py-1 px-2 border-b border-[#ddd]">
                        <td className=" text-base font-bold pr-10 py-2">
                          Total
                        </td>
                        <td className=" py-2 text-base font-bold text-primaryColor">
                          215,000৳
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h3 className=" lg:text-xl text-lg font-semibold">
                What would you like to do next?
              </h3>
              <p className=" lg:text-base text-sm">
                Choose if you have a discount code or reward points you want to
                use or would like to estimate your delivery cost.
              </p>
              <div className=" grid lg:grid-cols-2 gap-4 p-5 bg-[#f1f5f9] rounded mt-3">
                <div className=" lg:flex flex lg:flex-row flex-col lg:items-center lg:gap-2 gap-5">
                  <input
                    type="text"
                    placeholder="Promo / coupon"
                    className=" flex flex-grow shrink basis-auto py-2 px-3 rounded outline-none border border-[#ddd]"
                  />
                  <button className=" lg:py-2 py-2 rounded border-2 border-blueColor font-bodyFont text-blueColor font-semibold relative overflow-hidden px-6 hover:text-white group">
                    <span className=" absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                    <span className=" relative z-10">Apply Coupon</span>
                  </button>
                </div>
                <div className=" lg:flex flex flex-col lg:items-center lg:gap-2 gap-5">
                  <input
                    type="text"
                    placeholder="Promo / coupon"
                    className=" flex flex-grow shrink basis-auto py-2 px-3 rounded outline-none border border-[#ddd]"
                  />
                  <button className=" lg:py-2 py-2 rounded border-2 border-blueColor font-bodyFont text-blueColor font-semibold relative overflow-hidden px-6 hover:text-white group">
                    <span className=" absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                    <span className=" relative z-10">Apply Voucher</span>
                  </button>
                </div>
              </div>
              <div className=" flex justify-between lg:p-5 p-2 mt-3 ">
                <button className=" lg:py-3 py-2 rounded-md bg-blueColor text-white font-semibold relative overflow-hidden px-4 lg:px-6 group">
                  <span className=" absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                  <span className=" relative z-10">Continue Shopping</span>
                </button>

                <button className=" lg:py-3 py-2 rounded-md bg-blueColor text-white font-semibold relative overflow-hidden px-4 lg:px-6 group">
                  <span className=" absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-900 transition-all duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></span>
                  <span className=" relative z-10">Confirm Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
