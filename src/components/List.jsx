import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";

const List = () => {
  return (
    <div className="w-full flex flex-col bg-white rounded-lg">
      <div className="flex flex-col">
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipNKiuwgrREZDOcUCcvdSgJP14YBxLrI6Bi9y1CU=w408-h544-k-no"
          alt=""
          className="w-full h-[300px] object-cover"
        />
        <div className="flex flex-col py-3 px-4">
          <h1 className="font-semibold text-lg">DELIXI Электрика Пневматика</h1>
          <p className="text-gray-600 text-base">Магазин электротоваров</p>
        </div>
      </div>
      <div className="flex flex-col border-y-[1px] border-gray-300 py-3 px-4 text-base gap-y-5">
        <div className="flex gap-x-4 items-center justify-start">
          <IoLocationOutline className="text-blue-500" fontSize={20} />
          964X+7Q4, Уста Ширин кўчаси, Тоshkent, Узбекистан
        </div>
        <div className="flex gap-x-4 items-center">
          <FaRegClock className="text-blue-500" fontSize={17} />
          Ish vaqti: 8:30 dan 18:00 gacha
        </div>
        <div className="flex gap-x-4 items-center">
          <MdPhone className="text-blue-500" fontSize={20} />
          +998909380204
        </div>
      </div>
    </div>
  );
};

export default List;
