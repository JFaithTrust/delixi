import React from "react";
import { About, Catalog, Comunity, News, Slider, Statistics } from "../components";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Slider />
      </div>
      <div className="container mx-auto px-20">
        <About />
      </div>
      <div className="container mx-auto px-20">
        <Comunity />
      </div>
      <div className="bg-red-100 px-20 my-10">
        <Catalog />
      </div>
      <div className="px-20">
        <div className="flex flex-col justify-center items-center">
           <div className="h-[280px] relative">
              <div className="p-20 text-5xl font-bold text-center bg-red-600 rounded-lg text-white">Bizning Mahsulotlarimiz va Xizmatlarimiz <br /> Foydalanish Uchun Juda Qulay</div>
              <div className="absolute bottom-0 py-2 px-4 rounded-md inset-x-[28rem] bg-red-600 cursor-pointer text-white shadow-[0_0_50px_0] shadow-[#3478C8]">Ko’proq malumot olish</div>
           </div>
           <div><Statistics /></div>
        </div>
      </div>
      <div className="bg-red-100 px-20 my-10 py-20">
        <News />
      </div>
    </div>
  );
};

export default Home;
