import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <nav className="NavHeader">
          <ul className="UlHeader">
            <li>Мастер-классы</li>
            <li>Мебель на заказ</li>
            <li><img className="ImgHeader" src="./src/component/Img/HeaderImg/IMG_1024 1.jpg"/></li>
            <li>Контакты</li>
            <li>О нас</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
