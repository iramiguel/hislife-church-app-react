// import React from "react";
// import { Cross, AlignJustify, CircleUser } from "lucide-react";
import hisLife from "../../assets/his-life.png";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FadeInSection from "./FadeInSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faSquareXTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <FadeInSection>
        <div className="connect-container">
          <div className="footer-form">
            <h2>Stay Connected</h2>
            <p>
              We’d love to keep in touch — sign up for news, <br />
              devotionals, and inspiration.
            </p>
            <input type="text" placeholder="Email address" />
            <button type="submit" className="email-submit">
              Submit
            </button>
          </div>

          <div className="footer-about">
            <h2>About Us</h2>
            <a href="">Our Story</a>
            <a href="">His Life TV</a>
            <a href="">Give</a>
            <a href="">Contact Us</a>
          </div>
          <div className="footer-locations">
            <h2>Our Locations</h2>
            <a href="">His Life Metro</a>
            <a href="">His Life Alabang</a>
            <a href="">His Life Baguio</a>
            <a href="">His Life Laguna</a>
            <a href="">His Life Los Angeles</a>
          </div>
          <div className="footer-links">
            <h2>Connect with us!</h2>
            <div className="footer-links-icons">
              <a
                href="https://www.facebook.com/hislifecitychurchph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/hislifecitychurch/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://x.com/hislifeofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
              </a>
              <a
                href="https://www.youtube.com/@HisLifeTVofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="footer-rights-section">
          <p>© 2025 His Life City Church. All rights reserved.</p>
        </div>
      </FadeInSection>
      <div className="footer-hl">
        <img src={hisLife} className="footer-hl-img" alt="His Life" />
      </div>
    </div>
  );
};

export default Footer;
