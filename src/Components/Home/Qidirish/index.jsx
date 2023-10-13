import React from "react";
import "./style.css";
import SearchIcon from "../../../assets/images/search.png";
const Qidirish = () => {
  return (
    <section className="qidirish-section">
      <div className="container">
        <div className="qidirish-input-wrapper">
          <input
            className="qidirish-input"
            placeholder="Qidirish..."
            type="search"
          />
          <div className="qidirish-icon">
            <img
              src={SearchIcon}
              alt="search icon"
              width={"28px"}
              height={"28px"}
            />
          </div>
        </div>
        <ul className="qidirish-list">
          <li className="qidirish-item">SERTIFIKAT</li>
          <li className="qidirish-item">TA'LIM</li>
          <li className="qidirish-item">TADBIRKORLIK</li>
          <li className="qidirish-item">XOTIN-QIZLAR</li>
          <li className="qidirish-item">O'QUV KURSI</li>
          <li className="qidirish-item">YOSHLAR</li>
          <li className="qidirish-item">NOGIRONLIGI BORLAR UCHUN</li>
          <li className="qidirish-item">SUBSIDIYA</li>
        </ul>
      </div>
    </section>
  );
};

export default Qidirish;
