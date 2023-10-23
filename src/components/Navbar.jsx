import React from "react";
import { logo } from "../assets";
import { RxTextAlignBottom } from "react-icons/rx";
import { RiTranslate } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="border-b-2 border-red-600">
      <div className="flex container mx-auto py-4 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="text-xl font-semibold flex gap-2 items-center">
              {t("catalog")}
            <RxTextAlignBottom className="text-red-600" />
          </div>
        </div>
        <div className="flex gap-10 text-xl font-semibold items-center">
          <NavLink to={"/"} className={({isActive}) => ((!isActive) ? '': 'text-red-600')}>{t("navbar.main_page")}</NavLink>
          <NavLink to={"/about-us"} className={({isActive}) => ((!isActive) ? '': 'text-red-600')}>{t("navbar.about_us")}</NavLink>
          <NavLink to={"/branchs"} className={({isActive}) => ((!isActive) ? '': 'text-red-600')}>{t("navbar.branchs")}</NavLink>
          <NavLink to={"/news"} className={({isActive}) => ((!isActive) ? '': 'text-red-600')}>{t("navbar.news")}</NavLink>
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 text-red-600">
              <RiTranslate
                className="bg-red-300 p-0.5 border border-red-600 rounded-md"
                fontSize={25}
              />
              <div className="">
                <select
                  id="language-select"
                  onChange={changeLanguage}
                  value={i18n.language}
                >
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                </select>
              </div>
            </div>
            <button className="bg-red-600 text-white py-2 px-6 rounded-md shadow-[0_0_50px_0] shadow-[#3478C8]">
              {t("contact")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
