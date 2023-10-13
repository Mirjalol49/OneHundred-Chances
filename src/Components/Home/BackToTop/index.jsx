import React, { useState } from "react";
import "./style.css";
import Top from "../../../assets/icons/top.png";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add a scroll event listener to track when to show the button.
  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <img src={Top} alt="top" width={"40px"} height={"40px"} />
    </button>
  );
};

export default BackToTop;
