import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        {/* left-side  */}
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Discover <br />
              Most Suitble <br />
              Property
            </h1>
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
