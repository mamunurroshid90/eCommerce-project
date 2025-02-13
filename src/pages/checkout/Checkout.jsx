import React from "react";
import { useFormik } from "formik";
import checkoutValidationSchema from "../../validationSchema";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectItemTotal,
  selectSubTotal,
  selectTotal,
} from "../../features/cart/cartSlice";

const Checkout = () => {
  const [paymentOption, setPaymentOption] = React.useState("payment1");
  const [deliveryOption, setDeliveryOption] = React.useState("delivery1");
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const subTotal = useSelector(selectSubTotal);
  const total = useSelector(selectTotal);

  // Formik hook
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zone: "",
      notes: "",
    },
    validationSchema: checkoutValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data Submitted:", values);
      // Handle form submission (e.g., send data to an API)
      resetForm();
    },
  });

  return (
    <>
      <div className="mb-10">
        <div className="container max-w-screen-xl mx-auto font-titleFont px-3">
          <h2 className="text-2xl font-medium mb-5 mt-3">Checkout</h2>
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-4 w-full bg-white shadow px-3 py-5 rounded">
              <h3 className="flex items-center gap-2 border-b pb-3">
                <span className="w-6 h-6 rounded-full text-[#F44336] bg-[#fff1f0] flex justify-center items-center font-bold">
                  1
                </span>
                <span className="text-lg font-bold">Customer information</span>
              </h3>
              <div className="max-w-lg mx-auto mt-5 p-3 bg-white rounded-lg">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Write your first name"
                      />
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.firstName}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Write your last name"
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.lastName}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Write your email here"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Write your phone number here"
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Write your address here"
                    />
                    {formik.touched.address && formik.errors.address ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.address}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex items-center gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Write your city here"
                      />
                      {formik.touched.city && formik.errors.city ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.city}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Zone
                        </label>
                        <select
                          name="zone"
                          value={formik.values.zone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="" disabled>
                            Select a zone
                          </option>
                          <option value="Dhaka">Dhaka</option>
                          <option value="Chittagong">Chittagong</option>
                          <option value="Khulna">Khulna</option>
                          <option value="Sylhet">Sylhet</option>
                          <option value="Rajshahi">Rajshahi</option>
                          <option value="Barishal">Barishal</option>
                          <option value="Mymonshing">Mymonshing</option>
                          <option value="Rangpur">Rangpur</option>
                        </select>
                        {formik.touched.zone && formik.errors.zone ? (
                          <div className="text-red-500 text-sm">
                            {formik.errors.zone}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Comments
                    </label>
                    <textarea
                      name="notes"
                      value={formik.values.notes}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      rows="4"
                      placeholder="Enter any comments here..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Payment Method */}
            <div className=" lg:col-span-8">
              <div className=" grid lg:grid-cols-12 flex-col gap-4 pb-5">
                <div className=" bg-white shadow lg:col-span-6 p-4 rounded">
                  <h3 className=" flex items-center gap-2 border-b pb-3 ">
                    <span className=" w-6 h-6 rounded-full text-[#F44336] bg-[#fff1f0] flex justify-center items-center font-bold">
                      2
                    </span>
                    <span className=" text-lg font-bold">Payment Method</span>
                  </h3>
                  <div>
                    <h4 className=" py-3 font-semibold text-base">
                      Select a Payment Method
                    </h4>
                    <div className=" flex flex-col gap-1">
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="payment"
                            value="payment1"
                            checked={paymentOption === "payment1"}
                            onChange={(e) => setPaymentOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Cash On Delevery
                        </label>
                      </div>
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="payment"
                            value="payment2"
                            checked={paymentOption === "payment2"}
                            onChange={(e) => setPaymentOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Online Payment
                        </label>
                      </div>
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="payment"
                            value="payment3"
                            checked={paymentOption === "payment3"}
                            onChange={(e) => setPaymentOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          POS On Delivery
                        </label>
                      </div>
                    </div>

                    <div className=" mt-5">
                      <p className=" font-bold">We Accept: </p>
                      <p className=" flex flex-wrap items-center gap-4 mt-2">
                        <span className=" border border-blueColor p-2 rounded text-blueColor font-bold text-sm  cursor-pointer">
                          Cash on Delivery
                        </span>

                        <span className=" border border-blueColor p-2 rounded text-blueColor font-bold text-sm cursor-pointer">
                          Bkash
                        </span>
                        <span className=" border border-blueColor p-2 rounded text-blueColor font-bold text-sm cursor-pointer">
                          Nagad
                        </span>
                        <span className=" border border-blueColor p-2 rounded text-blueColor font-bold text-sm cursor-pointer">
                          DBBL
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Delivery Method */}
                <div className=" bg-white shadow lg:col-span-6 p-4 rounded">
                  <h3 className=" flex items-center gap-2 border-b pb-3 ">
                    <span className=" w-6 h-6 rounded-full text-[#F44336] bg-[#fff1f0] flex justify-center items-center font-bold">
                      3
                    </span>
                    <span className=" text-lg font-bold">Delivery Method</span>
                  </h3>
                  <div>
                    <h4 className=" py-3 font-semibold text-base">
                      Select a Delivery Method
                    </h4>
                    <div className=" flex flex-col gap-1">
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="delivery"
                            value="delivery1"
                            checked={deliveryOption === "delivery1"}
                            onChange={(e) => setDeliveryOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Home Delivery - 60৳
                        </label>
                      </div>
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="delivery"
                            value="delivery2"
                            checked={deliveryOption === "delivery2"}
                            onChange={(e) => setDeliveryOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Store Pickup - 0৳
                        </label>
                      </div>
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="delivery"
                            value="delivery3"
                            checked={deliveryOption === "delivery3"}
                            onChange={(e) => setDeliveryOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Request Express - Charge Applicable
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coupon and Voucher part */}
              <div className=" lg:flex-row flex flex-col items-center gap-4 w-full bg-white p-5 rounded shadow">
                <div className="flex flex-col lg:flex-row gap-2 items-center space-x-2 w-full">
                  <input
                    type="text"
                    placeholder="Enter voucher code"
                    className="border rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button className=" w-52 border border-blueColor text-blueColor px-4 py-2 rounded hover:bg-blueColor hover:text-white transition">
                    Apply Voucher
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 items-center space-x-2 w-full">
                  <input
                    type="text"
                    placeholder="Enter promo / coupon code"
                    className="border rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button className=" w-52 border border-blueColor text-blueColor px-4 py-2 rounded hover:bg-blueColor hover:text-white transition">
                    Apply Coupon
                  </button>
                </div>
              </div>

              {/* Order Overview */}
              <div className=" mt-5 bg-white px-3 py-5 shadow">
                <div className="overflow-x-auto w-full">
                  <h3 className="flex items-center gap-2 border-b pb-3">
                    <span className="w-6 h-6 rounded-full text-[#F44336] bg-[#fff1f0] flex justify-center items-center font-bold">
                      3
                    </span>
                    <span className="text-lg font-bold">Order Overview</span>
                  </h3>
                  <div className="w-full">
                    <table className="w-full border-collapse">
                      <thead className="hidden md:table-header-group bg-slate-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product Name
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                        </tr>
                      </thead>
                      {cartItems.map((item) => (
                        <tbody className="divide-y divide-gray-200">
                          <tr className="block md:table-row border rounded-md md:border-none md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none bg-white">
                            <td className="block md:table-cell px-4 py-3 font-medium">
                              <span className="md:hidden font-semibold">
                                Product Name:
                              </span>
                              <p>{item.title}</p>
                            </td>
                            <td className="block md:table-cell px-4 py-3 font-semibold">
                              <span className="md:hidden font-semibold pr-1">
                                Price:
                              </span>
                              <span>${item.newPrice}</span>
                              <span> x </span>
                              <span>{item.count}</span>
                            </td>
                            <td className="block md:table-cell px-4 py-3 font-semibold">
                              <span className="md:hidden font-semibold pr-1">
                                Total:
                              </span>
                              <span>
                                $
                                {useSelector((state) =>
                                  selectItemTotal(state, item.id)
                                ).toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>

                <div className=" flex lg:justify-end justify-start my-5 pr-3">
                  <div className=" max-w-80">
                    <table className=" table-auto">
                      <tbody className="">
                        <tr className=" py-1 px-2 border-b border-[#ddd]">
                          <td className=" text-base font-bold pr-10 py-2">
                            Sub-Total:
                          </td>
                          <td className=" py-2 text-base font-bold text-primaryColor">
                            {subTotal.toFixed(2)}
                          </td>
                        </tr>
                        <tr className=" py-1 px-2 border-b border-[#ddd]">
                          <td className=" text-base font-bold pr-10 py-2">
                            Tax (10%):
                          </td>
                          <td className=" py-2 text-base font-bold text-primaryColor">
                            ${(subTotal * 0.1).toFixed(2)}
                          </td>
                        </tr>
                        <tr className=" py-1 px-2 border-b border-[#ddd]">
                          <td className=" text-base font-bold pr-10 py-2">
                            Shipping:
                          </td>
                          <td className=" py-2 text-base font-bold text-primaryColor">
                            $10
                          </td>
                        </tr>
                        <tr className=" py-1 px-2 border-b border-[#ddd]">
                          <td className=" text-base font-bold pr-10 py-2">
                            Total:
                          </td>
                          <td className=" py-2 text-base font-bold text-primaryColor">
                            ${total.toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full mt-10 px-2 py-5 border-t border-[#ddd]">
            <div className=" md:flex md:items-center md:justify-between w-full">
              <div className=" flex items-start gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className=" w-4 h-4 bg-transparent"
                />
                <p className=" font-medium text-base -mt-1 md:flex">
                  I have read and agree to the
                  <a
                    className=" text-primaryColor hover:underline px-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions,
                  </a>
                  <a
                    className=" text-primaryColor hover:underline px-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  and
                  <a
                    className=" text-primaryColor hover:underline px-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Refund and Return Policy
                  </a>
                </p>
              </div>
              <div className=" mt-3 lg:mt-0">
                <button className=" bg-blueColor w-full md:w-auto text-white text-base px-6 py-2 rounded font-semibold">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
