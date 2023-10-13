import React from "react";
import "./index.css";
import Header from "../../Header";
import Hero from "../Hero";
import videoSrc from "../../../assets/video/IT_Park_в_Узбекистане_Кто_развивает_IT_экспорт_в_Центральной_Азии.mp4";

const HeroBox = () => {
  return (
    <div className="background">
      <video autoPlay muted loop className="video-background">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="content-overlay">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default HeroBox;
