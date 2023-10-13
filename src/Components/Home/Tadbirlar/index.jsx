import React from "react";
import "./style.css";
import Botcommerce from "../../../assets/images/botcommerce.jpg";
import ChatGpt from "../../../assets/images/chatgpt.jpg";
import XalqaroTashkilot from "../../../assets/images/xalqaro.jpg";

const Tadbirlar = () => {
  return (
    <section className="imkoniyat-section">
      <div className="container">
        <div className="imkoniyat-underline">
          <h2 className="imkoniyat-title">TADBIRLAR</h2>
        </div>
        <ul className="imkoniyat-list">
          <li className="imkoniyat-item">
            <img
              className="imkoniyat-img"
              src={Botcommerce}
              alt="bunch of ppl are staring to camera"
              width={"220px"}
              height={"220px"}
            />
            <h3 className="imkoniyat-subtitle">
              BOTCOMMERCE — BIZNES UCHUN IJTIMOIY TIJORAT
            </h3>
            <p className="imkoniyat-text">
              “Startup Story” rukni doirasida obunachilarimizni IT Park
              akseleratsiya va inkubatsiya dasturlarida ishtirok etgan loyihalar
              bilan tanishtirishda davom etamiz.
            </p>
            <button className="imkoniyat-btn">BATAFSIL</button>
          </li>
          <li className="imkoniyat-item">
            <img
              className="imkoniyat-img"
              src={ChatGpt}
              alt="bunch of ppl are staring to camera"
              width={"220px"}
              height={"220px"}
            />
            <h3 className="imkoniyat-subtitle">
              CHATGPT YORDAMIDA KITOB YOZISH
            </h3>
            <p className="imkoniyat-text">
              Texnologiya sohasi bir joyda to‘xtab turgani yo‘q. Taraqqiyot
              shiddat bilan olg‘a siljir ekan, bugungi kunda inson sun’iy
              intellekt yordamida yangidan-yangi narsalarni ixtiro qilishi ajab
              emas.
            </p>
            <button className="imkoniyat-btn">BATAFSIL</button>
          </li>
          <li className="imkoniyat-item">
            <img
              className="imkoniyat-img"
              src={XalqaroTashkilot}
              alt="bunch of ppl are staring to camera"
              width={"220px"}
              height={"220px"}
            />
            <h3 className="imkoniyat-subtitle">
              XALQARO TASHKILOTLARDA ISHLASHNI XOHLAYSIZMI?
            </h3>
            <p className="imkoniyat-text">
              1-iyuldan Germaniyaning SAP o’quv kursining ikkinchi oqimi
              boshlanadi. Darslar va gibrid formatda (onlayn va oflayn)
              o‘tkaziladi va 4 oy davom etadi.
            </p>
            <button className="imkoniyat-btn">BATAFSIL</button>
          </li>
        </ul>
        <button className="imkoniyat-add-btn">KO'PROQ YUKLASH</button>
      </div>
    </section>
  );
};

export default Tadbirlar;
