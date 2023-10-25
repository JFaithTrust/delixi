import React from "react";
import { about } from "../assets";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutComp = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col 2xl:h-[900px] xl:h-[900px] lg:h-[900px] md:h-[900px] sm:h-[800px] h-fit pt-20 pb-0 w-full">
      <div className="flex flex-col items-center 2xl:h-[20vh] xl:h-[20vh] lg:h-[20vh] md:h-[20vh] sm:h-[20vh] h-fit">
        <h1 className="font-bold text-2xl">{t("navbar.about_us")}</h1>
        <hr className="w-24 h-1 mx-auto my-2 bg-red-600 border-0 rounded md:my-4" />
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          atque quidem, dicta enim eveniet iste culpa, blanditiis iusto et, cum
          explicabo quibusdam fugit eligendi ipsa sunt dolorem. Animi dolorem
          fugit ipsum asperiores dolorum. Enim eligendi hic iusto labore rerum
          tempora illo dolore animi nulla ipsam. Quidem odit reiciendis
          doloremque culpa?
        </p>
      </div>
      <div className="w-full mt-10">
        <div className="relative 2xl:h-[70vh] xl:h-[70vh] lg:h-[65vh] md:h-[58vh] sm:h-[55vh] h-[28vh] flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 gap-5">
          <div className="absolute 2xl:flex xl:flex lg:flex md:flex sm:flex hidden flex-col p-8 2xl:w-[350px] xl:w-[350px] lg:w-[330px] md:w-[300px] sm:w-[300px] w-full bg-blue-400/80 rounded-md space-y-2 top-0 left-0">
            <h1 className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-lg">
              Free Demo Version
            </h1>
            <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-xs text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              dolores aut tempore modi vel perferendis incidunt beatae mollitia
              sapiente unde?
            </p>
          </div>
          <div className="2xl:w-[50vw] xl:w-[50vw] lg:w-[50vw] md:w-[50vw] sm:w-[50vw] xs:w-[65vw] w-[80vw] 2xl:h-[60vh] ">
            <img src={about} alt="about" />
          </div>
          <div className="absolute 2xl:flex xl:flex lg:flex md:flex sm:flex hidden flex-col p-8 2xl:w-[350px] xl:w-[350px] lg:w-[330px] md:w-[300px] sm:w-[300px] w-[300px] bg-red-400/80 rounded-md space-y-2 bottom-0 right-0">
            <h1 className="2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-lg">
              Usefull to find customers
            </h1>
            <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-xs text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              dolores aut tempore modi vel perferendis incidunt beatae mollitia
              sapiente unde?
            </p>
          </div>
          <div className="2xl:absolute xl:absolute lg:absolute md:absolute sm:absolute relative bottom-0 left-0">
            <Link to={"/about-us"}>
              <button className="py-2 px-4 bg-red-600 text-white rounded-md">
                Batafsil
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
