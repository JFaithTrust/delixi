import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProductService } from "../constants/servise";

const News = () => {
  const { t } = useTranslation();
  const news = ProductService.getNewsData();
  return (
    <div className="container mx-auto px-0 lg:px-16 xl:px-20">
      <div className="flex flex-col items-center h-1/5 sm:h-1/4 md:h-1/3 lg:h-1/4 xl:h-1/5">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
          {t("navbar.news")}
        </h1>
        <hr className="w-10 h-0.5 sm:w-14 sm:h-1 md:w-16 md:h-1 lg:w-14 lg:h-1 xl:w-16 xl:h-1 mx-auto my-2 bg-red-600 border-0 rounded sm:my-4 md:my-4" />
      </div>
      <div className="flex flex-wrap justify-center">
        {news.slice(0, 4).map((item) => (
          <Link
            className="flex xl:flex-row flex-col basis-11/12 sm:basis-6/12 md:basis-5/12 lg:basis-6/12 xl:basis-5/12 p-2 m-2 rounded-lg bg-red-300 space-x-2 sm:space-x-4 gap-y-4 items-center"
            key={item.url}
            to={`/news-detail/${item.id}`}
          >
            <div className="basis-1/3 h-full">
              <img src={item.url} alt="" className="rounded-lg lg:h-full h-[200px] object-cover" />
            </div>
            <div className="flex flex-col space-y-2 basis-2/3">
              <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                  <CiCalendarDate />
                  <p>{item.date}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <GrFormView />
                  {item.viewcount}
                </div>
              </div>
              <h1 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-semibold text-red-600">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-base text-gray-900">
                {item.cutdesc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
