import React from "react";
import "./Education.css";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="education section" id="education">
      <h2 className="section-title">
        <i className="bx bx-book"> </i>
        {t("education.section-title")}
      </h2>
      <h3 className="section-title-2 ">- {t("education.section-title2")} -</h3>

      <div className="education__container bd-grid">
        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>

          <div className="education__data bd-grid">
            <h3 className="education__title">{t("education.edu1.title")}</h3>
            <span className="education__studies">
              {t("education.edu1.studies")}
            </span>
            <span className="education__year">{t("education.edu1.year")}</span>
          </div>
        </div>

        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>

          <div className="education__data bd-grid">
            <h3 className="education__title">{t("education.edu2.title")}</h3>
            <span className="education__studies">
              {t("education.edu2.studies")}
            </span>
            <span className="education__year">{t("education.edu2.year")}</span>
          </div>
        </div>

        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
          </div>

          <div className="education__data bd-grid">
            <h3 className="education__title">{t("education.edu3.title")}</h3>
            <span className="education__studies">
              {t("education.edu3.studies")}
            </span>
            <span className="education__year">{t("education.edu3.year")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
