import React from "react";
import {
  AboutComp,
  Catalog,
  Comunity,
  News,
  Slider,
  Statistics,
  Testimonals,
} from "../components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function scrollToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col top-[78px] relative">
      <div className="2xl:h-[900px] xl:h-[900px] lg:h-[800px] md:h-[750px] sm:h-[680px] h-[650px]">
        <Slider />
      </div>
      <div className="container mx-auto 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-20 px-0">
        <AboutComp />
      </div>
      <div className="2xl:container 2xl:mx-auto xl:container xl:mx-auto lg:container lg:mx-auto px-20">
        <Comunity />
      </div>
      <div className="bg-red-100 2xl:px-20 xl:px-20 lg:px-20 md:px-20 px-10 my-10">
        <Catalog />
      </div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col justify-center items-center">
          <div className="h-[140px] xs:h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px] xl:h-[260px] 2xl:h-[260px] relative">
            <div className="p-8 2xl:w-[1000px] xl:w-[1000px] lg:w-[1000px] w-full xs:p-10 sm:p-16 md:p-20 lg:p-20 xl:p-20 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-4xl xl:6xl 2xl:6xl font-bold text-center bg-red-600 rounded-lg text-white">
              {t("hstatistics1")}
              <br /> {t("hstatistics2")}
            </div>
            <Link
              to={"/product-detail/all"}
              onClick={scrollToTop}
              className="absolute 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base xs:text-base text-xs bottom-0 py-2 px-4 rounded-md inset-x-20 xs:inset-x-28 sm:inset-x-40 md:inset-x-52 lg:inset-x-[24rem] xl:inset-x-[24rem] bg-red-600 cursor-pointer text-white shadow-[0_0_50px_0] shadow-[#3478C8]"
            >
              {t("moreinfo")}
            </Link>
          </div>
          <div className="flex flex-col mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
            <p className="text-center 2xl:text-base xl:text-base lg:text-base md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quibusdam magnam ex maxime, autem nobis sint, atque
              dolor sunt quos <br />
              ipsum deleniti blanditiis aspernatur iusto aliquid eum deserunt
              et. Totam?
            </p>
            <Statistics />
          </div>
        </div>
      </div>
      <div className="bg-red-100 2xl:px-20 xl:px-20 lg:px-20 px-0 my-10 py-20">
        <News />
      </div>
      <div className="mb-10 pb-20">
        <Testimonals />
      </div>
    </div>
  );
};

export default Home;
