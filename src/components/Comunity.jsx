import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { comunity } from "../constants";
import { Link } from "react-router-dom";

const Comunity = () => {
  return (
    <div className="flex flex-col mt-10 space-y-10">
      <div className="flex flex-col items-center space-y-4">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Manage your entire comunity <br /> in a single system
          </h1>
        </div>
        <div className="flex gap-2 items-center bg-red-600 text-white p-2 rounded cursor-pointer">
          <FaFileDownload />
          <p>Barcha maxsulotlar katalogini yuklab olish</p>
        </div>
      </div>
      <div className="flex justify-center 2xl:gap-20 xl:gap-20 lg:gap-8 md:gap-5 gap-3">
        {comunity.map((item) => (
          <div className="flex justify-center 2xl:w-[180px] xl:w-[180px] lg:w-[150px] sm:w-[100px] w-[80px]" key={item.url}>
            <Link to={`/product-detail/${item.name.toLocaleLowerCase().replace(/\s/g, '')}`} className="space-y-4">
              <div className="bg-red-300 border-2 rounded-md border-red-600 p-4 m-2 2xl:h-[150px] xl:h-[150px] lg:h-[150px] md:h-[130px] sm:h-[100px] h-[85px] 2xl:w-[180px] xl:w-[180px] lg:w-[150px] sm:w-[100px] w-[85px] flex justify-center shadow-[0_0_50px_0] shadow-[#3478C8]">
                <img src={item.url} alt="" className="object-center w-full h-full" />
              </div>
              <h1 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base text-sm font-semibold text-center">
                {item.title}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comunity;
