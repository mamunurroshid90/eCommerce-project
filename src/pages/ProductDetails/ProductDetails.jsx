import React from "react";
import products from "../../db/data";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((pItem) => pItem.id === parseInt(id));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <div className=" container max-w-screen-xl mx-auto lg:pt-7">
        <div>
          <div>
            <div>
              <img src={product.img} alt="product img" />
            </div>
            <h3>{product.title}</h3>
            <h4>{product.company}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
