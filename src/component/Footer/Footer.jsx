import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Navigechion">
          <p>ИП Колодезников-Матчитов Н.И. 
            <br/>ИНН 143515646663</p>
            <nav>
              <ul>
                <li>Мастер-классы</li>
                <li>Мебель на заказ</li>
                <li>Контакты</li>
                <li>О нас</li>
                <li>Политика кофиденциальности</li>
                <li>Договор оферты</li>
              <div className="Icons">
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
              </ul>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
