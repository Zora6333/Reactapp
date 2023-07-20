import React from "react";
import { Link } from 'react-router-dom';
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
              <Link  id="LINK" to='/MasterClass' className="LiFooter">Мастер-классы</Link>
              <Link id="LINK" to='/Contacts'>Контакты</Link>
              <Link  id="LINK" to='/Politics' className="LiFooter">Политика кофиденциальности</Link>
              <Link id="LINK" to='/Customfur'>Мебель на заказ</Link>
              <Link id="LINK" to="/AboutUs">О нас</Link>
              <Link id="LINK" className="LiFooter">Договор оферты</Link>
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
