import React from "react";
import "./Certif.css";
import { useTranslation } from "react-i18next";

const Certif = () => {
  const { t } = useTranslation();

  return (
    <section className="certificate section" id="certificates">
      <h2 className="section-title">
        <i className="bx bx-award"></i>
        {t("certificates.section-title")}
      </h2>
      <h3 className="section-title-2 ">
        - {t("certificates.section-title2")} -
      </h3>

      <div className="certificate__container bd-grid">
        <div className="certificate__content">
          <a
            href="https://tpqi-net.tpqi.go.th/cer/print/MTMwNjU5"
            target="_blank"
            title="TPQI Certificate"
          >
            <h3 className="certificate__title alink">
              {t("certificates.des")} <i className="bx bx-link-external"></i>
            </h3>
          </a>
          <p className="certificate__description">
            {t("certificates.line1")}
            <br />
            {t("certificates.line2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certif;
