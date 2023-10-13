import React from "react";
import "./style.css";
import Html from "../../../assets/images/html5.svg";
import Css from "../../../assets/images/css3.svg";
import Nodejs from "../../../assets/images/node-js.svg";
import Vue from "../../../assets/images/vuejs.svg";
import Reactjs from "../../../assets/images/react.svg";
import Python from "../../../assets/images/python.svg";
import Angular from "../../../assets/images/angular.svg";

const Hamkorlarimiz = () => {
  return (
    <section className="sponsor-section">
      <div className="container">
        <div className="sponsor-wrapper">
          <h2 className="sponsor-title">Hamkorlarimiz</h2>
          <ul className="sponsor-list">
            <li className="sponsor-item">
              <img src={Html} alt="html" width={"50px"} height={"50px"} />
            </li>
            <li className="sponsor-item">
              <img src={Css} alt="html" width={"50px"} height={"50px"} />
            </li>
            <li className="sponsor-item">
              <img src={Nodejs} alt="html" width={"50px"} height={"50px"} />
            </li>
            <li className="sponsor-item">
              <img src={Vue} alt="html" width={"50px"} height={"50px"} />
            </li>
            <li className="sponsor-item">
              <img src={Reactjs} alt="html" width={"50px"} height={"50px"} />
            </li>
            <li className="sponsor-item">
              <img src={Python} alt="html" width={"50px"} height={"50px"} />
            </li>
            <li className="sponsor-item">
              <img src={Angular} alt="html" width={"50px"} height={"50px"} />
            </li>
          </ul>
        </div>
        <div className="sponsor-end-wrapper">
          <div className="sponsor-title-wrapper">
            <h3 className="sponsor-subtitle">
              Yoshlar — Kelajak Bunyodkorlariga
            </h3>
            <h3 className="sponsor-subtitle">AKT Imkoniyatlari</h3>
          </div>
          <button className="sponsor-subbtn">KO'PROQ YUKLASH</button>
        </div>
      </div>
    </section>
  );
};

export default Hamkorlarimiz;
