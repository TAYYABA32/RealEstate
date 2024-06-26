import React from "react";
import "./getstarted.css";

const Getstarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
