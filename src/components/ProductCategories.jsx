import React from "react";
import "./productCategories.css";
import geekImage from "../assets/geek.jpg";
import animeImage from "../assets/anime.jpg";
import sportImage from "../assets/sport.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "GEEK",
      image: geekImage,
      buttons: ["T-SHIRT", "HOODIE"],
    },
    {
      title: "ANIME",
      image: animeImage,
      buttons: ["OVERSIZED", "HOODIE"],
    },
    {
      title: "SPORT",
      image: sportImage,
      buttons: ["OVERSIZED", "HOODIE"],
    },
  ];

  return (
    <div className="product-section">
      <div className="product-grid">
        {categories.map((cat, index) => (
          <div key={index} className="product-card">
            <div className="image-wrapper">
              <img src={cat.image} alt={cat.title} />
              <h3 className="overlay-title">{cat.title}</h3>
            </div>
            <div className="button-row">
              {cat.buttons.map((btn, i) => (
                <button key={i} className="category-btn">
                  {btn} &gt;
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
