import React from "react";
import "./style.css";
const ChancesSec = () => {
  return (
    <section className="chances-section">
      <div className="chances-overlay">
        <div className="container">
          <ul className="chances-list">
            <li className="chances-item">
              <div className="chances-topboxes">
                <div className="chances-one"></div>
                <div className="chances-one"></div>
                <div className="chances-one"></div>
                <div className="chances-one"></div>
              </div>
              <h2 className="chances-title">Yoshlar uchun imkoniyatlar</h2>
              <p className="chances-text">
                Axborot texnologiyalari sohasida O’zbekiston yoshlari uchun
                yaratilgan imkoniyatlar.
              </p>
            </li>
            <li className="chances-item">
              <div className="chances-topboxes">
                <div className="chances-one"></div>
                <div className="chances-one"></div>
                <div className="chances-one"></div>
                <div className="chances-one"></div>
              </div>
              <h2 className="chances-title">Xotin-qizlar uchun imkoniyatlar</h2>
              <p className="chances-text">
                Xotin-qizlarni qo’llab-quvvatlash, ularning jamiyat hayotidagi
                faol ishtirokini ta’milash maqsadida ular uchun AKT sohasida
                imkoniyatlar yaratildi.
              </p>
            </li>
            <li className="chances-item">
              <div className="chances-topboxes">
                <div className="chances-one"></div>
                <div className="chances-one"></div>
                <div className="chances-one"></div>
                <div className="chances-one"></div>
              </div>
              <h2 className="chances-title">Tadbirkorlar uchun imkoniyatlar</h2>
              <p className="chances-text">
                Yoshlarning tadbirkorlik faoliyatini qo‘llab-quvvatlash va
                bandligiga ko‘maklashish uchun yaratilgan imkoniyatlar.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChancesSec;
