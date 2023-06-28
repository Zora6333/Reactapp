import React from "react";
import "./ButtonPage4_2.css";

const ButtonPage4_2 = () => {
  const scrollToSection = () => {
    window.location.href = "/Customfur";
  };

  return (
    <>
      <div className="Button2Page_4">
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

export default ButtonPage4_2;
