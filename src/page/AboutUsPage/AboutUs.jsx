import React from "react";
import "./AboutUs.css";

const AboutUsPage = () => {
  return (
    <>
    <div className="AboutUsPage">
      <div className="HistoryPage">
        <h1 className="FirstText">История создания мастерской</h1>
        <h1 className="">NIKASON BRAND</h1>
        <img src="./src/page/AboutUsPage/img/Rectangle 83.jpg"/>
        <div className="Statistics">
          <div className="Parameter_1">
            <h1>+10 лет</h1>
            <p>На рынке по производству мебели</p>
          </div>
          <div className="Parameter_2">
            <h1>+1500</h1>
            <p>Изготовлено мебели</p>
          </div>
          <div className="Parameter_3">
            <h1>120 лет</h1>
            <p>Самой старинной мебели для реставрации </p>
          </div>
        </div>
      </div>
      <div className="MasterPage"></div>
      <div className="PhilosophyPage"></div>
      <div className="ConnectionPage"></div>
      </div>
    </>
  );
};

export default AboutUsPage;
