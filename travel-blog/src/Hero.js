import React from "react";
import heroBackground from "./images/hero-background.jpg";

const Hero = () => {
  return (
    <div>
      <div className="mx-5">
        <img className="image-hero" src={heroBackground} alt="herobackground" />
      </div>
    </div>
  );
};

export default Hero;
