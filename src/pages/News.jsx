import React from "react";
import { newsBottom, newsTop } from "../constants";
import { FaCalendarDays } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import { centerNew } from "../assets";

const News = () => {
  return (
    <div className="flex flex-col top-[78px] w-full relative">
      <div className="flex justify-center items-start 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-10">
        <div className="flex flex-col space-y-5 2xl:basis-2/5 xl:basis-2/5 lg:basis-[50%] md:basis-[55%] basis-full py-4">
          <div className="">
            <img src={centerNew} alt="CenterImage" />
          </div>
          <div className="flex flex-col border-4 border-gray-300 rounded-lg py-2 px-6 space-y-2">
            <h1 className="2xl:text-3xl xs:text-3xl text-2xl font-semibold text-center">
              Battlegrounds Mobile India iOS release date
            </h1>
            <p className="text-justify">
              The reason behind their disappointment is iPhone users have
              beenThe reason behind their disappointment is that iPhone users
              have been.. The reason behind their disappointment is that iPhone
              users have beenThe reason behind their disappointment is that
              iPhone users have been..
            </p>
            <div className="flex justify-between text-red-300 items-center">
              <div className="flex gap-3 items-center">
                <AiOutlineEye className="text-red-600" /> <p>156514</p>
              </div>
              <p>42 min ago</p>
            </div>
          </div>
        </div>
        <div className="2xl:flex xl:flex lg:flex md:flex hidden flex-col 2xl:basis-1/5 xl:basis-1/4 basis-1/3">
          {newsTop.map((item) => (
            <div
              className="flex flex-col border-b-2 border-red-600 py-4"
              key={item.id}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <FaCalendarDays className="text-red-600" /> {item.date}
                </div>
                <div className="flex gap-3 items-center">
                  <AiOutlineEye className="text-red-600" /> {item.view}
                </div>
              </div>
              <p className="font-semibold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-6 mx-auto 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-20 pt-10 pb-40 2xl:px-20 xl:px-20 lg:px-20 md:px-20 px-10">
        {newsBottom.map((item) => (
          <div className="flex 2xl:flew-row sm:flex-row flex-col gap-5 border-2 border-gray-300 p-2 rounded-lg 2xl:w-[62vw] xl:w-[70vw] items-center" key={item.id}>
            <div className="">
              <img src={item.url} alt="object-cover" />
            </div>
            <div className="flex flex-col 2xl:justify-between sm:justify-between justify-start 2xl:space-y-0 sm:space-y-0 space-y-2">
              <p className="font-semibold 2xl:text-start sm:text-start text-center 2xl:text-xl sm:text-xl text-lg">{item.title}</p>
              <p className="text-justify 2xl:text-lg sm:text-lg text-base">{item.description}</p>
              <div className="flex justify-between text-red-300 items-center">
                <div className="flex gap-3 items-center">
                  <AiOutlineEye className="text-red-600" /> <p>{item.date}</p>
                </div>
                <div className="flex gap-3">{item.view} min ago</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;



