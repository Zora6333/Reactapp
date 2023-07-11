import React from "react";
import ButtonCustomfur from "./ButtonCustomfur/ButtonCustomfur";
import FotoSlide from "./FotoSlide/FotoSlide";
import "../Customfurniture/Customfurniture.css";

const Customfurniture = () => {
  return (
    <>
      <div className="Customfurniture ">
        <div className="CustomfurniturePage_1">
          <p>Воплотим вашу любую задумку в реальность</p>
          <h1>Столярная мастерская </h1>
          <h1>NIKASON BRAND</h1>
          <ButtonCustomfur />
        </div>
        <div className="CustomfurniturePage_2">
          <h1>Почему выбирают нас</h1>
          <div className="advantages">
            <div className="advantages_1">
              <h3>Давно на рынке</h3>
              <div className="SolidFur"></div>
              <p>Опыт работы на рынке больше 10 лет</p>
            </div>
            <div className="advantages_2">
              <h3>Гарантия качества</h3>
              <div className="SolidFur"></div>
              <p>Предоставляем гарантию 12 месяцев на изделия </p>
            </div>
            <div className="advantages_3">
              <h3>Юридическая прозрачность</h3>
              <div className="SolidFur"></div>
              <p>Заключаем с каждым клиентом договор</p>
            </div>
            <div className="advantages_4">
              <h3>Экологичность</h3>
              <div className="SolidFur"></div>
              <p>
                Мебель из натуральной древесины, краски без токсичного состава
              </p>
            </div>
            <div className="advantages_5">
              <h3>Эксклюзивность</h3>
              <div className="SolidFur"></div>
              <p>Каждая мебель изготовлена по индивидуальному дизайну </p>
            </div>
            <div className="advantages_6">
              <h3>Долговечность</h3>
              <div className="SolidFur"></div>
              <p>Мебель из массива дерева прослужит даже вашим детям</p>
            </div>
          </div>
        </div>
        <div className="CustomfurniturePage_3">
          <h1>Портфолио</h1>
          <FotoSlide />
        </div>
        <div className="CustomfurniturePage_4">
          <h1>Этапы производства</h1>
          <div className="Table_CustomfurniturePage_4">
            <table>
              <tr>
                <td>
                  <h2>1</h2>
                  <br />
                  <p>Встреча с клиентом</p>
                </td>
                <td>
                  <h2>2</h2>
                  <br />
                  <p>Подписание договора, внесение предоплаты</p>
                </td>
                <td>
                  <h2>3</h2>
                  <br />
                  <p>Выезд к клиенту на замер (при необходимости)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h2>4</h2>
                  <br />
                  <p>Составление проекта</p>
                </td>
                <td>
                  <h2>5</h2>
                  <br />
                  <p>Изготовление и согласование всех стадий с клиентом</p>
                </td>
                <td>
                  <h2>6</h2>
                  <br />
                  <p>Доставка и монтаж изделия (при необходимости)</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="CustomfurniturePage_5"></div>
        <div className="CustomfurniturePage_6"></div>
      </div>
    </>
  );
};

export default Customfurniture;
