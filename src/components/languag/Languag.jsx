import React from "react";
import "./Languag.css";
import { useTranslation } from "react-i18next";

const Languag = () => {
  const { t } = useTranslation();

  return (
    <section className="languages section">
      <h2 className="section-title">{t("languages.section-title")}</h2>
      <h3 className="section-title-2 ">- {t("languages.section-title2")} -</h3>

      <div className="languages__container">
        <ul className="languages__content bd-grid">
          <li className="languages__name">
            <span className="languages__circle"></span> {t("languages.thai")}
          </li>
          <li className="languages__name">
            <span className="languages__circle"></span>{" "}
            <a
              href="https://www.efset.org/cert/qFjcfY"
              className="alink"
              target="_blank"
              title="EF SET Certificate"
            >
              {t("languages.english")} <i className="bx bx-link-external"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Languag;
