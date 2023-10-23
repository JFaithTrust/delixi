import React from "react";
import { newsBottom, newsTop } from "../constants";
import { FaCalendarDays } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import { centerNew } from "../assets";

const News = () => {
  return (
    <div className="flex flex-col top-[78px] relative">
      <div className="flex justify-center items-start gap-10">
        <div className="flex flex-col basis-1/6">
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
        <div className="flex flex-col space-y-5 basis-1/3 py-4">
          <div className="">
            <img src={centerNew} alt="CenterImage" />
          </div>
          <div className="flex flex-col border-4 border-gray-300 rounded-lg py-2 px-6">
            <h1 className="text-3xl font-semibold text-center">
              Battlegrounds Mobile India iOS release date
            </h1>
            <p>
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
        <div className="flex flex-col basis-1/6">
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
      <div className="grid grid-cols-2 gap-6 container mx-auto py-20 px-20">
        {newsBottom.map((item) => (
          <div className="flex col-span-1 items-center gap-5" key={item.id}>
            <div>
              <img src={item.url} alt="" />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-semibold text-center">{item.title}</p>
              <p>{item.description}</p>
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
