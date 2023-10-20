import React from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { RxTextAlignBottom } from "react-icons/rx";
import { RiTranslate } from 'react-icons/ri'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b-2 border-red-600">
      <div className="flex container mx-auto py-4 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
          <div className="text-xl font-semibold flex gap-2 items-center">
            Katalog
            <RxTextAlignBottom className="text-red-600" />
          </div>
        </div>
        <div className="flex gap-10 text-xl font-semibold items-center">
          {navLinks.map((item) => (
            <Link to={item.path} key={item.path}>{item.title}</Link>
          ))}
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 text-red-600">
              <RiTranslate className="bg-red-300 p-0.5 border border-red-600 rounded-md" fontSize={25} />
              <div className="">UZ</div>
            </div>
            <button className="bg-red-600 text-white py-2 px-6 rounded-md shadow-[0_0_50px_0] shadow-[#3478C8]">
              Aloqa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
