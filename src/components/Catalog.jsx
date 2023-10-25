import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { comunity } from "../constants";
import Product from "./Product";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [id, setId] = useState(1);
  return (
    <div className="h-fit container mx-auto my-20 flex flex-col space-y-4 2xl:px-20 xl:px-20 lg:px-20 px-0">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">
          Quyidagilarni ko'rish uchun katalog
        </h1>
        <Link
          to={"/product-detail/all"}
          className="flex gap-2 items-center cursor-pointer"
        >
          <p>To'liq ko'rish</p>
          <BsArrowRight />
        </Link>
      </div>
      <div className="flex 2xl:flex-row xl:flex-row flex-col justify-center 2xl:gap-20 xl:gap-20 gap-0">
        <div className="flex 2xl:flex-col xl:flex-col flex-row 2xl:space-y-4 xl:space-y-4 space-y-0 mt-20 2xl:w-[13vw] xl:w-[13vw] w-full justify-between">
          {comunity.map((item) => (
            <div
              className="flex flex-col border-2 rounded-md border-red-300 items-center py-2 px-4 cursor-pointer justify-center w-[13vw]"
              key={item.url}
              onClick={() => setId(item.id)}
            >
              <div
                className={`p-4 border-2 rounded-md border-red-600 items-center transition-all duration-700 ease-in-out ${
                  id === item.id
                    ? "2xl:h-[15vh] xl:h-[10vh] lg:h-[8vh] md:h-[6vh] h-[10vh] block"
                    : "hidden"
                }`}
              >
                <img
                  src={item.url}
                  alt=""
                  className="object-center w-full h-full"
                />
              </div>
              <h1 className="text-center font-semibold py-1.5">{item.name}</h1>
            </div>
          ))}
        </div>
        <div className="border-2 border-red-300 rounded-md px-2 py-8 flex flex-col items-center mt-20 space-y-3">
          <h1 className="font-semibold text-xl text-red-600">
            Some Infor For Product Type “Name_Of_Project_Type”
          </h1>
          <Product pro_id={id} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
