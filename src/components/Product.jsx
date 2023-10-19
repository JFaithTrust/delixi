import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Pagination, Navigation } from "swiper/modules";
import { products } from "../constants";

import "./slider.css";

// const PrevButton = () => {
//    const swiper = useSwiper()

//   return (
//     <button onClick={() => swiper.slidePrev()} className="h-full"> Prev </button>
//   )
// }

// const NextButton = () => {
//   const swiper = useSwiper()

//  return (
//    <button onClick={() => swiper.slideNext()}> Next </button>
//  )
// }

const Product = () => {
  return (
    <div className="h-fit w-[50vw]">
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
          fill: "row",
        }}
        navigation={true}
        spaceBetween={5}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        className="h-fit w-[40vw]"
      >
        {products.map((item) => (
          <SwiperSlide
            className="flex flex-col border-2 border-red-600 p-2 rounded-md space-y-1"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
