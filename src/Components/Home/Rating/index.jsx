import React from "react";
import "./style.css";
import RateStar from "../../../assets/icons/rating.png";
import Emma from "../../../assets/images/emma.jpg";
import Eddie from "../../../assets/images/eddie.jpg";
import Jonathan from "../../../assets/images/jonathan.jpg";
import Mike from "../../../assets/images/mike.jpg";

const Rating = () => {
  return (
    <section className="rating-section">
      <div className="container">
        <ul className="rating-list">
          <li className="rating-item-rate">
            <p className="rating-item-number">4.8</p>
          </li>
          <li className="rating-item-rate">
            <div className="rating-item__topratebox">
              <img
                src={RateStar}
                alt="Rate stars"
                width={"60px"}
                height={"60px"}
              />
              <p className="rating-item__toptext">2,394 Ratings</p>
              <p className="rating-item__toptext">Google Reviews</p>
            </div>
          </li>
          <li className="rating-item">
            <div className="rating-item__personbox">
              <img
                className="rating-item__personImg"
                src={Emma}
                alt="emma"
                width={"100px"}
                height={"100px"}
              />
              <p className="rating-item__text">
                “Massa amet, at dolor tellus pellentesque aenean in eget massa
                tincidunt habitasse volutpat adipiscing sed id sit auctor eu
                vivamus nulla.”
              </p>
              <p className="rating-item__person-name">Emma Hart</p>
              <img
                className="rating-item__downstar"
                src={RateStar}
                alt="rate stars"
                width={"80px"}
                height={"80px"}
              />
            </div>
          </li>
          <li className="rating-item">
            <div className="rating-item__personbox">
              <img
                className="rating-item__personImg"
                src={Eddie}
                alt="emma"
                width={"100px"}
                height={"100px"}
              />
              <p className="rating-item__text">
                “Ut morbi felis, felis massa quam sit massa, amet, bibendum
                pulvinar elit in adipiscing amet imperdiet ac felis congue enim,
                elementum orci.”
              </p>
              <p className="rating-item__person-name">Eddie Johnson</p>
              <img
                className="rating-item__downstar"
                src={RateStar}
                alt="rate stars"
                width={"80px"}
                height={"80px"}
              />
            </div>
          </li>
          <li className="rating-item">
            <div className="rating-item__personbox">
              <img
                className="rating-item__personImg"
                src={Jonathan}
                alt="emma"
                width={"100px"}
                height={"100px"}
              />
              <p className="rating-item__text">
                “Donec in varius facilisis justo, curabitur aliquet sit justo
                sed sit interdum diam dolor ornare quis a felis adipiscing
                hendrerit quisque enim.”
              </p>
              <p className="rating-item__person-name">Jonathan Doe</p>
              <img
                className="rating-item__downstar"
                src={RateStar}
                alt="rate stars"
                width={"80px"}
                height={"80px"}
              />
            </div>
          </li>
          <li className="rating-item">
            <div className="rating-item__personbox">
              <img
                className="rating-item__personImg"
                src={Mike}
                alt="emma"
                width={"100px"}
                height={"100px"}
              />
              <p className="rating-item__text">
                “Pulvinar dui vitae enim, diam et nulla elit nam leo lacinia et,
                a, pulvinar gravida enim in blandit mauris vitae volutpat urna,
                sed justo hendrerit.”
              </p>
              <p className="rating-item__person-name">Mike Edward</p>
              <img
                className="rating-item__downstar"
                src={RateStar}
                alt="rate stars"
                width={"80px"}
                height={"80px"}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Rating;
