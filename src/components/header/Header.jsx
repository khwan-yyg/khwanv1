import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import DarkMode from "../darkmode/DarkMode";
import LanguageSelector from "../language-selector/LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [lheader, setsNavbar] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setsNavbar(true);
    } else {
      setsNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  const { t } = useTranslation();

  return (
    <header className={lheader ? "lheader scroll-header" : "lheader"}>
      <nav className="nav bd-container" id="header">
        <Link to="home" className="nav__logo">
          {t("fname")}
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="home"
                className="nav__link"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={50}
                offset={-200}
              >
                <i className="bx bx-home"></i>
                <span className="nav__link-tooltip nav__link-tooltip-top">
                  Home
                </span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="certificates"
                className="nav__link"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={50}
                offset={-200}
              >
                <i className="bx bx-award"></i>
                <span className="nav__link-tooltip nav__link-tooltip-top">
                  Certificates
                </span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="experience"
                className="nav__link"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={50}
                offset={-150}
              >
                <i className="bx bx-briefcase-alt"></i>
                <span className="nav__link-tooltip nav__link-tooltip-top">
                  Experience
                </span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="education"
                className="nav__link"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={50}
                offset={-150}
              >
                <i className="bx bx-book"></i>
                <span className="nav__link-tooltip nav__link-tooltip-top">
                  Education
                </span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="skills"
                className="nav__link"
                activeClass="active-link"
                spy={true}
                smooth={true}
                duration={50}
                offset={-300}
              >
                <i className="bx bx-receipt" title="Skills"></i>
                <span className="nav__link-tooltip nav__link-tooltip-top">
                  Skills
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__btn">
          <LanguageSelector />
          <DarkMode />
        </div>
      </nav>
    </header>
  );
};

export default Header;
