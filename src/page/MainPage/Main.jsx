import React from "react";
import "./Main.css";
import ButtonPage1 from "./Button/ButtonPage1/ButtonPage1";
import ButtonPage3 from "./Button/ButtonPage3/ButtonPage3";
import ButtonPage4_1 from "./Button/ButtonPage4_1/ButtonPage4_1";
import ButtonPage4_2 from "./Button/ButtonPage4_2/ButtonPage4_2";

const MainPage = () => {
  return (
    <>
      <div className="MainPage">
        <div className="SolidPage_1"></div>
        <div className="Page_1">
          <div className="ImgPage_1">
            <img src="./src/component/Img/Page 1/IMG_6431 1.jpg" />
          </div>
          <div className="ContentPage_1">
            <p>Столярная мастерская NIKASON BRAND</p>
            <h1>Изготовление и реставрация мебели</h1>
            <h2>
              Авторская мебель ручной работы, сделанная с душой и трепетом.
            </h2>
            <ButtonPage1 />
            <div className="IconsPage_1">
              <a href="https://t.me/NIKASON_BRAND">
                <img src="./src/component/Img/Page 1/Group 12.jpg" />
              </a>
              <a href="https://www.instagram.com/mebel_ot_nikason/">
                <img src="./src/component/Img/Page 1/Group 4.jpg" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=79679272227">
                <img src="./src/component/Img/Page 1/Group 3.jpg" />
              </a>
            </div>
          </div>
        </div>
        <div className="SolidPage_1"></div>

        <div className="Page_2">
          <h1>NIKASON BRAND это</h1>
          <div className="ContentPage_2">
            <div className="UlPage_2">
              <ul>
                <li>
                  Производство авторской
                  <br />
                  мебели из массива
                  <div className="Solid"></div>
                </li>
                <li>
                  Реставрация, редизайн, ремонт
                  <br />
                  деревянной мебели
                  <div className="Solid"></div>
                </li>
                <li>
                  Производство мебели по
                  <br />
                  индивидуальным размерам
                  <div className="Solid"></div>
                </li>
              </ul>
            </div>
            <div className="AssortmentPage_2">
              <h1>Более 10 лет мы производим</h1>
              <table className="TablePage_2">
                <tbody>
                  <tr>
                    <td>
                      <img src="./src/component/Img/Page 2/door-2 1.jpg" />
                      <p>Двери</p>
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/closet 1.jpg" />
                      <p>Шкафы</p>
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/chair-2 1.jpg" />
                      <p>Столы и стулья</p>
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/drawers 1.jpg" />
                      <p>Комоды</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="./src/component/Img/Page 2/drawer 1.jpg" />
                      <p>Тумбы</p>
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/gate 1.jpg" />
                      <p>Арки</p>
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/room-divider 1.jpg" />
                      <p>Перегородки</p>
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/bed 1.jpg" />
                      <p>Кровати</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="Page_3">
          <h1>NIKASON BRAND это семейная мастеркая</h1>
          <div className="ContentPage_3">
            <div className="AboutUs_1">
              <img src="./src/component/Img/Page 3/Rectangle 55.jpg" />
              <div className="InfoPage_3">
                <h2>Саргылана и Никита Колодезниковы-Матчитовы</h2>
                <p>
                  Саргылана - рестовратор-декоратор, преображает и дарит вторую
                  жизнь старой мебели.
                  <br />
                  <br />
                  Никита - мастер по дереву, вся мебель делается его умелыми
                  руками.
                </p>
                <ButtonPage3 />
              </div>
            </div>
          </div>
        </div>
        <div className="Page_3_AboutUs_2" id="section-2">
          <h2>Посмотрите видео о нас</h2>
          <div className="VideoAboutUs_2" id="section-2">
            <video>
              <source
                id="VideoAboutUs"
                src="./src/component/Img/Page%203/406081364.mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
            </video>
          </div>
        </div>

        <div className="Page_4" id="your-section-id">
          <h1 className="HeadingPage_4">Наши услуги</h1>
          <div className="Contents1Page_4">
            <div className="ImgPage_4">
              <img src="./src/component/Img/Page 4/IMG_5907.jpg" />
            </div>
            <div className="ContentPage_4">
              <h1>Мебель на заказ</h1>
              <h2>
                Мебель под заказ по индивидуальным размерам это гарантия
                отличного качества, долговечность, экологичность и
                эксклюзивность наших изделий. Возможность создания своего
                неповторимого стиля, уникальность и неповторимость каждого
                изделия.
              </h2>
              <ButtonPage4_1 />
            </div>
          </div>
          <div className="Contents2Page_4">
            <div className="Img2Page_4">
              <img src="./src/component/Img/Page 4/IMG_5645.jpg" />
            </div>
            <div className="Content2Page_4">
              <h1>Мастер-классы</h1>
              <h2>
                Что делать, если память о предках хочется сохранить, но к вашему
                интерьеру старая и испорченная мебель не подходит? Правильно,
                отреставрировать его и наслаждаться не только обновлённым видом
                мебели, но и с теплотой помнить, что эта мебель была сделана
                талантливыми предками.
              </h2>
              <ButtonPage4_2 />
            </div>
          </div>
        </div>
        <div className="Page_5">
          <div className="ContentsPage_5">
            <div className="ContentPage_5">
              <h1>Гарантия качества мебели от NIKASON BRAND</h1>
              <h2>
                На каждое изделие ставим авторский логотип (клеймо) как знак
                качества и узнаваемости мастера. Таким образом мастер несёт
                ответственность за каждое изделие помеченное печатью. Есть
                гарантия на 12 месяцев.{" "}
              </h2>
              <div className="ImgPage_5">
                <img src="./src/component/Img/Page 4/IMG_1024 2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
