import React from "react";
import "./Home.css";
import PerfilImg from "../../assets/perfil.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={PerfilImg} alt="" className="home__img" />
          <h1 className="home__title">
            <b>{t("name")}</b>
          </h1>
          <h3 className="home__profession">Junior Software Engineer</h3>
        </div>

        <div className="home__address bd-grid">
          <span className="home__information">
            <i className="bx bx-map home__icon"></i>
            <a
              href="https://maps.app.goo.gl/b7iTUSocevoFTq8x9"
              className="alink"
              target="_blank"
              title="Google map"
            >
              {t("home.address")}
            </a>
          </span>

          <span className="home__information">
            <i className="bx bx-envelope home__icon"></i>
            <a
              href="mailto:khwan_yyg@outlook.com"
              className="alink"
              target="_blank"
              title="Email"
            >
              khwan_yyg@outlook.com
            </a>
          </span>

          <span className="home__information">
            <i className="bx bx-phone home__icon"></i>
            <a
              href="tel:+66930460716"
              className="alink"
              target="_blank"
              title="Telephone"
            >
              093 046 0716
            </a>
          </span>

          <span className="home__information">
            <i className="bx bxl-github home__icon"></i>
            <a
              href="https://github.com/khwan-yyg"
              className="alink"
              target="_blank"
              title="GitHub"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
