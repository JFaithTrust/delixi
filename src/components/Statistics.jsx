import React from "react";
import { statistics } from "../constants";

const Statistics = () => {
  return (
    <div className="flex justify-center gap-2 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
      {statistics.map((item) => (
        <div className="flex flex-col justify-center py-2 sm:py-4 md:py-5 lg:py-6 xl:py-6 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 bg-red-600 text-white space-y-1 items-center rounded-2xl 2xl:w-[200px] xl:w-[200px] lg:w-[200px] md:w-[150px] sm:w-[130px] xs:w-[120px] w-[85px]">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{`${item.count}+`}</p>
          <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
