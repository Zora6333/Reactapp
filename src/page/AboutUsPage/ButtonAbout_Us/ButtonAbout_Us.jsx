import React, { useState } from "react";
import "../ButtonAbout_Us/ButtonAbout_Us.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modalAboutUs">
      <button    className="ClossModal" onClick={onClose}>
        Закрыть
      </button>
      <input type="text" placeholder="Имя" />
      <input type="text" placeholder="Фамилия" />
      <input type="text" placeholder="Номер для связи" />
      <button onClick={ButtonSend}
      class="glowing-btn">
        <span class="glowing-txt">
          C<span class="faulty-letter">L</span>ICK
        </span>
      </button>
    </div>
  );
};

const ButtonSend = () => {
   
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
      <div className="ButtonCustomfur">
        <button onClick={handleButtonClick}>Оставить заявку</button>
      </div>

      {modalVisible && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default ButtonAbout_Us;