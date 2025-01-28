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
            <div className=" w-full">
              <table class="table-auto w-full">
                <thead>
                  <tr className=" text-[13px] font-semibold text-[#666666]">
                    <th className=" bg-[#f5f7f9] py-2 px-4 text-start">
                      Image
                    </th>
                    <th className=" bg-[#f5f7f9] py-2 px-4 text-start">
                      Product Name
                    </th>
                    <th className=" bg-[#f5f7f9] py-2 px-4 text-start">
                      Model
                    </th>
                    <th className=" bg-[#f5f7f9] py-2 px-4 text-start">
                      Quantity
                    </th>
                    <th className=" bg-[#f5f7f9] py-2 px-4 text-start">
                      Unit Price
                    </th>
                    <th className=" bg-[#f5f7f9] py-2 px-4 text-start">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" w-20 h-14 bg-slate-400 flex justify-center items-center p-3">
                      Image
                    </td>
                    <td className=" p-3">
                      AOC AGON PRO PD49 PORSCHE DESIGN 49" 240Hz 0.3ms 5K
                      DUAL-QHD QD-OLED Gaming Curved Monitor
                    </td>
                    <td className=" p-3">AGON PRO PD49</td>
                    <td className=" flex items-center gap-2 p-3 ">
                      <div className=" max-w-48">
                        <input
                          type="text"
                          value={1}
                          size={1}
                          className=" w-full h-10 outline-none px-4 py-1 rounded border border-[#ddd]"
                        />
                      </div>
                      <span>
                        <MdOutlineCached
                          className=" text-xl cursor-pointer"
                          title="Update"
                        />
                      </span>
                      <span>
                        <RxCross2
                          className=" text-xl cursor-pointer"
                          title="remove"
                        />
                      </span>
                    </td>
                    <td className=" p-3">215,000৳</td>
                    <td className=" p-3">215,000৳</td>
                  </tr>
                </tbody>
              </table>
              <div className=" flex justify-end mt-5">
                <div className=" max-w-80">
                  <table className=" table-auto">
                    <tbody className="">
                      <tr className=" py-1 px-2 border-b border-[#ddd]">
                        <td className=" text-lg font-bold pr-10 py-2">
                          Sub-Total
                        </td>
                        <td className=" py-2 text-lg font-bold text-primaryColor">
                          215,000৳
                        </td>
                      </tr>
                      <tr className=" py-1 px-2 border-b border-[#ddd]">
                        <td className=" text-lg font-bold pr-10 py-2">Total</td>
                        <td className=" py-2 text-lg font-bold text-primaryColor">
                          215,000৳
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h3 className=" text-xl font-semibold">
                What would you like to do next?
              </h3>
              <p className=" text-lg">
                Choose if you have a discount code or reward points you want to
                use or would like to estimate your delivery cost.
              </p>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
