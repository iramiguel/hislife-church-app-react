// import React from "react";
// import { Cross, AlignJustify, CircleUser } from "lucide-react";
import hisLife from "../../assets/his-life.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h2>Stay Connected</h2>
        <p>
          We’d love to keep in touch — sign up for news, <br />
          devotionals, and inspiration.
        </p>
        
        <div className="footer-form">
          <input type="text" placeholder="Email address" />
          <button type="submit" className="email-submit">
            Submit
          </button>
        </div>
      </div>

      <div className="hl-footer">
        <img src={hisLife} className="hl-footer-img" alt="His Life" />
      </div>
    </div>
  );
};

export default Footer;
