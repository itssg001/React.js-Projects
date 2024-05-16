import React from "react";
import { AiFillEnvironment } from "react-icons/ai";
import CountUp from "react-countup";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        {/* left-side  */}
        <div className="hero-left">
          <div className="hero-tittle">
          <div className="orange-circle"></div>
            <h1>
              Discover <br />
              Most Suitble <br />
              Property
            </h1>
          </div>
          <div className=" secondaryText hero-des">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding residence for you</span>
          </div>
          <div className="search-bar">
          <AiFillEnvironment color="var(--blue)" size={25} />
          <input type="text" />
          <button className="button">search</button>
          </div>
          <div className="stats">
            <div className=" stat">
                <span>
                    <CountUp start={8800} end={9000} duration={4} />
                    <span>+</span>
                </span>
               
                <span className="secondaryText">
                    Premium Products
                </span>
            </div>
            <div className=" stat">
                <span>
                    <CountUp start={1950} end={2000} duration={4} />
                    <span>+</span>
                </span>
               
                <span className="secondaryText">
                    Happy Customers
                </span>
            </div>
            <div className=" stat">
                <span>
                    <CountUp start={0} end={28}  />
                    <span>+</span>
                </span>
               
                <span className="secondaryText">
                    Award Winnings
                </span>
            </div>
          </div>
        </div>

        {/* rigt-side  */}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
