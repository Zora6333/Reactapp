import React from "react";
import "../Main/Main.css";

const Main = () => {
  return (
    <>
      <div className="Main">
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
            <div className="ButtonPage_1">
              <button>Смотреть услуги</button>
            </div>
            <div className="IconsPage_1">
              <a>
                <img src="./src/component/Img/Page 1/Group 12.jpg" />
              </a>
              <a>
                <img src="./src/component/Img/Page 1/Group 4.jpg" />
              </a>
              <a>
                <img src="./src/component/Img/Page 1/Group 3.jpg" />
              </a>
            </div>
          </div>
        </div>
        <div className="Page_2">
          <h1>NIKASON BRAND это</h1>
          <div className="ContentPage_2">
            <div className="UlPage_2">
              <ul>
                <li>Производство авторской мебели из массива</li>
                <li>Реставрация, редизайн, ремонт деревянной мебели</li>
                <li>Производство мебели по индивидуальным размерам</li>
              </ul>
            </div>
            <div className="AssortmentPage_2">
              <h1>Более 10 лет мы производим</h1>
              <table className="TablePage_2">
                <tbody>
                  <tr>
                    <td>
                      <img src="./src/component/Img/Page 2/door-2 1.jpg" />
                      Двери
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/closet 1.jpg" />
                      Шкафы
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/chair-2 1.jpg" />
                      Столы и стулья
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/drawers 1.jpg" />
                      Комоды
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="./src/component/Img/Page 2/drawer 1.jpg" />
                      Тумбы
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/gate 1.jpg" />
                      Арки
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/room-divider 1.jpg" />
                      Перегородки
                    </td>
                    <td>
                      <img src="./src/component/Img/Page 2/bed 1.jpg" />
                      Кровати
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
                  <br/>
                  <br/>Никита - мастер по дереву, вся мебель
                  делается его умелыми руками.
                </p>
                <div className="ButtonPage_2">
                  <button className="More about us">Подробнее о нас</button>
                </div>
              </div>
            </div>

            <div className="AboutUs_2">
            <h2>Посмотрите видео о нас</h2>
            <div className="VideoAboutUs_2">
              
            </div>
            </div>
          </div>
        </div>
        <div className="Page_4"></div>
        <div className="Page_5"></div>
      </div>
    </>
  );
};

export default Main;
