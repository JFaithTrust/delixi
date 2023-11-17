import React from "react";
import Statistics from "./Statistics";
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const AboutStatistics = () => {
  const { t } = useTranslation();
  return (
    <div className="px-10 flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col items-center">
        <motion.h1 variants={textVariant()} className="font-bold text-2xl text-center">{t("hstatistics")}</motion.h1>
        <hr className="w-24 h-1 mx-auto my-2 bg-red-600 border-0 rounded md:my-4" />
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quibusdam magnam ex maxime, autem nobis sint, atque dolor sunt quos{" "}
          <br className="2xl:block xl:block lg:block md:block sm:block hidden" />
          ipsum deleniti blanditiis aspernatur iusto aliquid eum deserunt et.
          Totam?
        </motion.p>
      </div>
      <Statistics />
    </div>
  );
};

export default SectionWrapper(AboutStatistics, "aboutStatistics");
