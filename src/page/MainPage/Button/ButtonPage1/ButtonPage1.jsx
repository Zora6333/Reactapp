import React from "react";
import "../ButtonPage1/ButtonPage1.css";

const ButtonPage1 = () => {
  const scrollToSection = () => {
    const element = document.getElementById("your-section-id");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="ButtonPage_1">
        <button onClick={scrollToSection}>Смотреть услуги</button>
      </div>
    </>
  );
};

export default ButtonPage1;
