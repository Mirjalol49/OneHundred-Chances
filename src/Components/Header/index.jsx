import React from "react";
import "./style.css";

import Logo from "../../assets/images/100imkoniyatLogo.png";
import DownArrow from "../../assets/icons/down-arrow.png";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-wrapper">
            <a href="Home">
              <img
                src={Logo}
                alt="100ta imkoniyat logo"
                width="142px"
                height="75px"
              />
            </a>
            <nav className="site-nav">
              <ul className="site-nav__list">
                <li className="site-nav__item">
                  <div className="site-nav__select">
                    <div className="site-nav__select__wrapper">
                      <a className="site-nav__link" href="#link">
                        Imkoniyatlar
                      </a>
                      <img
                        src={DownArrow}
                        alt="down arrow"
                        width={"30px"}
                        height={"30px"}
                      />
                    </div>
                    <div className="site-nav__select-values">
                      <a className="site-nav__select-values-link" href="#link">
                        Xotin qizlar uchun
                      </a>
                      <a className="site-nav__select-values-link" href="#link">
                        Nogironligi borlar uchun
                      </a>
                      <a className="site-nav__select-values-link" href="#link">
                        Yoshlar uchun
                      </a>
                      <a className="site-nav__select-values-link" href="#link">
                        Ta'lim uchun
                      </a>
                      <a className="site-nav__select-values-link" href="#link">
                        Tadbirkorlik uchun
                      </a>
                    </div>
                  </div>
                </li>
                <li className="site-nav__item">
                  <div className="site-nav__select">
                    <div className="site-nav__select__wrapper">
                      <a className="site-nav__link" href="#link">
                        Tadbirlar
                      </a>
                      <img
                        src={DownArrow}
                        alt="down arrow"
                        width={"30px"}
                        height={"30px"}
                      />
                    </div>
                    <div className="site-nav__select-values">
                      <a className="site-nav__select-values-link" href="#link">
                        Loyihalar
                      </a>
                      <a className="site-nav__select-values-link" href="#link">
                        Tanlovlar
                      </a>
                      <a className="site-nav__select-values-link" href="#link">
                        Grantlar
                      </a>
                    </div>
                  </div>
                </li>
                <li className="site-nav__item">
                  <a className="site-nav__link" href="#link">
                    Yangiliklar
                  </a>
                </li>
                <li className="site-nav__item">
                  <a className="site-nav__link" href="#link">
                    Online Forum
                  </a>
                </li>
                <li className="site-nav__item">
                  <a className="site-nav__link" href="#link">
                    Bog'lanish
                  </a>
                </li>
                <li className="site-nav__item">
                  <a className="site-nav__link" href="#link">
                    Kirish
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
