import React from "react";
import { logo } from "../assets";
import { contacts } from "../constants";
import { ProductService } from "../constants/servise";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function scrollToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

const Footer = () => {
  const categories = ProductService.getProductsCategory();
  const { t } = useTranslation();
  return (
    <div className="container mx-auto 2xl:px-0 xl:px-0 lg:px-0 md:px-0 xs:px-3 px-3 flex flex-col lg:flex-row gap-5 md:gap-10 py-5 md:py-10 lg:py-20">
      <div className="flex flex-col space-y-3 md:space-y-6 lg:space-y-10 w-full md:w-full lg:w-1/6">
        <div className="flex 2xl:flex-col xl:flex-col lg:flex-col flex-row 2xl:space-y-2 xl:space-y-2 lg:space-y-2 space-y-0 gap-5">
          <div className="p-4 md:p-6 bg-white rounded-lg w-16 md:w-fit h-16 md:h-fit">
            <img src={logo} alt="" className="object-center w-full h-full" />
          </div>
          <p className="text-base md:text-2xl font-bold">
            <span className="text-white">Delixi</span>{" "}
            <br className="lg:hidden" /> Electric
          </p>
        </div>
        <p className="text-xs md:text-sm text-white">
          Thank you for the fastest service ever, I liked how everything in the{" "}
          <br />
          house was ready on time in the house was ready on time.
        </p>
      </div>
      <div className="flex border-t-2 lg:border-l-2 border-white p-0 py-2 md:p-20 justify-between w-full lg:w-5/6">
        <div className="flex flex-col space-y-5 md:space-y-10">
          <h1 className="text-base md:text-xl font-semibold">
            {t("products")}
          </h1>
          <div className="flex flex-col cursor-pointer">
            {categories.map((item) => (
              <Link
                to={`/product-detail/${item.name
                  .toLocaleLowerCase()
                  .replace(/\s/g, "")}`}
                onClick={scrollToTop}
                className="flex gap-2 md:gap-3 items-center justify-start pt-2 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs uppercase"
                key={item.name}
              >
                <h1>{item.name}</h1>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-5 md:space-y-10">
          <h1 className="text-base md:text-xl font-semibold">{t("links")}</h1>
          <div className="flex flex-col cursor-pointer">
            <Link
              to={"/"}
              onClick={scrollToTop}
              className="flex gap-2 md:gap-3 items-center justify-start pt-2 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs uppercase"
            >
              <h1>{t("navbar.main_page")}</h1>
            </Link>
            <Link
              to={"/about-us"}
              onClick={scrollToTop}
              className="flex gap-2 md:gap-3 items-center justify-start pt-2 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs uppercase"
            >
              {t("navbar.about_us")}
            </Link>
            <Link
              to={"/news"}
              onClick={scrollToTop}
              className="flex gap-2 md:gap-3 items-center justify-start pt-2 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs uppercase"
            >
              {t("navbar.news")}
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-5 md:space-y-10">
          <h1 className="text-base md:text-xl font-semibold">{t("contact")}</h1>
          <div className="flex flex-col cursor-pointer">
            {contacts.map((item) => (
              <div
                className="flex gap-2 md:gap-3 items-center justify-start pt-2 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs"
                key={item.name}
              >
                <p className="text-lg">{item.icon}</p>
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
