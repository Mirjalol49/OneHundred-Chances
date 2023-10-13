import React from "react";
import "./index.css";
import Header from "../../Header";
import Hero from "../Hero";

const HeroBox = () => {
  return (
    <div className="background">
      <iframe
        title="IT Park в Узбекистане. Кто развивает IT- экспорт в Центральной Азии"
        width="150%"
        height="150%"
        src="https://www.youtube.com/embed/v-9LW78-JPs?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&autohide=1&cc_load_policy=3&fs=1"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="content-overlay">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default HeroBox;
