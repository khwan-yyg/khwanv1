import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <i
        className="change-theme"
        id="theme-button"
        onClick={() => setIsClicked(!isClicked) || toggleTheme()}
      >
        {isClicked ? <i className="bx bx-sun" /> : <i className="bx bx-moon" />}
      </i>
    </div>
  );
};

export default DarkMode;
