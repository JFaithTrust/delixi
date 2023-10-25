import React from "react";

import { products } from "../constants";

const Product = ({ pro_id }) => {
  return (
    <div className="product-grid grid grid-cols-4 gap-5">
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
            <h1 className="text-lg text-red-600 font-semibold">{item.title}</h1>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="flex justify-between">
              <p>Color:</p>
              <p>{item.color}</p>
            </div>
          </div>
        ))}
    </div>
    // <div className="h-fit">
    //   <Swiper
    //     slidesPerView={4}
    //     grid={{
    //       rows: 2,
    //       fill: "row",
    //     }}
    //     spaceBetween={5}
    //     modules={[Grid]}
    //     className="h-fit 2xl:w-[45vw] xl:w-[45vw] lg:w-[60vw] w-[72vw]"
    //   >
    //     {products.filter((item) => item.proudct_id === pro_id).map((item) => (
    //       <SwiperSlide
    //         className="flex flex-col border-2 border-red-600 p-2 rounded-md space-y-1"
    //         key={item.url}
    //       >
    //         <div className="border-2 px-4 py-2 border-red-300 rounded-md flex items-center justify-center">
    //           <img src={item.url} alt="" />
    //         </div>
    //         <h1 className="text-lg text-red-600 font-semibold">{item.title}</h1>
    //         <p className="text-sm text-gray-600">{item.description}</p>
    //         <div className="flex justify-between">
    //           <p>Color:</p>
    //           <p>{item.color}</p>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};

export default Product;
