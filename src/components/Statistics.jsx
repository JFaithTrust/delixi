import React from "react";
import { statistics } from "../constants";

const Statistics = () => {
  return (
    <div className="flex justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
      {statistics.map((item) => (
        <div className="flex flex-col py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-red-600 text-white space-y-1 items-center rounded-2xl">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{`${item.count}+`}</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
