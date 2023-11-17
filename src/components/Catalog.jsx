import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Product from "./Product";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ProductService } from "../constants/servise";
import { useTranslation } from "react-i18next";

const Catalog = () => {
  const [id, setId] = useState(1);
  const categories = ProductService.getProductsCategory();
  const { t } = useTranslation();
  function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  return (
    <div className="h-fit container mx-auto my-20 flex flex-col space-y-4 2xl:px-20 xl:px-20 lg:px-20 px-0">
      <div className="flex justify-between items-center">
        <h1 className="font-bold 2xl:text-xl xl:text-xl lg:text-xl text-base">
          {t("dcatalog")}
        </h1>
        <Link
          to={"/product-detail/all"}
          className="flex gap-2 items-center cursor-pointer"
          onClick={scrollToTop}
        >
          <p>{t("overview")}</p>
          <BsArrowRight />
        </Link>
      </div>
      <div className="flex 2xl:flex-row xl:flex-row flex-col justify-center 2xl:gap-20 xl:gap-20 gap-0">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex 2xl:flex-col xl:flex-col lg:flex-row md:flex-row flex-col 2xl:space-y-4 xl:space-y-4 space-y-0 mt-20 2xl:w-[13vw] xl:w-[13vw] w-full justify-between 2xl:gap-y-0 xl:gap-y-0 lg:gap-y-0 md:gap-y-0 gap-y-3"
        >
          {categories.map((item) => (
            <div
              className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col flex-row border-2 rounded-md border-red-300 items-center py-2 px-4 cursor-pointer 2xl:justify-center xl:justify-center lg:justify-center md:justify-center justify-between 2xl:w-[13vw] xl:w-[13vw] lg:w-[13vw] md:w-[13vw] w-full"
              key={item.id}
              onClick={() => setId(item.id)}
            >
              <div
                className={`p-4 border-2 rounded-md border-red-600 items-center transition-all duration-700 ease-in-out ${
                  id === item.id
                    ? "2xl:h-[15vh] xl:h-[10vh] lg:h-[8vh] md:h-[6vh] h-[10vh] block"
                    : "hidden"
                }`}
              >
                <img
                  src={item.url}
                  alt=""
                  className="object-center w-full h-full"
                />
              </div>
              <h1 className="text-center font-semibold py-1.5">{item.name}</h1>
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="border-2 border-red-300 rounded-md px-2 py-8 flex flex-col items-center text-center mt-20 space-y-3"
        >
          <h1 className="font-semibold text-xl text-red-600">
          {t("cataloginfo")}
          </h1>
          <Product pro_id={id} />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Catalog, "catalog");
