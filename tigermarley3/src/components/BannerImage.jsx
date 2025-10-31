import React from "react";
import "./BannerImage.css";
import bannerImage from "../assets/banner.jpg"; // ✅ correct path

const BannerImage = () => {
  return (
    <div className="banner-image-container">
      <img src={bannerImage} alt="Tigermarley Banner" className="banner-image" />
    </div>
  );
};

export default BannerImage;
