import React, { useRef, useState } from "react";
import { logo } from "../assets";
import { RxHamburgerMenu, RxTextAlignBottom } from "react-icons/rx";
import { RiTranslate } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { comunity } from "../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(1);
  const buttonRef = useRef(null);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const OverlayPanel = ({ isOpen, children, buttonRef, isMobile }) => {
    if (!isOpen) return null;

    const buttonRect = buttonRef.current.getBoundingClientRect();

    const mobileStyles = {
      top: buttonRect.bottom + 25,
      left: 0,
    };

    const desktopStyles = {
      top: buttonRect.bottom + 25,
      left: buttonRect.left,
    };

    const chosenStyles = isMobile ? mobileStyles : desktopStyles;

    return (
      <div
        className={`fixed z-50`}
        style={{
          ...chosenStyles
        }}
      >
        <div className="bg-red-600 text-white 2xl:p-4 xl:p-4 p-2 rounded-lg shadow-lg 2xl:h-[650px] xl:h-[650px] md:h-[570px] h-[530px]">
          {children}
        </div>
      </div>
    );
  };

  const closedPanel = () => {
    togglePanel();
    setShowMobileNav(false);
  };

  const burgerPanel = () => {
    setShowMobileNav(!showMobileNav);
    setIsPanelOpen(false);
  };

  const mobileNavLinks = (
    <div className="fixed top-[78px] right-0 h-full w-[200px] bg-white z-50 p-4">
      <div className="flex flex-col gap-4">
        <NavLink to={"/"} onClick={() => setShowMobileNav(false)}>
          {t("navbar.main_page")}
        </NavLink>
        <NavLink to={"/about-us"} onClick={() => setShowMobileNav(false)}>
          {t("navbar.about_us")}
        </NavLink>
        <NavLink to={"/branchs"} onClick={() => setShowMobileNav(false)}>
          {t("navbar.branchs")}
        </NavLink>
        <NavLink to={"/news"} onClick={() => setShowMobileNav(false)}>
          {t("navbar.news")}
        </NavLink>
        <Link
          to={"/contact"}
          className="w-full"
          onClick={() => setShowMobileNav(false)}
        >
          <button className="bg-red-600 text-white py-2 px-6 rounded-md shadow-[0_0_50px_0] shadow-[#3478C8] w-full mt-5">
            {t("contact")}
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="border-b-2 border-red-600 w-full flex items-center top-0 z-50 bg-white fixed">
      <div className="flex container mx-auto py-4 items-center justify-between">
        <div className="flex items-center 2xl:gap-10 xs:gap-10 gap-3">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="text-xl font-semibold">
            <button
              onClick={closedPanel}
              className="flex items-center gap-2"
              ref={buttonRef}
            >
              {t("catalog")}
              <RxTextAlignBottom className="text-red-600" />
            </button>
            <OverlayPanel
              isOpen={isPanelOpen}
              buttonRef={buttonRef}
              isMobile={window.innerWidth < 640}
            >
              <div className="flex justify-start items-start gap-4">
                <div className="flex flex-col 2xl:space-y-4 xl:space-y-4 space-y-2 2xl:border-4 xl:border-4 border-2 border-white rounded-lg 2xl:py-5 xl:py-5 py-2 px-3">
                  {comunity.map((item) => (
                    <div
                      className={`flex items-center border-2 hover:border-blue-500 rounded-md 2xl:py-2 md:py-2 py-1 2xl:px-5 md:px-5 px-3 gap-3 cursor-pointer ${
                        item.id === selectedId
                          ? "border-blue-500"
                          : "border-white"
                      } `}
                      onClick={() => setSelectedId(item.id)}
                    >
                      <div className="border-2 rounded-lg border-blue-500 2xl:w-[130px] xl:w-[130px] w-[110px] 2xl:h-[80px] xl:h-[80px] h-[80px]">
                        <img
                          src={item.url}
                          alt=""
                          className="object-center w-full h-full"
                        />
                      </div>
                      <h1 className="2xl:text-xl md:text-xl text-lg font-semibold">
                        {item.name}
                      </h1>
                    </div>
                  ))}
                </div>
                <div className="border border-white h-[610px] rounded-lg px-4 w-[300px] 2xl:block xl:block hidden">
                  {comunity
                    .filter((item) => item.id === selectedId)
                    .map((el) => (
                      <div className="flex flex-col space-y-5">
                        <h1 className="text-2xl text-center">{el.name}</h1>
                        <p className=" font-thin">{el.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            </OverlayPanel>
          </div>
        </div>
        <motion.div initial={{ y: -250 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 30 }} className="flex gap-10 text-xl font-semibold items-center">
          <div className="2xl:flex xl:flex hidden gap-10">
            <NavLink
              to={"/"}
              className={({ isActive }) => (!isActive ? "" : "text-red-600")}
            >
              {t("navbar.main_page")}
            </NavLink>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) => (!isActive ? "" : "text-red-600")}
            >
              {t("navbar.about_us")}
            </NavLink>
            <NavLink
              to={"/branchs"}
              className={({ isActive }) => (!isActive ? "" : "text-red-600")}
            >
              {t("navbar.branchs")}
            </NavLink>
            <NavLink
              to={"/news"}
              className={({ isActive }) => (!isActive ? "" : "text-red-600")}
            >
              {t("navbar.news")}
            </NavLink>
          </div>
          <div className="flex 2xl:gap-6 xs:gap-6 gap-3 items-center">
            <div className="flex gap-2 text-red-600">
              <RiTranslate
                className="bg-red-300 p-0.5 border border-red-600 rounded-md"
                fontSize={30}
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
            <div className="2xl:hidden xl:hidden block">
              <button
                className="text-xl font-semibold text-red-600 bg-red-300 border border-red-600 rounded-md p-1"
                onClick={burgerPanel}
              >
                <RxHamburgerMenu />
              </button>
              {showMobileNav && mobileNavLinks}
            </div>
            <Link to={"/contact"}>
              <button className="2xl:block xl:block hidden bg-red-600 text-white py-2 px-6 rounded-md shadow-[0_0_50px_0] shadow-[#3478C8]">
                {t("contact")}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
