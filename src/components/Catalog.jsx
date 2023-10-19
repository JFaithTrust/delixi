import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { comunity } from "../constants";
import Product from "./Product";

const Catalog = () => {
  return (
    <div className="h-fit container mx-auto my-20 flex flex-col space-y-4 px-20">
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
        <div className="flex flex-col space-y-4 mt-20">
          {comunity.map((item) => (
            <div
              className="flex flex-col border-2 rounded-md border-red-300 items-center py-2 px-4"
              key={item.url}
            >
              <div className="p-4 w-[10vw] h-[15vh] border-2 rounded-md border-red-600 items-center hidden">
                <img src={item.url} alt="" />
              </div>
              <h1 className="text-center font-semibold">{item.name}</h1>
            </div>
          ))}
        </div>
        <div className="border-2 border-red-300 rounded-md px-2 py-4 flex flex-col items-center mt-20 space-y-3">
          <h1 className="font-semibold text-xl text-red-600">Some Infor For Product Type “Name_Of_Project_Type”</h1>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
