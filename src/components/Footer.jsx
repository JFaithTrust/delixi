import React from "react";
import { logo } from "../assets";
import { contacts } from "../constants";

const Footer = () => {
  return (
    <div className="container mx-auto flex gap-10 py-10">
      <div className="flex flex-col space-y-6 basis-1/6">
        <div className="flex flex-col space-y-2">
          <div className="p-6 bg-white rounded-lg w-fit h-fit">
            <img src={logo} alt="" />
          </div>
          <p className="text-2xl font-bold">
            <span className="text-white">Delixi</span> Electric
          </p>
        </div>
        <p className="text-sm text-white">
          Thank you for the fastest service ever, I liked how everything in the
          house was ready on time in the house was ready on time.
        </p>
      </div>
      <div className="flex border-l-2 border-white px-20 justify-between basis-5/6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-xl font-semibold">Mahsulot turlari</h1>
          <div></div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">Nav Menu</h1>
          <div></div>
        </div>
        <div className="flex flex-col space-y-10">
          <h1 className="text-xl font-semibold">Biz bilan bog'lanish</h1>
          <div className="flex flex-col cursor-pointer">
            {contacts.map((item) => (
              <div className="flex gap-3 items-center justify-start pt-3" key={item.name}>
                {item.icon}
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
