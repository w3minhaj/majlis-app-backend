import React from "react";
import hero from "./2441.png";
import "./Banner.css";
import playstore from "./playStore.png";
import appleStore from "./appleStore.png";
function Banner() {
  return (
    <>
      <div className="container">
        <div className="left text_Container">
          <div className="text_box">
            <h2>Introducing the latest version Masc App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              iste quas et molestias porro perspiciatis.
            </p>
            <div className="download_btns">
              <img src={playstore} className="btn" alt="playstore Icon" />
              <img src={appleStore} className="btn" alt="Apple Store Icon" />
            </div>
          </div>
        </div>
        <div className="right img_container">
          <img src={hero} className="hero_img" />
        </div>
      </div>
    </>
  );
}

export default Banner;
