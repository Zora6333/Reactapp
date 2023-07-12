import React, { useState } from "react";
import img1 from "./img/Page_3/IMG_5597 1.jpg";
import img2 from "./img/Page_3/IMG_5604 1.jpg";
import img3 from "./img/Page_3/IMG_5605 1.jpg";
import img4 from "./img/Page_3/IMG_5624 1.jpg";
import ButtonAbout_Us from "./ButtonAbout_Us/ButtonAbout_Us";
import "./AboutUs.css";

const AboutUsPage = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  function enlargeImage(imgSrc) {
    setEnlargedImage(imgSrc);
  }

  function closeEnlargedImage() {
    setEnlargedImage(null);
  }
  return (
    <>
    <hr/>
      <div className="AboutUsPage">
        <div className="HistoryPage">
          <h1 className="FirstText">История создания мастерской</h1>
          <h1 className="SecondText">NIKASON BRAND</h1>
          <img
            className="FotoPerson"
            src="./src/page/AboutUsPage/img/Page_1/Rectangle 83.jpg"
          />
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
        <div className="MasterPage">
          <img src="./src/page/AboutUsPage/img/Page_2/IMG_4420 1.jpg" />
          <div className="TextPage_2">
            <h2>Никита Колодезников-Матчитов</h2>
            <p>Основатель мастерской</p>
            <p>
              С детства я был окружен творческими людьми, мой дедушка был
              строителем и мастером по дереву. Спустя много лет и мне передалась
              его любовь к дереву - в свободное время мастерил для себя
              небольшие изделия из древесины.
              <br />
              <br />
              Более десяти лет назад построил двухэтажный гараж, на втором этаже
              расположилась наша мастерская. Начинал производство практически “с
              нуля”, с каждой зарплаты понемногу откладывал на покупку
              инстурментов и станков.
              <br />
              <br />
              Постепенно начали появляться первые заказы. Несколько лет назад мы
              с супругой решили еще заняться ремонтом и реставрацией мебели. Эту
              идею предложили сами клиенты, поскольку периодически приходили с
              таким запросом. В основном, реставрацией занимается супруга
              Саргылана. Мы с ней одна сплоченная, дружная и отличная команда.{" "}
            </p>
          </div>
        </div>
        <div className="PhilosophyPage">
          <h1>Философия мастерской NIKASON</h1>
          <p className="FirstPPhilosophy">
            Создавать что-то по-настоящему ценное и уникальное.
            <br />
            Дарить радость и уют в каждый дом
          </p>
          <div>
            <h1>СМИ о нас</h1>
            <p>О нашей мастерской пишут многие издания Якутии</p>
            <div className="ImgNews">
              <img src={img1} onClick={() => enlargeImage(img1)} />
              <img src={img2} onClick={() => enlargeImage(img2)} />
              <img src={img3} onClick={() => enlargeImage(img3)} />
              <img src={img4} onClick={() => enlargeImage(img4)} />

              {enlargedImage && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 9999,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                  onClick={closeEnlargedImage}
                >
                  <img
                    src={enlargedImage}
                    alt="Enlarged Image"
                    style={{ minWidth: "50%", minHeight: "50%", zIndex: 99999 }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="ConnectionPage">
          <h1>Оставьте заявку и мы с вами свяжемся</h1>
          <ButtonAbout_Us />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
