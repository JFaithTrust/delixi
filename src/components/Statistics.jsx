import React from "react";
import { statistics } from "../constants";

const Statistics = () => {
  return (
      <div className="flex justify-center gap-16 mt-10">
        {statistics.map((item) => (
          <div className="flex flex-col py-4 px-8 bg-red-600 text-white space-y-1 items-center rounded-2xl">
            <p className="text-4xl">{`${item.count}+`}</p>
            <p className="text-xl">{item.title}</p>
          </div>
        ))}
      </div>
  );
};

export default Statistics;
