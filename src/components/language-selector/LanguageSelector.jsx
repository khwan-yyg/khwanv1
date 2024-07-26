import "./LanguageSelector.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "th", lang: "Thai" },
    { code: "en", lang: "English" },
  ];

  const [language, setLanguage] = useState("id");

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div className="select-dropdown">
        <select onChange={handleLangChange} value={language}>
          {languages.map((lng, index) => {
            return (
              <option value={lng.code} key={index}>
                {lng.lang}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
