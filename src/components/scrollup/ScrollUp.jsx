import React, { useEffect, useState } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      {showScrollTopButton && (
        <a href="#" className="scrollup" onClick={scrollTop}>
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      )}
    </div>
  );
};

export default ScrollUp;
