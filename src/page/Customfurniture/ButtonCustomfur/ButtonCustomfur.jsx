import React ,{ useState }from "react";
import "../ButtonCustomfur/ButtonCustomfur.css";

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
  
  const ButtonCustomfur = () => {
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

export default ButtonCustomfur;
