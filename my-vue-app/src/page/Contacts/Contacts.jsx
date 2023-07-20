import React from "react";
import "../Contacts/Contacts.css";

const Contacts = () => {
  return (
    <>
    <ul className="wrapper">
      <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <span><i className="fab fa-facebook-f"><img src="./src\page\Contacts\img\free-icon-facebook-4494475.png" alt="" /></i></span>
      </li>
      <li className="icon twitter">
        <span className="tooltip">Twitter</span>
        <span><i className="fab fa-twitter"><img src="./src\page\Contacts\img\free-icon-twitter-4401446.png" alt="" /></i></span>
      </li>
      <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <span><i className="fab fa-instagram"><img src="./src\page\Contacts\img\free-icon-instagram-3955024.png" alt="" /></i></span>
      </li>
      <li className="icon youtube">
        <span className="tooltip">Youtube</span>
        <span><i className="fab fa-youtube"><img src="./src\page\Contacts\img\free-icon-youtube-4494485.png" alt="" /></i></span>
      </li>
    </ul>
    </>
  );
};

export default Contacts;
