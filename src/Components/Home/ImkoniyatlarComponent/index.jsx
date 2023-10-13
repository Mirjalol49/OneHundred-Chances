import React from "react";
import "./style.css";
import XalqaroSer from "../../../assets/images/xalqaroSertifikat.jpg";
import C1 from "../../../assets/images/c1.jpg";
import YoshlarAgent from "../../../assets/images/yoshlarAgentligi.jpg";

const ImkoniyatlarComponent = () => {
  return (
    <section className="imkoniyat-section">
      <div className="container">
        <div className="imkoniyat-underline">
          <h2 className="imkoniyat-title">IMKONIYATLAR</h2>
        </div>
        <ul className="imkoniyat-list">
          <li className="imkoniyat-item">
            <img
              className="imkoniyat-img"
              src={XalqaroSer}
              alt="bunch of ppl are staring to camera"
              width={"220px"}
              height={"220px"}
            />
            <h3 className="imkoniyat-subtitle">
              XALQARO IT SERTIFIKATI UCHUN KOMPENSATSIYA
            </h3>
            <p className="imkoniyat-text">
              14 yoshdan 30 yoshgacha bo‘lgan fuqarolar my.gov.uz orqali ariza
              topshirib, xalqaro IT sertifikat yoki o‘qishga sarflangan
              harajatlarning 50%ni qoplatib olishlari mumkin.
            </p>
            <button className="imkoniyat-btn">BATAFSIL</button>
          </li>
          <li className="imkoniyat-item">
            <img
              className="imkoniyat-img"
              src={C1}
              alt="bunch of ppl are staring to camera"
              width={"220px"}
              height={"220px"}
            />
            <h3 className="imkoniyat-subtitle">
              C1 SERTIFIKATI UCHUN KOMPENTSATSIYA
            </h3>
            <p className="imkoniyat-text">
              Xorijiy til bilish bo‘yicha C1 daraja xalqaro sertifikatini olgan
              yoshlarga ariza topshirish orqali ariza 100% harajati qoplab
              beriladi,50%ni qoplatib olishlari mumkin.
            </p>
            <button className="imkoniyat-btn">BATAFSIL</button>
          </li>
          <li className="imkoniyat-item">
            <img
              className="imkoniyat-img"
              src={YoshlarAgent}
              alt="bunch of ppl are staring to camera"
              width={"220px"}
              height={"220px"}
            />
            <h3 className="imkoniyat-subtitle">
              YOSHLARGA ISTEʼMOL KREDITLARINING FOIZI
            </h3>
            <p className="imkoniyat-text">
              IT-park rezidenti bo‘lgan tashkilotlarning axborot texnologiyalari
              sohasidagi o‘quv kurslarida tahsil olayotgan ishtirokchi
              sertifikatini olgan yoki ushbu o‘quv kurslarini so‘nggi 6 oyda.
            </p>
            <button className="imkoniyat-btn">BATAFSIL</button>
          </li>
        </ul>
        <button className="imkoniyat-add-btn">KO'PROQ YUKLASH</button>
      </div>
    </section>
  );
};

export default ImkoniyatlarComponent;
