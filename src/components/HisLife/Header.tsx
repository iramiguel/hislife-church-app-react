import React, { useEffect, useState } from "react";
import { Cross, AlignJustify, CircleUser } from "lucide-react";
import SearchBar from "./SearchBar";
import "./Header.css";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header${isScrolled ? " scrolled" : ""}`}>
      <div className="header-left">
        <h2>
          H I S L I F E <Cross size={22} style={{ marginLeft: "0.7rem" }} />
        </h2>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="header-right">
        <nav className="nav-links">
          <a
            href="https://www.biblegateway.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bible
          </a>
          <a
            href="https://www.youtube.com/@HisLifeTVofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            His Life TV
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdrudB3z_K-ue-NlV1ZFIlYwiuzfchTZfzBY-KJsXZ5VQOCYQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            His Life Connect
          </a>
          <a href="">Contact Us</a>
        </nav>
        <div className="account-button">
          <a href="">
            <AlignJustify size={20} />
            <CircleUser size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
