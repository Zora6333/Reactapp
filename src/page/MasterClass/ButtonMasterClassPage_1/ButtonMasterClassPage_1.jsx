import React from "react";
import "../ButtonMasterClassPage_1/ButtonMasterClassPage_1.css";

const ButtonMasterClassPage_1 = () => {
  function scrollToElement() {
    const element = document.getElementById("MasterClassPage_3Scroll");
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="ButtonMasterClassPage_1">
        <button onClick={scrollToElement}>Смотреть мастер-классы</button>
      </div>
    </>
  );
};

export default ButtonMasterClassPage_1;
