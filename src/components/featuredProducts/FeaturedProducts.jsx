import React, { useState } from "react";
import FeaturedProductsCart from "./FeaturedProductsCart";
import ReactPaginate from "react-paginate";

const FeaturedProducts = ({ data }) => {
  const itemsPerPage = 20;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset)); // Get items for the current page
    setPageCount(Math.ceil(data.length / itemsPerPage)); // Calculate total pages
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        <h1 className=" text-center text-section-heading font-bold font-titleFont">
          Featured Products
        </h1>
        <h5 className=" text-center text-[] font-medium font-titleFont mt-3">
          Check & Get Your Desired Product!
        </h5>
        <div className=" px-container-padding grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pb-10 pt-7">
          {currentItems.map(
            ({
              id,
              img,
              title,
              star,
              reviews,
              prevPrice,
              newPrice,
              company,
              color,
              category,
            }) => (
              <FeaturedProductsCart
                key={Math.random}
                id={id}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice}
                company={company}
                color={color}
                category={category}
              />
            )
          )}
        </div>
        {/* Pagination */}
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< Prev"
          renderOnZeroPageCount={null}
          containerClassName="flex flex-wrap justify-center items-center mt-8 space-x-2 space-y-2 sm:space-y-0 mb-8"
          pageClassName="block"
          pageLinkClassName="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-blue-500 hover:text-white transition-colors"
          activeLinkClassName="bg-blue-500 text-white border-blue-500"
          previousLinkClassName="px-2 py-1 text-xs border border-gray-300 rounded-md text-gray-600 hover:bg-blue-500 hover:text-white transition-colors"
          nextLinkClassName="px-2 py-1 border text-xs border-gray-300 rounded-md text-gray-600 hover:bg-blue-500 hover:text-white transition-colors"
          breakLinkClassName="px-4 py-2 text-gray-600"
        />
      </div>
    </>
  );
};

export default FeaturedProducts;
