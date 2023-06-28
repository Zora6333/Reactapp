import React, { useState } from "react";
import "../ButtonAbout_Us/ButtonAbout_Us.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modalAboutUs">
      <button className="ClossModal" onClick={onClose}>Закрыть</button>
      <input type="text" placeholder="Имя"/>
      <input type="text" placeholder="Фамилия"/>
      <input type="text" placeholder="Номер для связи"/>
    </div>
  );
};

const ButtonAbout_Us = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="ButtonAbout_Us">
        <button onClick={handleButtonClick}>Оставить заявку</button>
      </div>

      {modalVisible && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default ButtonAbout_Us