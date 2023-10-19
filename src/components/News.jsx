import React from "react";
import { news } from "../constants";
import { CiCalendarDate } from "react-icons/ci";
import { GrFormView } from "react-icons/gr";

const News = () => {
  return (
    <div className="container mx-auto px-20">
      <div className="flex flex-col items-center h-[20vh]">
        <h1 className="font-bold text-2xl">Yangiliklar</h1>
        <hr className="w-14 h-1 mx-auto my-2 bg-red-600 border-0 rounded md:my-4" />
      </div>
      <div className="flex justify-center flex-wrap">
        {news.map((item) => (
          <div
            className="flex basis-5/12 p-2 m-2 rounded-lg bg-red-300 space-x-4 items-center"
            key={item.url}
          >
            <div>
              <img src={item.url} alt="" className="rounded-lg" />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                  <CiCalendarDate />
                  <p>{item.date}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <GrFormView />
                  {item.view}
                </div>
              </div>
              <h1 className="text-xl font-semibold text-red-600">{item.title}</h1>
              <p className="text-sm text-gray-900">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
