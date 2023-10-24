import React from "react";
import { logo } from "../assets";
import { comunity, contacts, navLinks } from "../constants";

const Footer = () => {
  return (
    // <div className="container mx-auto flex gap-10 py-10">
    //   <div className="flex flex-col space-y-6 basis-1/6">
    //     <div className="flex flex-col space-y-2">
    //       <div className="p-6 bg-white rounded-lg w-fit h-fit">
    //         <img src={logo} alt="" />
    //       </div>
    //       <p className="text-2xl font-bold">
    //         <span className="text-white">Delixi</span> Electric
    //       </p>
    //     </div>
    //     <p className="text-sm text-white">
    //       Thank you for the fastest service ever, I liked how everything in the
    //       house was ready on time in the house was ready on time.
    //     </p>
    //   </div>
    //   <div className="flex border-l-2 border-white px-20 justify-between basis-5/6">
    //     <div className="flex flex-col space-y-10">
    //       <h1 className="text-xl font-semibold">Mahsulot turlari</h1>
    //       <div className="flex flex-col cursor-pointer">
    //         {comunity.map((item) => (
    //           <div
    //             className="flex gap-3 items-center justify-start pt-0.5 text-lg"
    //             key={item.name}
    //           >
    //             <h1>{item.name}</h1>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="flex flex-col space-y-10">
    //       <h1 className="text-xl font-semibold">Foydali Linklar</h1>
    //       <div className="flex flex-col cursor-pointer">
    //         {navLinks.map((item) => (
    //           <div
    //             className="flex gap-3 items-center justify-start pt-2 text-lg"
    //             key={item.title}
    //           >
    //             <h1>{item.title}</h1>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="flex flex-col space-y-10">
    //       <h1 className="text-xl font-semibold">Biz bilan bog'lanish</h1>
    //       <div className="flex flex-col cursor-pointer">
    //         {contacts.map((item) => (
    //           <div
    //             className="flex gap-3 items-center justify-start pt-3"
    //             key={item.name}
    //           >
    //             {item.icon}
    //             <h1>{item.name}</h1>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto 2xl:px-0 xl:px-0 lg:px-0 md:px-0 xs:px-3 px-3 flex flex-col lg:flex-row gap-5 md:gap-10 py-5 md:py-10 lg:py-20">
      <div className="flex flex-col space-y-3 md:space-y-6 lg:space-y-10 w-full md:w-full lg:w-1/6">
        <div className="flex 2xl:flex-col xl:flex-col lg:flex-col flex-row 2xl:space-y-2 xl:space-y-2 lg:space-y-2 space-y-0 gap-5">
          <div className="p-4 md:p-6 bg-white rounded-lg w-16 md:w-fit h-16 md:h-fit">
            <img src={logo} alt="" className="object-center w-full h-full" />
          </div>
          <p className="text-base md:text-2xl font-bold">
            <span className="text-white">Delixi</span> <br className="lg:hidden" /> Electric
          </p>
        </div>
        <p className="text-xs md:text-sm text-white">
          Thank you for the fastest service ever, I liked how everything in the <br />
          house was ready on time in the house was ready on time.
        </p>
      </div>
      <div className="flex border-t-2 lg:border-l-2 border-white p-0 py-2 md:p-20 justify-between w-full lg:w-5/6">
        <div className="flex flex-col space-y-5 md:space-y-10">
          <h1 className="text-base md:text-xl font-semibold">
            Mahsulotlar
          </h1>
          <div className="flex flex-col cursor-pointer">
            {comunity.map((item) => (
              <div
                className="flex gap-2 md:gap-3 items-center justify-start pt-2 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs uppercase"
                key={item.name}
              >
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-5 md:space-y-10">
          <h1 className="text-base md:text-xl font-semibold">
            Foydali Linklar
          </h1>
          <div className="flex flex-col cursor-pointer">
            {navLinks.map((item) => (
              <div
                className="flex gap-2 md:gap-3 items-center justify-start pt-2 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs uppercase"
                key={item.title}
              >
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-5 md:space-y-10">
          <h1 className="text-base md:text-xl font-semibold">
            Aloqa
          </h1>
          <div className="flex flex-col cursor-pointer">
            {contacts.map((item) => (
              <div
                className="flex gap-2 md:gap-3 items-center justify-start pt-2 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs"
                key={item.name}
              >
                <p className="text-lg">{item.icon}</p>
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
