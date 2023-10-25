import React from "react";
import { about } from "../assets";
import { FaLocationDot } from "react-icons/fa6";
import {
  BsFillTelephoneFill,
  BsFillPCircleFill,
  BsBuildingFillUp,
} from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center pt-20 pb-40 space-y-14 top-[78px] relative">
      <h1 className="text-5xl font-bold text-center">
        O’zbekistondagi{" "}
        <span className="text-red-600">
          Yagona <br className="sm:block hidden" /> Rasmiy
        </span>{" "}
        Korxonasi
      </h1>
      <div className="2xl:flex xl:flex lg:flex hidden justify-center items-center 2xl:gap-28 xl:gap-20 gap-20">
        <div className="flex flex-col 2xl:text-2xl xl:text-xl text-xl font-semibold space-y-6 basis-1/4">
          <div className="flex gap-5 items-center">
            <FaLocationDot className="text-red-600" />
            <p>
              Toshkent Shahar,
              <br /> Yunusobod Tuman,
              <br /> 9-23-34
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <BsFillTelephoneFill className="text-red-600" />
            <p>+998 (93) 250 52 55</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaCalendarAlt className="text-red-600" />
            <p>
              <span className="text-red-600">Ish grafigi</span> <br /> Ish
              kunlari, shanba, yakshanba: <br /> 8:00 dan 21:00 gacha
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={about}
            alt=""
            className="rounded-xl w-[450px] h-[300px] object-cover"
          />
        </div>
      </div>
      <div className="2xl:hidden xl:hidden lg:hidden flex flex-col justify-center items-center gap-10">
        <div className="">
          <img
            src={about}
            alt=""
            className="rounded-xl 2xl:w-[450px] xl:w-[450px] lg:w-[450px] md:w-[450px] sm:w-[450px] xs:w-[450px] w-[370px] h-[300px] object-cover"
          />
        </div>
        <div className="flex flex-col 2xl:text-2xl xl:text-xl text-xl font-semibold space-y-6 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-2/3 w-2/3">
          <div className="flex gap-5 items-center">
            <FaLocationDot className="text-red-600" />
            <p>
              Toshkent Shahar,
               Yunusobod Tuman,
               9-23-34
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <BsFillTelephoneFill className="text-red-600" />
            <p>+998 (93) 250 52 55</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaCalendarAlt className="text-red-600" />
            <p>
              <span className="text-red-600">Ish grafigi</span> <br /> Ish
              kunlari, shanba, yakshanba: 8:00 dan 21:00 gacha
            </p>
          </div>
        </div>
      </div>
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-center items-center 2xl:gap-28 xl:gap-20 gap-20">
        <div className="basis-1/4">
          <iframe
            title="delixi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.848452844388!2d69.24688117659338!3d41.355647597962616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d95e8ef9775%3A0x8313bb4449bc07ec!2zREVMSVhJINCt0LvQtdC60YLRgNC40LrQsCDQn9C90LXQstC80LDRgtC40LrQsA!5e0!3m2!1sru!2s!4v1697877912033!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-xl 2xl:w-[450px] xl:w-[450px] lg:w-[450px] md:w-[450px] sm:w-[450px] xs:w-[450px] w-[370px] h-[300px]"
          ></iframe>
        </div>
        <div className="flex flex-col justify-start 2xl:text-2xl xl:text-xl text-xl space-y-4 basis-1/4">
          <p className="text-red-600 font-semibold 2xl:text-3xl xl:text-2xl text-2xl text-center">
            Korxonada mavjud imkoniyatlar
          </p>
          <div className="flex items-center gap-5 font-semibold">
            <BsFillPCircleFill className="text-red-600" /> Avtoturargohning{" "}
            <br /> mavjudligi
          </div>
          <div className="flex items-center gap-5 font-semibold">
            <BsBuildingFillUp className="text-red-600" /> Lift orqali Korxona
            ichida <br /> harakatlanish mumkun
          </div>
          <div className="flex items-center gap-5 font-semibold">
            <IoWallet className="text-red-600" /> Istalgan to’lov usulidan{" "}
            <br /> foydalanishingiz mumkun
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
