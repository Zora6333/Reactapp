import React from "react";
import "../ButtonPage3/ButtonPage3.css";

const ButtonPage3 = () => {
  const scrollToSection = () => {
    window.location.href = "/AboutUs";
  }; 
  return (
    <>
      <div className="ButtonPage_3">
        <button
          className="Moreaboutus"
          data-scroll="section-2"
          onClick={scrollToSection}
        >
          Подробнее о нас
        </button>
      </div>
    </>
  );
};

export default ButtonPage3;