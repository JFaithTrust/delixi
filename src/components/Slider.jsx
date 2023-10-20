import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { sliderPictures } from "../constants";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="h-[94vh] w-[98.7vw]">
      <Swiper
        loop={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Thumbs]}
        className="h-[70vh]"
      >
        {sliderPictures.map((item) => (
          <SwiperSlide key={item.url}>
            <img src={item.url} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-backgorund-color": "red",
        }}
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={6}
        navigation={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[20vh]"
      >
        {sliderPictures.map((item) => (
          <SwiperSlide key={item.url}>
            <img src={item.url} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
