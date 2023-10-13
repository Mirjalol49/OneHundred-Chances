import React from "react";
import "./style.css";
import Education from "../../../assets/icons/educationLogo.png";
import AppleStroe from "../../../assets/images/apple.png";
import PlayMarket from "../../../assets/images/playmarket.png";
import Facebook from "../../../assets/icons/facebook.png";
import Twitter from "../../../assets/icons/twitter.png";
import Youtube from "../../../assets/icons/youtube.png";
import Telegram from "../../../assets/icons/telegram.png";
const SocialLinks = () => {
  return (
    <section className="social-section">
      <div className="chances-overlay">
        <div className="container">
          <div className="social-wrapper">
            <ul className="social-list-start">
              <li className="social-item__start">
                <p className="social-item__start-text">100 ta imkoniyat</p>
                <img
                  src={Education}
                  alt="education"
                  width={"224px"}
                  height={"60px"}
                />
              </li>
              <li className="social-item__start">
                <a className="social-item__start-link" href="#link">
                  Bosh sahifa
                </a>
                <a className="social-item__start-link" href="#link">
                  Imkoniyatlar
                </a>
                <a className="social-item__start-link" href="#link">
                  Tadbirlar
                </a>
                <a className="social-item__start-link" href="#link">
                  Yangiliklar
                </a>
              </li>
              <li className="social-item__start">
                <img
                  className="social-item__start-imgg"
                  src={AppleStroe}
                  alt="apple store"
                  width={"255px"}
                  height={"73px"}
                />
                <img
                  className="social-item__start-img"
                  src={PlayMarket}
                  alt="play market"
                  width={"223px"}
                  height={"75px"}
                />
              </li>
            </ul>
            <ul className="social-list__end">
              <li className="social-item__end">
                <address className="social-address">
                  Manzil: Uzbekistan, Tashkent
                </address>
              </li>
              <li className="social-item__end">
                <a
                  className="social-item__end-link"
                  href="https://www.facebook.com/"
                  target="blank"
                >
                  <img
                    src={Facebook}
                    alt="facebook"
                    width={"50px"}
                    height={"50px"}
                  />
                </a>
                <a
                  className="social-item__end-link"
                  href="https://twitter.com/"
                  target="blank"
                >
                  <img
                    src={Twitter}
                    alt="facebook"
                    width={"50px"}
                    height={"50px"}
                  />
                </a>
                <a
                  className="social-item__end-link"
                  href="https://www.youtube.com/"
                  target="blank"
                >
                  <img
                    src={Youtube}
                    alt="facebook"
                    width={"50px"}
                    height={"50px"}
                  />
                </a>
                <a
                  className="social-item__end-link"
                  href="https://telegram.org/"
                  target="blank"
                >
                  <img
                    src={Telegram}
                    alt="facebook"
                    width={"50px"}
                    height={"50px"}
                  />
                </a>
              </li>
              <li>
                <p className="social-copyright">
                  © 100 ta imkoniyat 2023. Barcha huquqlar himoyalanga
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
