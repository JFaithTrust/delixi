import React from "react";
import { newsDetail } from "../assets";
import { news } from "../constants";
import { AiOutlineEye } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams()
  return (
    <div className="top-[78px] relative">
      <img
        src={newsDetail}
        alt=""
        className="w-full object-cover object-center h-[600px]"
      />
      <div className="container mx-auto 2xl:px-20 sm:px-20 px-0 pt-20 pb-40">
        {news.filter((item) => item.id == id).map((item) => (
        <div className="flex 2xl:flex-row lg:flex-row flex-col gap-3 py-4">
          <div className="">
            <img src={item.url} alt="CenterImage" />
          </div>
          <div className="flex flex-col justify-between border-4 border-gray-300 rounded-lg py-2 px-6">
            <div className="flex flex-col space-y-4">
              <h1 className="2xl:text-3xl xs:text-3xl text-2xl font-semibold text-center">
                {item.title}
              </h1>
              <p className="text-justify">
                {item.description}
              </p>
            </div>
            <div className="flex justify-between text-red-300 items-center">
              <div className="flex gap-3 items-center">
                <AiOutlineEye className="text-red-600" /> <p>{item.view}</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaCalendarDays className="text-red-600" />{" "}
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;
