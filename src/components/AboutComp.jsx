import React from "react";
import { about } from "../assets";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutComp = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex flex-col items-center h-[20vh]">
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
        <div className="relative h-[70vh] flex items-center justify-center">
          <div className="absolute flex flex-col p-8 w-[350px] bg-blue-400/80 rounded-md space-y-2 top-0 left-0">
            <h1 className="text-xl">Free Demo Version</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              dolores aut tempore modi vel perferendis incidunt beatae mollitia
              sapiente unde?
            </p>
          </div>
          <div className="w-[50vw] h-[60vh]">
            <img src={about} alt="about" />
          </div>
          <div className="absolute flex flex-col p-8 w-[350px] bg-red-400/80 rounded-md space-y-2 bottom-0 right-0">
            <h1 className="text-xl">Usefull to find customers</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              dolores aut tempore modi vel perferendis incidunt beatae mollitia
              sapiente unde?
            </p>
          </div>
          <div className="absolute bottom-0 left-0">
            <Link to={'/about-us'}>
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
