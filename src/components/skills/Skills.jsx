import React from "react";
import "./Skills.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">
        <i className="bx bx-receipt"></i>
        {t("skills.section-title")}
      </h2>
      <h3 className=" section-title-2 ">- {t("skills.section-title2")} -</h3>

      <div className=" skills__content bd-grid">
        <ul className="skills__data">
          <li className="skills__name">
            <span className="skills__circle"></span>HTML5
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>CSS
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>JavaScript
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>BootStrap5
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>ReactJS
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Angular10
          </li>
        </ul>

        <ul className="skills__data">
          <li className="skills__name">
            <span className="skills__circle"></span>MongoDB
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>MySQL
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>GitHub
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Postman
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Express
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>NodeJs
          </li>
        </ul>

        <ul className="skills__data">
          <li className="skills__name">
            <span className="skills__circle"></span>Photoshop
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>XD
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Illustrator
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Figma
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Notion
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
