import React from "react";
import "./style.css";
import PlaceholderImg from "../../../assets/images/placeholder.png";
const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <img
            className="contact-img"
            src={PlaceholderImg}
            alt="placeholder"
            width={"550px"}
            height={"366px"}
          />
          <div className="contact-wrapper-end">
            <h2 className="contact-title">Biz bilan bog'laning</h2>
            <form action="https://echo.htmlacademy.ru/">
              <input
                className="contact-name-input"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="contact-email-input"
                type="email"
                placeholder="Email Address"
                name="email"
                required
              />
              <input
                className="contact-subject-input"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea
                className="contact-message-input"
                name="message"
                id="text"
                cols="70"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
              <button className="contact-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
