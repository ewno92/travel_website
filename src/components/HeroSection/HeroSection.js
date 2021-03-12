import React from "react";
import heroBg from "./heroBg.mp4";
import "./HeroSection.css";
import MyButton from "./../Button/MyButton";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={heroBg} autoPlay loop muted></video>
      <div>
        <h1>Adventure Awaits</h1>
        <h1>What are you waiting for?</h1>
        <div className="button-container">
          <MyButton name="click" linkTo="Services" />
          <MyButton name="click" linkTo="Services" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
