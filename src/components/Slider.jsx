import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { about, home } from "../assets";

const Slider = () => {
  const slides = [
    {
      url: home,
      item: "Item 1",
    },
    {
      url: about,
      item: "Item 2",
    },
    {
      url: home,
      item: "Item 3",
    },

    {
      url: about,
      item: "Item 4",
    },
    {
      url: home,
      item: "Item 5",
    },
    {
      url: about,
      item: "Item 6",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-screen 2xl:h-[700px] xl:h-[700px] md:h-[600px] h-[550px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>

      <div className="flex top-4 justify-center items-center">
        <div
          className="-translate-x-0 text-2xl p-2 bg-red-600 text-white cursor-pointer 2xl:h-[20vh] xl:h-[20vh] lg:h-[20vh] md:h-[15vh] h-[10vh] flex items-center w-[7.5vw] justify-center"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={50} />
        </div>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <div key={slide.url} className="relative">
              <img src={slide.url} alt="" className="2xl:h-[20vh] xl:h-[20vh] lg:h-[20vh] md:h-[15vh] h-[10vh] z-0" />
              <div
                className={`absolute duration-500 bg-black/80 z-20 w-full text-white flex justify-center items-center ${
                  currentIndex === slideIndex
                    ? "h-[20%] inset-x-0 bottom-0"
                    : "inset-0 h-full"
                }`}
              >
                <p className="2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-base">{slide.item}</p>
              </div>
            </div>
          </div>
        ))}
        <div
          className="-translate-x-0 text-2xl p-2 bg-red-600 text-white cursor-pointer 2xl:h-[20vh] xl:h-[20vh] lg:h-[20vh] md:h-[15vh] h-[10vh] flex items-center w-[7.5vw] justify-center"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={50} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
