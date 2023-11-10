import React from "react";
import { testimonals } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Testimonals = () => {
  return (
    <div className="mx-auto container flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center h-[20vh] sm:h-[20vh] md:h-[20vh] lg:h-[20vh] xl:h-[20vh]"
      >
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
          Mijozlarimiz fikrlari
        </h1>
        <hr className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-1.5 rounded-md mx-auto my-2 bg-red-600" />
        <p className="text-gray-500 dark:text-gray-400 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          atque quidem, dicta enim eveniet iste culpa, blanditiis iusto et, cum{" "}
          explicabo quibusdam fugit eligendi ipsa sunt dolorem. Animi dolorem
          fugit ipsum asperiores dolorum. Enim eligendi hic iusto labore rerum{" "}
          tempora illo dolore animi nulla ipsam. Quidem odit reiciendis
          doloremque culpa?
        </p>
      </motion.div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {testimonals.map((item, index) => (
          <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className="flex flex-col bg-red-200 rounded-md py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10"
            key={item.id}
          >
            <div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_92_3342)">
                  <path
                    d="M10 34.9998C12.78 34.9998 14.6567 34.0448 16.0333 32.6914C17.41 31.3381 18.3333 29.4464 18.3333 27.4998C18.3333 25.9131 17.9567 24.4581 17.3167 23.1164C16.68 21.7764 15.8467 20.5914 15.0333 19.4531C14.22 18.3164 13.4167 17.2198 12.8 16.0614C12.1767 14.9081 11.6667 13.7331 11.6667 12.4998C11.6667 10.9214 12.1233 9.24476 13.1433 8.0381C13.6767 7.41143 13.0133 6.47643 12.2217 6.69976C8.78166 7.66643 5.73833 9.74476 3.54667 12.5664C1.35333 15.3881 0 18.9264 0 22.4998C0 25.5664 0.733333 28.6798 2.65833 31.1398C4.66666 33.4831 7.22 34.9998 10 34.9998ZM31.6717 34.9998C34.4517 34.9998 36.325 34.0448 37.7016 32.6914C39.08 31.3381 40.0016 29.4548 40.0016 27.4998C40.0016 25.9131 39.6266 24.4581 38.9883 23.1164C38.35 21.7764 37.5166 20.5914 36.705 19.4531C35.8883 18.3164 35.0883 17.2198 34.4683 16.0614C33.8483 14.9081 33.34 13.7281 33.34 12.4998C33.34 10.9214 33.795 9.24476 34.8133 8.0381C35.3467 7.41143 34.6833 6.47643 33.8917 6.69976C30.4517 7.66643 27.4083 9.74476 25.2167 12.5664C23.0217 15.3881 21.6717 18.9264 21.6717 22.4998C21.6717 25.5664 22.4017 28.6798 24.3267 31.1398C26.3367 33.4831 28.8933 34.9998 31.6717 34.9998Z"
                    fill="#D1121A"
                    fill-opacity="0.3"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_92_3342"
                    x="-12"
                    y="-1.33398"
                    width="64.002"
                    height="52.334"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_92_3342"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_92_3342"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                {item.name}
              </h1>
              <p className="text-blue-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {item.job}
              </p>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonals, "testimonals");
