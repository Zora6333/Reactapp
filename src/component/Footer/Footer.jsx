import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Navigechion">
          <p>
            ИП Колодезников-Матчитов Н.И.
            <br />
            ИНН 143515646663
          </p>
          <nav className="NavFooter">
            <ul className="UlFooter">
              <li className="LiFooter">Мастер-классы</li>
              <li className="LiFooter">Контакты</li>
              <li className="LiFooter">Политика кофиденциальности</li>
              <li className="LiFooter">Мебель на заказ</li>
              <li className="LiFooter">О нас</li>
              <li className="LiFooter">Договор оферты</li>
            </ul>
          </nav>
          <div className="IconsFooter">
            <a href="https://t.me/NIKASON_BRAND">
              <img src="./src/component/Img/FooterImg/Group 13.jpg" />
            </a>
            <a href="https://www.instagram.com/mebel_ot_nikason/">
              <img src="./src/component/Img/FooterImg/Group 4.jpg" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=79679272227">
              <img src="./src/component/Img/FooterImg/Group 3.jpg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
