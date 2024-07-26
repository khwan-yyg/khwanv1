import React from "react";
import "./Experience.css";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">
        <i className="bx bx-briefcase-alt"></i>
        {t("experience.section-title")}
      </h2>
      <h3 className="section-title-2 ">- {t("experience.section-title2")} -</h3>

      <div className="experience__container bd-grid">
        <div className="experience__content">
          <div className="experience__time">
            <span className="experience__rounder"></span>
            <span className="experience__line"></span>
          </div>

          <div className="experience__data bd-grid">
            <h3 className="experience__title">{t("experience.job1.des")}</h3>
            <span className="experience__company">
              {t("experience.job1.subdes")}
            </span>
            <p className="experience__description">
              - {t("experience.job1.line1")}
              <br />- {t("experience.job1.line2")} <br />-{" "}
              {t("experience.job1.line3")}
            </p>
          </div>
        </div>

        <div className="experience__content">
          <div className="experience__time">
            <span className="experience__rounder"></span>
          </div>

          <div className="experience__data bd-grid">
            <h3 className="experience__title">{t("experience.job2.des")}</h3>
            <span className="experience__company">
              {t("experience.job2.subdes")}
            </span>
            <p className="experience__description">
              - {t("experience.job2.line1")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
