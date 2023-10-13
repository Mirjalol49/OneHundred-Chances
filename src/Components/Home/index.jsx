import React from "react";
import HeroBox from "./HeroBox";
import ImkoniyatlarComponent from "./ImkoniyatlarComponent";
import Tadbirlar from "./Tadbirlar";
import Yangiliklar from "./Yangiliklar";
import Qidirish from "./Qidirish";
import Contact from "./Contact";
import Hamkorlarimiz from "./Hamkorlarimiz";
import ChancesSec from "./ChancesSec";
import Rating from "./Rating";
import SocialLinks from "./SocialLinks";
import Join from "./Join";
import BackToTop from "./BackToTop";

const Home = () => {
  return (
    <>
      <HeroBox />
      <ImkoniyatlarComponent />
      <Tadbirlar />
      <Yangiliklar />
      <Qidirish />
      <Contact />
      <Hamkorlarimiz />
      <ChancesSec />
      <Rating />
      <SocialLinks />
      <Join />
      <BackToTop />
    </>
  );
};

export default Home;
