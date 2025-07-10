import React, { useEffect, useState } from "react";
import "./Home.css";
import enlargeImage from "../../assets/enlarge-bg.jpg";
import pastorImage from "../../assets/pastorwill.png";
import prayImage from "../../assets/pray.jpg";
import greeting from "../../assets/letter.png";
import joinImage from "../../assets/join.jpg";
import { MoveRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

interface HomeProps {
  query: string;
}

const Home: React.FC<HomeProps> = ({ query }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-wrapper">
      <div
        className="landing-page"
        style={{
          backgroundImage: `url(${enlargeImage})`,
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      ></div>

      <div className="content-section">
        <FadeInSection>
          <div className="home-message-panel">
            <div className="container">
              <p>LOVE GOD, MAKE DISCIPLES, & IMPACT OUR WORLD.</p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="headline-panel">
            <div className="container">
              <img
                src={pastorImage}
                className="headline headline-pastor-image"
              ></img>
              <img
                src={greeting}
                className="headline headline-greet-image"
              ></img>{" "}
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="second-message-panel">
            <div className="container">
              <h1>NOT AN ACCIDENT.</h1>
              <p>
                You didn’t just find this page. You were led here — by grace,
                for a reason.<br></br>
                Let’s discover what <strong>God</strong> has in store for you.
              </p>
              <div className="dual-column">
                <div className="column">
                  <h2>You Are Deeply Loved</h2>
                  <p>
                    God isn’t distant — He knows you personally and loves you
                    unconditionally. No matter where you've been or what you've
                    done, God's love for you has never changed. His love is not
                    earned — it’s freely given through Jesus.
                  </p>
                </div>
                <div className="column">
                  <h2>You Were Made for a Purpose</h2>
                  <p>
                    Your life has meaning because God created you with
                    intention. You’re not here by chance. God designed you with
                    gifts, dreams, and a purpose that only you can fulfill.
                    Discovering Him is the first step to discovering why you’re
                    here.
                  </p>
                </div>
                <div className="column">
                  <h2>You Are Not Alone</h2>
                  <p>
                    God walks with you through every season — even when it’s
                    hard to see. In pain, joy, confusion, or fear, He never
                    leaves. You don’t have to carry life’s weight by yourself.
                    His presence is your constant companion.
                  </p>
                </div>
                <div className="column-break"></div>
                <div className="column">
                  <h2>You Can Begin Again</h2>
                  <p>
                    In God, there’s grace, forgiveness, and a fresh start. Jesus
                    came not to judge, but to restore. No sin, failure, or past
                    is too big for His mercy. With Him, every day is a chance to
                    begin again.
                  </p>
                </div>
                <div className="column">
                  <h2>You Are Invited</h2>
                  <p>
                    God wants a relationship with you — not religion, but real
                    connection. He’s not asking for perfection. He’s inviting
                    you to know Him personally, to walk with Him daily, and to
                    grow in faith, step by step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className="connect-panel">
          <FadeInSection>
            <div className="container">
              <img src={prayImage} className="connect connect-pray-image"></img>
              <img src={joinImage} className="connect connect-join-image"></img>
              <div className="hero-text-group">
                <div className="container">
                  <h2>
                    JOIN A <br></br>LIFE <br></br>GROUP
                  </h2>
                  <p>
                    You don’t have to do life alone. Find a place to belong,
                    <br></br> grow in faith, and walk together.
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdrudB3z_K-ue-NlV1ZFIlYwiuzfchTZfzBY-KJsXZ5VQOCYQ/viewform"
                    className="connect-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Connected <MoveRight></MoveRight>
                  </a>
                </div>
                <p>{query}</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
