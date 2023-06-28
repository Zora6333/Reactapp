import React from "react";
import { Link } from 'react-router-dom';
import "../Header/Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <p>made by https://github.com/Zora6333
   <br/>Georgei sevchenko
        </p>
        <nav className="NavHeader">
          <ul className="UlHeader">
            <Link id="LINK">Мастер-классы</Link>
            <Link id="LINK" to='/Customfur'>Мебель на заказ</Link>
            <Link id="LINK" to="/"><img className="ImgHeader" src="./src/component/Img/HeaderImg/IMG_1024 1.jpg"/></Link>
            <Link id="LINK" to='/Contacts'>Контакты</Link>
            <Link id="LINK" to="/AboutUs">О нас</Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
