import React from "react";
import { about } from "../assets";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill, BsFillPCircleFill, BsBuildingFillUp } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoWallet } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className="flex flex-col justify-center py-20 space-y-14">
      <h1 className="text-6xl font-bold text-center">
        O’zbekistondagi{" "}
        <span className="text-red-600">
          Yagona <br /> Rasmiy
        </span>{" "}
        Korxonasi
      </h1>
      <div className="flex justify-center items-center gap-28">
        <div className="flex flex-col text-4xl font-semibold space-y-6">
          <div className="flex gap-5 items-center">
            <FaLocationDot className="text-red-600" fontSize={'60px'} />
            <p>Toshkent Shahar,<br /> Yunusobod Tuman,<br /> 9-23-34</p>
          </div>
          <div className="flex gap-5 items-center">
            <BsFillTelephoneFill className="text-red-600" fontSize={'60px'} />
            <p>+998 (93) 250 52 55</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaCalendarAlt className="text-red-600" fontSize={'60px'} />
            <p><span className="text-red-600">Ish grafigi</span> <br /> Ish kunlari, shanba, yakshanba: <br /> 8:00 dan 21:00 gacha</p>
          </div>
        </div>
        <div className="basis-1/3">
          <img src={about} alt="" className="rounded-xl" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-28">
        <div className="flex flex-col justify-start space-y-4">
            <p className="text-red-600 font-semibold text-lg">Korxonada mavjud imkoniyatlar</p>
            <div className="flex items-center gap-5 font-semibold"><BsFillPCircleFill className="text-red-600" fontSize={40} /> Avtoturargohning <br /> mavjudligi</div>
            <div className="flex items-center gap-5 font-semibold"><BsBuildingFillUp className="text-red-600" fontSize={40} /> Lift orqali Korxona ichida <br /> harakatlanish mumkun</div>
            <div className="flex items-center gap-5 font-semibold"><IoWallet className="text-red-600" fontSize={40} /> Istalgan to’lov usulidan <br /> foydalanishingiz mumkun</div>
        </div>
        <div className="">
        <iframe title="delixi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.848452844388!2d69.24688117659338!3d41.355647597962616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d95e8ef9775%3A0x8313bb4449bc07ec!2zREVMSVhJINCt0LvQtdC60YLRgNC40LrQsCDQn9C90LXQstC80LDRgtC40LrQsA!5e0!3m2!1sru!2s!4v1697877912033!5m2!1sru!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
