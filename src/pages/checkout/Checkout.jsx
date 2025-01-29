import React, { useState } from "react";

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    zone: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log("Form Data Submitted:", formData);
  };
  return (
    <>
      <div className=" mb-10">
        <div className=" container max-w-screen-xl mx-auto font-titleFont">
          <h2 className=" text-2xl font-medium mb-5">Checkout</h2>
          <div className=" grid grid-cols-12 gap-5">
            <div className=" col-span-4 bg-white shadow px-3 py-5 rounded">
              <h3 className=" flex items-center gap-2 border-b pb-3 ">
                <span className=" w-6 h-6 rounded-full text-[#F44336] bg-[#fff1f0] flex justify-center items-center font-bold">
                  1
                </span>
                <span className=" text-lg font-bold">Customer information</span>
              </h3>
              <div className="max-w-lg mx-auto mt-5 p-3 bg-white rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className=" flex items-center gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        placeholder="Write your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        placeholder="Write your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                      placeholder="Write your email here"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                      placeholder="Write your phone number here"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                      placeholder="Write your address here"
                    />
                  </div>

                  <div className=" flex items-center gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                        placeholder="Write your city here"
                      />
                    </div>
                    <div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Zone
                        </label>
                        <select
                          name="zone"
                          value={formData.zone}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-[10px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          required
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Comments
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
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
            <div className=" col-span-8">
              <div className=" grid grid-cols-12 gap-4 px-3 pb-5">
                <div className=" bg-white shadow col-span-6 p-4 rounded">
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
                            name="options"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Cash On Delevery
                        </label>
                      </div>
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="options"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Online Payment
                        </label>
                      </div>
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="options"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          POS On Delivery
                        </label>
                      </div>
                    </div>

                    {/* <p>Selected: {selectedOption}</p> */}

                    <div className=" mt-5">
                      <p className=" font-bold">We Accept: </p>
                      <p className=" flex flex-wrap items-center gap-4 mt-2">
                        <span className=" border border-blueColor p-2 rounded text-blueColor font-bold text-sm">
                          Cash on Delivery
                        </span>

                        <span className=" border border-blueColor p-2 rounded text-blueColor font-bold text-sm">
                          Bkash
                        </span>
                        <span className=" border border-blueColor p-2 rounded text-blueColor font-bold text-sm">
                          Nagad
                        </span>
                        <span className=" border border-blueColor p-2 rounded text-blueColor font-bold text-sm">
                          DBBL
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" bg-white shadow col-span-6 p-4 rounded">
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
                            name="options"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Home Delivery - 60৳
                        </label>
                      </div>
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="options"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Store Pickup - 0৳
                        </label>
                      </div>
                      <div>
                        <label className=" flex items-center gap-2 text-base font-medium">
                          <input
                            type="radio"
                            name="options"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className=" w-4 h-4"
                          />
                          Request Express - Charge Applicable
                        </label>
                      </div>
                    </div>

                    {/* <p>Selected: {selectedOption}</p> */}
                  </div>
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
