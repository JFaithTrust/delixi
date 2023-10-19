import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { comunity } from "../constants";

const Catalog = () => {
  return (
    <div className="h-[95vh] container mx-auto my-20 flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">
          Quyidagilarni ko'rish uchun katalog
        </h1>
        <div className="flex gap-2 items-center cursor-pointer">
          <p>To'liq ko'rish</p>
          <BsArrowRight />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col space-y-4">
          {comunity.map((item) => (
            <div
              className="flex flex-col border-2 rounded-md border-red-300 items-center p-4 space-y-2"
              key={item.url}
            >
              <div className="p-4 w-[10vw] h-[15vh] border-2 rounded-md border-red-600 flex items-center">
                <img src={item.url} alt="" />
              </div>
              <h1 className="text-center">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Catalog;
