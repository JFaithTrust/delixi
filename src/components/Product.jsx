import React from "react";

import { products } from "../constants";

const Product = ({ pro_id }) => {
  return (
    <div className="product-grid grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 sm:gap-5 gap-2">
      {products
        .filter((item) => item.proudct_id === pro_id)
        .map((item) => (
          <div
            className="product-card border-2 border-red-600 p-2 rounded-md space-y-1"
            key={item.url}
          >
            <div className="border-2 px-4 py-2 border-red-300 rounded-md flex items-center justify-center">
              <img src={item.url} alt="" />
            </div>
            <h1 className="2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg text-base text-red-600 font-semibold">{item.title}</h1>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Product;
