import React from "react";
import ButtonMasterClassPage_1 from "./ButtonMasterClassPage_1/ButtonMasterClassPage_1";
import "../MasterClass/MasterClass.css";

const MasterClass = () => {
  return (
    <>
      <div className="MasterClassPage_1">
        <h1>Нам доверяют мебель с историей в 120 лет</h1>
        <ButtonMasterClassPage_1 />
      </div>
      <div className="MasterClassPage_2">
        <h1>Наши работы</h1>
        <div className="OurWorks">
          <div>
            <img src="./src\page\MasterClass\img\Rectangle 53.jpg" alt="" />
            <p>До</p>
          </div>
          <div>
            <img src="./src\page\MasterClass\img\Rectangle 54.jpg" alt="" />
            <p>После</p>
          </div>
          <div>
            <img src="./src\page\MasterClass\img\Rectangle 55.jpg" alt="" />
            <p>До</p>
          </div>
          <div>
            <img src="./src\page\MasterClass\img\Rectangle 56.jpg" alt="" />
            <p>После</p>
          </div>
          <div>
            <img src="./src\page\MasterClass\img\Rectangle 57.jpg" alt="" />
            <p>До</p>
          </div>
          <div>
            <img src="./src\page\MasterClass\img\Rectangle 58.jpg" alt="" />
            <p>После</p>
          </div>
          <div>
            <img src="./src\page\MasterClass\img\Rectangle 59.jpg" alt="" />
            <p>До</p>
          </div>
          <div>
            <img src="./src\page\MasterClass\img\Rectangle 60.jpg" alt="" />
            <p>После</p>
          </div>
        </div>
        <div className="Button_Seemoreexamples">
          <button className="Seemoreexamples">Смотреть больше примеров</button>
        </div>
      </div>
      <div id="MasterClassPage_3Scroll" className="MasterClassPage_3">
        <h1>Какие техники изучите на МК</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src="./src\page\MasterClass\img\Ellipse 7 (1).jpg"
                  alt=""
                />
              </td>
              <td>Снятие старой краски</td>
            </tr>
            <tr>
              <td>
                <img
                  src="./src\page\MasterClass\img\Ellipse 7 (1).jpg"
                  alt=""
                />
              </td>
              <td>Устранение царапин и мелких дефектов</td>
            </tr>
            <tr>
              <td>
                <img
                  src="./src\page\MasterClass\img\Ellipse 7 (1).jpg"
                  alt=""
                />
              </td>
              <td>Ремонт маленьких и больших сколов</td>
            </tr>
            <tr>
              <td>
                <img
                  src="./src\page\MasterClass\img\Ellipse 7 (1).jpg"
                  alt=""
                />
              </td>
              <td>Ремонт поломанной и расклеившейся мебели</td>
            </tr>
            <tr>
              <td>
                <img
                  src="./src\page\MasterClass\img\Ellipse 7 (1).jpg"
                  alt=""
                />
              </td>
              <td>Замена старых поврежденных деталей</td>
            </tr>
            <tr>
              <td>
                <img
                  src="./src\page\MasterClass\img\Ellipse 7 (1).jpg"
                  alt=""
                />
              </td>
              <td>Приемы и идеи декора. Улучшение дизайна старой мебели</td>
            </tr>
            <tr>
              <td>
                <img
                  src="./src\page\MasterClass\img\Ellipse 7 (1).jpg"
                  alt=""
                />
              </td>
              <td>Покраска изделия</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="MasterClassPage_4"></div>
      <div className="MasterClassPage_5"></div>
      <div className="MasterClassPage_6"></div>
      <div className="MasterClassPage_7"></div>
    </>
  );
};
export default MasterClass;
