import React from "react";
import "./Interests.css";
import { useTranslation } from "react-i18next";

const Interests = () => {
  const { t } = useTranslation();

  return (
    <section className="interests section">
      <h2 className="section-title">{t("interests.section-title")}</h2>
      <h3 className="section-title-2 ">- {t("interests.section-title2")} -</h3>

      <div className="interests__container bd-grid">
        <div className="interests__content">
          <i className="bx bx-headphone interests__icon"></i>
          <span className="interests__name">{t("interests.des1")}</span>
        </div>

        <div className="interests__content">
          <i className="bx bx-joystick interests__icon"></i>
          <span className="interests__name">{t("interests.des2")}</span>
        </div>

        <div className="interests__content">
          <i className="bx bx-book interests__icon"></i>
          <span className="interests__name">{t("interests.des3")}</span>
        </div>

        <div className="interests__content">
          <i className="bx bx-dumbbell interests__icon"></i>
          <span className="interests__name">{t("interests.des4")}</span>
        </div>
      </div>
    </section>
  );
};

export default Interests;
