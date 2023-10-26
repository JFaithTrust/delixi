import React from "react";
import { useTranslation } from "react-i18next";

const Branchs = () => {
  const { t } = useTranslation();

  return (
    <div className="top-[78px] relative">
      <div>
        <h1>{t("greeting")}</h1>
        <p>{t("welcome")}</p>
        {/* AIzaSyAcfsk4C5rdqDe-TAtNFEQjcC6Vsak-zu4 */}
      </div>
    </div>
  );
};

export default Branchs;
