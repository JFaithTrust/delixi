import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { comunity } from "../constants";

const Comunity = () => {
  return (
    <div className="flex flex-col mt-10 space-y-4">
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
        <div className="text-gray-600">Who is Nextcent suitable for?</div>
      </div>
      <div className="flex justify-between">
        {comunity.map((item) => (
          <div className="flex flex-col space-y-4 basis-1/6" key={item.url}>
            <div className="bg-red-300 border-2 rounded-md border-red-600 p-4 m-2 h-[18vh] flex justify-center shadow-[0_0_50px_0] shadow-[#3478C8]">
              <img src={item.url} alt="" />
            </div>
            <h1 className="text-lg font-semibold text-center">{item.title}</h1>
            <p className="text-sm text-gray-600 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comunity;
