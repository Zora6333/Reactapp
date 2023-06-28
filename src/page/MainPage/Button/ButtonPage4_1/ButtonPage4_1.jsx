import React from "react";
import "../ButtonPage4_1/ButtonPage4_1.css";

const ButtonPage4_1 = () => {
  const scrollToSection = () => {
    window.location.href = "/Customfur";
  };

  return (
    <>
      <div className="ButtonPage_4">
        <button
          className="Moreaboutus"
          data-scroll="section-2"
          onClick={scrollToSection}
        >
          Смотреть услуги
        </button>
      </div>
    </>
  );
};

export default ButtonPage4_1;
