import React from "react";
import "./BannerImage.css";
import bannerImage from "../assets/banner.jpg";

const BannerImage = () => {
  return (
    <div className="banner-image-container">
      <img src={bannerImage} alt="Tigermarley Banner" className="banner-image" />

      <div className="banner-buttons">
        <button className="banner-btn football-btn">FOOTBALL ⚽</button>
        <button className="banner-btn motorsports-btn">MOTORSPORTS 🏎️</button>
      </div>
    </div>
  );
};

export default BannerImage;
