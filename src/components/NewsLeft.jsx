import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProductService } from "../constants/servise";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const NewsLeft = () => {
  const news = ProductService.getNewsData();
  return (
    <div className="flex justify-center items-start 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-10">
      {news
        .filter((item) => item.id === 1)
        .map((item) => (
          <Link
            to={`/news-detail/${item.id}`}
            className="flex flex-col space-y-5 2xl:basis-2/5 xl:basis-2/5 lg:basis-[50%] md:basis-[55%] basis-full py-4"
            key={item.id}
          >
            <motion.div variants={fadeIn("", "", 0.1, 1)} className="">
              <img src={item.url} alt="CenterImage" className="w-full" />
            </motion.div>
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              className="flex flex-col border-4 border-gray-300 rounded-lg py-2 px-6 space-y-2"
            >
              <h1 className="2xl:text-3xl xs:text-3xl text-2xl font-semibold text-center">
                {item.title}
              </h1>
              <p className="text-justify">{item.description}</p>
              <div className="flex justify-between text-red-300 items-center">
                <div className="flex gap-3 items-center">
                  <AiOutlineEye className="text-red-600" />{" "}
                  <p>{item.viewcount}</p>
                </div>
                <p>{item.date}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      <div className="2xl:flex xl:flex lg:flex md:flex hidden flex-col 2xl:basis-1/5 xl:basis-1/4 basis-1/3">
        {news.slice(4, 10).map((item, index) => (
          <Link
            to={`/news-detail/${item.id}`}
            key={item.id}
          >
            <motion.div variants={fadeIn("", "spring", index * 0.3, 0.75)} className="flex flex-col border-b-2 border-red-600 py-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <FaCalendarDays className="text-red-600" /> {item.date}
                </div>
                <div className="flex gap-3 items-center">
                  <AiOutlineEye className="text-red-600" /> {item.viewcount}
                </div>
              </div>
              <p className="font-semibold">{item.title}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(NewsLeft, "newsLeft");
