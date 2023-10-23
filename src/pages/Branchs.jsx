import React from "react";
import { useTranslation } from "react-i18next";

const Branchs = () => {
  const { t } = useTranslation();


  return (
    <div>
      <div>
        <h1>{t("greeting")}</h1>
        <p>{t("welcome")}</p>
      </div>
    </div>
  );
};

export default Branchs;
