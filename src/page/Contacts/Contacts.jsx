import React from "react";
import "../Contacts/Contacts.css";

const Contacts = () => {
  return (
    <>
      <div className="Contacts">
        <a href="https://api.whatsapp.com/send?phone=79679272227"><img src="./src/component/Img/Page 1/Group 3.jpg" id="ICONCONTACT"/></a>
        <a href="https://www.instagram.com/mebel_ot_nikason/"><img src="./src/component/Img/Page 1/Group 4.jpg" id="ICONCONTACT"/></a>
        <a href="https://t.me/NIKASON_BRAND"><img src="./src/component/Img/Page 1/Group 12.jpg" id="ICONCONTACT"/></a>
        <a href="tel:+79001111111"><img src="./src/page/Contacts/free-icon-phone-call-5585856.png" id="ICONCONTACT"/></a>
      </div>
    </>
  );
};

export default Contacts;
