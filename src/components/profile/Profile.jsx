import React from "react";
import "./Profile.css";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <section className="profile section">
      <h2 className="section-title">{t("profile.section-title")}</h2>
      <h3 className="section-title-2 ">- {t("profile.section-title2")} -</h3>

      <p className="profile__description">{t("profile.des")}</p>
    </section>
  );
};

export default Profile;
