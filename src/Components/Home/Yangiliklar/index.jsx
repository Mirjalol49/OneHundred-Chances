import React from "react";
import "./style.css";
import Farrux from "../../../assets/images/farrux.jpg";
import Karyera from "../../../assets/images/karyera.jpg";
import ItparkIrlandiya from "../../../assets/images/itparkIrlandiya.jpg";

const Yangiliklar = () => {
  return (
    <section className="imkoniyat-section">
      <div className="container">
        <div className="imkoniyat-underline">
          <h2 className="imkoniyat-title">YANGILIKLAR</h2>
        </div>
        <ul className="imkoniyat-list">
          <li className="imkoniyat-item">
            <img
              className="imkoniyat-img"
              src={Farrux}
              alt="bunch of ppl are staring to camera"
              width={"220px"}
              height={"220px"}
            />
            <h3 className="imkoniyat-subtitle">
              FARRUX XOLMUHAMEDOV ISHTIROKIDAGI "NOLDAN STARTUP" SEMINARI
            </h3>
            <p className="imkoniyat-text">
              Seminarda o’z shaxsiy startapingizni ishga tushirish va amalga
              oshirishning maxfiy strategiyalari va qo’llanmalarini o’rganasiz.
              universitetining 6 hududlardagi filiallarida «Raqamli ta’lim
              sohasida amalga oshirilayotgan Olgan bilimlaringiz President Tech
              Award startap tanloviga ariza topshirishda yordam beradi!
            </p>
            <button className="imkoniyat-btn">BATAFSIL</button>
          </li>
          <li className="imkoniyat-item">
            <img
              className="imkoniyat-img"
              src={Karyera}
              alt="bunch of ppl are staring to camera"
              width={"220px"}
              height={"220px"}
            />
            <h3 className="imkoniyat-subtitle">
              "KARYERA KUNLARI" KO'RGAZMASIDA 1000 DAN ORTIQ TALABA
            </h3>
            <p className="imkoniyat-text">
              Raqamli texnologiyalar vazirligi, TATU Karyera markazi va IT Park
              bilan birgalikda 10-maydan 2-iyunga qadar Toshkent axborot
              texnologiyalari universitetining 6 ta hududlardagi filiallarida
              «Raqamli ta’lim sohasida amalga oshirilayotgan islohotlar»
              mavzusida «Karyera kuni» ko‘rgazmasi va seminar-treninglari
              tashkil etildi.
            </p>
            <button className="imkoniyat-btn">BATAFSIL</button>
          </li>
          <li className="imkoniyat-item">
            <img
              className="imkoniyat-img"
              src={ItparkIrlandiya}
              alt="bunch of ppl are staring to camera"
              width={"220px"}
              height={"220px"}
            />
            <h3 className="imkoniyat-subtitle">
              IT PARK IRLANDIYANING DUBLIN SHAHRIGA TASHRIF BUYUISHI HAQIDA
            </h3>
            <p className="imkoniyat-text">
              Delegatsiya, 60 dan ortiq davlat vakillari va dunyoning 80 ta
              korporativ hamkorlari ishtirok etgan Dublin Tech Summit xalqaro
              texnologiya anjumanida ishtirok etdi. Shuningdek, Irlandiyaga
              tashrif davomida vakillar IDA Ireland va Enterprise Ireland bilan
              uchrashib, IT-sohasida hamkorlik rejalarni muhokama qilishdi.
            </p>
            <button className="imkoniyat-btn">BATAFSIL</button>
          </li>
        </ul>
        <button className="imkoniyat-add-btn">KO'PROQ YUKLASH</button>
      </div>
    </section>
  );
};

export default Yangiliklar;
