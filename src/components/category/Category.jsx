import React from "react";

const Category = () => {
  return (
    <>
      <div className=" hidden lg:block">
        <div className=" container max-w-screen-xl flex items-center gap-3 mt-2">
          <button className=" border border-primaryDark py-1 px-4 rounded font-medium font-bodyFont">
            All
          </button>
          <button className=" border border-primaryDark py-1 px-4 rounded font-medium font-bodyFont">
            Nike
          </button>
          <button className=" border border-primaryDark py-1 px-4 rounded font-medium font-bodyFont">
            Puma
          </button>
          <button className=" border border-primaryDark py-1 px-4 rounded font-medium font-bodyFont">
            adidas
          </button>
          <button className=" border border-primaryDark py-1 px-4 rounded font-medium font-bodyFont">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Category;
