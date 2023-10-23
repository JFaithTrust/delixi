import React, { useRef, useState } from "react";
import { logo } from "../assets";
import { RxTextAlignBottom } from "react-icons/rx";
import { RiTranslate } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { comunity } from "../constants";

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(1);
  const buttonRef = useRef(null);

  const openPanel = () => {
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const OverlayPanel = ({ isOpen, children, buttonRef }) => {
    if (!isOpen) return null;

    const buttonRect = buttonRef.current.getBoundingClientRect();

    return (
      <div
        className="fixed z-50"
        style={{
          top: buttonRect.bottom + 10, // Adjust the top position as needed
          left: buttonRect.left,
        }}
      >
        <div className="bg-red-600 text-white p-4 rounded-lg shadow-lg w-[40vw]">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="border-b-2 border-red-600 w-full flex items-center top-0 z-50 bg-white fixed">
      <div className="flex container mx-auto py-4 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="text-xl font-semibold">
            <button
              onMouseOver={openPanel}
              onClick={closePanel}
              className="flex items-center gap-2"
              ref={buttonRef}
            >
              {t("catalog")}
              <RxTextAlignBottom className="text-red-600" />
            </button>
            <OverlayPanel
              isOpen={isPanelOpen}
              onClose={closePanel}
              buttonRef={buttonRef}
            >
              <div className="flex justify-start items-center gap-4">
                <div className="flex flex-col space-y-4 border-4 border-white rounded-lg py-5 px-3 basis-3/5">
                  {comunity.map((item) => (
                    <div className="flex items-center border-2 border-white rounded-md py-2 px-5 gap-3 cursor-pointer" onClick={() => setSelectedId(item.id)}>
                      <div className="border-2 rounded-lg border-blue-500 w-[150px] h-[100px]">
                        <img
                          src={item.url}
                          alt=""
                          className="object-center w-full h-full"
                        />
                      </div>
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                    </div>
                  ))}
                </div>
                <div className="border border-white h-[74vh] rounded-lg px-4 basis-2/5">
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
        <div className="flex gap-10 text-xl font-semibold items-center">
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
