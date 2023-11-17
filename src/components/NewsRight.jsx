import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductService } from "../constants/servise";
import { motion } from "framer-motion";

function scrollToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

const NewsRight = () => {
  const news = ProductService.getNewsData();
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <div className="flex flex-col gap-y-6 mx-auto 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-20 pt-10 pb-40 2xl:px-20 xl:px-20 lg:px-20 md:px-20 px-10">
      {news.slice(1, 4).map((item) => (
        <Link
          to={`/news-detail/${item.id}`}
          onClick={scrollToTop}
          className="flex 2xl:flew-row sm:flex-row flex-col gap-5 border-2 border-gray-300 p-2 rounded-lg 2xl:w-[62vw] xl:w-[70vw]"
          key={item.id}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            variants={variants1}
            className="basis-1/3"
          >
            <img src={item.url} alt="object-cover" className="" />
          </motion.div>
          <div className="flex flex-col sm:justify-between justify-start 2xl:space-y-0 sm:space-y-0 space-y-2 basis-2/3">
            <p className="font-semibold 2xl:text-start sm:text-start text-center 2xl:text-xl sm:text-xl text-lg">
              {item.title}
            </p>
            <p className="text-justify text-base">{item.description}</p>
            <div className="flex justify-between text-red-300 items-center">
              <div className="flex gap-3 items-center">
                <AiOutlineEye className="text-red-600" />{" "}
                <p>{item.viewcount}</p>
              </div>
              <div className="flex gap-3">{item.date}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsRight;
